"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const servicesData = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I develop fast, scalable, and SEO-friendly web applications using React, Next.js, and Tailwind CSS.",
    href: "/web-development",
  },
  {
    num: "02",
    title: "Landing Page Development",
    description:
      "I design and build high-converting landing pages optimized for performance and engagement.",
    href: "/landing-page",
  },
  {
    num: "03",
    title: "Responsive Web Design",
    description:
      "I ensure seamless user experience across all devices with pixel-perfect responsive designs.",
    href: "/responsive-design",
  },
  {
    num: "04",
    title: "Integration with APIs",
    description:
      "I integrate third-party APIs to enhance functionality and ensure smooth data communication.",
    href: "/api-integration",
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
          {servicesData.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col p-6 border text-gray-500 border-gray-800 rounded-lg hover:bg-gray-900 transition-all duration-500"
            >
              {/* Service Number */}
              <div className="text-5xl font-extrabold text-outline group-hover:text-gray-300 transition-all">
                {service.num}
              </div>

              {/* Service Title */}
              <h3 className="text-2xl font-semibold text-white mt-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-white/70 mt-2">{service.description}</p>

              {/* Link */}
              <Link
                href={service.href || "/"}
                aria-label={`Learn more about ${service.title}`}
                className="mt-4 w-[70px] h-[70px] rounded-full bg-white group-hover:bg-green-400 transition-all duration-500 flex justify-center items-center hover:-rotate-45"
              >
                <BsArrowDownRight className="text-gray-900 group-hover:text-white text-2xl transition-all" />
              </Link>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
