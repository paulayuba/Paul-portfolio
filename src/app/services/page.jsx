"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const servicesData = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I create responsive, high-performance websites using modern web technologies like React, Next.js, and Tailwind CSS.",
    href: "#",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "I design user-friendly, visually appealing interfaces with a focus on intuitive user experiences.",
    href: "#",
  },
  {
    num: "03",
    title: "Logo Design",
    description:
      "Crafting unique, memorable logos that establish strong brand identities.",
    href: "#",
  },
  {
    num: "04",
    title: "SEO Optimization",
    description:
      "Enhancing website visibility with strategic SEO techniques for better search engine rankings.",
    href: "#",
  },
];

const Services = () => {
  return (
    <section className="min-h-[60vh] flex flex-col justify-center py-12 xl:py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.6, duration: 0.6, ease: "easeInOut" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="flex flex-col p-6 border border-gray-800 rounded-lg hover:bg-gray-900 transition-all duration-300"
            >
              {/* Service Number */}
              <div className="text-5xl font-extrabold text-outline text-ttransparent">{service.num}</div>

              {/* Service Title */}
              <h3 className="text-2xl font-semibold text-white mt-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-white/70 mt-2">{service.description}</p>

              {/* Link */}
              <Link
                href={service.href}
                className="mt-4 flex items-center text-accent hover:underline"
              >
                Learn More <BsArrowDownRight className="ml-2 text-xl" />
              </Link>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
