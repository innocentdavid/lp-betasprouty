import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="navbar-section absolute top-0 left-0 w-full z-[99]">
      <nav className="bg-transparent bg-opacity-90 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative z-50 flex justify-between py-5">
          <div className="relative z-10 flex items-center gap-16">
            <a href="/">
              <div className="group flex items-center gap-2 w-auto h-10">
                {/* <img
                  alt="SproutySocial logo icon"
                  title="SproutySocial logo icon"
                  fetchPriority="high"
                  loading="eager"
                  width="32"
                  height="32"
                  decoding="async"
                  data-nimg="1"
                  className="inline-block h-8 w-auto _transform transform-gpu transition-all duration-500 ease-in-out group-hover:translate-x-1 group-hover:rotate-[360deg] group-hover:scale-[87%] text-transparent"
                  //   style="color:transparent"
                  src="https://app.sproutysocial.com/_next/image?url=%2Flogo-light-long.png&w=640&q=75"
                /> */}
                <img
                  alt="SproutySocial logo text"
                  title="SproutySocial logo text"
                  fetchPriority="high"
                  loading="eager"
                  width="640"
                  height="40"
                  decoding="async"
                  data-nimg="1"
                  className="inline-block w-auto h-10 text-transparent"
                  //   style="color:transparent"
                //   src="https://www.upgrow.com/img/upgrow-logo-text-minified.svg"
                  src="https://app.sproutysocial.com/_next/image?url=%2Flogo-light-long.png&w=640&q=100"
                />
                {/* <span
                  className="inline-block ml-[5px] bg-black text-white p-[3px_9px] rounded-[8px] font-bold antialiased font-dashboard text-[13px] mt-1"
                  //   style="margin-left:5px;background:#000;color:white;padding:3px 9px;border-radius:8px;font-family:Gtwalsheimpro,sans-serif;font-weight:700;-webkit-font-smoothing:antialiased;font-size:13px"
                >
                  GPT-4 Powered
                </span> */}
              </div>
            </a>
          </div>
          <div className="relative z-10 flex items-center gap-16">
            <div className="hidden lg:flex lg:gap-10">
              <div className="flex items-center gap-10">
                <a
                  className="inline-flex items-center px-3 py-2 text-base font-medium text-gray-600 transition-colors duration-100 group hover:no-underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 hover:bg-gray-100 rounded-xl whitespace-nowrap"
                  href="/"
                >
                  Instagram Growth
                </a>
                <a
                  className="inline-flex items-center px-3 py-2 text-base font-medium text-gray-600 transition-colors duration-100 group hover:no-underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 hover:bg-gray-100 rounded-xl whitespace-nowrap"
                  href="/pricing"
                >
                  Pricing
                </a>
                <a
                  className="inline-flex items-center px-3 py-2 text-base font-medium text-gray-600 transition-colors duration-100 group hover:no-underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 hover:bg-gray-100 rounded-xl whitespace-nowrap"
                  href="/reviews"
                >
                  Reviews
                </a>
                <a
                  className="inline-flex items-center px-3 py-2 text-base font-medium text-gray-600 transition-colors duration-100 group hover:no-underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 hover:bg-gray-100 rounded-xl whitespace-nowrap"
                  href="/faq"
                >
                  FAQ
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            {/* mobile menu */}
            <div className="lg:hidden" data-headlessui-state="">
              <button
                className="relative z-10 m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&amp;:not(:focus-visible)]:focus:outline-none"
                aria-label="Toggle site navigation"
                type="button"
                aria-expanded="false"
                data-headlessui-state=""
                id="headlessui-popover-button-:r0:"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="w-6 h-6"
                  >
                    <path
                      d="M17 14l-5-5-5 5"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="w-6 h-6"
                  >
                    <path
                      d="M5 6h14M5 18h14M5 12h14"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                )}
              </button>
            </div>

            {mobileMenuOpen && (
              <>
                <div
                  className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur lg:hidden"
                  id="headlessui-popover-overlay-:r16:"
                  aria-hidden="true"
                  data-headlessui-state="open"
                  style={{
                    opacity: 1,
                  }}
                ></div>

                <div
                  className="absolute inset-x-0 top-0 z-0 px-6 pt-32 pb-6 origin-top shadow-2xl rounded-b-2xl bg-gray-50 shadow-gray-900/20 lg:hidden"
                  id="headlessui-popover-panel-:r17:"
                  tabIndex={-1}
                  data-headlessui-state="open"
                  style={{
                    willChange: "opacity, transform",
                    opacity: 1,
                    transform: "none",
                  }}
                >
                  <div className="space-y-4">
                    <a
                      className="block text-2xl leading-10 tracking-tight text-gray-700"
                      href="/"
                    >
                      Instagram Growth
                    </a>
                    <a
                      className="block text-2xl leading-10 tracking-tight text-gray-700"
                      href="/pricing"
                    >
                      Pricing
                    </a>
                    <a
                      className="block text-2xl leading-10 tracking-tight text-gray-700"
                      href="/reviews"
                    >
                      Reviews
                    </a>
                    <a
                      className="block text-2xl leading-10 tracking-tight text-gray-700"
                      href="/faq"
                    >
                      FAQ
                    </a>
                  </div>
                  <div className="flex flex-col gap-4 mt-8">
                    <a
                      className="block text-2xl leading-10 tracking-tight text-gray-700"
                      href="https://app.sproutysocial.com/login"
                    >
                      Log in
                    </a>

                    <a
                      className="flex justify-between px-5 py-4 text-lg font-semibold leading-7 text-white bg-gray-800 shadow-sm rounded-xl hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-gray-800 active:text-white/80"
                      href="https://app.sproutysocial.com/signup"
                    >
                      Start free trial
                      <svg
                        className="my-auto ml-2 -mr-1 stroke-2 stroke-white"
                        fill="none"
                        width="15"
                        height="15"
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
                    </a>
                  </div>
                </div>
              </>
            )}

            <div
              className="fixed top-[1px] left-[1px] w-[1px] h-0 p-0 -m-[1px] overflow-hidden whitespace-nowrap border-0 hidden"
              style={{
                clip: "rect(0px, 0px, 0px, 0px)",
              }}
            ></div>
            {/* mobile menu */}

            <a
              className="hidden lg:inline-flex items-center px-3 py-2 text-base font-medium text-gray-600 transition-colors duration-100 group hover:no-underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 hover:bg-gray-100 rounded-xl whitespace-nowrap"
              href="https://app.sproutysocial.com/login"
            >
              Log in
            </a>

            <a
              className="group hidden rounded-lg bg-gray-800 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm transition hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-gray-800 active:text-white/80 lg:inline-flex"
              href="https://app.sproutysocial.com/signup"
            >
              Start free trial
              <svg
                className="my-auto ml-2 -mr-1 stroke-2 stroke-white"
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
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
