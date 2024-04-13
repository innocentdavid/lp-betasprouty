/* eslint-disable @typescript-eslint/no-unused-vars */

import { motion } from "framer-motion";
import { CardX } from "./ui/card";

const SkeletonTwo = () => {
  const variant1 = {
    initial: {
      y: 20,
      scale: 0.66,
    },
    animate: {
      y: -20,
      transition: {
        duration: 0.5,
      },
    },
  };
  const variant2 = {
    initial: {
      y: 0,
      scale: 0.66,
      opacity: 0,
    },
    animate: {
      y: -40,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const variant3 = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  //const [zIndex2, zIndexSet2] = useState('z-10');

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="h-full w-full relative flex flex-col justify-between"
      onHoverStart={() => {
        //zIndexSet1('z-20');
      }}
      onHoverEnd={() => {
        //zIndexSet1('z-10');
      }}
    >
      {/* <motion.div className="text-left">
        <motion.label
          className={
            "p-2 mb-2 rounded-full border-2 font-semibold text-[11px] text-center text-blue-500 border-blue-500"
          }
        >
          New
        </motion.label>
      </motion.div> */}

      <motion.div className=" w-full flex flex-col items-center justify-left max-sm:scale-90 text-left relative">
        <motion.div variants={variant1} className={"relative "}>
          <CardX />
        </motion.div>
        <motion.div variants={variant2} className={"relative"}>
          <CardX 
          img="/images/bentoGrid/jennylliana.png"
          fullName="Jenny"
          username="@jennylliana"
          description="DM🤞"
          />
          <motion.div
            className="text-left absolute bottom-0 right-0"
            variants={variant3}
          >
            <motion.label
              className={
                "p-2 rounded-full font-semibold text-[14px] text-center text-white bg-green-500 "
              }
            >
              Message sent
            </motion.label>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div className="group-hover/bento:translate-x-2 transition duration-200 text-left relative bottom-1 ">
        <h4 className="font-bold text-black mb-1">
          Earn Money
        </h4>
        <p className="font-normal text-neutral-600 dark:text-neutral-300">
          Get paid for promotions or advertise your business with.
        </p>
      </motion.div>
    </motion.div>
  );
};

function EarnMoneyCard() {
  return (
    <div className="p-4 h-full">
      <SkeletonTwo />
    </div>
  );
}

export default EarnMoneyCard;
