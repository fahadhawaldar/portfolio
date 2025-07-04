import { animate, motion } from "framer-motion";
import { exit } from "process";

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

// calculate the reverse index for staggered delay
const reverseIndex = (index: number) => {
  const stepsCount = 6; // total number of steps
  return stepsCount - index - 1; // reversed index
};

export default function Stairs() {
  return (
    <>
      {/* render 6 motion divs, each representing a step of the stairs
      each div will have the same animation defined by the stairsAnimation object.
      the delay for each div is calculated dynamically based on its reversed index,
      creating a staggered effect with decreasing delays for each subsequent step.   */}
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairsAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            delay: reverseIndex(index) * 0.1,
            duration: 0.4,
            ease: "easeInOut",
          }}
          className="h-full w-full bg-white relative"
        />
      ))}
    </>
  );
}
