export default function HomePage() {
  return (
    <div className="">
      <Hero />
    </div>
  );
}

import { motion } from "framer-motion";
import { AuroraBackground } from "../components/ui/aurora-background";

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
        {/* <div className="text-3xl md:text-7xl font-bold dark:text-white text-center font-dashboard">
          Grow your Instagram With Real Followers
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 text-center max-w-[900px] font-dashboard">
          Get 1000+ real followers every month Make your posts go viral
          organically with human-powered Instagram growth.
        </div>
        <button
          type="button"
          className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2"
        >
          Start your 7-day free trial
        </button> */}

        <div className="max-w-5xl mx-auto text-center">
          <h1 className="group hero-h1-gradient _text-left sm:text-center whitespace-pre-wrap bg-clip-text text-transparent text-5xl font-bold tracking-[-1.5px] sm:tracking-[-2px] text-gray-900 text-[34px] sm:text-[45px] md:text-[50px] lg:text-[61px] lg:h-[135px] leading-[39px] sm:leading-[65px] font-dashboard">
            <span className="mr-2 sm:mr-0">Grow your Instagram</span>
            <br />
            <span className="mr-2 sm:mr-0">With Real Followers</span>
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
                  <div className="flex justify-center -space-x-3">
                    <img
                      alt="UpGrow Customer Avatar 1"
                      loading="eager"
                      width="32"
                      height="32"
                      decoding="async"
                      data-nimg="1"
                      className="inline-block w-8 h-8 transition-transform duration-200 ease-in-out rounded-full ring-2 ring-white hover:-translate-y-1 text-transparent z-[1]"
                      // style="color:transparent;z-index:1"
                      srcSet="https://www.upgrow.com/_next/image?url=%2Fimg%2Fgraphics%2Fupgrow-customer-1.jpeg&amp;w=32&amp;q=75 1x, /_next/image?url=%2Fimg%2Fgraphics%2Fupgrow-customer-1.jpeg&amp;w=64&amp;q=75 2x"
                      src="https://www.upgrow.com/_next/image?url=%2Fimg%2Fgraphics%2Fupgrow-customer-1.jpeg&amp;w=64&amp;q=75"
                    />
                    <img
                      alt="UpGrow Customer Avatar 2"
                      loading="eager"
                      width="32"
                      height="32"
                      decoding="async"
                      data-nimg="1"
                      className="inline-block w-8 h-8 transition-transform duration-200 ease-in-out rounded-full ring-2 ring-white hover:-translate-y-1 text-transparent z-[2]"
                      // style="color:transparent;z-index:2"
                      srcSet="https://www.upgrow.com/_next/image?url=%2Fimg%2Fgraphics%2Fupgrow-customer-2.jpeg&amp;w=32&amp;q=75 1x, /_next/image?url=%2Fimg%2Fgraphics%2Fupgrow-customer-2.jpeg&amp;w=64&amp;q=75 2x"
                      src="https://www.upgrow.com/_next/image?url=%2Fimg%2Fgraphics%2Fupgrow-customer-2.jpeg&amp;w=64&amp;q=75"
                    />
                    <img
                      alt="UpGrow Customer Avatar 3"
                      loading="eager"
                      width="32"
                      height="32"
                      decoding="async"
                      data-nimg="1"
                      className="inline-block w-8 h-8 transition-transform duration-200 ease-in-out rounded-full ring-2 ring-white hover:-translate-y-1 text-transparent z-[3]"
                      // style="color:transparent;z-index:3"
                      srcSet="https://www.upgrow.com/_next/image?url=%2Fimg%2Fgraphics%2Fupgrow-customer-3.jpeg&amp;w=32&amp;q=75 1x, /_next/image?url=%2Fimg%2Fgraphics%2Fupgrow-customer-3.jpeg&amp;w=64&amp;q=75 2x"
                      src="https://www.upgrow.com/_next/image?url=%2Fimg%2Fgraphics%2Fupgrow-customer-3.jpeg&amp;w=64&amp;q=75"
                    />
                    <img
                      alt="UpGrow Customer Avatar 4"
                      loading="eager"
                      width="32"
                      height="32"
                      decoding="async"
                      data-nimg="1"
                      className="inline-block w-8 h-8 transition-transform duration-200 ease-in-out rounded-full ring-2 ring-white hover:-translate-y-1 text-transparent z-[4]"
                      // style="color:transparent;z-index:4"
                      srcSet="https://www.upgrow.com/_next/image?url=%2Fimg%2Fgraphics%2Fupgrow-customer-4.jpeg&amp;w=32&amp;q=75 1x, /_next/image?url=%2Fimg%2Fgraphics%2Fupgrow-customer-4.jpeg&amp;w=64&amp;q=75 2x"
                      src="https://www.upgrow.com/_next/image?url=%2Fimg%2Fgraphics%2Fupgrow-customer-4.jpeg&amp;w=64&amp;q=75"
                    />
                    <span
                      className="inline-flex items-center justify-center h-8 bg-gray-800 rounded-full w-9 ring-2 ring-white dark:bg-gray-900 dark:ring-gray-800 z-[5]"
                      //  style="z-index:5"
                    >
                      <span className="text-xs font-medium leading-none text-white uppercase">
                        58K+
                      </span>
                    </span>
                  </div>
                </div>

                <div className="flex flex-col flex-1 text-left">
                  <div className="flex items-center">
                    <div className="flex">
                      <svg
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="h-5 w-5 fill-yellow-300"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="h-5 w-5 fill-yellow-300"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="h-5 w-5 fill-yellow-300"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="h-5 w-5 fill-yellow-300"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="h-5 w-5 fill-yellow-300"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>
                    <span className="ml-2 mt-[2px] leading-[1px]">
                      <b>4.98</b>/5
                    </span>
                  </div>
                  <p className="text-sm text-gray-800 whitespace-nowrap">
                    Trusted by 58,980+ users
                  </p>
                </div>

                <div className="flex justify-center ml-4">
                  <button
                    className="relative flex items-center justify-center focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 rounded-3xl group"
                    aria-label="Watch the video"
                  >
                    <img
                      alt="UpGrow Demo Video Thumbnail"
                      fetchPriority="high"
                      width="85"
                      height="47"
                      decoding="async"
                      data-nimg="1"
                      className="transition-all duration-700 ease-in-out rounded-lg shadow-sm opacity-50 hover:shadow-lg hover:opacity-100 transform-gpu animate-sway"
                      //   style="color:transparent"
                      srcSet="https://www.upgrow.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fupgrow-video-thumbnail.fcb7a4c3.webp&amp;w=96&amp;q=60 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fupgrow-video-thumbnail.fcb7a4c3.webp&amp;w=256&amp;q=60 2x"
                      src="https://www.upgrow.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fupgrow-video-thumbnail.fcb7a4c3.webp&amp;w=256&amp;q=60"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}