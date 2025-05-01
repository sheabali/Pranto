'use client';

import Container from '@/components/Container/Container';
import Image from 'next/image';
// import { LuSquareArrowOutUpRight } from 'react-icons/lu';
import { motion } from 'framer-motion';
import SendmessageIcon from '@/components/lottie-ui/send-icon';

import DArrow from '@/components/lottie-ui/d-arrow';

const projects = [
  {
    id: 1,
    work: 'PROJECT AT 🌎 PRACTICE PROJECT',

    title: 'Personalized Meal Planning & Delivery',
    description:
      'Meal Planning & Delivery Web Application where users can personalize their meal plans and have meals delivered based on their dietary preferences and schedules. The platform should allow customers to choose meal options, set dietary preferences, and schedule deliveries, while meal providers can manage menus and respond to customer requests.',
    image: 'https://i.ibb.co.com/8DZtWWpM/image-771.png',
    link: 'https://meal-box-three.vercel.app/',
    icon: [
      'https://i.ibb.co.com/jZx1YXyB/icons8-next-js-400.png',
      'https://i.ibb.co.com/pjW65hTB/typescript.png',
      'https://i.ibb.co.com/xS0NbQ7X/social.png',
      'https://i.ibb.co.com/Q7GQ3VnD/mongodb-svgrepo-com.png',
      'https://i.ibb.co.com/WvV30J4D/pngfind-com-pc-master-race-png-1363736.png',
      'https://i.ibb.co.com/rRDf7krV/node-svgrepo-com.png',
    ],
  },
  {
    id: 2,
    work: 'PROJECT AT 🌎 PRACTICE PROJECT',
    title: 'Euphoria - Ecommerce (Apparels) Website Template',
    description:
      'I am Sheikh Pranto. Lorem Ipsum has , been the industry’s standard dummy text ever since the 1500s. When an unknown printer took a galley of type and scrambled it to specimen book.',
    image: 'https://i.ibb.co.com/9925DtpM/image-770.png',
    link: 'https://car-store-frontend-eight.vercel.app',
    icon: [
      'https://i.ibb.co.com/nMPTWSY0/react.png',
      'https://i.ibb.co.com/DfGpf16R/Tailwind-CSS-Logo-svg.png',
      'https://i.ibb.co.com/8nHj8ZgY/redux-512x486.png',
      'https://i.ibb.co.com/pjW65hTB/typescript.png',
      'https://i.ibb.co.com/rRDf7krV/node-svgrepo-com.png',
      'https://i.ibb.co.com/WvV30J4D/pngfind-com-pc-master-race-png-1363736.png',
      'https://i.ibb.co.com/Q7GQ3VnD/mongodb-svgrepo-com.png',
      'https://i.ibb.co.com/4DgqF9T/icons8-mongoose-700.png',
    ],
  },
  {
    id: 3,
    work: 'PROJECT AT 🌎 PRACTICE PROJECT',
    title: 'Blog Website Template',
    description:
      'I am Sheikh Pranto. Lorem Ipsums has been the industry’s standard dummy text ever since the 1500s. When an unknown printer took a galley of type and scrambled it to specimen book.',
    image: 'https://i.ibb.co.com/Q7KW0z5b/image-770-1.png',
    link: 'https://sheib.netlify.app/',
    icon: ['https://i.ibb.co.com/B5J4VPyz/nextjs-512x512.png'],
  },
  {
    id: 4,
    work: 'PROJECT AT 🌎 PRACTICE PROJECT',
    title: 'Personalized Meal Planning & Delivery',
    description:
      'Meal Planning & Delivery Webs Application where users can personalize their meal plans and have meals delivered based on their dietary preferences and schedules. The platform should allow customers to choose meal options, set dietary preferences, and schedule deliveries, while meal providers can manage menus and respond to customer requests.',
    image: 'https://i.ibb.co.com/8DZtWWpM/image-771.png',
    link: 'https://sheib.netlify.app/',
    icon: [
      'https://i.ibb.co.com/B2RPGwDP/nextjs.png',
      'https://i.ibb.co.com/pjW65hTB/typescript.png',
      'https://i.ibb.co.com/xS0NbQ7X/social.png',
      'https://i.ibb.co.com/Q7GQ3VnD/mongodb-svgrepo-com.png',
      'https://i.ibb.co.com/WvV30J4D/pngfind-com-pc-master-race-png-1363736.png',
      'https://i.ibb.co.com/rRDf7krV/node-svgrepo-com.png',
    ],
  },
];

const Project = () => {
  return (
    <Container>
      <div className="bg-black min-h-screen p-6">
        <div className="flex justify-center">
          <h1 className=" my-10 text-white text-4xl relative inline-block font-bold  underline-skew">
            My <span className="font-semibold">Projects</span>
          </h1>
        </div>
        <div className="space-y-10 w-full mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex  flex-col  md:flex-row  bg-gray-900 text-white p-6 rounded-2xl shadow-lg max-w-6xl mx-auto gap-6 ${
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

                {/* Icons with motion */}
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

                {/* Link */}
                <div className="flex items-center gap-4 mt-6">
                  <div>
                    <div className="">
                      <SendmessageIcon
                        link={project.link}
                        lottieName={project.title}
                      />
                    </div>
                  </div>
                  <div>
                    <DArrow
                      link={project.link}
                      lottieName={project.description}
                    />
                  </div>
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
