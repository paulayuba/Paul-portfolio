"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative mb-36">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[280px] h-[280px] xl:w-[300px] xl:h-[250px] mix-blend-lighten absolute items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <Image
            src="/photo.jpg"
            priority
            quality={100}
            fill
            alt="Profile Photo"
            className="object-contain"
          />
        </motion.div>

        {/* Circle Animation */}
        <motion.svg
          className="w-[100px] xl:w-[406px] h-[100px] xl:h-[406px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24, 10, 0, 0" }}
            animate={{
              strokeDasharray: ["15, 120, 25, 25", "16, 25, 19, 72", "4, 250, 22, 22"],
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
};

export default Photo;
