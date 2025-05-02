'use client';

import { Linkedin, Mail, Github } from '@/components/constant/global';
// import Container from '@/components/Container/Container';
import Image from 'next/image';
import { motion } from 'framer-motion';
import WMap from '@/components/lottie-ui/w-map';
import Container from '@/components/Container/Container';
// import WorldIcon from '@/components/lottie-ui/world-icon';

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

const Banner = () => {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 py-3  my-10">
        {/* Left Side Text */}
        <motion.div
          className="w-full lg:w-[45%]  lg:mt-10"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-semibold">
            Hello I’m Sheikh Pranto. <br />{' '}
            <span className="relative b-underline-skew font-bold  underline-skew">
              Full Stack MERN{' '}
            </span>{' '}
            Developer
          </h1>
          <p className="mt-7 text-base">
            Enthusiastic about front-end and back-end development, UI/UX best
            practices, and turning ideas into fully functional, responsive web
            applications. Lifelong learner dedicated to continuous growth,
            collaboration, and making a positive impact on the web.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 items-center mt-28">
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
                  className="bg-white border-gray-400 border-2 rounded-full"
                />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          className="w-full lg:w-[55%] lg:h-0 flex justify-center items-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* <Image src={BannerImage} width={800} height={400} alt="Banner" /> */}
          <WMap />
          {/* <WorldIcon /> */}
        </motion.div>
      </div>
    </Container>
  );
};

export default Banner;
