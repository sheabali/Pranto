"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

import { ProjectType } from "@/components/constant/global";
import DArrow from "@/components/lottie-ui/d-arrow";
import SendmessageIcon from "@/components/lottie-ui/send-icon";

const Project = () => {
  const [products, setProducts] = useState<ProjectType[]>([]);

  useEffect(() => {
    fetch("/data/product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to load projects:", err));
  }, []);

  return (
    <section className="container mx-auto min-h-screen px-4 sm:px-6 py-5">
      {/* Title */}
      <div className="flex justify-center">
        <h1 className="mb-12 sm:mb-20 mt-6 text-3xl sm:text-4xl font-bold relative inline-block underline-skew">
          My <span className="font-semibold">Projects</span>
        </h1>
      </div>

      {/* Projects */}
      <div className="sm:space-y-12 space-y-6 mx-auto">
        {products.slice(0, 3).map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className={`flex flex-col  md:flex-row items-center  text-white p-4 sm:p-6 rounded-2xl shadow-lg gap-6 sm:gap-10 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <motion.div
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-1/2"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="rounded-xl w-full h-auto object-cover"
                priority={index === 0}
              />
            </motion.div>

            {/* Content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
              <p className="text-sm text-gray-400 font-semibold">
                {project.work}
              </p>

              <h3 className="text-2xl sm:text-3xl font-bold mt-2">
                {project.title}
              </h3>

              <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tech Icons */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex flex-wrap justify-center md:justify-start gap-3 mt-4"
              >
                {project.icon?.map((icon, key) => (
                  <Image
                    key={key}
                    src={icon}
                    height={32}
                    width={32}
                    alt="tech icon"
                  />
                ))}
              </motion.div>

              {/* Actions */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
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
    </section>
  );
};

export default Project;
