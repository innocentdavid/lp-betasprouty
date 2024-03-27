export default function HomePage() {
  return (
    <>
      <div className="">
        <Hero />
      </div>

      <div className="py-6">
        <div className="text-[28px] md:text-[32px] lg:text-[64px] lg:leading-[70px] font-dashboard text-center font-bold max-w-[940px] mx-auto mb-10 lg:mb-20">
          Grow your Instagram quickly & efficiently
        </div>
        <BentoGridThirdDemo />
      </div>
    </>
  );
}

import { motion } from "framer-motion";
import { AuroraBackground } from "../components/ui/aurora-background";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import { cn } from "../utils/cn";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";

function Hero() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 pt-20"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="group hero-h1-gradient _text-left sm:text-center whitespace-pre-wrap bg-clip-text text-transparent bg-gray-900 text-5xl _font-bold tracking-[-1.5px] sm:tracking-[-2px] text-gray-900 sm:text-[45px] md:text-[50px] lg:text-[61px] _lg:h-[135px] leading-[39px] sm:leading-[65px] font-dashboard">
            <span className="mr-2 sm:mr-0 font-black text-[34px] md:text-[48px] lg:text-[84px] lg:leading-[90px]">
              Grow your Instagram
            </span>
            <br className="py-4" />
            <span className="mr-2 sm:mr-0 font-black text-[34px] md:text-[48px] lg:text-[84px] lg:leading-[90px]">
              With Real Followers
            </span>
          </h1>
          <p className="mt-4 mb-2 sm:mb-0 sm:mt-6 sm:text-[21px] text-xl font-medium sm:leading-[32px] leading-snug text-gray-600 _text-left sm:text-center">
            Get 1000+ real followers every month
            <br className="hidden sm:block" /> Make your posts go viral
            organically
            <br className="hidden sm:block" />{" "}
            <span className="bg-[linear-gradient(90deg,transparent_24%,#ffdc59)] py-1 pl-0 pr-2 leading-normal sm:leading-[41px] saturate-[1.2] cursor-grab transition-all duration-300 ease-in-out hover:bg-[linear-gradient(90deg,transparent_-20%,#ffdc59)] hover:text-black hover:saturate-[2]">
              with human-powered<span className="hidden sm:inline"> -</span>
              <span className="inline sm:hidden">,</span> Instagram growth.
            </span>
          </p>
          <div className="items-center justify-center inline-block w-full mt-6 sm:mt-10 gap-x-6 sm:flex">
            <a
              className="mb-4 sm:w-auto sm:mb-0 glow-button group inline-block shadow-md transition-transform duration-200 hover:scale-[.98] h-[54px] w-fit rounded-xl"
              href="https://app.sproutysocial.com/signup"
            >
              <div
                className="absolute inset-0 w-fit"
                style={{
                  transform: "scaleY(1.13) scaleX(1.025)",
                }}
              ></div>

              <span className="inline-flex bg-blue-500 px-8 py-3 text-lg font-medium leading-7 text-white transition-all duration-200 h-full rounded-xl">
                <div
                  className="inline-flex items-center align-middle place-content-center min-w-[170px] font-bold"
                  style={{ textShadow: "rgba(0, 0, 0, 0.15) 0px 1px 2px" }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    className="mr-3 drop-shadow-lg w-[1.35rem] h-[1.35rem] -ml-[8px]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                  </svg>
                  Get started for free
                  <svg
                    className="my-auto stroke-2 stroke-white drop-shadow-lg opacity-80 group-hover:opacity-100 mt-[9px] ml-[18px] -mr-[15px] h-[0.75rem] w-[0.75rem]"
                    // style="margin-top:9px;margin-left:18px;margin-right:-15px;height:0.75rem;width:0.75rem"
                    fill="none"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    aria-hidden="true"
                  >
                    <path
                      className="transition opacity-0 group-hover:opacity-100"
                      d="M0 5h7"
                    ></path>
                    <path
                      className="transition group-hover:translate-x-[3px]"
                      d="M1 1l4 4-4 4"
                    ></path>
                  </svg>
                </div>
              </span>

              {/* <div className="flex-col items-center justify-center block mt-6 space-y-2 sm:hidden">
                <div className="flex flex-row items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <div className="w-2 h-2 rounded-full bg-[#00000033]"></div>
                  <div className="w-2 h-2 rounded-full bg-[#00000033]"></div>
                  <div className="w-2 h-2 rounded-full bg-[#00000033]"></div>
                  <div className="w-2 h-2 rounded-full bg-[#00000033]"></div>
                </div>
                <span className="text-xs font-semibold text-slate-600 animate-pulse bg-transparent">
                  {" "}
                  2 SPOTS LEFT
                </span>
              </div> */}
            </a>
          </div>

          <div className="flex flex-col flex-1 md:mx-auto">
            <ul className="flex-wrap justify-center block mx-auto mt-5 mb-2 sm:mt-8 md:flex lg:mx-auto lg:justify-start">
              <li className="items-center justify-center hidden w-full mb-2 text-base font-semibold list-none sm:flex md:w-auto md:justify-start">
                <div className="mr-3">
                  <svg
                    width="15"
                    height="11"
                    viewBox="0 0 15 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.46998 6.69698L5.46519 10.0354C5.46519 10.0354 6.90169 5.01243 13.7888 1.36218"
                      stroke="#2047F4"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                100% Growth Guaranteed
              </li>
              <li className="flex items-center justify-center w-full mb-2 text-base font-semibold list-none md:w-auto md:justify-start lg:pl-8">
                <div className="mr-3">
                  <svg
                    width="15"
                    height="11"
                    viewBox="0 0 15 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.46998 6.69698L5.46519 10.0354C5.46519 10.0354 6.90169 5.01243 13.7888 1.36218"
                      stroke="#2047F4"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                No credit card required
              </li>
              <li className="items-center justify-center hidden w-full mb-2 text-base font-semibold list-none sm:flex md:w-auto md:justify-start lg:pl-8">
                <div className="mr-3">
                  <svg
                    width="15"
                    height="11"
                    viewBox="0 0 15 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.46998 6.69698L5.46519 10.0354C5.46519 10.0354 6.90169 5.01243 13.7888 1.36218"
                      stroke="#2047F4"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                24/7 Chat Support
              </li>
            </ul>
          </div>

          <div className="relative mt-4 font-dashboard">
            <div className="inline-block">
              <div className="flex items-center flex-wrap justify-center gap-4 md:gap-0">
                <div className="flex-shrink-0 pb-0 pr-4 sm:flex">
                  {/* <div className="flex justify-center -space-x-3">
                    <img
                      alt="SproutySocial Customer Avatar 1"
                      loading="eager"
                      width="32"
                      height="32"
                      decoding="async"
                      data-nimg="1"
                      className="inline-block w-8 h-8 transition-transform duration-200 ease-in-out rounded-full ring-2 ring-white hover:-translate-y-1 text-transparent z-[1]"
                      // style="color:transparent;z-index:1"
                      src="/images/sproutysocial-customer-1.webp"
                    />
                    <img
                      alt="SproutySocial Customer Avatar 2"
                      loading="eager"
                      width="32"
                      height="32"
                      decoding="async"
                      data-nimg="1"
                      className="inline-block w-8 h-8 transition-transform duration-200 ease-in-out rounded-full ring-2 ring-white hover:-translate-y-1 text-transparent z-[2]"
                      // style="color:transparent;z-index:2"
                      src="/images/sproutysocial-customer-2.webp"
                    />
                    <img
                      alt="SproutySocial Customer Avatar 3"
                      loading="eager"
                      width="32"
                      height="32"
                      decoding="async"
                      data-nimg="1"
                      className="inline-block w-8 h-8 transition-transform duration-200 ease-in-out rounded-full ring-2 ring-white hover:-translate-y-1 text-transparent z-[3]"
                      // style="color:transparent;z-index:3"
                      src="/images/sproutysocial-customer-3.webp"
                    />
                    <img
                      alt="SproutySocial Customer Avatar 4"
                      loading="eager"
                      width="32"
                      height="32"
                      decoding="async"
                      data-nimg="1"
                      className="inline-block w-8 h-8 transition-transform duration-200 ease-in-out rounded-full ring-2 ring-white hover:-translate-y-1 text-transparent z-[4]"
                      // style="color:transparent;z-index:4"
                      src="/images/sproutysocial-customer-4.webp"
                    />
                    <span
                      className="inline-flex items-center justify-center h-8 bg-gray-800 rounded-full w-9 ring-2 ring-white dark:bg-gray-900 dark:ring-gray-800 z-[5]"
                      //  style="z-index:5"
                    >
                      <span className="text-xs font-medium leading-none text-white uppercase">
                        58K+
                      </span>
                    </span>
                  </div> */}
                  <AnimatedTooltipPreview />
                </div>

                <div className="div-flex-3">
                  <div className="div-flex-4">
                    <div className="div-flex-5">
                      <div className="svg-3">
                        <img
                          src="/icons/star.svg"
                          loading="lazy"
                          width="14.868390083312988"
                          height="14.240479469299316"
                          alt=""
                          className="vectors-wrapper-7"
                        />
                      </div>
                      <div className="svg-3">
                        <img
                          src="/icons/star.svg"
                          loading="lazy"
                          width="14.868390083312988"
                          height="14.240479469299316"
                          alt=""
                          className="vectors-wrapper-7"
                        />
                      </div>
                      <div className="svg-3">
                        <img
                          src="/icons/star.svg"
                          loading="lazy"
                          width="14.868390083312988"
                          height="14.240479469299316"
                          alt=""
                          className="vectors-wrapper-7"
                        />
                      </div>
                      <div className="svg-3">
                        <img
                          src="/icons/star.svg"
                          loading="lazy"
                          width="14.868390083312988"
                          height="14.240479469299316"
                          alt=""
                          className="vectors-wrapper-7"
                        />
                      </div>
                      <div className="svg-3">
                        <img
                          src="/icons/star.svg"
                          loading="lazy"
                          width="14.868390083312988"
                          height="14.240479469299316"
                          alt=""
                          className="vectors-wrapper-7"
                        />
                      </div>
                    </div>
                    <div className="text-15">
                      <div className="text-15 text-15">
                        <span className="text-black text-base font-bold leading-[1px]">
                          4.9
                        </span>
                        <span className="text-black text-base font-normal leading-[1px]">
                          /5
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-16">Based on 350+ reviews</div>
                </div>

                {/* <div className="flex justify-center ml-4">
                  <button
                    type="button"
                    className="relative flex items-center justify-center focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 rounded-3xl group"
                    aria-label="Watch the video"
                  >
                    <img
                      alt="SproutySocial Demo Video Thumbnail"
                      fetchPriority="high"
                      width="85"
                      height="47"
                      decoding="async"
                      data-nimg="1"
                      className="transition-all duration-700 ease-in-out rounded-lg shadow-sm opacity-50 hover:shadow-lg hover:opacity-100 transform-gpu animate-sway"
                      //   style="color:transparent"
                      src="/images/sproutysocial-video-thumbnail.webp"
                    />
                    <svg
                      className="absolute transition-all ease-in-out scale-75 pointer-events-none group group-hover:scale-90 opacity-80 group-hover:opacity-100"
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                    >
                      <circle
                        className="fill-white"
                        cx="24"
                        cy="24"
                        r="20"
                      ></circle>
                      <path
                        className="fill-purple-500 drop-shadow-2xl"
                        d="M30 24a.999.999 0 0 0-.427-.82l-10-7A1 1 0 0 0 18 17v14a.999.999 0 0 0 1.573.82l10-7A.995.995 0 0 0 30 24v0Z"
                      ></path>
                    </svg>
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}

// import {
//   IconBoxAlignRightFilled,
//   IconClipboardCopy,
//   IconFileBroken,
//   IconSignature,
//   IconTableColumn,
// } from "@tabler/icons-react";

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
// const Skeleton = () => (
//   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
// );

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
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
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
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skelenton-two" + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
          }}
          className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-4"
        ></motion.div>
      ))}
    </motion.div>
  );
};
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
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <img
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Just code in Vanilla Javascript
        </p>
        <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Delusional
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <img
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Tailwind CSS is cool, you know
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Sensible
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <img
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          I love angular, RSC, and Redux.
        </p>
        <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Helpless
        </p>
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
    title: "Automated Proofreading",
    description: (
      <span className="text-sm">
        Let AI handle the proofreading of your documents.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
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

const people = [
  {
    id: 1,
    name: "@olesyaleuenberger",
    designation: "Miss Switzerland 2023",
    image: "/images/c1.jpeg",
  },
  {
    id: 2,
    name: "@gostisceirsic",
    designation: "Small business",
    image: "/images/c2.jpeg",
  },
  {
    id: 3,
    name: "@chrisvis",
    designation: "Swimmer & Model",
    image: "/images/c3.jpeg",
  },
  {
    id: 4,
    name: "@pockychocospaniel",
    designation: "Puppy profile",
    image: "/images/c4.jpeg",
  },
  {
    id: 5,
    name: "@topolovecvito",
    designation: "Influencer",
    image: "/images/c5.jpeg",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center _mb-10 w-full">
      <AnimatedTooltip items={people} />
      <span
        className="inline-flex items-center justify-center h-[42px] w-[42px] bg-gray-800 rounded-full ring-2 ring-white dark:bg-gray-900 dark:ring-gray-800 z-[5]"
        //  style="z-index:5"
      >
        <span className="text-xs font-medium leading-none text-white uppercase">
          58K+
        </span>
      </span>
    </div>
  );
}
