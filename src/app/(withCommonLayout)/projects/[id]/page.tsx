/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { notFound, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Container from '@/components/Container/Container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

import { getProjectById } from '@/services/project';
import { GoProjectSymlink } from 'react-icons/go';
import { motion } from 'framer-motion';
import SendmessageIcon from '@/components/lottie-ui/send-icon';

const SingleProject = () => {
  const params = useParams();
  const id = params?.id as string | undefined;
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    const fetchProject = async () => {
      try {
        const res = await getProjectById(id);
        if (!res) throw new Error('Project not found');
        setProject(res);
      } catch (error) {
        setError(error instanceof Error ? error.message : String(error));
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <Container>
        <Skeleton className="h-64 w-full" />
        <Skeleton className="h-10 w-1/2 mt-4" />
        <Skeleton className="h-24 w-full mt-2" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <p className="text-red-500 text-center">{error}</p>
      </Container>
    );
  }

  if (!project) notFound();

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="p-6 max-w-5xl mx-auto bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl shadow-2xl">
          <CardHeader className="text-center mb-6">
            <CardTitle className="text-4xl font-extrabold">
              {project.title}
            </CardTitle>
            <p className="text-sm text-gray-400 mt-2">{project.work}</p>
          </CardHeader>

          {project.image && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="relative w-full h-[300px] mb-8 rounded-xl overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </motion.div>
          )}

          <CardContent className="space-y-8 text-gray-300">
            <p className="text-lg">{project.description}</p>

            <section>
              <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {project.icon?.map((iconUrl: string, index: number) => (
                  <div
                    key={index}
                    className=" p-1 rounded-full w-12 h-12 flex items-center justify-center shadow-md"
                  >
                    <Image
                      src={iconUrl}
                      alt="tech-icon"
                      width={32}
                      height={32}
                    />
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags?.map((tag: string, idx: number) => (
                  <span
                    key={idx}
                    className="bg-gray-700 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Key Features</h3>
              <ul className="list-disc list-inside space-y-1">
                {project.features?.map((feature: string, idx: number) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Challenges</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-400">
                {project.challenges?.map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">What I Learned</h3>
              <ul className="list-disc list-inside space-y-1">
                {project.learnings?.map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            {project.testimonials && project.testimonials.length > 0 && (
              <section>
                <h3 className="text-xl font-semibold mb-2">Testimonial</h3>
                {project.testimonials.map((t: any, idx: number) => (
                  <blockquote
                    key={idx}
                    className="border-l-4 pl-4 italic text-gray-400"
                  >
                    “{t.feedback}” —{' '}
                    <span className="not-italic font-medium">{t.name}</span>
                  </blockquote>
                ))}
              </section>
            )}

            <div className="flex flex-wrap justify-between items-center gap-4 pt-6 border-t border-gray-800">
              <div>
                <p>
                  <strong>Team:</strong> {project.clientOrTeam}
                </p>
                <p>
                  <strong>Duration:</strong> {project.duration}
                </p>
              </div>
              <div className="flex gap-4">
                <Button className="gap-2">
                  <GoProjectSymlink className="text-xl" /> Live Preview
                </Button>

                <SendmessageIcon
                  link={project.link}
                  lottieName={project.title}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Container>
  );
};

export default SingleProject;
