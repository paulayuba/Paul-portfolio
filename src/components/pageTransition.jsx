"use client";
import { AnimatePresence, motion } from "framer-motion"; 
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } }}
        className="h-full w-full bg-primary top-0 left-0 z-10"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
