
import { animate, motion } from "framer-motion"
const stairsAnimation ={
  initial: {
    top: "0%"
  },
  animate:{
    top: "100%"
  },
  exit: {
    top: ["100%", "0%"],
  },
};

//calculate the reverse index for
const reverseIndex = (index) => {
 const totalsteps = 6; 
 return totalsteps - index - 1;
} 

const stairs = () => {
  return (
    <>
      {/* render 6 motion divs, each of representing a step of the stairs
       
       */}
       {[...Array(6)].map((_, index) => {
        return (
        <motion.div
         key={index}
         variants={stairsAnimation} 
         initial="initial"
          animate="animate"
          exit="exit"
          transition={{
          duration: 0.4,
          ease: 'easeInOut',
          delay: reverseIndex(index) * 0.1,
        }}
        className="h-full  w-full bg-white relative"
        />
      );
       })}
    </>
  )
};

export default stairs
