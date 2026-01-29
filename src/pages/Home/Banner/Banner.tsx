"use client";

import ColorBends from "@/components/ColorBends";
import { Github, Linkedin, Mail } from "@/components/constant/global";
import Container from "@/components/Container/Container";
import { FlipWords } from "@/components/ui/flip-words";
import { motion } from "framer-motion";
import Image from "next/image";

const socialLinks = [
  {
    icon: Github,
    alt: "GitHub",
    href: "https://github.com/sheabali",
  },
  {
    icon: Mail,
    alt: "Mail",
    href: "mailto:sheibali62@gmail.com",
  },
  {
    icon: Linkedin,
    alt: "LinkedIn",
    href: "https://www.linkedin.com/in/sheikhpranto",
  },
];

export default function MergedPage() {
  const words = ["Production Ready", "Scalable", "High performance", "Secure"];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0f172a] text-white">
      {/* DO NOT use transparent here */}
      <div className="absolute inset-0 z-0">
        <ColorBends
          rotation={0}
          speed={0.15}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          parallax={1}
          noise={0.1}
          autoRotate={0.15}
        />
      </div>

      <div className="relative z-10">
        <Container>
          <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <h1 className="text-3xl font-semibold leading-tight sm:text-5xl md:text-6xl">
                Hello, I’m{" "}
                <span className="block font-bold text-cyan-400 sm:inline">
                  Sheikh Pranto
                </span>
              </h1>

              <div className="mt-3 flex justify-center gap-2 text-xl font-bold sm:text-2xl md:text-3xl">
                <FlipWords words={words} />
                <span>Developer</span>
              </div>

              <p className="mt-6 rounded-xl bg-black/40 px-4 py-4 text-sm backdrop-blur-md sm:text-base">
                Enthusiastic about front-end and back-end development, UI/UX
                best practices, and turning ideas into fully functional,
                responsive web applications. Lifelong learner dedicated to
                continuous growth, collaboration, and making a positive impact
                on the web.
              </p>

              {/* Social Icons */}
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                {socialLinks.map(({ icon, href, alt }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Image
                      src={icon}
                      width={36}
                      height={36}
                      alt={alt}
                      className="rounded-full border border-white/40 bg-white p-1"
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </div>
    </div>
  );
}
