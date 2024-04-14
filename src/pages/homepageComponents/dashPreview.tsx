/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SparklesPreview2 } from "../../components/ui/sparkles-bg";

// interface Ingredient {
//   icon: string;
//   label: string;
// }

const allIngredients = [
  {
    icon: "🍅",
    label: "Analytics",
    image: "/images/dashPrev/Live Analytics.png",
  },
  { icon: "🥬", label: "Growth", image: "/images/dashPrev/Growth.png" },
  { icon: "🧀", label: "Manage", image: "/images/dashPrev/Manage.png" },
  // { icon: "🥕", label: "Carrot" },
  // { icon: "🍌", label: "Banana" },
  // { icon: "🫐", label: "Blueberries" },
  // { icon: "🥂", label: "Champers?" },
];

const [LiveAnalytics, Growth, Manage] = allIngredients;
const initialTabs = [LiveAnalytics, Growth, Manage];

// function getNextIngredient(ingredients: Ingredient[]): Ingredient | undefined {
//   const existing = new Set(ingredients);
//   return allIngredients.find((ingredient) => !existing.has(ingredient));
// }

const descs: any = {
  0: [
    {
      title: "✨ See in real-time.",
      content: "Track your follower's growth each time you open the app.",
    },
    {
      title: "🖥️ Check the latest session.",
      content: "See how much and which interactions your account performed.",
    },
    {
      title: "⚙️ Switch between.",
      content: "Easily switch between your accounts with a single click.",
    },
    {
      title: "📈 Simple overview.",
      content: "Glance over your account performance in a flash.",
    },
  ],
  1: [
    {
      title: "💎 Add targets.",
      content:
        "Write a username of a similar profile to yours or your competitor’s.",
    },
    {
      title: "💯 View performance.",
      content: "Quickly view the performance of the added target account.",
    },
    {
      title: "✨ Add with AI.",
      content: "Let the power of deep learning add your targets automatically.",
    },
    {
      title: "🗑️ Archive accounts.",
      content:
        "Is target not performing well? Simply archive them with one click.",
    },
  ],
  2: [
    {
      title: "👨🏻‍💻 Dedicated account manager.",
      content: "Ask any question regarding Instagram at anytime.",
    },
    {
      title: "⚫️ Blacklist an account.",
      content: "Add those who you wish we do not interact with.",
    },
    {
      title: "⚪️ Whitelist an account.",
      content:
        "Quickly add an account interacted by us and we’ll re-interact with them.",
    },
    {
      title: "📲 Connect seamlessly.",
      content:
        "Easily connect and manage multiple accounts from your dashboard.",
    },
  ],
};

