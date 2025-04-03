"use client";
import { motion } from "framer-motion";

// Animation setup for stairs
const stairsAnimation = {
  initial: {
    top: "0%", // Start from the top
  },
  animate: {
    top: "100%", // End at the bottom
  },
  exit: {
    top: ["100%", "0%"], // Exit from bottom to top
  },
};

// Function to calculate the reverse index for the animation delay
const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1; // Reverse index to create a staggered delay
};

const Stairs = () => {
  return (
    <div className="relative h-full w-full">
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
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,  // Apply staggered delay based on the step index
          }}
          className="absolute left-0 w-full bg-white" // Ensure each step is stacked vertically
          style={{
            height: `${100 / 6}%`, // Make each step take 1/6th of the container height
          }}
        />
      ))}
    </div>
  );
};

export default Stairs;
