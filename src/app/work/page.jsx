// "use client";

// import { motion } from "framer-motion";
// import React, { useState } from "react";
// import dynamic from "next/dynamic";
// import "swiper/css";
// import { BsArrowUpRight, BsGithub } from "react-icons/bs";

// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";

// import Link from "next/link";
// import Image from "next/image";

// const Swiper = dynamic(() => import("swiper/react").then(mod => mod.Swiper), { ssr: false });
// const SwiperSlide = dynamic(() => import("swiper/react").then(mod => mod.SwiperSlide), { ssr: false });

// const projectList = [
//   {
//     num: "01",
//     category: "frontend",
//     title: "Project 1",
//     description:
//       "A responsive frontend using HTML, CSS, and JavaScript for a clean UI experience.",
//     stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
//     image:
//       "https://media.designrush.com/inspirations/256778/conversions/EV-Universe-web-design-1-preview_mobile.jpg",
//     live: "#",
//     github: "#",
//   },
//   {
//     num: "02",
//     category: "frontend",
//     title: "Project 2",
//     description:
//       "A modern web application built with Next.js and Tailwind CSS.",
//     stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Javascript" }],
//     image:
//       "https://media.designrush.com/inspirations/256778/conversions/EV-Universe-web-design-1-preview_mobile.jpg",
//     live: "#",
//     github: "#",
//   },
//   {
//     num: "03",
//     category: "frontend",
//     title: "Project 3",
//     description:
//       "Integrated APIs with a stylish layout using Next.js and Tailwind.",
//     stack: [{ name: "Next.js" }, { name: "Tailwind" }, { name: "Javascript" }],
//     image:
//       "https://media.designrush.com/inspirations/256778/conversions/EV-Universe-web-design-1-preview_mobile.jpg",
//     live: "#",
//     github: "#",
//   },
// ];

// const Work = () => {
//   const [activeProject, setActiveProject] = useState(projectList[0]);

//   return (
//     <motion.section
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="min-h-[80vw] flex flex-col justify-center py-12 xl:px-8"
//     >
//       <div className="container mx-auto">
//         <div className="flex flex-col xl:flex-row xl:gap-[30px]">
//           {/* Left: Project details */}
//           <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col justify-between order-2 xl:order-none mb-8 xl:mb-0">
//             <div>
//               <div className="text-8xl leading-none font-extralight text-green-700 opacity-40">
//                 {/* Replace 'text-outline' with Tailwind style */}
//                 {activeProject.num}
//               </div>
//               <h2 className="text-3xl font-semibold mt-4">{activeProject.title}</h2>
//               <p className="text-white/60 mt-4">{activeProject.description}</p>

//               <div className="flex gap-3 mt-6 flex-wrap">
//                 {activeProject.stack.map((tech, idx) => (
//                   <span
//                     key={idx}
//                     className="px-3 py-1 rounded-md bg-green-600 text-white text-sm"
//                   >
//                     {tech.name}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             <div className="flex gap-4 mt-6">
//               <TooltipProvider>
//                 <Tooltip>
//                   <TooltipTrigger asChild>
//                     <span>
//                       <Link href={activeProject.github} target="_blank">
//                         <BsGithub className="text-2xl text-white hover:text-green-500 transition" />
//                       </Link>
//                     </span>
//                   </TooltipTrigger>
//                   <TooltipContent>
//                     <p>View GitHub</p>
//                   </TooltipContent>
//                 </Tooltip>

//                 <Tooltip>
//                   <TooltipTrigger asChild>
//                     <span>
//                       <Link href={activeProject.live} target="_blank">
//                         <BsArrowUpRight className="text-2xl text-white hover:text-green-500 transition" />
//                       </Link>
//                     </span>
//                   </TooltipTrigger>
//                   <TooltipContent>
//                     <p>Live Site</p>
//                   </TooltipContent>
//                 </Tooltip>
//               </TooltipProvider>
//             </div>
//           </div>

//           {/* Right: Swiper Slider */}
//           <div className="w-full xl:w-[50%]">
//             <Swiper
//               spaceBetween={20}
//               slidesPerView={1}
//               onSlideChange={(swiper) => {
//                 setActiveProject(projectList[swiper.activeIndex]);
//               }}
//               className="rounded-lg overflow-hidden"
//             >
//               {projectList.map((project, index) => (
//                 <SwiperSlide key={index}>
//                   <Image
//                     src={project.image}
//                     alt={project.title}
//                     width={800}
//                     height={500}
//                     className="rounded-lg object-cover"
//                   />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default Work;
