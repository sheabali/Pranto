import { AboutImg } from '@/components/constant/global';
import Container from '@/components/Container/Container';
import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <Container>
      <div className="border rounded px-4 sm:px-6 lg:px-10 py-8 my-20 sm:my-32 lg:my-40">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              className="mt-6 lg:mt-20"
              src={AboutImg}
              width={450}
              height={400}
              alt="About Me Image"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2">
            <div className="my-6">
              <h1 className="text-3xl sm:text-4xl font-bold relative inline-block underline-skew">
                About <span className="font-bold">Me</span>
              </h1>
            </div>
            <div className="text-base leading-relaxed">
              <p>
                I&apos;m a passionate{' '}
                <span className="font-bold inline-block">Full Stack MERN</span>{' '}
                developer, specializing in React.js and Node.js. I love bringing
                both the technical and visual sides of digital products to life.
                I&apos;m especially focused on user experience, pixel-perfect
                design, and writing clean, efficient, and readable code.
              </p>
              <p className="my-4">
                I started my journey as a web developer in 2022. Since then,
                I&apos;ve continued to grow by learning new skills and staying
                up-to-date with the latest technologies. Now, in my early
                thirties, I&apos;m building modern web applications using tools
                like Next.js, TypeScript, Mongoose, Tailwind CSS, MongoDB, and
                more.
              </p>
              {/* Optional paragraph */}
              {/* <p>
                When I am not coding, you’ll often find me exploring Twitter or
                Indie Hackers, following the journeys of early-stage startups. You
                can follow me on Twitter where I share tech insights and build in
                public—or check out my projects on GitHub.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