export default function DashPreview() {
  const tabs = initialTabs;
  const [selectedTab, setSelectedTab] = useState<{
    icon: string;
    label: string;
    image: string;
  }>(tabs[0]);

  return (
    <div className="my-16 md:my-40">
      <SparklesPreview2>
        <header
          id="instagram-growth"
          // name="Apps"
          className="flex flex-col items-center justify-center gap-20 min-h-[min-content] _bg-gradient-to-b from-rose-500 to-orange-400 py-10 md:py-40 px-150 relative overflow-hidden w-full"
        >
          {/* Background */}
          <div
            // name="Background"
            className="select-none pointer-events-none absolute top-0 left-0 w-full h-full overflow-hidden z-0 bg-gradient-to-t from-rose-500 to-orange-400 mix-blend-overlay flex-none hidden"
          >
            <div
              // name="Shapes container"
              className="absolute top-0 left-0 w-[1200px] h-[9960px] overflow-hidden"
            >
              <div
                // name="noise_play"
                className="absolute top-[-269px] left-1/2 -translate-x-1/2 rotate-[-222deg] w-[1140px] h-[1123px] aspect-w-1 aspect-h-1.0147347740667976 z-10"
                style={{
                  transform: "translateX(-50%) rotate(-222deg)",
                  aspectRatio: 1.0147347740667976 / 1,
                }}
              >
                <div
                  data-framer-background-image-wrapper="true"
                  style={{
                    position: "absolute",
                    borderRadius: "inherit",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                  }}
                >
                  <img
                    src="https://framerusercontent.com/images/yCl0qMtLdN4ajk5NSM3tFjvXUjQ.webp"
                    alt=""
                    loading="lazy"
                    style={{
                      display: "block",
                      width: "100%",
                      height: "100%",
                      borderRadius: "inherit",
                      objectPosition: "center",
                      objectFit: "cover",
                      imageRendering: "auto",
                      maxWidth: "100%",
                    }}
                  />
                </div>
              </div>

              <div
                // name="noise_t"
                className="absolute overflow-visible top-[631px] right-[359px] rotate-[-42deg] w-[1317px] h-[1331px] z-[1]"
                style={{
                  transform: "rotate(-42deg)",
                  aspectRatio: 0.9893522626441881 / 1,
                }}
              >
                <div
                  data-framer-background-image-wrapper="true"
                  style={{
                    position: "absolute",
                    borderRadius: "inherit",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                  }}
                >
                  <img
                    src="https://framerusercontent.com/images/HMp0xBcr9IuweOnyO7eaWOAfP7Q.webp?scale-down-to=1024"
                    alt=""
                    loading="lazy"
                    style={{
                      display: "block",
                      width: "100%",
                      height: "100%",
                      borderRadius: "inherit",
                      objectPosition: "center",
                      objectFit: "cover",
                      imageRendering: "auto",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-[64px] flex-nowrap h-[min-content] justify-center overflow-visible relative w-[min-content]">
            <div className="md:max-w-5xl md:mx-auto text-center pb-4 px-4 md:px-10 font-dashboard">
              <div className="text-[30px] md:text-[32px] lg:text-5xl leading-8 font-dashboard text-center font-bold max-w-[940px] mx-auto _mb-8 _text-white bg-gradient-to-r from-white to-[#FFD9D9] text-transparent bg-clip-text">
                Our magic formula for Instagram Growth
              </div>
              <p className="mt-4 mb-2 sm:mb-0 _sm:mt-6 sm:text-[21px] text-xl font-medium sm:leading-[32px] leading-snug _text-white _text-left sm:text-center bg-gradient-to-r from-white to-[#FFD9D9] text-transparent bg-clip-text">
                Loaded with new features to quickly get genuine users to your
                Instagram.
              </p>
            </div>

            <div className="md:min-w-[480px] overflow-hidden flex flex-col gap-[64px]">
              <nav className="p-[5px_5px_0] h-[44px] md:max-w-[600px] mx-auto w-full font-dashboard">
                <ul className="list-none p-0 m-0 font-[500] text-sm flex w-full border-b border-white pb-[12px]">
                  {tabs.map((item) => (
                    <li
                      key={item.label}
                      className={`list-none m-0 font-[500] text-[20px] relative rounded-[5px] rounded-b-none w-full p-[10px_15px] cursor-pointer h-[24px] flex justify-center text-center items-center flex-1 min-w-0 select-none text-white ${
                        item === selectedTab ? "" : ""
                      }`}
                      onClick={() => setSelectedTab(item)}
                    >
                      {item.label}
                      {item === selectedTab ? (
                        <motion.div
                          className="absolute -bottom-[14px] left-0 right-0 h-[3px] bg-[#fff]"
                          layoutId="underline"
                        />
                      ) : null}
                    </li>
                  ))}
                </ul>
              </nav>

              <main className="flex justify-center items-center text-[128px] grow-[1] select-none w-full h-auto md:w-[650px] lg:w-[820px] md:min-h-[500px] md:bg-[url(https://framerusercontent.com/images/4QUKuCZJWenPVAEncU2YLCnoe8.png?scale-down-to=1024)] bg-contain bg-no-repeat bg-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedTab ? selectedTab.label : "empty"}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* {selectedTab ? selectedTab.icon : "😋"} */}
                    <img
                      src={selectedTab.image}
                      alt=""
                      loading="lazy"
                      width={500}
                      height={300}
                      className="max-w-[300px] md:max-w-[500px]"
                    />
                  </motion.div>
                </AnimatePresence>
              </main>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:w-full w-[300px] mx-auto lg:mx-0">
                {descs[
                  tabs.findIndex((tab) => tab.label === selectedTab.label)
                ]?.map(
                  (
                    desc: {
                      title: string;
                      content: string;
                    },
                    index: number
                  ) => {
                    return (
                      <div
                        key={`desc-${index + 1}`}
                        className="text-white text-[15px]"
                      >
                        <strong>{desc.title}</strong>{" "}
                        <span className="">{desc.content}</span>
                      </div>
                    );
                  }
                )}
              </div>
            </div>

            {/* cta */}
            <div className="items-center justify-center w-full mt-6 sm:mt-10 gap-x-6 flex">
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
                      stroke-width={0}
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
              </a>
            </div>
          </div>
        </header>
      </SparklesPreview2>
    </div>
  );
}
