"use client";

import { AnimatePresence, motion } from "framer-motion"; 
import { usePathname } from "next/navigation"; 
import Stairs from "./Stairs"; // Ensure Stairs is correctly imported

const StairTransition = () => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence exitBeforeEnter> {/* Changed to exitBeforeEnter for smoother transitions */}
        <motion.div
          key={pathname}
          className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } }}
        >
          <Stairs /> {/* Render Stairs component during the transition */}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
          initial={{ opacity: 1 }} // Corrected typo from `inital` to `initial`
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
