"use client";

import { title } from "process";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// ui
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

//animation
import { motion } from "framer-motion";

// data

const about = {
  title: "About Me",
  description:
    "I am a passionate web developer with experience in building dynamic and responsive web applications. I love creating user-friendly interfaces and have a keen eye for detail. My goal is to deliver high-quality code and contribute to innovative projects.",
  info: [
    { fieldName: "Name", fieldValue: "Fahad Hawaldar" },
    { fieldName: "Phone", fieldValue: "+91 8850858769" },
    { fieldName: "Phone(UAE)", fieldValue: "+971 582508037" },
    { fieldName: "Experience", fieldValue: "2 Years" },

    { fieldName: "Nationality", fieldValue: "Indian" },
    { fieldName: "Email", fieldValue: "fahadhawaldar@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi, Marathi, Urdu, Konkani",
    },
  ],
};

const experience = {
  icon: "/resume/badge.svg",
  title: "My Experience",
  description:
    "I have worked on various projects that have helped me grow as a developer. My experience includes working with modern web technologies and frameworks, collaborating with teams, and delivering projects on time.",
  items: [
    {
      company: "Parascadd Pvt Ltd",
      role: "Mobile App Developer",
      duration: "2023 - 2025",
    },
  ],
};

const education = {
  icon: "/resume/cap.svg",
  title: "My Education",
  description:
    "I have completed my education in a reputed institution, where I gained a strong foundation in computer science and software development.",
  items: [
    {
      institude: "YCMOU",
      degree: "BCA - Bachelor of Computer Applications",
      duration: "2016 - 2020",
    },
    {
      institude: "Udemy Online Course",
      degree: "React Course ",
      duration: "2023 - 2023",
    },
    {
      institude: "St'Marys College",
      degree: "HSC - Higher Secondary Certificate",
      duration: "2014 - 2016",
    },
    {
      institude: "Yusuf Patel High School",
      degree: "SSC - Secondary School Certificate",
      duration: "2014",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "I have a diverse set of skills that allow me to create innovative and user-friendly web applications.",
  skillList: [
    { skill: "HTML", icon: <FaHtml5 /> },
    { skill: "CSS", icon: <FaCss3 /> },
    { skill: "JavaScript", icon: <FaJs /> },
    { skill: "React", icon: <FaReact /> },
    { skill: "Next.js", icon: <SiNextdotjs /> },
    { skill: "Tailwind CSS", icon: <SiTailwindcss /> },
    { skill: "Figma", icon: <FaFigma /> },
    { skill: "Node.js", icon: <FaNodeJs /> },
  ],
};
export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue={"experience"}
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent className="w-full" value="experience">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start  gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.role}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent className="w-full" value="education">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start  gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institude}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent className="w-full" value="skills">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {skills.skillList.map((skill, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-white/80 "
                    >
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{skill.skill}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              className="w-full text-center xl:text-left"
              value="about"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2  gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl" text->
                        {item.fieldValue}
                      </span>
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
}
