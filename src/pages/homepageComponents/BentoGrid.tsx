import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid";
import { cn } from "../../utils/cn";
import AnimatedCard from "../../components/animatedCard";

export default function BentoGridCompt() {
  return (
    <div className="mt-4">
      {/* <div className="max-w-5xl mx-auto text-center mt-20 pb-4 px-4">
        <div className="text-[28px] md:text-[32px] lg:text-[64px] lg:leading-[70px] font-dashboard text-center font-bold max-w-[940px] mx-auto">
          Loved by
          <span className="bg-[#111111] bg-gradient-to-r from-[#65F571] to-[#01B9FF] text-transparent bg-clip-text ml-3">
            creators
          </span>
        </div>
        <p className="mb-2 sm:mb-0 sm:mt-6 sm:text-[21px] text-xl font-medium sm:leading-[32px] leading-snug text-gray-600 _text-left sm:text-center font-dashboard max-w-[700px] mx-auto">
          23,000+ creators and businesses have chosen Sprouty to grow their
          Instagram presence.
        </p>
      </div> */}

      <BentoGridThirdDemo />
    </div>
  );
}

export function BentoGridThirdDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2 relative z-50"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
    </motion.div>
  );
};

// const SkeletonTwo = () => {
//   const variants = {
//     initial: {
//       width: 0,
//     },
//     animate: {
//       width: "100%",
//       transition: {
//         duration: 0.2,
//       },
//     },
//     hover: {
//       width: ["0%", "100%"],
//       transition: {
//         duration: 2,
//       },
//     },
//   };
//   const arr = new Array(6).fill(0);
//   return (
//     <motion.div
//       initial="initial"
//       animate="animate"
//       whileHover="hover"
//       className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
//     >
//       {arr.map((_, i) => (
//         <motion.div
//           key={"skelenton-two" + i}
//           variants={variants}
//           style={{
//             maxWidth: Math.random() * (100 - 40) + 40 + "%",
//           }}
//           className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-4"
//         ></motion.div>
//       ))}
//     </motion.div>
//   );
// };

