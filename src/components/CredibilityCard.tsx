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
      whileTap="animate"
      className="w-full relative h-full flex flex-col justify-between"
      onHoverStart={() => {
        setColorFlip("text-[rgba(255,_0,_0,_0.5)] border-[rgba(255,_0,_0,_0.5)]");
        zIndexSet1("z-20");
        setLabelText("Without Sprouty");
      }}
      onTapStart={() => {
        setColorFlip("text-[rgba(255,_0,_0,_0.5)] border-[rgba(255,_0,_0,_0.5)]");
        zIndexSet1("z-20");
        setLabelText("Without Sprouty");
      }}
      onTapCancel={() => {
        setColorFlip("text-sky-500 border-sky-500");
        zIndexSet1("z-10");
        setLabelText("With Sprouty");
      }}
      onHoverEnd={() => {
        setColorFlip("text-sky-500 border-sky-500");
        zIndexSet1("z-10");
        setLabelText("With Sprouty");
      }}
    >
      <motion.div className="">
        <motion.div className="text-left">
          <motion.label
            className={
              "uppercase px-2 py-1 text-sky-500 rounded-full border-[#1DA1F2]/60 border font-midium text-[11px] font-inter text-center" +
              colorFlip
            }
          >
            {labelText}
          </motion.label>
        </motion.div>

        <motion.div className="-mt-3 w-full flex flex-col items-center justify-left max-sm:scale-90 text-left relative">
          <motion.div variants={variant1} className={"absolute " + zIndex1}>
            <Card valueText="+81" valueStyle="bg-[rgba(255,_0,_0,_0.5)] text-white" />
          </motion.div>
          <motion.div variants={variant2} className={"absolute " + zIndex2}>
            <Card heading="" />
          </motion.div>
          <motion.div className={"h-[170px]"}></motion.div>
        </motion.div>
      </motion.div>

      <motion.div className="group-hover/bento:translate-x-2 transition duration-200 text-left relative bottom-1 ">
        <h1 className="font-bold text-black mb-1">Increase Credibility</h1>
        <p className="font-sans font-normal text-neutral-600 text-md">
        Having more followers makes you seem reliable and important.
        </p>
      </motion.div>
    </motion.div>
  );
};

function CredibilityCard() {
  return (
    <div className="p-4 h-full">
      <SkeletonOne />
    </div>
  );
}

export default CredibilityCard;
