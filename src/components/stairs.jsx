
import { animate, motion } from "framer-motion";


const stairAnimation = {
    initial: {
        top: "0%"
    },
    animate: {
        top: "100%"
    },
    exit: {
        top: ["100%", "0%"],
    },
};

// calculate the reverse index for storgred delay
const reverseIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index -1;
};

const Stairs = () => {
  return (
    <>
      {/*render 6 motion div each representing a step of stairs.
       Each div will have some animation  defined by the stairAnimation object.
        the delay for each div is calculated sinamicolly based on it's reverse index.
        creating a stagred effect with decreavent step. 
        */}
        {[...Array(6)].map((_, index)=> {
            return (
            <motion.div key={index} variants={stairAnimation} initial="initial" animate="animate" exit="exit" transition={{
                duration: 0.4,
                ease: "easeInOut",
                delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white relative"
            />
        );
        })}
    </>
  )
}

export default Stairs
