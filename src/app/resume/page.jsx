"use client";

import React from "react";
import { FaHtml5, FaCss3, FaReact, FaJs, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";

// Data objects
const about = {
  title: "About Me",
  description:
    "Passionate frontend developer with experience in building modern and responsive web applications.",
  info: [
    { fieldName: "Name", value: "Paul Ayuba" },
    { fieldName: "Phone", value: "(+234) 070 498 672 11" },
    { fieldName: "Experience", value: "1+ years" },
    { fieldName: "Skype", value: "Paul.01" },
    { fieldName: "Nationality", value: "Nigeria" },
    { fieldName: "Email", value: "paulayuba788@gmail.com" },
    { fieldName: "Freelancer", value: "Available" },
    { fieldName: "Languages", value: "English" },
  ],
};

const education = {
  title: "My Education",
  description: "A continuous learning journey in frontend development.",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Frontend Developer",
      date: "2024",
    },
    { institution: "Codecademy", degree: "Frontend Track", date: "2024" },
    {
      institution: "Tech Institute",
      degree: "Certified Web Developer",
      date: "2024",
    },
  ],
};

const experience = {
  title: "My Experience",
  description: "Hands-on experience with real-world projects and team collaboration.",
  items: [
    {
      duration: "2024 - Present",
      position: "Frontend Developer",
      company: "Freelance / Personal Projects",
    },
    {
      duration: "2023 - 2024",
      position: "Intern Frontend Developer",
      company: "Startup Hub Nigeria",
    },
  ],
};

const skills = {
  title: "My Skills",
  description: "Technologies I use to build modern and efficient web applications.",
  skilllist: [
    { icon: FaHtml5, name: "HTML 5", color: "text-orange-500" },
    { icon: FaCss3, name: "CSS 3", color: "text-blue-500" },
    { icon: FaJs, name: "JavaScript", color: "text-yellow-500" },
    { icon: FaReact, name: "React.js", color: "text-cyan-500" },
    {
      icon: SiNextdotjs,
      name: "Next.js",
      color: "text-gray-900 dark:text-white",
    },
    { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-blue-400" },
    { icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.3, duration: 0.4, ease: "easeInOut" },
      }}
      className="min-w-[80vw] flex items-center justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[680px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#27272c] h-[180px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[680px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#27272c] h-[180px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
                      >
                        <span className="text-accent">{item.date}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[680px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skilllist.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center">
                            <div className={`text-6xl transition-all duration-300 ${skill.color}`}>
                              <skill.icon />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* About */}
            <TabsContent value="about" className="w-full items-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[680px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName}:</span>
                      <span className="text-xl">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
