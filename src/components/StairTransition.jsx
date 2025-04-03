"use client";

import { AnimatePresence, motion } from "framer-motion"; 
import { usePathname } from "next/navigation"; 
import Stairs from "./Stairs"; // Ensure Stairs is correctly imported

const StairTransition = () => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
            <Stairs /> {/* Capitalize Stairs to match the component name */}
          </div>
        </div>
        <motion.div
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
          initial={{ opacity: 1 }}  // Fixed typo from `inital` to `initial`
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
        />
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
