'use client';

import React from 'react';
import { Linkedin, Mail, Github } from '@/components/constant/global';
import Image from 'next/image';
import { motion } from 'framer-motion';
import WMap from '@/components/lottie-ui/w-map';
import Container from '@/components/Container/Container';

const socialLinks = [
  {
    icon: Github,
    alt: 'GitHub',
    href: 'https://github.com/sheabali',
  },
  {
    icon: Mail,
    alt: 'Mail',
    href: 'mailto:iamskpranto@gmail.com',
  },
  {
    icon: Linkedin,
    alt: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sheikhpranto',
  },
];

const MergedPage = () => {
  return (
    <div className="relative bg-white text-black dark:bg-[#0f172a] dark:text-white px-4 overflow-hidden">
      {/* Blurred Gradient Shape (Top Right) */}
      <div className="absolute right-[28%] -top-0 hidden h-[150px] w-[200px] rotate-12 rounded-3xl bg-gradient-to-l from-blue-600 to-indigo-400 opacity-20 blur-3xl filter dark:block dark:opacity-30 lg:top-44 lg:-right-20 lg:h-72 lg:w-[350px] xl:h-80 xl:w-[500px]" />
      <div className="absolute left-[28%] top-28 hidden rotate-12 rounded-3xl bg-sky-800 opacity-90 blur-3xl filter dark:opacity-30 lg:h-32 lg:w-[450px] dark:lg:block xl:h-44 xl:w-[600px]" />
      {/* Blurred Gradient Shape (Bottom Left) */}
      <div className="absolute -mb-16 -ml-4 mr-20 hidden h-[150px] w-[900px] -rotate-45 rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-800 opacity-30 blur-3xl filter dark:block lg:bottom-24 lg:-left-20 lg:h-28 lg:w-[250px] lg:-rotate-12 lg:opacity-20 xl:h-40 xl:w-[400px]" />

      <Container>
        {/* Banner Section */}
        <div className="-mt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <motion.div
              className="w-full lg:w-[45%]"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl font-semibold">
                Hello I’m Sheikh Pranto. <br />
                <span className="relative b-underline-skew font-bold underline-skew text-[#16f5e2]">
                  Full Stack MERN
                </span>{' '}
                Developer
              </h1>
              <p className="mt-6 text-base text-gray-700 dark:text-gray-300">
                Enthusiastic about front-end and back-end development, UI/UX
                best practices, and turning ideas into fully functional,
                responsive web applications. Lifelong learner dedicated to
                continuous growth, collaboration, and making a positive impact
                on the web.
              </p>

              <div className="flex gap-4 items-center mt-10">
                {socialLinks.map(({ icon, href, alt }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Image
                      src={icon}
                      width={35}
                      height={43}
                      alt={alt}
                      className="bg-white dark:bg-gray-900 border-gray-400 border-2 rounded-full"
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="w-full lg:w-[55%] flex justify-center items-center"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <WMap />
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MergedPage;
