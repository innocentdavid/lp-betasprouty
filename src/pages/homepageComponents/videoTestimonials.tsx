/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import Vimeo from "@u-wave/react-vimeo";
import { motion } from "framer-motion";

const VIDEO_TESTIMONIALS = [
  {
    videoUrl: "810140282",
    bg: "/images/vt-1.png",
    playIcon: "/images/vt-1a.png",
    username: "reed.sm1th",
    fullName: "Fashion Influencer",
    followers: "11.7K",
    borderColor: "#0E9F6E",
  },
  {
    videoUrl: "810142280",
    bg: "/images/vt-2.png",
    playIcon: "/images/vt-2a.png",
    username: "olesyaleuenberger",
    fullName: "Miss 2023 Switzerland",
    followers: "23.1K",
    borderColor: "#EC4899",
  },
  {
    videoUrl: "810138832",
    bg: "/images/vt-3.png",
    playIcon: "/images/vt-3a.png",
    username: "angelo.crlo",
    fullName: "Fitness Coach",
    followers: "35.4K",
    borderColor: "#F59E0B",
  },
];

export default function VideoTestimonials() {
  const [videoUrl, setVideoUrl] = useState("");
  const sliderRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(1);

  const scroll = (scrollOffset: number) => {
    if (sliderRef.current) {
      const slider = sliderRef.current;

      console.log("slider.scrollLeft");
      console.log(slider.scrollLeft);

      if (scrollOffset === +280) {
        if (slider.scrollLeft >= 521) {
          setScrollPosition(1);
        }
        if (slider.scrollLeft === 0) {
          setScrollPosition(2);
        }
        if (slider.scrollLeft === 280) {
          setScrollPosition(3);
        }
      }

      if (scrollOffset === -280) {
        if (slider.scrollLeft === 521) {
          setScrollPosition(2);
        }
        if (slider.scrollLeft === 0) {
          setScrollPosition(3);
        }
        if ([280, 241].includes(slider.scrollLeft)) {
          setScrollPosition(1);
        }
      }

      let targetScrollLeft = scrollOffset;
      if (slider.scrollLeft >= 521 && scrollOffset === +280) {
        targetScrollLeft = -slider.scrollWidth - slider.scrollLeft;
      }

      if (slider.scrollLeft === 0 && scrollOffset === -280) {
        targetScrollLeft = +(slider.scrollWidth - slider.scrollLeft);
      }

      sliderRef.current.scrollBy({
        // left: scrollOffset,
        left: targetScrollLeft,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const scrollContainer = document.getElementById("scrollContainer");
    if (scrollContainer) {
      scrollContainer.addEventListener(
        "touchmove",
        function (event) {
          // Prevent horizontal scrolling/swiping on touch devices
          event.preventDefault();
        },
        { passive: false }
      );
    }
  }, []);

  return (
    <div className="" id="video-reviews">
      {videoUrl && (
        <VideoPlayer videoUrl={videoUrl} setVideoUrl={setVideoUrl} />
      )}

      <div className="max-w-5xl mx-auto text-center mt-20 pb-4 px-4">
        <div className="text-[30px] md:text-[32px] lg:text-5xl leading-8 font-dashboard text-center font-bold max-w-[940px] mx-auto _mb-8">
          Trusted by thousands of satisfied{" "}
          <span className="bg-purple-600 bg-gradient-to-r from-[#BA01B4] to-[#3D1DC2] text-transparent bg-clip-text">
            customers
          </span>
        </div>

        <p className="mt-8 mb-2 sm:mb-0 _sm:mt-6 sm:text-[21px] text-xl font-medium sm:leading-[32px] leading-snug text-gray-600 _text-left sm:text-center font-dashboard">
          From influencers to businesses, Sprouty helps thousands of people grow
          their Instagram presence.
        </p>

        <div className="flex justify-center font-dashboard font-medium text-[18px] mt-8">
          <div className="div-flex-4">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.44 13.2708C24.44 12.4258 24.3642 11.6133 24.2233 10.8333H13V15.4483H19.4133C19.1317 16.9325 18.2867 18.1891 17.0192 19.0341V22.035H20.8867C23.14 19.955 24.44 16.9 24.44 13.2708Z"
                fill="#4285F4"
              />
              <path
                d="M12.9997 24.9167C16.2172 24.9167 18.9147 23.855 20.8863 22.035L17.0188 19.0342C15.9572 19.7492 14.603 20.1825 12.9997 20.1825C9.90133 20.1825 7.26883 18.0917 6.32633 15.275H2.36133V18.3517C4.32216 22.2409 8.34133 24.9167 12.9997 24.9167Z"
                fill="#34A853"
              />
              <path
                d="M6.32634 15.2642C6.08801 14.5492 5.94717 13.7908 5.94717 13C5.94717 12.2092 6.08801 11.4508 6.32634 10.7358V7.65918H2.36134C1.54884 9.26251 1.08301 11.0717 1.08301 13C1.08301 14.9283 1.54884 16.7375 2.36134 18.3408L5.44884 15.9358L6.32634 15.2642Z"
                fill="#FBBC05"
              />
              <path
                d="M12.6383 5.745C14.3933 5.745 15.9533 6.35167 17.1992 7.52167L20.6117 4.10917C18.5425 2.18083 15.8558 1 12.6383 1C7.98 1 3.96083 3.67583 2 7.57583L5.965 10.6525C6.9075 7.83583 9.54 5.745 12.6383 5.745Z"
                fill="#EA4335"
              />
            </svg>
            <div className="">4.73</div>
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
            <div className="">from 391+ reviews</div>
          </div>
        </div>
      </div>

      <div className="w-full overflow-auto no-scrollbar">
        <motion.div
          layout
          className="mt-16 flex xl:justify-center gap-4 px-3 md:px-12 w-full overflow-x-auto no-scrollbar min-w-[375px] max-w-[375px] md:min-w-[unset] md:max-w-[unset]"
          id="scrollContainer"
          ref={sliderRef}
        >
          {VIDEO_TESTIMONIALS.map((Vtestimonial, index) => {
            return (
              <div
                className="p-1 rounded-[12px] cursor-pointer group"
                style={{
                  backgroundColor: Vtestimonial.borderColor,
                }}
                onClick={() => {
                  setVideoUrl(Vtestimonial.videoUrl);
                  document.body.style.overflow = "hidden";
                }}
              >
                <motion.div
                  layout
                  key={`V_testimonial-${index + 1}`}
                  className="relative min-h-[400px] md:min-h-[568px] _bg-[url(/images/vt-1.png)] bg-cover bg-center bg-no-repeat rounded-[12px] min-w-[280px] md:min-w-[320px] lg:max-w-[500px] font-dashboard"
                  style={{
                    backgroundImage: `url(${Vtestimonial.bg})`,
                  }}
                >
                  <div className="flex items-center gap-2 justify-between py-[17px] px-[16px] bg-gradient-to-b from-black text-white rounded-t-[12px]">
                    <div className="flex items-center gap-2">
                      <img
                        src={Vtestimonial.playIcon}
                        loading="lazy"
                        alt=""
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full"
                      />

                      <div className="">
                        <div className="font-bold text-sm md:text-base font-dashboard">
                          {Vtestimonial.fullName}
                        </div>
                        <div className="font-bold text-xs md:text-sm font-dashboard">
                          @{Vtestimonial.username}
                        </div>
                      </div>
                    </div>

                    <div
                      className="rounded-[8px] py-1 px-2 text-[10px] md:text-[13px] font-semibold font-dashboard whitespace-nowrap w-fit"
                      style={{
                        backgroundColor: Vtestimonial.borderColor,
                      }}
                    >
                      {Vtestimonial.followers} Followers
                    </div>
                  </div>
                  <div
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 cursor-pointer _group"
                    onClick={() => {
                      setVideoUrl(Vtestimonial.videoUrl);
                      document.body.style.overflow = "hidden";
                    }}
                  >
                    <div className="relative">
                      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-[1]">
                        <svg
                          className="group-hover:scale-125 transition-all duration-300"
                          width="70"
                          height="70"
                          viewBox="0 0 70 70"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.9">
                            <path
                              d="M35 63C50.464 63 63 50.464 63 35C63 19.536 50.464 7 35 7C19.536 7 7 19.536 7 35C7 50.464 19.536 63 35 63Z"
                              fill="white"
                            />
                            <path
                              d="M43.4004 35L29.4004 25.2V44.8L43.4004 35Z"
                              fill={Vtestimonial.borderColor}
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>

      <div className="lg:hidden flex justify-between items-center px-3 py-4">
        <div className="md:hidden flex items-center gap-2">
          <div
            className={`w-2 h-2 rounded-full ${
              scrollPosition === 1 ? "bg-black" : "bg-white"
            } transition-all duration-300`}
          ></div>
          <div
            className={`w-2 h-2 rounded-full ${
              scrollPosition === 2 ? "bg-black" : "bg-white"
            } transition-all duration-300`}
          ></div>
          <div
            className={`w-2 h-2 rounded-full ${
              scrollPosition === 3 ? "bg-black" : "bg-white"
            } transition-all duration-300`}
          ></div>
        </div>

        <div className="flex-1 hidden md:block"></div>

        {/* {scrollPosition} */}

        <div className="flex items-center gap-2">
          <svg
            className={`transition-all duration-300 min-w-8 h-8 rotate-180`}
            onClick={() => {
              scroll(-280);
            }}
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="18"
              cy="18"
              r="16"
              transform="rotate(-90 18 18)"
              stroke="url(#paint0_linear_63_275)"
              stroke-width="2.06452"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.3938 16.8645C10.7667 16.8645 10.2583 17.3729 10.2583 18C10.2583 18.6271 10.7667 19.1355 11.3938 19.1355L22.3598 19.1355L18.2036 24.3307C17.8119 24.8204 17.8913 25.5349 18.3809 25.9267C18.8706 26.3184 19.5852 26.239 19.9769 25.7493L25.6089 18.7093C25.9407 18.2946 25.9407 17.7054 25.6089 17.2907L19.9769 10.2507C19.5852 9.76099 18.8706 9.68159 18.3809 10.0733C17.8913 10.4651 17.8119 11.1797 18.2036 11.6693L22.3598 16.8645L11.3938 16.8645Z"
              fill="url(#paint1_linear_63_275)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_63_275"
                x1="2.96"
                y1="18"
                x2="34"
                y2="18"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F90D1E" />
                <stop offset="0.677083" stop-color="#BA01B4" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_63_275"
                x1="18.058"
                y1="25.685"
                x2="18.058"
                y2="9.82449"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F90D1E" />
                <stop offset="0.677083" stop-color="#BA01B4" />
              </linearGradient>
            </defs>
          </svg>

          <svg
            className={`transition-all duration-300 min-w-8 h-8`}
            onClick={() => {
              scroll(280);
            }}
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="18"
              cy="18"
              r="16"
              transform="rotate(-90 18 18)"
              stroke="url(#paint0_linear_63_275)"
              stroke-width="2.06452"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.3938 16.8645C10.7667 16.8645 10.2583 17.3729 10.2583 18C10.2583 18.6271 10.7667 19.1355 11.3938 19.1355L22.3598 19.1355L18.2036 24.3307C17.8119 24.8204 17.8913 25.5349 18.3809 25.9267C18.8706 26.3184 19.5852 26.239 19.9769 25.7493L25.6089 18.7093C25.9407 18.2946 25.9407 17.7054 25.6089 17.2907L19.9769 10.2507C19.5852 9.76099 18.8706 9.68159 18.3809 10.0733C17.8913 10.4651 17.8119 11.1797 18.2036 11.6693L22.3598 16.8645L11.3938 16.8645Z"
              fill="url(#paint1_linear_63_275)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_63_275"
                x1="2.96"
                y1="18"
                x2="34"
                y2="18"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F90D1E" />
                <stop offset="0.677083" stop-color="#BA01B4" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_63_275"
                x1="18.058"
                y1="25.685"
                x2="18.058"
                y2="9.82449"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F90D1E" />
                <stop offset="0.677083" stop-color="#BA01B4" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

const VideoPlayer = ({
  videoUrl,
  setVideoUrl,
}: {
  videoUrl: string;
  setVideoUrl: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen z-[99999]">
      <div
        className="absolute top-0 left-0 w-full h-screen bg-black/80 text-white cursor-pointer"
        onClick={() => {
          setVideoUrl("");
          document.body.style.overflow = "visible";
        }}
      ></div>
      <div
        className="absolute top-4 right-4 text-white cursor-pointer"
        onClick={() => {
          setVideoUrl("");
          document.body.style.overflow = "visible";
        }}
      >
        <FaTimes />
      </div>
      <div className="absolute z-[6] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* <iframe
          scrolling="no"
          frameborder="0"
          id="player"
          src="https://player.vimeo.com/video/810140282?app_id=122963&amp;h=d5553a01d4&amp;referrer=https%3A%2F%2Fwww.sproutysocial.com%2F"
          allowfullscreen="true"
        ></iframe> */}
        <Vimeo
          id="vimeoPlayer"
          video={videoUrl}
          autoplay
          width={640}
          height={550}
          // responsive={true}
          loop={true}
        />
      </div>
    </div>
  );
};

// const RingSvg = () => {
//   return (
//     <svg
//       className="w-[100px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-[1]"
//       xmlns="http://www.w3.org/2000/svg"
//       xmlnsXlink="http://www.w3.org/1999/xlink"
//       version="1.2"
//       viewBox="0 0 125.886 125.714"
//       height="167.619"
//       width="167.848"
//     >
//       <defs>
//         <image
//           xlinkHref="data:image/png;base64,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"
//           height="252"
//           width="252"
//           id="prefix__a"
//         />
//         <image
//           xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPwAAAD8CAIAAADcyV4wAAAABmJLR0QA/wD/AP+gvaeTAAAgAElEQVR4nO2de5RcV3Xmv2+fW9UtWTIGJ0AAJwZLMGhJsvwI2GAcJytgiI3JmoknM0l4BZABg5+Yx8zKWlorMxPCyzYEEvOygSSTCcmsACHmkZXwMDYPG8uSlgnY5hETwM4YbEuWuqvu3d/8cc69VdVqSf2uqtb5/VHqrr5ddar11a599tkPIrOc7Nm0ozCQIOSSJJIEJEgAIQAQSCMFUigdm+/cMeR1r2o47AWMPd86eQdVQSBcIhA1zKRpoVKYLEBiqlsZaQQJdyBK30DBJWuFljBVAoz/KQSg+DhA+pqEcdsd/20or3TVkEU/b7615Q8IoBa4QIUiqOtOEhIISjCDO8DmPaCDbgFQEGjxHhfSbaN4CIg/hYsqjJUApjcCYbCtu988tL/FeJJFfwTu2vBuFvvESmFK0S8BnRYASQQEzfpnFEAw/kxCfD80/wxemb4VCaVbMCo76TteEx8ToECnBwRX/CQggKIqKE6UrY13X7KMf5HxJ4t+Fu465S2oIAGivG2dx9jkfRUpONFnp4mkTqk28pTquzHTrteXzLwn2nvSvPfIM24FmiDCHIrvJfQ+K0ASoAvrp9bsb0+X5mABkqE49fb8BphJFn2Puzf/d6cDAMEAdCnEjSaYdpyR+o/W6H7G/X3Uthnot/c4+EEbi57uH7T3jaVP9h593/Z/GhB0iDCBbE14OS3BBdKesefKhf1ZVh9Z9Lh705tFghJpssoqygAo2VQNeikH+eW1vUe8x0GjXGT8XavgARRImKsKCi11dKANgGtaXXbJyhkEF0yAHDR48+FhlCD07H2y7qADB30ypB1C/NpoXQcZCIdAkLLT7rxi2H/yIXP0iv7OrW8wGEGKVkHBFK0kevZ7wC+fYdbRBGrgUHBMq12wZP+l7H/PRLtOk4eSrAAEBaiQU4JECpDYPEW9oY2OlsCWw80oScm6z27vUe8f4jUEXQBlVeHm9XL0y7uuWua/8Yhy1In+7i1vdgiAUw5vsSXXQX5543NT6rf3dWidQMWnonWvlQfgAFwGsUJYjhD7nk07AItvGVCQKAeKLlAYq9ntfVq/qxcD9egAwUR31fEn4ozdb1jyNY8yR4vod215cwERCISJFRuT3ocG/ezaZrszmLrdYMFZ634dbEI8HoErfpAU3wMOAOZMipe7tYJ7+qRJ9j5+FNS67/9MEJIDB8AhSc7qObvfssKvZSisftH/y9Y3EnChC5tMbvCg/U4bTPTZeFm0kTVyAnC3Td/6H0N7JYfm9qf/IY2KLy3+n9Ik7/Pv0ZwD1J6PAIunBO4q2QloAea0s3ZdNuwXtLysZtF/e+tVrK2aDXrnNYPxcoEGeYqjx+uftvuPVnjZi+f2LX8cw/fRxBPxRAuH3AMA8fS4ayHICZB45q5Vu99dnaL/zta0RRNgMGGW09D4dX1kaoqJAUh3PG33Hw9t9UvHN7e8FUhBUhIugAag9u+beH9zyksB1pyjgWesRqu/qkS/Z9OOYB2jyBLJtPXHyHt5LAREIG5pWd8nrQ6tH8w3t7xVanx9AQbF0FDf+UCf7uNpl6RKJrD08Kt3Xjy85S8xq0T09555edm1siymO2smikdodKn/9HQwsi7VG77IatX6wXxjy1tTAAoGEnLSvOff96JA9R4AU2W71epaIbT1rFtWg8+zGkT/7ZOvKALaE5o60FKKw6Evtl4TNe4SKQLi0aP1g/nGlnekFAhIFuo9QO/Et3c2DJCmYypNUc6z7hh7h2e8Rf8vm99AAgTohtCn8hSZae4x4EB3X8smjQHCxj1vH+7KR4RbN79NZKXqgE+tt3WeojrJw/EmhktKciMc0U06e88YS39cRX/radsnfcI8WFWEUMv7IKL3KtC9krz0zuY737fiix11/nnTjjbbBgssBItWfqa9T1aflVQEM4YiFKffdtFwV74wxlL095x85TTL/eHAcdWxMb+ljrU3KV0myGKsGiKw4Y53DHvVY8DXNr8L9d5e1quDGYjxGyVMtCa7VbeSn3XH+GVxjpnov3PqGymHYHEvOiMtJt0jlITFYyhu2Hn0Ou4L4+ub3ylCUgU3C4aen9PkfgJwMsZ5XfqVPZcPe9XzYJxEf/e2KwXKzLzCLNnqdBeMcMX/k+y4L4avbH4bScqCmwr1+/ceE1IlmJVVZaSBz9596bCXPFfGQ/R3bb0snpXE85RelUadCUPWybcAyKfuzHJfGr6+6WpZDGNazE4+ONe/Oeww2pm7XjfM5c6NMRD9XduuhBwSQ6hzZvrqkiCCU511rWLKrNqY5b4MfG3LNUGdSd+/t1hP2EAOjwSaSwWDy0WdtWvUTf5Ii/6uZ74epUEGN2AgL7KJTUqFC1Ioq3bunLF87Nm0Y9razkJWVJqttksAUVaonNNd/MYI1+mOrujv2nYZTGg5plsHdxMA6HKDAQbYxjvybnUl+PrJ73I1TXvIfv++7unw0H6saaMwPmfP64e93tkZUdHfdcoVsV7IQM2sJRXBk3a+48e/9NG9x+182h1XD3GdRyc3b37X8Q899an3nvfVLdfUmcz9OTwmT0n7zxnJ3e3Iif7eky+vgIrwwRYCTR2qaGv2PmXNvpMe85PncfTWf5Qg6IeP/erDx/xw37of+kEVuqS5nDCSZHjWHa8Z9noHsGEvYIDvnnp5SQQghcdS+nddriQ9GPZ10Tmw/rvH/+TcrPghQvCE+8/ct+6HU9b9f60HgVjly7p5j9dfB5d/eet7h73eAUZI9HedeplLMkwbRDWV1KnLgLxkOeHt/Ta18fZ8vDoSPHP35Q8X+9dUE11WscK47v2WWr1VXgoAqi9vvXbIa+1jVIzl3adcClBETICcsbDYfkPQxp3XDGuFmcNwy9ZrIZisYgnaQTn6qYTrrF0jsbUdCUt/z6lxuyNL1R2sA5Qg+aA90kFJIit+ZDlz16Umg6HdXpsKimt7n/a5oKQvb3nPkBcKYOiW/v5Nr50OVplVgVB/DWs6+itZlfQpdk6/7f3DXWrmiNx62nVV1XU5JK8/rnv2XqlrlTuHW4c1TNF/f+sbDN3JsvvwRGtGnxmHYlNIght25qDkOHHL1mvdBRdC05chdt4HwW5pZg7DrwzP1Rma6L97+uWoYFUoi5KxA3Adj/faDQTw1OzSjCFf2XQ1Yk8F1k3agKYG11O+FM4eUlrycER/z2mXASCpyjHjtBWK4a/swY87X9lyLeoctX57D1B1V8Kzdw5B90MQ/d2nXgbUPfQael24BGDDN0cowpVZMF/Zeg2aXiMzei6Y4IBw9u6V1v1Ki/67p16aGlEonl8AaGpzFLOHT/pmtvGrh5u3XltPrzjI3tcDJc7etaK6X1HR333a6xm7Yg+UPAEA6k68G2/PNn61cfOWa2KbqXR4BfT12FFsQXfOCup+5eL095x+cexEPaB49bauhLLiVyXP2n0ZY32+ZsTv6+oI4YtbVu6/foUs/fdPf31qHiGrmw3VC2Dy7U7a+e6VWUxmKNy85VpAZqgOsvcuNzIQz1qReM5KWPq7z3ytm1sMYhExJwlAr+LPsuJXP8/afakZKoeXmmHvjRaI0vnPm1YiNW3ZRX/3s14NyYPcvE/xAiFU0cc56bas+KOCM+64zCuQcKpRQtR9JVaVBcNXtv7pci9jed2b753zMnXbLrPS0jwmUg6AXU0bio235dZLRyNf2vauKni7U8yI5xiKqsvqwMSvfv/ly/fsy2zpy4KtTiGjARAtNskCYAEtR7m8z54ZVargoTT1ffJHe+8oqwMTNtFZ1mdfRkv//We/WnC4xQnaQJyxyqqKx9P2lFtzrObo5aat1xAwk1ccsPc0dWlFddayBTGXS/TfP+uiugSkNzkeoGByybnh1j9ZpqfOjAu3bLtaDoI+mI/ZnGQ9545l6aKzLO7N987eDqaxpY1XQ4J0wmlZ8RkAOHPn5UQaldUfz4mKh3yZ6q2W3tL/4FdeIVma89scQQiKs7iJE2/5syV/0sz4cvPJ75bXNRQH1VsB4Tm7ljj5fokt/b2/9mrQSDegt0dJrg2ArPjMTNKBFGGcWW8FBAI3n7zEQcwlFr3kZiF5ZfXeXFCc9Pjkr2bFZ2bh2bsvNUJeV4r24jluNFe1tE+3lO7Nv/7q76fB1ikeL8AQkyfFE2/K9X6Zw3HzlmsFwQDv5WN6HAMNX8K+UUsm+nt//WVyQmkaTpxk54KMdJz4pQ8s1RNlVjFf2Xw1HCg4UF+bhkMsWZ/ApXFv7nrB71Z0WozYAPIoe5ox5phlMnPBAaOleqLk3xsNYun6hw1Lk66yNHosKusWVZNPFrckJLqlSD75C9nMZ+bEs++83Iyxf+NAvzTDgQ4mWkvzLEvg3tz73Jc4EETAeiev4n0Ph2PaevotWfGZ+fG1bX8SQqvT2Y/BfsjdSkXA4vvfL9bS/9u5v0fKAJBiHbExhELHra0e6YxKB7XMGBFCq+p2gopBe68igOItWxd7srlY0ceqXxrVRJoMcLlr7aRyh6bMAjj9tovgcMbG1f390mA0j8eci2BRov+3F7wYjDJXfx4lC0p4wuc/vMjFZY5anrnn9SA66CTF1/a+UoXUXGThLFz0PzrvxajbdjR1IZDCZBuBJ/zT9YtZViZz5q5Lu1Y+0H6I6aS2p35At2xeeN+7hYteita9N2AUEIK827UiLPhhM5mGA2H62HJtDI/0FB+HZXPh28UFiv5H5/0OKMlp6uUagBMP/ASonvCp7MpnloAX3rZj0lvr9j2JUWO1f+8hiLzp5AWG7Rfydrn1tO2PfvTUmokSMZWs/uR54o0f23vSycfec8fClpLJzMq9j73lSfefccuWa5opTNHQBrIV2qffdtF8H3Ahln79sdM/+9kkQ19uECH5A9uesz4rPrPUPOn+M75zwqfjTMPGvzd5K7TLaiEVp/MW/b0X/Nd2u3rCk/ZK3kTlAZnxwON/MYflM0sOwQce9R2mDJcULwE43Z1yr760ed5NIOctekLFRBXLXZqIDa2g8YTP/MV8Hy2TmQvP2nMFiUCRomr/XijdF2Bn5yf6f3vRhaQCHVQc8AoIpg47ZE4ryywjRtBLNXaWBBRIEjedPD9jPw+l3nvhhQgA3Ix1tyaR/OlkWQb/hU99ZH4vIpOZD8+44wpTub7cG4esRv+eEAw03Xzmu+b+UPMQvQkeYMFSpn/dnW9dNxwoFnsynMkckQnvTNlaA1XvaEGYg5PCfLK85nrp/RdeWAmIpSyw2NXDPUYrwy988i8X8BoymfnytS3XiM7Y6LqZIw9WVLfbmuP8trlaegGBYBOxIUAVdEJZ8ZkV45m7LyPB1DIv+feSd7utwuZaSjt390aqi0RIAC7ISaOO9IuZzFJCsqrcm5g9AWCy6PQ3gD88cxL9ff/5PwFqIjZx/2pOAI/9u48vdPGZzEJ4xs7LJXdUdSAnDbcJ9K9unVMYZ86WvtdfWyQcLnMqH0ZlhoCgAIsRc0vCrw+O5sCRVXv/f3mRZEiteJr+spDw+L/9m8UtPpNZIF/b8k4q9s5D6oCZKmvxzF1XHP5352LpSTop1ftXAH3TRDKZIRBH2KSYfcr+0owxrYfiCKL/99+7ABRjbVQvb95BPO5vspnPDI1n7LkSQD17PGWhxSF+Nx3Jsz+SpRcYJPYm59RTFXLQJjN0SDQtghE1WdHsSEW0hxP9D37nPId6k1/TvkEEHvfx/7tE685kFsgz91xRqWsa0H3LK8C/vOWPDvOLhxN9QZuKp1Gs674JVcXKzxnPZGbF4Xt9X5xHW5+ZskLXdLiC1cOJ3og1oWhsfBwKJytzn77MiNBRZ9Im1XQ5FgAVavOwYZZD/uzfX3peHBeFGKkEIXoJEI/7q79b2qVnMgvm61veZgJoDoCsO6I5gDN2v2HWXzmMzY4JbL15n4AsKO9gMyOFCUJ/TyikoTeHFuohRU+kSGVzChsMNDzu/2QznxkhTt/zRgBg6Bv2xMNnhM0u+p++4jzOzKmExyPfTGbUoEGeuqDVU3BIfWPr22e9fHbRS2IALMZtUvqmoMd87BPLufZMZiH88u4rCQlep+GAKW1mdiN9SPdGcfda55kxhykzI41Mvf0nAR46xjjLDx56xbmED3SohGCedZ8ZWXoJlnXXy5iZc9umWWpnZxG9g4EDGQc0gPq5j31yGVedySyC0/a8aWYvYbi5ibOkJMz+EVAx1LllaNrbZDIjTgB7h0qAh3LWEPtM0T/w2ucpAOhlmIGKczIzmVHGQJfXZR9A6imMr29+50FXzsChws3SD+NUTFDH3/DpZV91JrMITtn9RkKSN/0uCQnGg5IuZ3NvSgq9DLN4Frv8a85klgCrq8WVOtlXB6fhDIh+7+tfYKBZ7xQ2xTwzmXEgVk5FSx97hJiB5DdPGehkPyB6uReteE96rxgB4vgPfWblFp7JLJRTdr8FaCw9SLjAoq2q23/ZoOglL8v+rvOezqcymbFhcEaV1N2PQbd+huhdgzWBRs/ufGaMSB4O6j5QkkBooPlZT/R62TmFi2RTJxWz6Y9/f/ZtMmPDKbvfEl2Tpv+ZQa3Kv3fijuaanugPtHjMdCX2MitjlD+TGTOaaYRIPULWH+hMtYvm532WPuCna20w3wY5WJkZPyTzXj6BpAfXTVZ9afE90XcLtAv0YvMGVlnxmfGDkqvq7WUBQZ2iJ/XeVyQqd/Q6OknBc0/izNghiGZ9+Wczz2D7v1Ocq9NkJIN41HWfX6mlZjJLwynf+oPo1QB1PoIPRN6T6B+54myamuwDsG5TnMmMIVJsfKM+e6+dJ6cOUEn0LoYgWi9CX4+JzWTGDxPKNBuqtvdG1WdOjXujStZ7ZxhobLXbw1hwJrN4vAWkusGYW9AXlUmiF0AOTAA/9vjjQ3G43miZzMhiAFDGuA0ASH159rXoaze/V221f++DE2vXrvhqM5klwRX7ywN1x79eawQC2PvGs1EBfcdYseP9sdd8cSjrzWQWz67Nf2hMqWMCYudtg7bs+QMDAAkBcRdLKn4YHKFJVCYz2lBKc44hqxUfozQx1V50V198x1ghdzPLjDWSxU42qVo27laF2qdX1evrREGwkC19Zqwh1J+JAKgpli3izw2pn5kgA+QVLYduMmMOjUC0433BGxgAY2rR2swPJLXu7V8Y3mIzmcWy+c4dBKg+e1/HKA0AUm/j/hPZTGYVIA1kIsRuTjCkqYS9/OPszGdWBxyol422vd7I9kLzTQVJFn5mNSAqNneNIzL7TmRTTKe2/7I8DTyzGojGnHWFeNO2zLRjk1lpcf4Cmxh+tvSZ1QA9WfrU0xXas2mHdTA52X5E6s3NrJR73WRWCbJeL5BYKlIYTOA+HNdXO6IQchOEzGqArNtS1rqfLCDCKrVaKNWXX0nA8kY2M/4wzgeESEbddwlCZnKvrKkdAcTs0GdWBZQIIxinr0nybuWSSTA6+ubFeu7NnVkVEDRVvax60siYQyxHbxcLKEABs0zqyWTGCxNTgXhdRxKPpAyQoTeLEESbZbBDjiPMZMYFlmyphbowMPUCAYxMlbNgfSLbXm8hp1hmxh5W0IFuPXwNybILBgIhYMDDAbLmM6sG9eecgYSJFBz9E6Zaex3VYR8mkxkDFMA1LZCSYpaxGUgYAI/paPXA2E63cJXDXnAms1iqQl1260x6xXkNAgohtUpoMhGsqjwXyGbGH6cUcyglAEoSl9HgNAAkQZKsguU4fWZVIGOQEGumSLpE0kxmhcfSqXhr9JxbnFkNEI2lj7eTrWCkBXQnOgVSEa1IurLiM6sBJbddzXxZCQItuIAHaT1Lr1w3lVkVEKig2reBhKkSEgyY6oS1SjtckiR7deOZzPgiIMCaXSyIwKp0GHfc6SxgJoCkCDLnIGRWA00drFJ2MUhsvnNHbAGSIjeKt8ilU5nVQezph5hdbIbeBKpG4alra/PDTGbMUS+veLDDWewIEnex9blsVn1mNdB0365vmwauTOlm6QpmS59ZFbCx9OhNJambPVF1YSxjqrGwb8cvD2+xmcxi2bNpR0qsSVWBPfcl+fTNOa0AgFVZWZFjOJkxJqAqvYj5ldGTkVLiQcq6MaaGCfGUqpgsslufGW+oCXZQ5w4DMlNMK659+gCgPy+HDNnSZ8YYo1fWmyMLMLDV61oMA6pmF0sRwSw3fMqMNTE8n1RMAqqq0hgQRT955U3NyRSiZy8EL7Vj0zBXncksFG3asTY1PKi7FoOCTrpjB/qHJ1tdQigARKuztyrWDG3VmcwieADVCSqaSnCkBmb9k0gAkGUd1In2vrvmeDHXh2fGkmnqO+g2FhzqnVKh39Knrh+1vXdXVbRXfrmZzOLZB0fonzaFCr1AfRK9GeTpZCr9rMglg5mxpefVKA7dMflMSz9xxZdIypJvA1KI0ftMZjxh3YS77nvz9N1/GH9i/RcZTACMIAyEMPW2s4ex3kxm4dz59KsERz0XubH3zQU90RMEHIP5CLlyMDN2mJlXFZuGrQAHJy70iZ71gVR9SkVTPqLKjCFstYqm5ptAkFhNNj8eEH2rWNOcT4Fwhqz5zNhBY5XGJNezGKYeR/Xi7z3RB2t1vSP2Wfp6C5DJjBdmElR75/T2AyrX9X7afMVLbvR0aIsUtyFITF99zsouOJNZON/e8hagOY2Kg9ZE62y8+5LmmoFUSoMRbHrgpIrxvJXNjA9s/olzpqBe2lnNoOhpbWvXlbLRwcnuTWa8kMUacNaJlq2ZTvqA6ANDR90UtbE0hFPg1NW/tqLLzmQWxLe3vAlInSub0LyqmUNGBkTPS250wuWsOyPUfk52cTLjQHMOJSG1sXQIG2//o/6rZpZHiVBRxPZ+qru6ruCqM5lFINCaZq0gGHyWTOGDagLNrC6g7emeyB5OZsRJvo0jzdshIDncNFPkM79fe/HnEBPU+j0czdz/ZjIjR92duK4dEWmUNuz5nzMunLX6m6D16372qzKZ0UI0qyvBAZKVz5pHM5ucScrZ9H4CQMAw9Z7s4WRGlG9veROBWBQCpDi9B1Cz7EhnEf3kxZ9Nx1R9p1TZvcmMOIrZ86irpYwiN9z51oOvnN1xIeB9OcZ5RkNm9Km7VSZL3dUh0+JnF71IOYRezzPAAGYPJzOCJN+m6bkNADK4H8I/mV30E6/5XDOLBz1Ln9PrMyMJpTRVKilegEmbdv2vWS8/dFwmdS/u9biMF0+9Oxv7zAhx1+arKDDmEqciKIbD5owdUvQEvN7AJntvMcE+xy8zowTBJHjWR1Jy6jBDFg6p4PZrP1fBVE8oibchFCV1/3vPWY7FZzLzZc+m17oqGOtpanEvq0rYsHuWuE3kcGZb4JQC+npcOvEIq8l8WJUZDQprd30KKbMyWnpOyQ6fLnY4+ZawNqum72t8oOPYytN5MiMCaWta61L2gJKlb8HLw0r0CPKd+tNzIVpA6g9V745BTLzm80u19ExmAdx98hsEDmhYrCACT9v1tsP84pEcFZEmV52Q39cRM5MZLk034nomODA3bR7ZUZm+7lwzuBOqH9glwpVSMjOZlefubW+SXHWAMR4huUTwqYc18ziypQfM4CJipDJ2STC6sl+fGSbqi56rybfpm5t5GI4s+tarPltP6UkeDuIEB3LquhcsfNWZzEK5a/NVkFxed3Ris9182q63H/HX5x58VDN5M3YGYTDNlreZySw7JnhvoJQgzicpck6in9j+D6YCsadx3cNeLkqd9z53QavOZBbId7ZdJQCFmtwyAnK5iqfOwcxj7paeCq3O2kbxAILB3GX5oCqzwgjGOvsxxW2my2N8zj2a5irZULWqyY5ZPafEKEBFAWD6uucvYOGZzAK4a9tVdTemuqUTQONE+0Dlc50WNWdLf/HH2Uax/pimiU5s8AqjHSi048KFvYZMZu7s2bTDPSQPO50dCcDkmm5RlJvv3DHHx5mHc2IT7XL/VPqm1wcKxYNrqmM681l8JrMQitDplpOE4nyRqHsHOtNWtHzujzO/aPv0B14AgGby1PkbACqwa5osJ7Z/dl6PlsnMnbtOfpMLwapebhkpuYsgn3bHnLawkfltQydedSMIedVXMw4YNFnmoqrMMuNx+xqnBcYOflVFSPNSPOYregCQHkEpb3rYE4yjezD9/ryjzSwL3z75csDJspkLG89fPZSaf2PteYt+4lWf2afubv8J0Ju0HN0ce/JP8mlVZskRtP6hbQ6PX8dpCyAfDA+7Vf9hzzvm+4ALibLfr32/GB4tCxjsZF/8+s7qtg0LeMBM5jD89PGf+4XvvyRYnPtHSfF2TbVmyqYX8IALdMSnr78AVezo7f3Zl/bEn+K+R7de8ZmFPWwmM4O7TnnDmr1PmVp3T/y2acghUNJT73jnAh5z4bvP6Q+en/pIxYqVuIu2asptr4cnXPSpBT9yJhO59bTta32yhTbizIRk46EQKN94+7wdm8gikggUU9B63f8ESWGvh7WcR9A0kzkUE97eb1OUp2n3iP32QHctoivHouKM3Q+f74IAS5Y+zWjuCG1D+5X/sJgHzxzl3LXtypJloVDXv9a3LpIbdi7EsYksNrg+/aHzWSf/SLH/gtI9RPsVWfeZhXDPKZdLrAdjpjsFwB3kxjuuXsyDLzZHMg4gZEBvJqHF0zLQp3TdaYt8/MxRyK2nbe+gJGUp1wBA0z2bWHRcfLGib//+39NQSjSkmYQASHcW/lDFdUd8hExmBpNqP2LTAgRH7UgQgjloG3dds8jHX5rcgb0f/Y2OaX23JXnM6I+pzkRHbLdf+ekleZbM0cDd2y4vWbVYyJs5gaTkEyUr23DrtYt/iqUpAemYJkqr4P0zaEWIbZf2vf83luRZMque72y7TFChkCalId06hK4pLE1UcGlEf/zv3RhEgg6wnlcVf1QKIaeiZeZGTJBXPaie9WBYgHBu/Np7lupZloyp6y+wtO9Q6scgUakbycSrspOTORx3bbsMMfydxKs6UTQAAAv3SURBVE8AjBWw5Mbb37VUT7TERri84YWB6lSxrCpV7NYbEWTnPnMo7j71ckgSzOqTVwjghKMCTlxcjHIGS1zWHahKDEXfRE4jLL1zOx8+f2mfLrM6uOfUy2IZqjW2MsUCURKzzPxeHEsser7072HmnuZdkQPql2v6A1n3mQHuOeXS6AynSu+oFlCSSzKcsKRmHksuegDFSz4R+2myb5pDzEuDCGr6QzmYk0ncc8olzdfqqw4RPB5MPeWbS6x4LIfoAUy8/JMxemM2OJeTiu2opj+Y7X0G95x2SR2X7GXXpIpvAdTGnYs9h5qV5WrV1H7ZJxn7AA56OEgNxdX9UNb9Uc09p12SIjRkbBqJWvdBIrDh9iU4h5qVZexP1nrpJxistbZdW/omfi8jK9f+67Luj1J6iq8rXKM7L+jY6W5wP2nncikeyyp6AKEVup1uZerLuQeNDrmznuiTOfroKT5pIFr6omxNFa2JannrMZb9sPTAR19oImGQS72ce7lccLByHpvLrI4avn3adkNBGRHqYSIxxwYMhgpWhRN3LbAkao4se/vVNS/5FGGSe9+ONtp7M1TOwjT1oQuWexmZUeC7p18a0HKUpDU9h1N3PqNcCFhuxWPFOjRN3XABY4OSXqVjyscUA1UZvPXKG1dmMZmhcPfpryNIGOBx9qXqAWaCxRj3SbctS7hmBiuXC9a5/oViHNwWywB6+TkmF2hk8Yqcp7A6+e4Zr5NLTktufJ1JFtUPCNzwzZVQPFa4F9/URy6IL9igGf59IOLQzpyfs/r4/pkXx56rlOQgKQdiXwOAIsGnfHMZwzUzWOms36kbXhSjU8ZB3Ut1MSQnXvn3K7yqzPLxvTNeDZC0VEIdvRpFSx//87nhtqXJGZ4jKz1HZPJln0hbWWJG/L4ZAzr9wZynsEr4wVmvpgEQ4EjujEiAMsTDS62w4jGsVsOdj1wghypYMdO/R9rdMPs54873z9oeu9TI0b9zlcMDrKK5nXjrSiseQ+yvPfXBCxRYBptQ1d8zp/9rCO3tuYnI+PG9c17FZNyT6EHKQdBBp8MJcsMt7xvK8oY2Jm3ylZ8sg7V9uuUPYzB+rzi7UwDR+eB5w1phZmH84JztjAm1TK0MosoYfZuJ/aTDNCzFY+iTFHT9ORUmHAGMnRQ40E8BoDpUJ2gfL7ptuEvNHJFbT9t+TFutgFZBuRMGCbD6ZIaCg46ifPIXbhjiOkeiZrtzw4vi/kapBXnj34NCy39S2qNkk7lf2ijzo+f+/v4pPrg/PHa9A81/I3oj7AWAJ37lz4a4yMhIiB711hZAykLq8+9dbmnwSu6POaLc+2svJ2HGqkxRuDoeL8Dco8544k3XDXWZiVERPYDp6y9Ifzh3qhe/j63IQXQcJbhflvuAjw4/euF2LytUUhnzZxBPW9OZqwAEuSQ8+ab3D3mtNSM073vi5Z80I+TtNDqur3+OUUKb2C9bb1X3Q3m41Ujww+e/xLtdK4LkDPU0qFQR4iIsFKBoHB3FY6RED6B4yScCVNXufa9fGlIu/s8FnzTH435W3rohz7caIgIePunkiQd+AlQ+Nc2mKVPcm8WUGkByM/ulL46EV9MwQu5NP1PXXxArJQOsP56T4gDu7e03lv+4zb/3+IntedTPSnPv8393zU/+9fidX/7RuS+VYk4NYjw+Zo8BkhPiL/7zh4e92FkYUdEDOHD9+RU1Xfj6MsgH+t8DgAu9wivluc0rw49f+FLJ5XIXaejPEE4ZNTzQ6rTKEGQn/OMNw17v7Iyu6AE88OcvaDuDsyBVIk22IuTJmpCQnNOFTRdhX5s7Pj7sJa9a9lx44ZrSisraasvLGJ8BOJhfIAecKEO18ca/GPaSD8lIiz7S+cj5qkDAAZth71PiHto/Xlced8DXlBMXZW9n6fnxBb8zbb6vVT1mqoDYy5QEoKR4KsTuTCd8/qNDXu6RGAPRA+h8+PzoyljU+WBOMjDwHqB7++LPD3G1q4n7f/NCByVCAemvnSKSMRLvXjdoEgl74mevH/aSj8x4iD7S/fD5MeJLs4H5tb1bsizdTCTJyYty/eHCue83fzuWOBhUIrA27T0PPvk2Fk8Vn3jjx4a63nkwTqIHMP2B80CCgBm9Avr8eySPv3LQSHe4DGhd/LkhL3rcuO+3fit6L3RzE52oz1YlMd7KlNqRkeATPj02isfYiT4yff0FD1X7/7X62ZbW46me7pFS80HIHSHGzSASE6/JDs+Rue/C/9jsTV0wWGPX+0M0In70w/WPPm5qzWT5hE//5bBXPW/GUvQAbr3utMfaurVoTaJoW2ii+ECMZiKW3MpFE4Su3KEp+GMv/sJwVz6C3H/hhaCjrucBrInJxO7BjY13VyUrp0OnE/Y+PHH6bSN0zjp3xlX0kX0feH5ItYeIu9yBqE6fx0/oQXWP8RBEwCcv+achLnt0uO+3fzN2GqMXDKXHmo+DIjPx45OVO8xFgSd88n8PeemLYLxFH5n+wAusVRRrJzsPPQL0/Pv4NZo6LI9vipI0AkYWrzt6fZ6fvvhFLsjhFRFgtb5n1PVFSy9aSYUKVuHxnxj7w5DVIHoA+usLq6kOughT7W57P+B1av7BER7IVZCVJKVOuROX/OMwV7+C/L8Xnxc/FwkzsKqTIg+KyTT2ngQqIZ46nfDxsVc8Vo3oI3rvhVXoipWzTC8tpnJ7z973MvVJVR5HlCIdt3DistXp9jzwsvOAtM+HQ7BYkDmgde+z8bHmI3UgI4HHrgq5R1aV6Bum4+RauZmqyozq93aix99/tkU5mr47ArlK1P/AK2IONiHCmQbcqJfvjsHMGcVu2XLJIAPwuL/+2yGuf5lYnaKPdD9wrseYpYNBTdbarJ0X4q27LNp+pVTZiSu/OOzXMW8e2P782EuiseUEoRiHaU6U1O/JxBglKVWMtWuP/atPDPt1LBerWfSRqfc9P350dxQmWUVfFRiw9/373dR7RylWBzAOrAYEcfKNXxriazkUD1303Hq4QYy0wGUxZQO1a57KD/rDMsnG08EDVTlBM5DEz//5J4f1QlaG1S/6yIPvO6+AEyriBK9a4bPa+4Hc/dhcVlXs1YD6mlB26FUoD3DHnSv8WrTjwun9+6uy6nY6jaPCyhSI3haml+Mez1PZd54KWMwNlhxupeBCKf+lvzwqGmwdLaJv6LzveYptFGOPfMk1m+4PivQjtbBIXRhNbB14oNteX1kAoMoheenrdnxjyde876pzYlNzuCSG0F67/riHH3hAdVJ7/Yk0EFkf8Np7mTOMXbG9qnex0M9/5KjQesNRJ/qG6T99XnJgHKJBJQDG7hV9mTwzcnvi1801kJNWuRtVTpWhCHHCAJKPFK9E3cNHAM1lLAwBKLyqKq+qeiS8164W4zurN4+JtACvXIEu9XoNYEZkfbY4DAx0B2BBVSVL/+nkYz50dGm94egVfcPUe8+FHJAkWWBZGi214Jkld3+22H+zN0g/dYDwOAk1TkeVUS4LlXsI7U6J9noA6FQddSrQ0rRRVEKIW+iUNpSCLb1IIhpfvNdMZpY4TNq/onKiEEtjBQAGPepDR3uVWRZ9j/3vfR7cKQShxVbHO2KSz4xum8DMve+R9gZ9v8uZlrjxvHFwLVL0wnsZjgedmB5k72P+I0ErirLr6f1iOP59Ods0kUU/C3r3CypVDne5FWodowM/NWNzhjW7x9/cM9hxf8aVqmtJU+PqQc97ZsZL/LZ3cdMtDD17H8MvAeiUeMx+f2QilEbSSNJs/XtyUcFMsuiPgK4/p3uAquSdnjxT1j4hyQA/RNflwb1B7NTZfFbMsOgH2/sYaUGsPSUt3rqLsdWGLNCripIBkLNVihXWdMUbvjDEv9jok0U/bzrvPLt2cFI/ccasW4/JWb1clpTb0xf7j79WG/7abB+c9xJTYiCISjH1OHXaUKn5NvYEOuZdo3h0MMpk0S+W6T8+O4kd6Sb6IlH25mW72g8cN90uvTSTO2QQYVVVGYJDBrrMgndRrMODU91jvCoANF5N741Bglz/tqzyRZFFv7xoxyZgsjJWaDldXrvqilY89bAm4bTALqE2plb+wOuo4v8D8QnC8SYYbYsAAAAASUVORK5CYII="
//           height="252"
//           width="252"
//           id="prefix__o"
//         />
//         <image
//           xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAAAAADEa8dEAAAAAmJLR0QA/4ePzL8AAAEiSURBVDiNlZQxboNAEEVfIBFSsLs0llwhUSBZOQFSDpEDRXKRO1CkwOdI4VtwB9dAsRH7UwSIQRlMXrXSPGZWw+zANfvz4edwOO+xKOSOEURHp8JyEiepyvNKkksM6SRJ8l6SVM6jUbrbBmSdrugygu0ujUYplaSm1oS6kaQUuAegBnicpY/HUPAr/U0N3AEQdKYU+iGTby2n9WO5TJakrD8kZSeTrkyAfeFsRZJcAedlRZLgcCOR5EIuDy92lwB4B6JqOVEVAeR+yfF536fb3C4XwtvrcpKndS1Y1cyQz81zuFju6wMgOS394NPwbLLacuqMYTJp5gM+0Mb8a3xj+9oxg7Sxpc1UaptpuGmn36965j2lJHth9KxaPauWmLUOvwG9Eu7wTseLHAAAAABJRU5ErkJggg=="
//           height="36"
//           width="36"
//           id="prefix__b"
//         />
//         <image
//           xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAACDCAAAAACL9ve6AAAAAmJLR0QA/4ePzL8AAATdSURBVHic7Zy/SyNpGMe/N6QQbCRviB42SgoFF05zMTp6t6VFtFHbtMpWQRaCpfkDbFLYCBJB2O2ElYSFLf0xWWajcat44IEIt3fBTApRECyeKxJ/j5OZzDvzvsV+q8nM804+eefNO/O+7/cZQLx+cVe8I8iYYdRvBDD0TERZkLEg62x8vjbqhlE3jrT//GH4Lab+MQAYhlEzDMMwDMYYYyzEGAP+2i+WvnvLMBX7Xf0VNe3g4MDs8OTk5EQI/xYPS1+ccthUOKURnWy+G7GMGnm3eUKkpcIeEKjZKunpIVuxQ2mdqlmVL0AgmaerXMJBiUTuivLJAD+CTIX0dJ/DUn1pnSoZThTTGjmqggclcqRNcyAIZ92cZ1qjrOvWmazcuqrPQOa2knRFMLhFebfNW83T1mD7xVPVasolgdvTrLn6AY80uEVr7ZXcoWUuBACwTDttlOop0wI3BGCByj1Oy0Rrl7McEYDZy1rUWYkZOotwRQAiZzTjJH6RypwJAKBMi/aDM7TtAQKwTRm7ofP2Qx1qhebtBUZp3SMEYJ1sNcx+KniGABSov3VQ1/mxhwjA8XlXy5jChRdPgg8KX7Ss5g2KeYoAxGjDOmCV5jxGAOZo1epwipY8RwCWyOJWPljd8gEB2Kq+/kxgdYynLH5r0qqOuCpFrzxjhit5nxCAfMW8B8jech6dWUi9zZrtnvbsTmWmDJkMWgKaxm902FqmX2cK5qGmaeX5rkAl5ysCkKs8r4gktTesbV+JF//PvO4zAqA/6wpUSvvOkKanfUH2qs93hr6rJ31EuOp3iwSAXPVxZ5nyvUUCQOLJ/Unzv0UCgK49bE8JaJEAkKYpAFAAII7PQhg+I36/vXMqBAE43QHu6uGbIIZv8TuG0W5hDN2jTQYVprPwPugAd13lB0MQAmB8QKMe4iVhDKV4g6E3sieMYS/SCyiAil1hDLtQAQUYFsowDCgAE9ckAYMBChAUyhCUph5YTSBD7ee1aDAwQEFHp1CGzg4oCEIoA4JQwAQzMEkYDDCBDAyGJAx1wQx1KLi5FspwfQOl0U2IYzAABagLZagDCmCEBDKEGvXw81rUpamHI0wKQ5jEEaAAmlCG5jTIySdhDJ9O0Bjr7U8IY5jYbzIUQ9b2M+80Eio2GUoYE8Qwhvvh9o9NQQybP4DmXFBxXBDDePGe4XDAnh+Qt4YGDu8ZShAxTQsk8Gj2RYJ5Winmq2WYt5dh/UKKdRwZ1rOkWNeTYX1TwDpv5sU+Gda7ZVj3l8L/IIUPRAY/jBS+ICn8UUhxtDO/rmXra77G1dBsroVWhu8d4mtpfqnZ1nbv8iVvU/NTRS5bW5Z7ameeMpzVbPjNo554q+9UtmfqnfHIXQ0A23a95osv7VOclLHvNM945LBed3JrnvfEY12w6zJvKErHvC3O4WN7zfFB/ecXfE3OsYtzGw7zp+oqcLU5z1Ghtb/8pTY4Gp2XWhm7X9Mqx7wkS1u3lSTIz5IiTw1AsnK74ipfb8Vtvh6kyFuEDPmbAAIrwvNYIUM+L4C7vOY3tmLfeJHXDKCZ33368b315PbY+4+nDvO7Hea5x+PxbtRLe7umdqa3b/+MBVHVdd1RnrvzfP9RdTweeS3f/2/9a9GxCbG99x70qsNm7z04Lv7TztlkeP+DDPofFPcIKengbccAAAAASUVORK5CYII="
//           height="131"
//           width="131"
//           id="prefix__c"
//         />
//         <image
//           xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAACDCAAAAACL9ve6AAAAAmJLR0QA/4ePzL8AAATdSURBVHic7Zy/SyNpGMe/N6QQbCRviB42SgoFF05zMTp6t6VFtFHbtMpWQRaCpfkDbFLYCBJB2O2ElYSFLf0xWWajcat44IEIt3fBTApRECyeKxJ/j5OZzDvzvsV+q8nM804+eefNO/O+7/cZQLx+cVe8I8iYYdRvBDD0TERZkLEg62x8vjbqhlE3jrT//GH4Lab+MQAYhlEzDMMwDMYYYyzEGAP+2i+WvnvLMBX7Xf0VNe3g4MDs8OTk5EQI/xYPS1+ccthUOKURnWy+G7GMGnm3eUKkpcIeEKjZKunpIVuxQ2mdqlmVL0AgmaerXMJBiUTuivLJAD+CTIX0dJ/DUn1pnSoZThTTGjmqggclcqRNcyAIZ92cZ1qjrOvWmazcuqrPQOa2knRFMLhFebfNW83T1mD7xVPVasolgdvTrLn6AY80uEVr7ZXcoWUuBACwTDttlOop0wI3BGCByj1Oy0Rrl7McEYDZy1rUWYkZOotwRQAiZzTjJH6RypwJAKBMi/aDM7TtAQKwTRm7ofP2Qx1qhebtBUZp3SMEYJ1sNcx+KniGABSov3VQ1/mxhwjA8XlXy5jChRdPgg8KX7Ss5g2KeYoAxGjDOmCV5jxGAOZo1epwipY8RwCWyOJWPljd8gEB2Kq+/kxgdYynLH5r0qqOuCpFrzxjhit5nxCAfMW8B8jech6dWUi9zZrtnvbsTmWmDJkMWgKaxm902FqmX2cK5qGmaeX5rkAl5ysCkKs8r4gktTesbV+JF//PvO4zAqA/6wpUSvvOkKanfUH2qs93hr6rJ31EuOp3iwSAXPVxZ5nyvUUCQOLJ/Unzv0UCgK49bE8JaJEAkKYpAFAAII7PQhg+I36/vXMqBAE43QHu6uGbIIZv8TuG0W5hDN2jTQYVprPwPugAd13lB0MQAmB8QKMe4iVhDKV4g6E3sieMYS/SCyiAil1hDLtQAQUYFsowDCgAE9ckAYMBChAUyhCUph5YTSBD7ee1aDAwQEFHp1CGzg4oCEIoA4JQwAQzMEkYDDCBDAyGJAx1wQx1KLi5FspwfQOl0U2IYzAABagLZagDCmCEBDKEGvXw81rUpamHI0wKQ5jEEaAAmlCG5jTIySdhDJ9O0Bjr7U8IY5jYbzIUQ9b2M+80Eio2GUoYE8Qwhvvh9o9NQQybP4DmXFBxXBDDePGe4XDAnh+Qt4YGDu8ZShAxTQsk8Gj2RYJ5Winmq2WYt5dh/UKKdRwZ1rOkWNeTYX1TwDpv5sU+Gda7ZVj3l8L/IIUPRAY/jBS+ICn8UUhxtDO/rmXra77G1dBsroVWhu8d4mtpfqnZ1nbv8iVvU/NTRS5bW5Z7ameeMpzVbPjNo554q+9UtmfqnfHIXQ0A23a95osv7VOclLHvNM945LBed3JrnvfEY12w6zJvKErHvC3O4WN7zfFB/ecXfE3OsYtzGw7zp+oqcLU5z1Ghtb/8pTY4Gp2XWhm7X9Mqx7wkS1u3lSTIz5IiTw1AsnK74ipfb8Vtvh6kyFuEDPmbAAIrwvNYIUM+L4C7vOY3tmLfeJHXDKCZ33368b315PbY+4+nDvO7Hea5x+PxbtRLe7umdqa3b/+MBVHVdd1RnrvzfP9RdTweeS3f/2/9a9GxCbG99x70qsNm7z04Lv7TztlkeP+DDPofFPcIKengbccAAAAASUVORK5CYII="
//           height="131"
//           width="131"
//           id="prefix__d"
//         />
//         <image
//           xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAACDCAAAAACL9ve6AAAAAmJLR0QA/4ePzL8AAATdSURBVHic7Zy/SyNpGMe/N6QQbCRviB42SgoFF05zMTp6t6VFtFHbtMpWQRaCpfkDbFLYCBJB2O2ElYSFLf0xWWajcat44IEIt3fBTApRECyeKxJ/j5OZzDvzvsV+q8nM804+eefNO/O+7/cZQLx+cVe8I8iYYdRvBDD0TERZkLEg62x8vjbqhlE3jrT//GH4Lab+MQAYhlEzDMMwDMYYYyzEGAP+2i+WvnvLMBX7Xf0VNe3g4MDs8OTk5EQI/xYPS1+ccthUOKURnWy+G7GMGnm3eUKkpcIeEKjZKunpIVuxQ2mdqlmVL0AgmaerXMJBiUTuivLJAD+CTIX0dJ/DUn1pnSoZThTTGjmqggclcqRNcyAIZ92cZ1qjrOvWmazcuqrPQOa2knRFMLhFebfNW83T1mD7xVPVasolgdvTrLn6AY80uEVr7ZXcoWUuBACwTDttlOop0wI3BGCByj1Oy0Rrl7McEYDZy1rUWYkZOotwRQAiZzTjJH6RypwJAKBMi/aDM7TtAQKwTRm7ofP2Qx1qhebtBUZp3SMEYJ1sNcx+KniGABSov3VQ1/mxhwjA8XlXy5jChRdPgg8KX7Ss5g2KeYoAxGjDOmCV5jxGAOZo1epwipY8RwCWyOJWPljd8gEB2Kq+/kxgdYynLH5r0qqOuCpFrzxjhit5nxCAfMW8B8jech6dWUi9zZrtnvbsTmWmDJkMWgKaxm902FqmX2cK5qGmaeX5rkAl5ysCkKs8r4gktTesbV+JF//PvO4zAqA/6wpUSvvOkKanfUH2qs93hr6rJ31EuOp3iwSAXPVxZ5nyvUUCQOLJ/Unzv0UCgK49bE8JaJEAkKYpAFAAII7PQhg+I36/vXMqBAE43QHu6uGbIIZv8TuG0W5hDN2jTQYVprPwPugAd13lB0MQAmB8QKMe4iVhDKV4g6E3sieMYS/SCyiAil1hDLtQAQUYFsowDCgAE9ckAYMBChAUyhCUph5YTSBD7ee1aDAwQEFHp1CGzg4oCEIoA4JQwAQzMEkYDDCBDAyGJAx1wQx1KLi5FspwfQOl0U2IYzAABagLZagDCmCEBDKEGvXw81rUpamHI0wKQ5jEEaAAmlCG5jTIySdhDJ9O0Bjr7U8IY5jYbzIUQ9b2M+80Eio2GUoYE8Qwhvvh9o9NQQybP4DmXFBxXBDDePGe4XDAnh+Qt4YGDu8ZShAxTQsk8Gj2RYJ5Winmq2WYt5dh/UKKdRwZ1rOkWNeTYX1TwDpv5sU+Gda7ZVj3l8L/IIUPRAY/jBS+ICn8UUhxtDO/rmXra77G1dBsroVWhu8d4mtpfqnZ1nbv8iVvU/NTRS5bW5Z7ameeMpzVbPjNo554q+9UtmfqnfHIXQ0A23a95osv7VOclLHvNM945LBed3JrnvfEY12w6zJvKErHvC3O4WN7zfFB/ecXfE3OsYtzGw7zp+oqcLU5z1Ghtb/8pTY4Gp2XWhm7X9Mqx7wkS1u3lSTIz5IiTw1AsnK74ipfb8Vtvh6kyFuEDPmbAAIrwvNYIUM+L4C7vOY3tmLfeJHXDKCZ33368b315PbY+4+nDvO7Hea5x+PxbtRLe7umdqa3b/+MBVHVdd1RnrvzfP9RdTweeS3f/2/9a9GxCbG99x70qsNm7z04Lv7TztlkeP+DDPofFPcIKengbccAAAAASUVORK5CYII="
//           height="131"
//           width="131"
//           id="prefix__e"
//         />
//         <image
//           xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAACDCAAAAACL9ve6AAAAAmJLR0QA/4ePzL8AAATdSURBVHic7Zy/SyNpGMe/N6QQbCRviB42SgoFF05zMTp6t6VFtFHbtMpWQRaCpfkDbFLYCBJB2O2ElYSFLf0xWWajcat44IEIt3fBTApRECyeKxJ/j5OZzDvzvsV+q8nM804+eefNO/O+7/cZQLx+cVe8I8iYYdRvBDD0TERZkLEg62x8vjbqhlE3jrT//GH4Lab+MQAYhlEzDMMwDMYYYyzEGAP+2i+WvnvLMBX7Xf0VNe3g4MDs8OTk5EQI/xYPS1+ccthUOKURnWy+G7GMGnm3eUKkpcIeEKjZKunpIVuxQ2mdqlmVL0AgmaerXMJBiUTuivLJAD+CTIX0dJ/DUn1pnSoZThTTGjmqggclcqRNcyAIZ92cZ1qjrOvWmazcuqrPQOa2knRFMLhFebfNW83T1mD7xVPVasolgdvTrLn6AY80uEVr7ZXcoWUuBACwTDttlOop0wI3BGCByj1Oy0Rrl7McEYDZy1rUWYkZOotwRQAiZzTjJH6RypwJAKBMi/aDM7TtAQKwTRm7ofP2Qx1qhebtBUZp3SMEYJ1sNcx+KniGABSov3VQ1/mxhwjA8XlXy5jChRdPgg8KX7Ss5g2KeYoAxGjDOmCV5jxGAOZo1epwipY8RwCWyOJWPljd8gEB2Kq+/kxgdYynLH5r0qqOuCpFrzxjhit5nxCAfMW8B8jech6dWUi9zZrtnvbsTmWmDJkMWgKaxm902FqmX2cK5qGmaeX5rkAl5ysCkKs8r4gktTesbV+JF//PvO4zAqA/6wpUSvvOkKanfUH2qs93hr6rJ31EuOp3iwSAXPVxZ5nyvUUCQOLJ/Unzv0UCgK49bE8JaJEAkKYpAFAAII7PQhg+I36/vXMqBAE43QHu6uGbIIZv8TuG0W5hDN2jTQYVprPwPugAd13lB0MQAmB8QKMe4iVhDKV4g6E3sieMYS/SCyiAil1hDLtQAQUYFsowDCgAE9ckAYMBChAUyhCUph5YTSBD7ee1aDAwQEFHp1CGzg4oCEIoA4JQwAQzMEkYDDCBDAyGJAx1wQx1KLi5FspwfQOl0U2IYzAABagLZagDCmCEBDKEGvXw81rUpamHI0wKQ5jEEaAAmlCG5jTIySdhDJ9O0Bjr7U8IY5jYbzIUQ9b2M+80Eio2GUoYE8Qwhvvh9o9NQQybP4DmXFBxXBDDePGe4XDAnh+Qt4YGDu8ZShAxTQsk8Gj2RYJ5Winmq2WYt5dh/UKKdRwZ1rOkWNeTYX1TwDpv5sU+Gda7ZVj3l8L/IIUPRAY/jBS+ICn8UUhxtDO/rmXra77G1dBsroVWhu8d4mtpfqnZ1nbv8iVvU/NTRS5bW5Z7ameeMpzVbPjNo554q+9UtmfqnfHIXQ0A23a95osv7VOclLHvNM945LBed3JrnvfEY12w6zJvKErHvC3O4WN7zfFB/ecXfE3OsYtzGw7zp+oqcLU5z1Ghtb/8pTY4Gp2XWhm7X9Mqx7wkS1u3lSTIz5IiTw1AsnK74ipfb8Vtvh6kyFuEDPmbAAIrwvNYIUM+L4C7vOY3tmLfeJHXDKCZ33368b315PbY+4+nDvO7Hea5x+PxbtRLe7umdqa3b/+MBVHVdd1RnrvzfP9RdTweeS3f/2/9a9GxCbG99x70qsNm7z04Lv7TztlkeP+DDPofFPcIKengbccAAAAASUVORK5CYII="
//           height="131"
//           width="131"
//           id="prefix__f"
//         />
//         <image
//           xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAACDCAAAAACL9ve6AAAAAmJLR0QA/4ePzL8AAATdSURBVHic7Zy/SyNpGMe/N6QQbCRviB42SgoFF05zMTp6t6VFtFHbtMpWQRaCpfkDbFLYCBJB2O2ElYSFLf0xWWajcat44IEIt3fBTApRECyeKxJ/j5OZzDvzvsV+q8nM804+eefNO/O+7/cZQLx+cVe8I8iYYdRvBDD0TERZkLEg62x8vjbqhlE3jrT//GH4Lab+MQAYhlEzDMMwDMYYYyzEGAP+2i+WvnvLMBX7Xf0VNe3g4MDs8OTk5EQI/xYPS1+ccthUOKURnWy+G7GMGnm3eUKkpcIeEKjZKunpIVuxQ2mdqlmVL0AgmaerXMJBiUTuivLJAD+CTIX0dJ/DUn1pnSoZThTTGjmqggclcqRNcyAIZ92cZ1qjrOvWmazcuqrPQOa2knRFMLhFebfNW83T1mD7xVPVasolgdvTrLn6AY80uEVr7ZXcoWUuBACwTDttlOop0wI3BGCByj1Oy0Rrl7McEYDZy1rUWYkZOotwRQAiZzTjJH6RypwJAKBMi/aDM7TtAQKwTRm7ofP2Qx1qhebtBUZp3SMEYJ1sNcx+KniGABSov3VQ1/mxhwjA8XlXy5jChRdPgg8KX7Ss5g2KeYoAxGjDOmCV5jxGAOZo1epwipY8RwCWyOJWPljd8gEB2Kq+/kxgdYynLH5r0qqOuCpFrzxjhit5nxCAfMW8B8jech6dWUi9zZrtnvbsTmWmDJkMWgKaxm902FqmX2cK5qGmaeX5rkAl5ysCkKs8r4gktTesbV+JF//PvO4zAqA/6wpUSvvOkKanfUH2qs93hr6rJ31EuOp3iwSAXPVxZ5nyvUUCQOLJ/Unzv0UCgK49bE8JaJEAkKYpAFAAII7PQhg+I36/vXMqBAE43QHu6uGbIIZv8TuG0W5hDN2jTQYVprPwPugAd13lB0MQAmB8QKMe4iVhDKV4g6E3sieMYS/SCyiAil1hDLtQAQUYFsowDCgAE9ckAYMBChAUyhCUph5YTSBD7ee1aDAwQEFHp1CGzg4oCEIoA4JQwAQzMEkYDDCBDAyGJAx1wQx1KLi5FspwfQOl0U2IYzAABagLZagDCmCEBDKEGvXw81rUpamHI0wKQ5jEEaAAmlCG5jTIySdhDJ9O0Bjr7U8IY5jYbzIUQ9b2M+80Eio2GUoYE8Qwhvvh9o9NQQybP4DmXFBxXBDDePGe4XDAnh+Qt4YGDu8ZShAxTQsk8Gj2RYJ5Winmq2WYt5dh/UKKdRwZ1rOkWNeTYX1TwDpv5sU+Gda7ZVj3l8L/IIUPRAY/jBS+ICn8UUhxtDO/rmXra77G1dBsroVWhu8d4mtpfqnZ1nbv8iVvU/NTRS5bW5Z7ameeMpzVbPjNo554q+9UtmfqnfHIXQ0A23a95osv7VOclLHvNM945LBed3JrnvfEY12w6zJvKErHvC3O4WN7zfFB/ecXfE3OsYtzGw7zp+oqcLU5z1Ghtb/8pTY4Gp2XWhm7X9Mqx7wkS1u3lSTIz5IiTw1AsnK74ipfb8Vtvh6kyFuEDPmbAAIrwvNYIUM+L4C7vOY3tmLfeJHXDKCZ33368b315PbY+4+nDvO7Hea5x+PxbtRLe7umdqa3b/+MBVHVdd1RnrvzfP9RdTweeS3f/2/9a9GxCbG99x70qsNm7z04Lv7TztlkeP+DDPofFPcIKengbccAAAAASUVORK5CYII="
//           height="131"
//           width="131"
//           id="prefix__g"
//         />
//         <image
//           xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAACDCAAAAACL9ve6AAAAAmJLR0QA/4ePzL8AAATdSURBVHic7Zy/SyNpGMe/N6QQbCRviB42SgoFF05zMTp6t6VFtFHbtMpWQRaCpfkDbFLYCBJB2O2ElYSFLf0xWWajcat44IEIt3fBTApRECyeKxJ/j5OZzDvzvsV+q8nM804+eefNO/O+7/cZQLx+cVe8I8iYYdRvBDD0TERZkLEg62x8vjbqhlE3jrT//GH4Lab+MQAYhlEzDMMwDMYYYyzEGAP+2i+WvnvLMBX7Xf0VNe3g4MDs8OTk5EQI/xYPS1+ccthUOKURnWy+G7GMGnm3eUKkpcIeEKjZKunpIVuxQ2mdqlmVL0AgmaerXMJBiUTuivLJAD+CTIX0dJ/DUn1pnSoZThTTGjmqggclcqRNcyAIZ92cZ1qjrOvWmazcuqrPQOa2knRFMLhFebfNW83T1mD7xVPVasolgdvTrLn6AY80uEVr7ZXcoWUuBACwTDttlOop0wI3BGCByj1Oy0Rrl7McEYDZy1rUWYkZOotwRQAiZzTjJH6RypwJAKBMi/aDM7TtAQKwTRm7ofP2Qx1qhebtBUZp3SMEYJ1sNcx+KniGABSov3VQ1/mxhwjA8XlXy5jChRdPgg8KX7Ss5g2KeYoAxGjDOmCV5jxGAOZo1epwipY8RwCWyOJWPljd8gEB2Kq+/kxgdYynLH5r0qqOuCpFrzxjhit5nxCAfMW8B8jech6dWUi9zZrtnvbsTmWmDJkMWgKaxm902FqmX2cK5qGmaeX5rkAl5ysCkKs8r4gktTesbV+JF//PvO4zAqA/6wpUSvvOkKanfUH2qs93hr6rJ31EuOp3iwSAXPVxZ5nyvUUCQOLJ/Unzv0UCgK49bE8JaJEAkKYpAFAAII7PQhg+I36/vXMqBAE43QHu6uGbIIZv8TuG0W5hDN2jTQYVprPwPugAd13lB0MQAmB8QKMe4iVhDKV4g6E3sieMYS/SCyiAil1hDLtQAQUYFsowDCgAE9ckAYMBChAUyhCUph5YTSBD7ee1aDAwQEFHp1CGzg4oCEIoA4JQwAQzMEkYDDCBDAyGJAx1wQx1KLi5FspwfQOl0U2IYzAABagLZagDCmCEBDKEGvXw81rUpamHI0wKQ5jEEaAAmlCG5jTIySdhDJ9O0Bjr7U8IY5jYbzIUQ9b2M+80Eio2GUoYE8Qwhvvh9o9NQQybP4DmXFBxXBDDePGe4XDAnh+Qt4YGDu8ZShAxTQsk8Gj2RYJ5Winmq2WYt5dh/UKKdRwZ1rOkWNeTYX1TwDpv5sU+Gda7ZVj3l8L/IIUPRAY/jBS+ICn8UUhxtDO/rmXra77G1dBsroVWhu8d4mtpfqnZ1nbv8iVvU/NTRS5bW5Z7ameeMpzVbPjNo554q+9UtmfqnfHIXQ0A23a95osv7VOclLHvNM945LBed3JrnvfEY12w6zJvKErHvC3O4WN7zfFB/ecXfE3OsYtzGw7zp+oqcLU5z1Ghtb/8pTY4Gp2XWhm7X9Mqx7wkS1u3lSTIz5IiTw1AsnK74ipfb8Vtvh6kyFuEDPmbAAIrwvNYIUM+L4C7vOY3tmLfeJHXDKCZ33368b315PbY+4+nDvO7Hea5x+PxbtRLe7umdqa3b/+MBVHVdd1RnrvzfP9RdTweeS3f/2/9a9GxCbG99x70qsNm7z04Lv7TztlkeP+DDPofFPcIKengbccAAAAASUVORK5CYII="
//           height="131"
//           width="131"
//           id="prefix__h"
//         />
//         <image
//           xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAACDCAAAAACL9ve6AAAAAmJLR0QA/4ePzL8AAATdSURBVHic7Zy/SyNpGMe/N6QQbCRviB42SgoFF05zMTp6t6VFtFHbtMpWQRaCpfkDbFLYCBJB2O2ElYSFLf0xWWajcat44IEIt3fBTApRECyeKxJ/j5OZzDvzvsV+q8nM804+eefNO/O+7/cZQLx+cVe8I8iYYdRvBDD0TERZkLEg62x8vjbqhlE3jrT//GH4Lab+MQAYhlEzDMMwDMYYYyzEGAP+2i+WvnvLMBX7Xf0VNe3g4MDs8OTk5EQI/xYPS1+ccthUOKURnWy+G7GMGnm3eUKkpcIeEKjZKunpIVuxQ2mdqlmVL0AgmaerXMJBiUTuivLJAD+CTIX0dJ/DUn1pnSoZThTTGjmqggclcqRNcyAIZ92cZ1qjrOvWmazcuqrPQOa2knRFMLhFebfNW83T1mD7xVPVasolgdvTrLn6AY80uEVr7ZXcoWUuBACwTDttlOop0wI3BGCByj1Oy0Rrl7McEYDZy1rUWYkZOotwRQAiZzTjJH6RypwJAKBMi/aDM7TtAQKwTRm7ofP2Qx1qhebtBUZp3SMEYJ1sNcx+KniGABSov3VQ1/mxhwjA8XlXy5jChRdPgg8KX7Ss5g2KeYoAxGjDOmCV5jxGAOZo1epwipY8RwCWyOJWPljd8gEB2Kq+/kxgdYynLH5r0qqOuCpFrzxjhit5nxCAfMW8B8jech6dWUi9zZrtnvbsTmWmDJkMWgKaxm902FqmX2cK5qGmaeX5rkAl5ysCkKs8r4gktTesbV+JF//PvO4zAqA/6wpUSvvOkKanfUH2qs93hr6rJ31EuOp3iwSAXPVxZ5nyvUUCQOLJ/Unzv0UCgK49bE8JaJEAkKYpAFAAII7PQhg+I36/vXMqBAE43QHu6uGbIIZv8TuG0W5hDN2jTQYVprPwPugAd13lB0MQAmB8QKMe4iVhDKV4g6E3sieMYS/SCyiAil1hDLtQAQUYFsowDCgAE9ckAYMBChAUyhCUph5YTSBD7ee1aDAwQEFHp1CGzg4oCEIoA4JQwAQzMEkYDDCBDAyGJAx1wQx1KLi5FspwfQOl0U2IYzAABagLZagDCmCEBDKEGvXw81rUpamHI0wKQ5jEEaAAmlCG5jTIySdhDJ9O0Bjr7U8IY5jYbzIUQ9b2M+80Eio2GUoYE8Qwhvvh9o9NQQybP4DmXFBxXBDDePGe4XDAnh+Qt4YGDu8ZShAxTQsk8Gj2RYJ5Winmq2WYt5dh/UKKdRwZ1rOkWNeTYX1TwDpv5sU+Gda7ZVj3l8L/IIUPRAY/jBS+ICn8UUhxtDO/rmXra77G1dBsroVWhu8d4mtpfqnZ1nbv8iVvU/NTRS5bW5Z7ameeMpzVbPjNo554q+9UtmfqnfHIXQ0A23a95osv7VOclLHvNM945LBed3JrnvfEY12w6zJvKErHvC3O4WN7zfFB/ecXfE3OsYtzGw7zp+oqcLU5z1Ghtb/8pTY4Gp2XWhm7X9Mqx7wkS1u3lSTIz5IiTw1AsnK74ipfb8Vtvh6kyFuEDPmbAAIrwvNYIUM+L4C7vOY3tmLfeJHXDKCZ33368b315PbY+4+nDvO7Hea5x+PxbtRLe7umdqa3b/+MBVHVdd1RnrvzfP9RdTweeS3f/2/9a9GxCbG99x70qsNm7z04Lv7TztlkeP+DDPofFPcIKengbccAAAAASUVORK5CYII="
//           height="131"
//           width="131"
//           id="prefix__i"
//         />
//         <image
//           xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAAAAAByaaZbAAAAAmJLR0QA/4ePzL8AAAIeSURBVEiJpZZBaxNBGEBfZ83iom01piAx0EhIk2JNMb0Y4iE/QA/FQz1Z/5rQQy49FLx4K0XxFlFT3TS2aMVIqFgSAyWbZOshWZudnd118TvNfvMeM/PN7uzMIEcsk07EDR3r7NfPL4cDuXvG/Wjkc5nY1PPgsGGe+Qt6qax7RrRev7HUgihWrnpwgN5uzVYIc0+SShygVe06Tc1ppDZv+PLM3j12DEdY3bjsz4Ne6LRdwuq6COJBLJ+2p4TURggPZI+6f4W5zcD5TMZYqvcngngasN6L0BffnoMAiv71dEWyCAjQK8pue/ujnKrooMGDnJqvmwsL0qSGXxEYZTW/z8gzRtlAkPe+b2MeRp+ktJ5HoJrQmOfOutyRQ8Qy/vxjz3ZmYsL1vYTxxDIiHYWHtEhE4kmIeCSeuDAi8RhC2oWX+wApPx5d7rg/D9D64MODVnKX1cibfTg/uHZTzfe1NWkRIcZvLSuXKdj4riVTci7QONAurXiSQcYrrVPSIhiDF5p9y/NyBBjN94KGYqZcfzYP2N/kfAOBaSmEsbH2UMpaJhpDcVtlGHlz5ZGc3PuMBj/uqb5qjIKnfr3tEQKsXRUPVzyZXWt88tVaakOOVo2xYFd7/8L3qjaT07t/XAg/7odbJzgC3c5yqLDT5EKgfZoNHmO4845pgfbRkrK4k+htNXELdOuLs7586/mJ0/yPHzuRrw4Q+XIChF5//gBDj8KQ551D9QAAAABJRU5ErkJggg=="
//           height="48"
//           width="48"
//           id="prefix__j"
//         />
//         <image
//           xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAAAAACPAi4CAAAAAmJLR0QA/4ePzL8AAANQSURBVFiF7ZZNSFRRFMfPufc+34zjZObkmEjMWFFKUWofEEUFES0qN+GioA8IqlW4iyBo28eqRZC0a9WikKCWbloUmCQkIVmTafalhTY6zpv33j0t3sd99t5Ytp7/6p777vndc869d84AVFRRRRU5wiWsoOhfAMh0XcMQhYBMw5BlEcpf1PbkKFK5nlpRPjp//0RPtDsRUU+C/Y2APPW+POB9iiMAACITPIgSvj+ilimPz2iIAICiKtE+OmGqogq1BgXzx+arke/z9Rt21nkTTCAC6vG2E11rPnTOqooqAKIfmfWk91PJAqbVdJ9KeQRGfOXp7k4EyOpIGDoU5HrGzffHhc2ZxtWp1Op088ZDA+5kJqbVPnbHTUJVVPwJApg59zpv2gQAUDIWLt444AbIqg+7KziqAFTa3g2yrwzNFC2RaOus12Vx7uuVMS9DrvnZqu0UwNPT/rwhE5cGnvcP38lyc37yluvFuO8UdSVQ6FkiInmsMVnT2OckO7FrRc2q1hEiopZEIutdiqyu7mUogpGRoq2d6nKM5psxac49c1OIvIohwNsFi6pOe9beViaNl16Q/wSYMiVUb/LNHVyWJqMcywKKBMDULAeghWUBViFBccw33xBgw7IArQKg9NCzhl/ZIDqXBdjSrEHx7qBj5K8uSIwdWBZAnIuh/fPsAwOABk++MEDb3r4UwD8a5LwpBwBgdL0o8VgyvbXqXW62YPL6Rx0AAOu/Qfqdu7bls217jyH8mPTeo2NW0ZofR8s0bZa81uF9sW0eWh3xFmDtw444lAr5fMGwtYbbZ5xZIiq9DC+OAsD6vsvpGo0jj6/senLcn6bC+XtfnFGgTYRrAAAA0/1DX36lN+9v82fWfZVMT9btO7InPrVt2vbbhAIw0ZiLiseRXPdNAhd6dbxu99BgQQGCRbTGM2UBH02SQCTN/PSoGWxTfl0RkcuDZQHXBwxJRCRts2QG25wCAMLozw0rot4sTdy8P2cRARFJkpKISPn5ETAeSySrBaLzswMAgAwRiaxCfs5w0kZAoOAxqA2RMa4J4TzlRTWW0rJMW7qA4OfFAETGOLKI9i7JljIQdlCB1egoqgYqqaUAgE5vCEewOOvygP/6i1NRRRU5+g3USavmbl3B5gAAAABJRU5ErkJggg=="
//           height="64"
//           width="64"
//           id="prefix__k"
//         />
//         <image
//           xlinkHref="data:image/png;base64,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"
//           height="58"
//           width="206"
//           id="prefix__l"
//         />
//         <image
//           xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAAAAACo4kLRAAAAAmJLR0QA/4ePzL8AAADrSURBVBiVZcwtS0NxAEbxc8cQFxYca5vYp2XfQYvikGHRsLagxdcqfoFl05YswsBPoEGzFgUdCIIvDMZeggZN9xh2+Tv0xB88DwDZw+uR/YutDL9t9h33thbs2FC8k1hN7R4s5MtHI42XAcj29CoHQPFeX6YAdvV1JhnNfugGwKXuh/uGngEMtRRwUW+AVA56AXuQB1IDKAQsQB9I3cJqwAp0ALZ1WExs/kurAJl3vZsDoPSsj2kAqrF+NpbKKyffajsaj/ZiJ2omWukm8HSuthKdrrU7g4fT9XTUmtBQ1FKb/Ne4/heJmnV+AD6ai3DIWpueAAAAAElFTkSuQmCC"
//           height="20"
//           width="20"
//           id="prefix__m"
//         />
//         <clipPath id="prefix__n">
//           <path d="M117 85.285h125.887V211H117zm0 0" />
//         </clipPath>
//         <mask id="prefix__p">
//           <use height="100%" width="100%" xlinkHref="#prefix__a" />
//         </mask>
//       </defs>
//       <circle r="61.06" cy="62.857" cx="62.943" fill="#ffffff00" />
//       <g
//         transform="translate(-117 -85.286)"
//         clip-path="url(#prefix__n)"
//         fill="#ffffff00"
//       >
//         <use
//           xlinkHref="#prefix__o"
//           mask="url(#prefix__p)"
//           transform="matrix(.50032 0 0 .50032 116.806 85.286)"
//           width="100%"
//           height="100%"
//         />
//       </g>
//       <path
//         d="M118.758 63.038c0 1.832-.09 3.66-.27 5.48a56.49 56.49 0 01-.804 5.43 56.34 56.34 0 01-5.528 15.45 56.08 56.08 0 01-6.09 9.113 55.861 55.861 0 01-3.687 4.063 55.86 55.86 0 01-4.063 3.687 56.811 56.811 0 01-4.406 3.266 54.712 54.712 0 01-4.707 2.82 55.804 55.804 0 01-10.129 4.195c-1.75.532-3.523.977-5.32 1.336a55.894 55.894 0 01-41.969-8.352 56.139 56.139 0 01-4.41-3.265 55.859 55.859 0 01-4.062-3.687 55.86 55.86 0 01-3.688-4.063 56.135 56.135 0 01-3.266-4.41 55.803 55.803 0 01-7.016-14.832 56.343 56.343 0 01-1.335-5.32 55.776 55.776 0 01-.805-16.387c.18-1.824.45-3.633.805-5.43a56.344 56.344 0 013.183-10.488 55.803 55.803 0 015.168-9.664 56.136 56.136 0 013.266-4.41 55.86 55.86 0 013.688-4.063 55.86 55.86 0 014.062-3.687 56.139 56.139 0 014.41-3.266 55.089 55.089 0 019.664-5.168 56.346 56.346 0 0110.488-3.184 55.775 55.775 0 0116.39-.805c1.821.18 3.63.45 5.427.805a56.347 56.347 0 0115.45 5.528 55.77 55.77 0 014.706 2.824 56.812 56.812 0 014.406 3.266 55.863 55.863 0 014.063 3.687 55.861 55.861 0 013.687 4.063 56.08 56.08 0 016.09 9.113 55.77 55.77 0 014.192 10.129c.53 1.75.976 3.523 1.336 5.32a56.49 56.49 0 01.804 5.43c.18 1.82.27 3.648.27 5.476zm0 0"
//         fill="none"
//         stroke="#000"
//         stroke-width=".75"
//         stroke-opacity=".098"
//       />
//     </svg>
//   );
// };
