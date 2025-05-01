import { AboutImg } from '@/components/constant/global';
import Container from '@/components/Container/Container';
import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <Container>
      <div className="flex items-center">
        <div className="w-[50%]">
          <Image
            className="mt-20"
            src={AboutImg}
            width={450}
            height={400}
            alt="img"
          />
        </div>
        <div className="w-[50%]">
          <div className="my-8">
            <h1 className="text-4xl relative inline-block font-bold  underline-skew">
              About <span className="font-bold">Me</span>
            </h1>
          </div>
          <div>
            <p>
              I&apos;m a passionate{' '}
              <span className=" inline-block font-bold  ">Full Stack MERN</span>
              , specializing in React.js and Node.js. I love bringing both the
              technical and visual sides of digital products to life. I&apos;m
              especially focused on user experience, pixel-perfect design, and
              writing clean, efficient, and readable code.
            </p>
            <p className="my-4">
              I started my journey as a web developer in 2022. Since then,
              I&apos;ve continued to grow by learning new skills and staying
              up-to-date with the latest technologies. Now, in my early
              thirties, I&apos;m building modern web applications using tools
              like Next.js, TypeScript, Mongoose, Tailwind CSS, MongoDB, and
              more.
            </p>
            {/* <p>
              When I am not coding, you’ll often find me exploring Twitter or
              Indie Hackers, following the journeys of early-stage startups. You
              can follow me on Twitter where I share tech insights and build in
              public—or check out my projects on GitHub.
            </p> */}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
