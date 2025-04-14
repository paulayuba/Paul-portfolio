

"use client";

import React from "react";
import { FaHtml5, FaCss3, FaReact, FaJs, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

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

const skills = {
  title: "My Skills",
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
      className="min-w-[80vw] flex items-center justify-center py-12 px-4 xl:px-0"
    >
      <div className="container mx-auto py-20">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-grow gap-6"
        >
          {/* Tabs List */}
          <div className="flex flex-row items-center justify-between mb-4 overflow-x-auto">
            <TabsList className="flex flex-row items-center gap-4 sm:gap-8">
              <TabsTrigger
                value="experience"
                className="border border-yellow-300 pb-2"
              >
                Experience
              </TabsTrigger>
              <TabsTrigger
                value="education"
                className="border border-yellow-300 pb-2"
              >
                Education
              </TabsTrigger>
              <TabsTrigger
                value="skills"
                className="border border-yellow-300 pb-2"
              >
                Skills
              </TabsTrigger>
              <TabsTrigger
                value="about"
                className="border border-yellow-300 pb-2"
              >
                About Me
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Tabs Content */}
          <div className="min-h-[400px] w-full">
            {/* Experience Tab */}
            <TabsContent value="experience">
              <h2 className="text-xl font-semibold mb-2">Experience</h2>
              <p className="text-lg">
                1+ years of experience in frontend development, building modern
                web applications.
              </p>
            </TabsContent>

            {/* Education Tab */}
            <TabsContent value="education">
              <h2 className="text-xl font-semibold mb-4">{education.title}</h2>
              <div className="space-y-4">
                {education.items.map((item, index) => (
                  <div key={index} className="border-b pb-2">
                    <h3 className="font-semibold">{item.degree}</h3>
                    <p className="text-sm text-gray-500">
                      {item.institution} - {item.date}
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent value="skills">
              <h2 className="text-xl font-semibold mb-4">{skills.title}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills.skilllist.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center gap-2 bg-slate-600 py-4 px-4 rounded-lg"
                  >
                    <skill.icon className={`${skill.color} text-2xl`} />
                    <span className="text-white">{skill.name}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* About Tab */}
            <TabsContent value="about">
              <h2 className="text-xl font-semibold mb-4">{about.title}</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">{about.description}</p>
              <div className="space-y-3">
                {about.info.map((info, index) => (
                  <p key={index}>
                    <strong>{info.fieldName}:</strong> {info.value}
                  </p>
                ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;

