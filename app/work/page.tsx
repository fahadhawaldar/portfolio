"use client";

import { motion } from "framer-motion";

import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@radix-ui/react-tooltip";

import Link from "next/link";
import Image from "next/image";
//components
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Frontend Project",
    title: "Gericht Kitchen",
    description:
      "Modern Restaurant Website built using React, HTML and CSS. It is a single page application that allows users to explore different sections of the restaurant. The application is fully responsive and works well on different devices.",
    live: "https://kitchigerii.netlify.app/",
    stack: [{ name: "React" }, { name: "CSS" }, { name: "HTML" }],
    image: "/work/gk.png",
    github: "https://github.com/fahadhawaldar/gertich-resturant-",
  },
  {
    num: "02",
    category: "Frontend Project",
    title: "ChatGpt 3 Landing Page",
    description:
      "A modern landing page showcasing the features and capabilities of ChatGPT-3, designed with a sleek and responsive layout to enhance user experience.",
    live: "https://gpt3fhbuild.netlify.app/",
    stack: [{ name: "React" }, { name: "CSS" }, { name: "HTML" }],
    image: "/work/chat.png",
    github: "https://github.com/fahadhawaldar/Gpt3-Landing-Page",
  },
  {
    num: "03",
    category: "Frontend Project",
    title: "Fragent Landing Page",
    description:
      "A captivating landing page designed for Fragent services, featuring modern design principles and a seamless user experience.",
    live: "https://fragnent.netlify.app/",
    stack: [{ name: "React" }, { name: "CSS" }, { name: "HTML" }],
    image: "/work/freg.png",
    github: "https://github.com/FahadHawaldar",
  },
  {
    num: "04",
    category: "Frontend Project",
    title: "Nippon Services Website",
    description:
      "landing page for fragent services. It was built using HTML, CSS and React. It is a single page application that allows users to explore different fragrances and their characteristics.. The application is fully responsive and works well on different devices.",
    live: "https://nippon-landing.netlify.app/",
    stack: [{ name: "CSS" }, { name: "HTML" }],
    image: "/work/nip.png",
    github: "https://github.com/FahadHawaldar",
  },
  {
    num: "05",
    category: "Frontend Project",
    title: "Recipe Explorer Pro",
    description:
      "Recipe Explorer app allows you to search, store and explore recipes. You can save your favorite recipe and also add new recipe to the app.",
    live: "https://drive.google.com/file/d/1q_e-e3l5UQ4KeEcKIro4vULFaUiSWm8T/view?usp=sharing",
    stack: [
      { name: "React-Native" },
      { name: "EXPO" },
      { name: "Firebase" },
      { name: "Redux" },
      { name: "AsyncStorage" },
    ],
    image: "/work/rep.png",
    github: "https://github.com/fahadhawaldar/Recipe-Explorer-Pro",
  },
  {
    num: "06",
    category: "Frontend Project",
    title: "Todo App",
    description:
      "Todo app allows you to add, delete and modify your tasks. You can also save your tasks offline and access them anytime.",
    live: "https://drive.google.com/file/d/1z0iM9ZHZk1JnkfsgZV3iFrddHvSXoMzq/view?usp=sharing",
    stack: [
      { name: "React-Native" },
      { name: "EXPO" },
      { name: "Redux" },
      { name: "Redux-Persist" },
    ],
    image: "/work/td.png",
    github: "https://github.com/fahadhawaldar/TODO",
  },
  {
    num: "07",
    category: "Frontend/Backend Project",
    title: "Al-Iqra Pefumes",
    description:
      "E-commerce app for perfumes, it allows customers to add, remove and modify perfumes in their cart. It also allows customers to checkout and make payment.",
    live: "",
    stack: [
      { name: "React-Native" },
      { name: "EXPO" },
      { name: "Redux" },
      { name: "Rect-query" },
      { name: "NodeJS" },
      { name: "ExpressJS" },
      { name: "MongoDB" },
    ],
    image: "/work/aq.png",
    github: "https://github.com/fahadhawaldar/AL-Iqra",
  },
];

export default function Work() {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: any) => {
    //get current project and update
    setProject(projects[swiper.activeIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col  justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/* project description */}
              <p className="text-white/80">{project.description}</p>
              {/* stack */}
              <ul className="flex flex-wrap gap-4 min-h-[48px]">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-md text-accent">
                    {item.name}
                    {/* remove comma at last */}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex gap-4 items-center">
                {/* Live project Button */}
                {project.live && (
                  <Link href={project.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent " />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent " />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        alt="Project image"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute bottom-[calc(50%-22px)] xl:bottom-1 xl:right-4 z-20 w-full justify-between xl:w-auto xl:justify-end"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
