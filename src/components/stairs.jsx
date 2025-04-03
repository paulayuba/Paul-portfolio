"use client";
import { motion } from "framer-motion";

// Animation setup for stairs
const stairsAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// Function to calculate the reverse index for the animation delay
const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* Render 6 motion divs representing each step of the stairs */}
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairsAnimation} // Apply the animation variants
          initial="initial"  // Set the initial state
          animate="animate"  // Set the animation state
          exit="exit"  // Set the exit state for animations
          transition={{
            duration: 0.4,
            ease: 'easeInOut',
            delay: reverseIndex(index) * 0.1,  // Apply staggered delay based on the step index
          }}
          className="h-full w-full bg-white relative"
        />
      ))}
    </>
  );
};

export default Stairs;