const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2 font-inter"
    >
      <motion.div
        variants={first}
        className="h-[calc(100%-40px)] my-auto w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <img
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          loading="lazy"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-[60px] w-[60px]"
        />
        <p className="sm:text-[15px] text-xs text-center font-semibold text-[#181D25] mt-4">
          @adamwathan
        </p>
        <p className="text-[#79849A] text-xs mt-1">617 Followers</p>
      </motion.div>

      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <img
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          loading="lazy"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-[60px] w-[60px]"
        />
        <p className="sm:text-[15px] text-xs text-center font-semibold text-[#181D25] mt-4">
          @adamwathan
        </p>
        <p className="text-[#79849A] text-xs mt-1">617 Followers</p>
        <div className="flex items-center gap-2">
          <div className="text-[#79849A] text-xs mt-1">Using</div>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.7394 7.15841C3.69039 7.0996 3.69039 7.02119 3.7492 6.96238C3.80801 6.91338 3.88642 6.91338 3.94523 6.97219C3.99423 7.03099 3.99423 7.11921 3.93542 7.16821C3.88642 7.21722 3.7982 7.21722 3.7394 7.15841ZM2.96508 7.08C3.13171 7.46226 3.42575 7.79551 3.82761 8.07975C3.91582 8.13856 4.00403 8.19737 4.10205 8.25618C4.16086 8.29538 4.22947 8.32479 4.29808 8.36399L4.66073 8.03074L4.03344 7.35444C3.89622 7.44266 3.70999 7.42305 3.59237 7.30543C3.46495 7.16821 3.46495 6.94278 3.61198 6.81536C3.7492 6.68794 3.97463 6.69774 4.10205 6.83497C4.21967 6.96238 4.21967 7.14861 4.12165 7.27603L4.74895 7.94253L5.1018 7.60928C5.07239 7.54067 5.04299 7.47206 5.01358 7.41325C4.96458 7.31524 4.91557 7.21722 4.85676 7.12901C4.60192 6.69774 4.28828 6.3939 3.91582 6.18807L2.96508 7.08ZM4.39609 8.413L4.72934 8.10915L4.81756 8.02094L5.1508 7.7171C5.18021 7.7759 5.19981 7.83471 5.21942 7.90332L4.57252 8.50121C4.51371 8.47181 4.4549 8.4424 4.39609 8.413ZM5.32723 7.97193L5.36644 7.93273C5.22922 7.57007 5.07239 7.21722 4.84696 6.89377L5.21942 7.01139L5.95452 8.3934L5.32723 7.97193ZM3.80801 6.13906C3.50416 5.99204 3.16111 5.92343 2.78865 5.93323C2.75925 6.30569 2.79846 6.64874 2.91607 6.96238L3.80801 6.13906ZM4.64113 8.60903L5.01358 9.26573L3.69039 8.4326L3.60217 8.05035C3.90602 8.29538 4.24907 8.48161 4.60192 8.63843L4.64113 8.60903ZM5.1312 8.96188L6.38579 9.795L5.65068 8.48161L5.1508 8.12876L4.81756 8.4424L5.1312 8.96188Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.48259 7.72689C4.43563 7.67053 4.43563 7.59539 4.49199 7.53903C4.54835 7.49207 4.62349 7.49207 4.67985 7.54843C4.72681 7.60478 4.72681 7.68932 4.67046 7.73629C4.62349 7.78325 4.53895 7.78325 4.48259 7.72689ZM3.74054 7.65175C3.90022 8.01808 4.18202 8.33744 4.56713 8.60984C4.65167 8.6662 4.73621 8.72256 4.83014 8.77892C4.8865 8.81649 4.95225 8.84467 5.018 8.88224L5.36554 8.56288L4.76439 7.91475C4.63288 7.99929 4.45442 7.98051 4.3417 7.86779C4.21959 7.73629 4.21959 7.52025 4.36048 7.39814C4.49199 7.27603 4.70803 7.28542 4.83014 7.41692C4.94285 7.53903 4.94285 7.7175 4.84892 7.83961L5.45008 8.47834L5.78823 8.15897C5.76005 8.09322 5.73187 8.02747 5.70369 7.97111C5.65673 7.87718 5.60976 7.78325 5.5534 7.69871C5.30918 7.28542 5.00861 6.99423 4.65167 6.79698L3.74054 7.65175ZM5.11193 8.92921L5.43129 8.63802L5.51583 8.55348L5.8352 8.2623C5.86337 8.31866 5.88216 8.37501 5.90095 8.44077L5.28101 9.01374C5.22465 8.98556 5.16829 8.95738 5.11193 8.92921ZM6.00427 8.50652L6.04184 8.46895C5.91034 8.1214 5.76005 7.78325 5.54401 7.47328L5.90095 7.586L6.60543 8.91042L6.00427 8.50652ZM4.54835 6.75001C4.25716 6.60912 3.9284 6.54337 3.57147 6.55276C3.54329 6.9097 3.58086 7.23845 3.69358 7.53903L4.54835 6.75001ZM5.34676 9.11707L5.70369 9.7464L4.43563 8.94799L4.35109 8.58166C4.64228 8.81649 4.97103 8.99496 5.30918 9.14525L5.34676 9.11707ZM5.81641 9.45522L7.01872 10.2536L6.31424 8.99496L5.8352 8.65681L5.51583 8.95739L5.81641 9.45522Z"
              fill="#231F20"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.24496 0.475464C6.18355 0.475464 5.17849 0.73847 4.30494 1.20812C3.75075 1.28327 3.26231 1.41477 2.83022 1.59324C2.14453 1.89382 1.61852 2.30711 1.28037 2.82373C0.932826 3.34035 0.763751 3.93211 0.763751 4.56145C0.763751 5.29411 0.961005 5.88587 1.34612 6.32734C1.72184 6.76882 2.1915 7.08818 2.71751 7.28543C2.94294 7.36997 3.19655 7.45451 3.48774 7.53905C3.45017 7.4639 3.43138 7.38876 3.41259 7.30422C3.17777 7.23847 2.97112 7.16332 2.78326 7.09757C2.28543 6.90971 1.85335 6.60913 1.49641 6.19584C1.14887 5.79194 0.970398 5.24714 0.970398 4.56145C0.970398 3.96968 1.13008 3.42489 1.44944 2.93645C1.76881 2.4574 2.26664 2.06289 2.91476 1.7811C3.57228 1.49931 4.38947 1.34902 5.33817 1.34902C6.00508 1.34902 6.66259 1.43356 7.30132 1.59324C7.90248 1.74353 8.43788 1.95957 8.89814 2.23197L8.22184 3.91332C7.26375 3.38731 6.28687 3.12431 5.32878 3.12431C4.6243 3.12431 4.0889 3.24642 3.74135 3.47185C3.38442 3.71607 3.20595 4.03543 3.20595 4.43934C3.20595 4.84324 3.42199 5.15321 3.83528 5.35046C4.2204 5.52893 4.81216 5.7074 5.59179 5.87648C6.3902 6.06434 7.0571 6.26159 7.57372 6.44945C8.07155 6.63731 8.50363 6.9285 8.86057 7.3324C8.89814 7.37936 8.93572 7.42633 8.97329 7.4733C8.93572 7.50148 8.89814 7.53905 8.86996 7.56723C8.83239 7.6048 8.80421 7.64237 8.77603 7.67994C8.57878 7.56723 8.30638 7.6048 8.12791 7.79266C7.94005 7.97113 7.89309 8.23413 8.0058 8.43139C7.66765 8.62864 7.48918 9.00437 7.57372 9.38948C7.32011 9.49281 7.16043 9.72763 7.10407 9.98124C7.07589 10.1034 7.0665 10.2161 7.08528 10.3288C6.98196 10.31 6.87863 10.3194 6.77531 10.3382C6.51231 10.3945 6.25869 10.5542 6.14598 10.8172C5.76086 10.7421 5.38514 10.9112 5.18788 11.2587C4.99063 11.1554 4.72762 11.1929 4.54916 11.3808C4.36129 11.5687 4.32372 11.8411 4.43644 12.0383C4.39887 12.0665 4.36129 12.0947 4.33311 12.1323C3.73196 12.0853 3.1402 11.982 2.56722 11.8223C1.83456 11.6062 1.2334 11.3338 0.773144 10.9957L1.52459 9.33312C1.96606 9.64309 2.48268 9.88731 3.07444 10.0752C3.71317 10.2818 4.3519 10.3851 4.99063 10.3851C5.61996 10.3851 6.1084 10.3006 6.44655 10.1409L6.23991 10C5.92994 10.1221 5.50725 10.1785 4.99063 10.1785C4.38008 10.1785 3.75074 10.0752 3.1402 9.87792C2.52965 9.68067 1.98485 9.41766 1.54338 9.0889L1.44005 9.00436L0.519531 11.0521L0.585283 11.099C1.06433 11.4653 1.71245 11.7753 2.51086 12.0101C2.81144 12.0947 3.12141 12.1698 3.44077 12.2262C3.75075 12.2825 4.07011 12.3201 4.38947 12.3389C4.8967 12.6019 5.45089 12.7898 6.03326 12.9119C6.42777 12.987 6.83167 13.0246 7.24496 13.0246C10.711 13.0246 13.5195 10.2161 13.5195 6.75003C13.5195 3.28399 10.711 0.475464 7.24496 0.475464ZM4.69944 11.8223C4.78398 11.5687 4.98124 11.4841 5.17849 11.5593C4.98124 11.5217 4.81216 11.6156 4.69944 11.8223ZM5.28181 12.1416C5.33817 12.1323 5.39453 12.1323 5.45089 12.1323C5.39453 12.1416 5.33817 12.1416 5.28181 12.1416ZM5.81722 12.0383C5.90176 11.7847 6.09901 11.7002 6.29627 11.7753C6.09901 11.7377 5.92994 11.8317 5.81722 12.0383ZM5.42271 11.7284C5.573 11.2587 5.93933 11.1178 6.29627 11.2493C5.93933 11.1836 5.63875 11.362 5.42271 11.7284ZM6.7941 11.8411C6.87864 11.5875 7.07589 11.5029 7.27314 11.5781C7.07589 11.5405 6.90681 11.6438 6.7941 11.8411ZM6.50291 11.3902C6.6532 10.9206 7.01953 10.7797 7.37647 10.9112C7.01953 10.8454 6.70956 11.0239 6.50291 11.3902ZM8.55999 7.94295C8.36274 8.05567 8.25942 8.22474 8.30638 8.422C8.22184 8.22474 8.30638 8.01809 8.55999 7.94295ZM7.66765 10.62C7.52676 10.263 7.66765 9.89671 8.13731 9.74642C7.77098 9.96246 7.59251 10.263 7.66765 10.62ZM7.99641 9.53977C7.85551 9.18283 7.99641 8.8165 8.46606 8.66621C8.10913 8.88226 7.93066 9.18283 7.99641 9.53977ZM8.33456 10.5166C8.25942 10.3194 8.33456 10.1221 8.58817 10.0376C8.39092 10.1503 8.29699 10.3194 8.33456 10.5166ZM8.52242 9.53977C8.44728 9.34252 8.52242 9.14526 8.77603 9.06072C8.57878 9.17344 8.48485 9.34252 8.52242 9.53977ZM9.02025 7.76448V7.80205C8.97329 7.83023 8.92632 7.8772 8.87936 7.91477C8.92632 7.85841 8.97329 7.81145 9.02025 7.76448ZM8.92632 8.88226C8.83239 8.63804 8.86996 8.38442 9.05783 8.20596C9.05783 8.21535 9.05783 8.2811 9.05783 8.29989C8.93572 8.46896 8.87936 8.66622 8.92632 8.88226ZM6.96317 9.73702C7.09468 9.56795 7.15103 9.3707 7.15103 9.14526C7.15103 8.86347 7.03832 8.61925 6.82228 8.43139C6.70956 8.33746 6.59684 8.26231 6.46534 8.18717L6.66259 8.56289C6.67199 8.57228 6.68138 8.57228 6.68138 8.58168C6.85985 8.73197 6.94439 8.91043 6.94439 9.13587C6.94439 9.27676 6.91621 9.40827 6.85046 9.53038L6.96317 9.73702Z"
              fill="#231F20"
            />
          </svg>
        </div>
      </motion.div>

      <motion.div
        variants={second}
        className="h-[calc(100%-40px)] my-auto w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <img
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          loading="lazy"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-[60px] w-[60px]"
        />
        <p className="sm:text-[15px] text-xs text-center font-semibold text-[#181D25] mt-4">
          @framer
        </p>
        <p className="text-[#79849A] text-xs mt-1">1590 Followers</p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
      >
        <img
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          loading="lazy"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-neutral-500">
          There are a lot of cool framerworks out there like React, Angular,
          Vue, Svelte that can make your life ....
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500">Use PHP.</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
    </motion.div>
  );
};
const items = [
  {
    title: "AI Content Generation",
    description: (
      <span className="text-sm">
        Experience the power of AI in generating unique content.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    icon: "",
  },
  {
    // title: "Automated Proofreading",
    // description: (
    //   <span className="text-sm">
    //     Let AI handle the proofreading of your documents.
    //   </span>
    // ),
    header: <AnimatedCard />,
    className: "md:col-span-1 p-0",
    // icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    icon: "",
  },
  {
    title: "Contextual Suggestions",
    description: (
      <span className="text-sm">
        Get AI-powered suggestions based on your writing context.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    // icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    icon: "",
  },
  {
    title: "Sentiment Analysis",
    description: (
      <span className="text-sm">
        Understand the sentiment of your text with AI analysis.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    // icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    icon: "",
  },
  {
    title: "Text Summarization",
    description: (
      <span className="text-sm">
        Summarize your lengthy documents with AI technology.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    // icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    icon: "",
  },
];
