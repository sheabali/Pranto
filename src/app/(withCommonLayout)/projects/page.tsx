'use client';

import React, { useEffect, useState } from 'react';
import Container from '@/components/Container/Container';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';
import { ProjectType } from '@/components/constant/global';

import { getAllProjects } from '@/services/project';
import DArrow from '@/components/lottie-ui/d-arrow';

const Project = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Fix error type

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getAllProjects(); // Directly returns the parsed data
        setProjects(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError(String(error));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <Container>
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Skeleton className="h-64 w-full" />
          <Skeleton className="h-64 w-full" />
          <Skeleton className="h-64 w-full" />
        </div>
      )}

      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && projects.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((project: ProjectType) => (
            <Card
              key={project?.id}
              className="hover:shadow-lg transition-shadow"
            >
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={300}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
              )}
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>
                  {project.description.length > 80
                    ? `${project.description.slice(0, 80)}...`
                    : project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex justify-end items-center mt-3">
                  <div className=" flex gap-7 items-center ">
                    <DArrow
                      link={project.id}
                      lottieName={project.description}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {!loading && !error && projects.length === 0 && <p>No projects found.</p>}
    </Container>
  );
};

export default Project;
