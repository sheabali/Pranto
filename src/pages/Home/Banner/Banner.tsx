"use client";

import ColorBends from "@/components/ColorBends";
import { Github, Linkedin, Mail } from "@/components/constant/global";
import Container from "@/components/Container/Container";
import { motion } from "framer-motion";

const socialLinks = [
  {
    icon: Github,
    alt: "GitHub",
    href: "https://github.com/sheabali",
  },
  {
    icon: Mail,
    alt: "Mail",
    href: "mailto:iamskpranto@gmail.com",
  },
  {
    icon: Linkedin,
    alt: "LinkedIn",
    href: "https://www.linkedin.com/in/sheikhpranto",
  },
];

const MergedPage = () => {
  return (
    <div className="relative bg-white text-black dark:bg-[#0f172a] dark:text-white px-4 overflow-hidden min-h-screen flex items-center justify-center">
      {/* Decorative Shapes */}
      {/* <div className="absolute right-[28%] -top-0 hidden h-[150px] w-[200px] rotate-12 rounded-3xl bg-gradient-to-l from-blue-600 to-indigo-400 opacity-20 blur-3xl filter dark:block dark:opacity-30 lg:top-44 lg:-right-20 lg:h-72 lg:w-[350px] xl:h-80 xl:w-[500px]" />
      <div className="absolute left-[28%] top-28 hidden rotate-12 rounded-3xl bg-sky-800 opacity-90 blur-3xl filter dark:opacity-30 lg:h-32 lg:w-[450px] dark:lg:block xl:h-44 xl:w-[600px]" />
      <div className="absolute -mb-16 -ml-4 mr-20 hidden h-[150px] w-[900px] -rotate-45 rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-800 opacity-30 blur-3xl filter dark:block lg:bottom-24 lg:-left-20 lg:h-28 lg:w-[250px] lg:-rotate-12 lg:opacity-20 xl:h-40 xl:w-[400px]" /> */}

      {/* Animated Background */}
      <ColorBends
        // colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
        rotation={0}
        speed={0.2}
        scale={1}
        frequency={1}
        warpStrength={1}
        mouseInfluence={1}
        parallax={0.5}
        noise={0.1}
        transparent
        autoRotate={0}
      />

      {/* Social Icons */}
      <div className="absolute ">
        <Container>
          {/* Banner Section */}
          <div className="container mx-auto sm:py-20 ">
            <div className="flex flex-col  lg:flex-row justify-between items-center gap-12">
              {/* Text & Icons */}
              <motion.div
                className="w-full flex flex-col items-center"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-2xl sm:text-3xl md:text-6xl mb-14 font-semibold leading-tight">
                  Hello I’m Sheikh Pranto.
                  <br />
                  <span className="relative font-bold space-y-7 underline-skew text-[#16f5e2]">
                    Full Stack MERN
                  </span>{" "}
                  Developer
                </h1>
                <p className="mt-5 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  Enthusiastic about front-end and back-end development, UI/UX
                  best practices, and turning ideas into fully functional,
                  responsive web applications. Lifelong learner dedicated to
                  continuous growth, collaboration, and making a positive impact
                  on the web.
                </p>

                <div className="flex gap-4 items-center mt-8">
                  {/* {socialLinks.map(({ icon, href, alt }, index) => (
                    <motion.a
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Image
                        src={icon}
                        width={35}
                        height={35}
                        alt={alt}
                        className="bg-white dark:bg-gray-900 border-gray-400 border-2 rounded-full p-1"
                      />
                    </motion.a>
                  ))} */}
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default MergedPage;
