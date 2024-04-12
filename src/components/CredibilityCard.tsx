/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from "react";
import { motion } from "framer-motion";
import Card from "./ui/card";

const SkeletonOne = () => {
  const variant1 = {
    initial: {
      y: 0,
      scale: 0.66,
    },
    animate: {
      y: 45,
      scale: 0.74,
      transition: {
        duration: 0.5,
      },
    },
  };
  const variant2 = {
    initial: {
      y: 40,
      scale: 0.74,
    },
    animate: {
      y: 10,
      scale: 0.66,
      transition: {
        duration: 0.5,
      },
    },
  };

  const [colorFlip, setColorFlip] = useState("text-[#1DA1F2] border-sky-500");
  const [zIndex1, zIndexSet1] = useState("z-10");
  const [zIndex2] = useState("z-10");
  const [labelText, setLabelText] = useState("With SPROUTY");

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="w-full relative font-dashboard"
      onHoverStart={() => {
        setColorFlip("text-red-500 border-red-500");
        zIndexSet1("z-20");
        setLabelText("Without Sprouty");
      }}
      onHoverEnd={() => {
        setColorFlip("text-sky-500 border-sky-500");
        zIndexSet1("z-10");
        setLabelText("With Sprouty");
      }}
    >
      <motion.div className="text-left">
        <motion.label
          className={
            "p-2 text-sky-500 rounded-full border-[#1DA1F2]/60 border font-midium text-[11px] font-inter text-center " +
            colorFlip
          }
        >
          {labelText}
        </motion.label>
      </motion.div>

      <motion.div className="w-full flex flex-col items-center justify-left max-sm:scale-90 text-left relative">
        <motion.div variants={variant1} className={"absolute " + zIndex1}>
          <Card valueText="+81" valueStyle="bg-red-500 text-white" />
        </motion.div>
        <motion.div variants={variant2} className={"absolute " + zIndex2}>
          <Card heading="" />
        </motion.div>
        <motion.div className={"h-[170px]"}></motion.div>
      </motion.div>

      <motion.div className="group-hover/bento:translate-x-2 transition duration-200 text-left relative bottom-1 ">
        <h1 className="font-bold text-black mb-1">
          Increase Credibility
        </h1>
        <p className="font-sans font-normal text-neutral-600 text-md">
          Having followers is making you seem more reliable and important,
          attracting more attention.
        </p>
      </motion.div>
    </motion.div>
  );
};

// const SkeletonTwo = () => {
//   const variant1 = {
//     initial: {
//       y: 20,
//       scale: 0.66,
//     },
//     animate: {
//       y: -20,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };
//   const variant2 = {
//     initial: {
//       y: 0,
//       scale: 0.66,
//       opacity: 0,
//     },
//     animate: {
//       y: -40,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   const variant3 = {
//     initial: {
//       opacity: 0,
//     },
//     animate: {
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   //const [zIndex2, zIndexSet2] = useState('z-10');

//   return (
//     <motion.div
//       initial="initial"
//       whileHover="animate"
//       className="border-zinc-200 border max-sm:w-full max-lg:w-1/2 w-1/3 p-4 rounded-xl shadow-lg relative"
//       onHoverStart={() => {
//         //zIndexSet1('z-20');
//       }}
//       onHoverEnd={() => {
//         //zIndexSet1('z-10');
//       }}
//     >
//       <motion.div className="text-left">
//         <motion.label
//           className={
//             "p-2 mb-2 rounded-full border-2 font-semibold text-[11px] text-center text-blue-500 border-blue-500"
//           }
//         >
//           New
//         </motion.label>
//       </motion.div>

//       <motion.div className=" w-full flex flex-col items-center justify-left max-sm:scale-90 text-left relative">
//         <motion.div variants={variant1} className={"relative "}>
//           <CardX />
//         </motion.div>
//         <motion.div variants={variant2} className={"relative"}>
//           <CardX />
//           <motion.div
//             className="text-left absolute bottom-0 right-0"
//             variants={variant3}
//           >
//             <motion.label
//               className={
//                 "p-2 rounded-full font-semibold text-[14px] text-center text-white bg-green-500 "
//               }
//             >
//               DM Sent
//             </motion.label>
//           </motion.div>
//         </motion.div>
//       </motion.div>

//       <motion.div className="group-hover/bento:translate-x-2 transition duration-200 text-left relative bottom-1 ">
//         <h1 className="font-sans font-semibold text-black-600 dark:text-neutral-200 mb-1 text-md">
//           Create giveaways with Auto-DMs
//         </h1>
//         <p className="font-sans font-normal text-neutral-600 dark:text-neutral-300 text-sm">
//           Send DMs automatically based on engagement with your tweets.
//         </p>
//       </motion.div>
//     </motion.div>
//   );
// };

function CredibilityCard() {
  return (
    <div className="p-4">
      <SkeletonOne />
      {/* <SkeletonTwo /> */}
    </div>
  );
}

export default CredibilityCard;
