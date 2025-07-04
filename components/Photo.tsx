"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Photo() {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 2, ease: "easeIn" }}
      >
        {/* Image Container with Clipping */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 2.4, ease: "easeInOut" }}
          className="w-[300px] h-[300px] xl:w-[506px] xl:h-[506px] mix-blend-lighten absolute rounded-full overflow-hidden"
        >
          <Image
            src="/photo.png"
            alt={"fahad hawalar"}
            priority
            quality={100}
            fill
            className="object-cover scale-110"
          />
        </motion.div>
        {/*  circle Overlay */}
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox={"0 0 506 506"}
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap={"round"}
            strokeLinejoin={"round"}
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120, 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}
