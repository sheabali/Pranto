'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import Container from '@/components/Container/Container';
import SendmessageIcon from '@/components/lottie-ui/send-icon';
import DArrow from '@/components/lottie-ui/d-arrow';
import { ProjectType } from '@/components/constant/global';

const Project = () => {
  const [products, setProducts] = useState<ProjectType[]>([]);

  useEffect(() => {
    fetch('/data/product.json')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Failed to load projects:', err));
  }, []);

  return (
    <Container>
      <div className=" border rounded min-h-screen p-6">
        <div className="flex justify-center">
          <h1 className="mb-20 mt-10  text-4xl relative inline-block font-bold underline-skew">
            My <span className="font-semibold">Projects</span>
          </h1>
        </div>

        <div className="space-y-10 w-full mx-auto">
          {products.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row bg-gray-900 text-white p-6 rounded-2xl shadow-lg max-w-6xl mx-auto gap-6 ${
                index % 2 !== 0 ? 'md:flex-row-reverse md:gap-20' : ''
              }`}
            >
              {/* Left Side - Image */}
              <motion.div
                initial={{ scale: 0.95 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full md:w-1/2"
              >
                <Image
                  src={project.image}
                  alt="Project Image"
                  height={400}
                  width={400}
                  className="rounded-xl h-auto object-cover"
                />
              </motion.div>

              {/* Right Side - Content */}
              <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
                <h2 className="text-md text-gray-400 font-bold">
                  {project.work}
                </h2>
                <h3 className="text-3xl font-bold mt-2">{project.title}</h3>
                <p className="text-gray-400 mt-2 text-sm">
                  {project.description}
                </p>

                {/* Icons */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-center gap-4 my-4"
                >
                  {project.icon?.map((icon, key) => (
                    <Image
                      key={key}
                      src={icon}
                      height={35}
                      width={35}
                      alt="icon"
                    />
                  ))}
                </motion.div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-6">
                  <SendmessageIcon
                    link={project.link}
                    lottieName={project.title}
                  />
                  <DArrow link={project.id} lottieName={project.description} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Project;
