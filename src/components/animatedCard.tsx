import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedCard = () => {
  const controls = useAnimation();
  const [followers, setFollowers] = useState(14);
  const [viewBox, setViewBox] = useState("0 -950 366 1408");
  const maxFollowers = 1000; // Example max value

  const handleHoverStart = () => {
    // Define a smoother transition for the growth animation
    controls.start({
      d: [
        // Transition through multiple intermediate paths for a smoother animation
        "M0,150 L300,150 L300,300 L0,300 Z",
        "M0,150 L50,145 L100,135 L150,115 L200,85 L250,45 L300,0 L300,300 L0,300 Z",
        // "M0,150 L50,130 L100,110 L150,80 L200,40 L250,20 L300,0 L300,300 L0,300 Z",
      ],
      transition: {
        duration: 0.33,
        ease: "easeInOut",
        // Use when animating between multiple values to ensure smoothness
        // times: [0, 0.5, 1],
        times: [0, 1],
      },
    });

    // Animate viewBox
    setViewBox("0 -60 366 310");

    // Simulate smooth follower count increase
    let currentFollowers = 0;
    const interval = setInterval(() => {
      if (currentFollowers < maxFollowers) {
        currentFollowers += 50; // Smaller increment for smoother animation
        setFollowers(currentFollowers);
      } else {
        clearInterval(interval);
      }
    }, 33); // Faster update interval for smoothness
  };

  const handleMouseLeave = () => {
    // Revert the animation to the initial state
    controls.start({
      d: ["M0,150 L300,150 L300,300 L0,300 Z"],
      transition: {
        duration: 0.33, // Adjust duration as needed
        ease: "easeInOut",
      },
    });

    // Revert viewBox animation
    setViewBox("0 -950 366 1408");

    // Optionally, reset the follower count
    setFollowers(14);
  };

  useEffect(() => {
    // Animation logic for viewBox
    controls.start({
      viewBox: viewBox,
      transition: { duration: 0.33, ease: "easeInOut" },
    });
  }, [viewBox, controls]);

  return (
    <div
      className="max-w-[350px] mx-auto h-full bg-transparent p-[18px] pt-[14px] flex flex-col gap-[0.5em] rounded-lg group hover:shadow-[rgba(36,_42,_66,_0.08)_0px_20px_70px_-10px,_rgba(36,_42,_66,_0.04)_0px_10px_24px_-8px,rgba(36,_42,_66,_0.06)_0px_1px_4px_-1px] relative overflow-hidden"
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute z-10 top-0 left-0 w-full h-full group-hover:bg-[#8e1c1c0a] group-hover:bg-gradient-to-tr from-[#BA01B4] to-[#3D1DC2] opacity-[0.02]"></div>
      <div className="relative z-20 flex flex-col justify-between h-full">
        <div className="mb-2 mt-4 h-[132px] w-[216px] mx-auto bg-white relative p-4 rounded-[16px] overflow-hidden">
          <div className="text-xs text-gray-500">
            +{followers}
            <br />
            <div className="mt-2">Followers</div>
          </div>

          <motion.svg
            animate={controls}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox={viewBox}
            // viewBox="0 -950 366 1408"
            // viewBox="0 -60 366 310"
            className={`group-hover:saturate-[1] group-hover:opacity-[1] saturate-[0.3] opacity-[0.5] transition-all duration-300`}
            style={{
              position: "absolute",
              left: "0px",
              bottom: "0px",
              height: "100%",
              width: "100%",
              // filter: "saturate(0.3)",
              // filter: "saturate(1)",
              // opacity: "0.5",
              // opacity: "1",
            }}
          >
            <path
              d="M0 193C109.5 193 260.5 140.5 366 0.5V907.5H0V193Z"
              fill="url(#paint0_linear_302_1310)"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_302_1310"
                x1="183"
                y1="0.5"
                x2="183"
                y2="262"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#797EFF"></stop>
                <stop offset="1" stop-color="#79AFFF"></stop>
              </linearGradient>
            </defs>
          </motion.svg>
        </div>

        <div className="">
          <h4 className="font-bold text-black mb-1">Rapid Growth</h4>

          <p className="text-gray-500">
            Clients using Sprouty typically see an average increase of.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCard;
