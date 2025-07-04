"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "Building responsive and dynamic websites.",
    link: "/services/web-development",
  },
  {
    num: "02",
    title: "Mobile App Development",
    description: "Creating user-friendly mobile applications.",
    link: "/services/mobile-app-development",
  },
  {
    num: "03",
    title: "UI/UX Design",
    description: "Designing intuitive user interfaces and experiences.",
    link: "/services/ui-ux-design",
  },
  {
    num: "04",
    title: "API Development",
    description: "Developing robust and scalable APIs for your applications.",
    link: "/services/api-development",
  },
];

export default function Services() {
  return (
    <section className="min-h-[80vh] flex  flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          className="grid gri-cols-1 md:grid-cols-2 gap-[60px]"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.5, ease: "easeIn" },
          }}
        >
          {services.map((service) => (
            <div
              key={service.num}
              className="flex-1 flex flex-col gap-6 group cursor-pointer"
            >
              {/* top section */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl front-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <Link
                  href={service.link}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center group-hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>
              {/* title */}
              <h2 className="text-[42px] font-bold leading-none">
                {service.title}
              </h2>
              {/* description */}
              <p className="text-white/60">{service.description}</p>
              {/* border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
