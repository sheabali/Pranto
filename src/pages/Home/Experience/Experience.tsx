// export default function ExperienceTimeline() {
//   const experiences = [
//     {
//       title: 'Full Stack Developer',
//       company: 'TechNova Solutions',
//       period: 'Jan 2023 – Present',
//       description:
//         'Worked on multiple client projects using the MERN stack, focused on performance optimization, and built reusable UI components.',
//       badges: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'TypeScript'],
//       footer: 'Remote | Full-time',
//     },
//     {
//       title: 'Frontend Developer',
//       company: 'Creative Devs Ltd.',
//       period: 'Jul 2021 – Dec 2022',
//       description:
//         'Developed responsive interfaces, implemented complex UI states using Redux, and collaborated with designers for pixel-perfect output.',
//       badges: ['React', 'Redux', 'Sass', 'Figma'],
//       footer: 'Dhaka, Bangladesh | Full-time',
//     },
//     {
//       title: 'Intern Developer',
//       company: 'SoftSpring IT',
//       period: 'Jan 2021 – Jun 2021',
//       description:
//         'Assisted in frontend bug fixing and worked on internal tools to streamline task assignments and daily reporting.',
//       badges: ['JavaScript', 'Bootstrap', 'Git'],
//       footer: 'On-site Internship',
//     },
//   ];

//   return (
//     <div className="relative max-w-2xl mx-auto py-10">
//       {/* Vertical line */}
//       <div className="absolute top-0 left-4 bottom-0 w-1 bg-blue-700/50 rounded-full"></div>

//       <div className="space-y-10 pl-12">
//         {experiences.map((item, index) => (
//           <div key={index} className="relative">
//             {/* Step number circle */}
//             <div className="absolute -left-8 top-1 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow">
//               {index + 1}
//             </div>

//             {/* Card content */}
//             <div className="bg-gray-900 text-white p-5 rounded-lg border border-blue-700 shadow-md">
//               <h3 className="text-lg font-semibold">{item.title}</h3>
//               <p className="text-sm text-blue-300 font-medium">
//                 {item.company}
//               </p>
//               <p className="text-xs text-gray-400">{item.period}</p>
//               <p className="mt-2 text-sm text-gray-300">{item.description}</p>

//               <div className="mt-3 flex flex-wrap gap-2">
//                 {item.badges.map((badge, i) => (
//                   <span
//                     key={i}
//                     className="px-3 py-1 text-sm border border-blue-400 rounded-full text-blue-300 hover:bg-blue-500 hover:text-white transition"
//                   >
//                     {badge}
//                   </span>
//                 ))}
//               </div>

//               {item.footer && (
//                 <p className="mt-3 text-xs text-gray-400">{item.footer}</p>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
