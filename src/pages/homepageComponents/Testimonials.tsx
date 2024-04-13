import { useState } from "react";
import { motion } from "framer-motion";

const InstagramIcon = () => {
  return (
    <svg
      width="23"
      height="24"
      viewBox="0 0 23 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.2882 1.03167C14.2738 0.927412 14.6486 0.926995 15.823 0.939549C16.995 0.952057 17.8006 1.11001 18.5094 1.35736C19.2421 1.61302 19.8683 1.9675 20.5009 2.55731C21.1333 3.14716 21.5306 3.7471 21.8368 4.4602C22.133 5.14996 22.3468 5.94262 22.441 7.11086C22.5354 8.28154 22.5612 8.65547 22.6654 11.6411C22.7697 14.6267 22.7701 15.0015 22.7575 16.1759C22.745 17.3479 22.5871 18.1535 22.3397 18.8622C22.084 19.595 21.7296 20.2212 21.1398 20.8537C20.5499 21.4862 19.9499 21.8835 19.2369 22.1897C18.5471 22.4858 17.7545 22.6996 16.5862 22.7938C15.4155 22.8883 15.0416 22.914 12.056 23.0183C9.07041 23.1225 8.6956 23.1229 7.52118 23.1104C6.34921 23.0979 5.54356 22.9399 4.83482 22.6926C4.1021 22.4369 3.47591 22.0824 2.84338 21.4926C2.21088 20.9028 1.81356 20.3028 1.50742 19.5897C1.21122 18.9 0.99748 18.1073 0.903249 16.9391C0.808803 15.7684 0.783076 15.3945 0.678817 12.4089C0.574557 9.42326 0.574138 9.04845 0.586691 7.87403C0.599199 6.70206 0.757131 5.89642 1.00449 5.18768C1.26014 4.45496 1.61465 3.82877 2.20445 3.19623C2.7943 2.56374 3.39424 2.16644 4.10734 1.86029C4.7971 1.5641 5.58977 1.35034 6.75801 1.25611C7.9287 1.16166 8.30262 1.13593 11.2882 1.03167ZM15.8019 2.92142C14.6408 2.90901 14.2927 2.90994 11.3574 3.01244C8.42206 3.11495 8.07474 3.1383 6.91739 3.23167C5.84726 3.31798 5.27143 3.51739 4.88931 3.68147C4.38313 3.89882 4.02524 4.14982 3.65401 4.54797C3.28273 4.94607 3.05728 5.3206 2.87578 5.8407C2.73875 6.23333 2.58 6.82167 2.56855 7.89522C2.55614 9.05626 2.55707 9.40436 2.65958 12.3397C2.76208 15.275 2.78543 15.6223 2.8788 16.7797C2.96511 17.8498 3.16452 18.4256 3.3286 18.8078C3.54594 19.3139 3.79701 19.6718 4.19511 20.0431C4.59321 20.4143 4.96774 20.6398 5.48784 20.8213C5.88048 20.9583 6.46882 21.1171 7.54236 21.1285C8.70327 21.1409 9.05129 21.14 11.9869 21.0375C14.9224 20.935 15.2697 20.9116 16.4268 20.8183C17.497 20.732 18.0728 20.5325 18.4549 20.3685C18.9611 20.1511 19.319 19.9001 19.6902 19.502C20.0615 19.1039 20.2869 18.7293 20.4684 18.2092C20.6054 17.8166 20.7642 17.2283 20.7756 16.1547C20.788 14.9937 20.7871 14.6456 20.6846 11.7103C20.5821 8.77491 20.5588 8.4276 20.4654 7.27024C20.3791 6.20012 20.1797 5.62428 20.0156 5.24217C19.7982 4.73599 19.5473 4.3781 19.1491 4.00687C18.751 3.63559 18.3765 3.41016 17.8564 3.22865C17.4638 3.09163 16.8754 2.93286 15.8019 2.92142ZM11.8001 15.6894C13.8239 15.6187 15.4072 13.9208 15.3365 11.897C15.2659 9.87318 13.568 8.28986 11.5442 8.36053C9.52033 8.43121 7.93702 10.1291 8.0077 12.1529C8.07837 14.1767 9.77626 15.7601 11.8001 15.6894ZM11.475 6.37976C14.5928 6.27089 17.2084 8.71005 17.3173 11.8279C17.4262 14.9456 14.987 17.5613 11.8693 17.6702C8.75147 17.779 6.13577 15.3399 6.02689 12.2221C5.91802 9.10432 8.3572 6.48864 11.475 6.37976ZM18.6546 5.90574C18.6801 6.63432 18.1101 7.24554 17.3815 7.27098C16.653 7.29642 16.0417 6.72645 16.0162 5.99787C15.9908 5.26929 16.5608 4.65803 17.2894 4.63259C18.0179 4.60715 18.6292 5.17716 18.6546 5.90574Z"
        fill="#909396"
      />
    </svg>
  );
};

const TwitterIcon = () => {
  return (
    <svg
      width="22"
      height="23"
      viewBox="0 0 22 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 4.86303C21.242 5.19403 20.427 5.41803 19.57 5.51903C20.444 5.00403 21.114 4.18703 21.43 3.21403C20.613 3.69103 19.707 4.03803 18.744 4.22403C17.971 3.41603 16.872 2.91003 15.655 2.91003C13.319 2.91003 11.424 4.77503 11.424 7.07603C11.424 7.40203 11.462 7.71803 11.533 8.02403C8.015 7.85003 4.898 6.19103 2.811 3.67203C2.448 4.28803 2.239 5.00403 2.239 5.76603C2.239 7.21003 2.986 8.48603 4.121 9.23303C3.427 9.21103 2.775 9.02403 2.204 8.71203V8.76503C2.204 10.783 3.662 12.467 5.599 12.85C5.243 12.944 4.869 12.995 4.484 12.995C4.212 12.995 3.946 12.969 3.688 12.921C4.226 14.575 5.789 15.78 7.641 15.813C6.192 16.93 4.367 17.596 2.385 17.596C2.044 17.596 1.707 17.577 1.375 17.538C3.248 18.721 5.472 19.41 7.861 19.41C15.645 19.41 19.901 13.063 19.901 7.55903C19.901 7.38003 19.896 7.20003 19.888 7.02103C20.715 6.43303 21.432 5.70003 21.998 4.86603L22 4.86303Z"
        fill="#909396"
      />
    </svg>
  );
};

const TrustPilot = () => {
  return (
    <svg
      width="23"
      height="22"
      viewBox="0 0 23 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_80_199)">
        <path
          d="M22.9778 8.13742H14.5783L11.9838 0.140015L9.38137 8.13742L0.981934 8.12945L7.78425 13.077L5.18151 21.0664L11.9838 16.1268L18.7779 21.0664L16.1834 13.077L22.9778 8.13742Z"
          fill="#00B67A"
        />
        <path
          d="M16.7673 14.8859L16.1835 13.077L11.9839 16.1269L16.7673 14.8859Z"
          fill="#005128"
        />
      </g>
      <defs>
        <clipPath id="clip0_80_199">
          <rect
            width="22"
            height="20.9264"
            fill="white"
            transform="translate(0.97998 0.140015)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

const LinkedInIcon = () => {
  return (
    <svg
      width="22"
      height="23"
      viewBox="0 0 22 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.6665 8.08337C16.1252 8.08337 17.5241 8.66284 18.5556 9.69429C19.587 10.7257 20.1665 12.1247 20.1665 13.5834V20H16.4998V13.5834C16.4998 13.0971 16.3067 12.6308 15.9629 12.287C15.619 11.9432 15.1527 11.75 14.6665 11.75C14.1803 11.75 13.714 11.9432 13.3701 12.287C13.0263 12.6308 12.8332 13.0971 12.8332 13.5834V20H9.1665V13.5834C9.1665 12.1247 9.74597 10.7257 10.7774 9.69429C11.8089 8.66284 13.2078 8.08337 14.6665 8.08337Z"
        stroke="#909396"
        stroke-width="1.83333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.50016 9.00003H1.8335V20H5.50016V9.00003Z"
        stroke="#909396"
        stroke-width="1.83333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.66683 6.25004C4.67935 6.25004 5.50016 5.42923 5.50016 4.41671C5.50016 3.40419 4.67935 2.58337 3.66683 2.58337C2.65431 2.58337 1.8335 3.40419 1.8335 4.41671C1.8335 5.42923 2.65431 6.25004 3.66683 6.25004Z"
        stroke="#909396"
        stroke-width="1.83333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const TESTIMONIALS = [
  {
    avatar: "/images/testimonials/Miss Switzerland.png",
    full_name: "Miss Switzerland",
    username: "@olesyaulenberger",
    socialIcon: <InstagramIcon />,
    description: (
      <p className="">
        If you're a model, and you'd like to grow your Instagram followers
        quickly, check out{" "}
        <span className="bg-purple-500 bg-gradient-to-r from-[#BA01B4] to-[#3D1DC2] text-transparent bg-clip-text">
          @SproutySocial
        </span>{" "}
        Great, reliable and easy to use! never looking back 🙌
      </p>
    ),
    category: "Beauty & Fashion",
  },
  {
    avatar: "/images/testimonials/Chris Luus.png",
    full_name: "Chris Luus",
    username: "@_chrislvis_",
    socialIcon: <InstagramIcon />,
    description: (
      <p>
        The service that SproutySocial have been providing to me has been
        impeccable! The growth and the engagement on my account has increased
        tenfold since I started to work with them!
      </p>
    ),
    category: "Others", // Category not clearly defined
  },
  {
    avatar: "/images/testimonials/Erik N..png",
    full_name: "Erik N.",
    username: "",
    socialIcon: <TrustPilot />,
    description: (
      <p>
        I ran my cycling profile for 3 months with them and my engagement,
        likes, and followers were increased noticeably with real users. Awesome!
      </p>
    ),
    category: "Fitness",
  },
  {
    avatar: "/images/testimonials/Niko Veit.jpeg",
    full_name: "Mega Mobil",
    username: "@megamobil.si",
    socialIcon: <InstagramIcon />,
    description: (
      <p>
        First we canceled other IG services and stopped using them entirely.
        <br />
        <br />
        What are we using now?
        <br />
        <br />
        This thing called SproutySocial 🎉
        <br />
        <br />
        Simple to use with immediate results. The best part of it are daily
        analytics and growth options they have.
        <br />
        <br />
        Now the focus is on our content only!
      </p>
    ),
    category: "Business", // Implies a focus on content strategy, likely business-related
  },
  {
    avatar: "/images/testimonials/Barbara.png",
    full_name: "Barbara",
    username: "",
    socialIcon: <TrustPilot />,
    description: (
      <p>
        I love the growth! At first they needed sometime to get my account fully
        connected but after that everything works! Good and real followers
      </p>
    ),
    category: "Others", // Category not clearly defined
  },
  {
    avatar: "/images/testimonials/Max Macrone.png",
    full_name: "Max Macrone",
    username: "",
    socialIcon: <TrustPilot />,
    description: (
      <p>
        <span className="bg-purple-500 bg-gradient-to-r from-[#BA01B4] to-[#3D1DC2] text-transparent bg-clip-text">
          I love the service so far!
        </span>{" "}
        <br />
        <br />
        Like Buffer, but better.
        <br />
        <br />
        Got an email from them saying to try 7 day free trial and it went great!
        My profile grew already by 700 followers
      </p>
    ),
    category: "Others", // Category not clearly defined
  },
  {
    avatar: "/images/testimonials/MassInbox.png",
    full_name: "MassInbox",
    username: "@massinbox",
    socialIcon: <TwitterIcon />,
    description: (
      <p>
        The best new tool for Instagram:
        <br />
        <br />
        - Real followers growth
        <br />
        <br />
        - Daily analytics
        <br />
        <br />
        - 1-on-1 feedback
        <br />
        <br />
        - Amazing AI Features
        <br />
        <br />
        Is sproutysocial.com
        <br />
        <br />
        It blows Buffer out of the water.
      </p>
    ),
    category: "Others", // Category not clearly defined, could be related to content creation
  },
  {
    avatar: "/images/testimonials/Martin Blanchet.png",
    full_name: "Martin Blanchet",
    username: "@martin-blanchet",
    socialIcon: <LinkedInIcon />,
    description: (
      <p>
        <span className="bg-purple-500 bg-gradient-to-r from-[#BA01B4] to-[#3D1DC2] text-transparent bg-clip-text">
          Sprouty c'est Buffer en 100x plus intuitif, 100x plus beau et 100x
          plus vaste.
        </span>
      </p>
    ),
    category: "Others", // Category not clearly defined, could be related to content creation
  },
  {
    avatar: "/images/testimonials/Raffaele Gaito.png",
    full_name: "Raffaele Gaito",
    username: "",
    socialIcon: <TrustPilot />,
    description: (
      <p>
        I love Sprouty, it's a tool that has incredibly sped up my followers
        growth. Incredible service for a reasonable price!
      </p>
    ),
    category: "Photography", // Category not clearly defined, could be related to content creation
  },
  {
    avatar: "/images/testimonials/Restaurant.png",
    full_name: "Restaurant",
    username: "@gostisceirsic",
    socialIcon: <InstagramIcon />,
    description: (
      <p>
        One of my favorite things about SproutySocial is how simple you can add
        targets with an AI. All targeting, filtering are automatically added for
        you!
        <br />
        <br />
        Anyway, highly recommend you to check out{" "}
        <span className="bg-purple-500 bg-gradient-to-r from-[#BA01B4] to-[#3D1DC2] text-transparent bg-clip-text">
          @SproutySocial
        </span>
      </p>
    ),
    category: "Business", // Focus on client success and professional service
  },
  {
    avatar: "/images/testimonials/Alain Wassenaar.png",
    full_name: "Alain Wassenaar",
    username: "@alainwassenaar",
    socialIcon: <InstagramIcon />,
    description: (
      <p>
        SproutySocial is definitely one of the best providers for Instagram
        growth. With a real focus on client success. They go above and beyond
        for your profile.
      </p>
    ),
    category: "Business", // Focus on client success and professional service
  },
  {
    avatar: "/images/testimonials/Bart.png",
    full_name: "Bart",
    username: "@bartakkersdijk",
    socialIcon: <TwitterIcon />,
    description: (
      <p>
        That's the product we've looked for! Instagram growth for agencies just
        got easier{" "}
        <span className="bg-purple-500 bg-gradient-to-r from-[#BA01B4] to-[#3D1DC2] text-transparent bg-clip-text">
          @SproutySocial
        </span>
        <br />
        <br />
        - Impeccable and speedy customer support (even on a Sunday!)
        <br />
        - Great targeting features (like only following only Dutch users)
        <br />- Adding and managing a lot of accounts as an agency is a blast!
      </p>
    ),
    category: "Business", // Targeted at agencies, implying business use
  },
  {
    avatar: "/images/testimonials/Tina Radolli.png",
    full_name: "Tina Radolli",
    username: "",
    socialIcon: <LinkedInIcon />,
    description: (
      <p>
        The best service for Instagram currently on the market! You can try it
        for free which is awesome since I was sceptical at first. I recommend it
        to everyone. Customer support is really professional.
      </p>
    ),
    category: "Others", // Category not clearly defined
  },
  {
    avatar: "/images/testimonials/Iva M..png",
    full_name: "Iva M.",
    username: "@thewomanofelegance",
    socialIcon: <InstagramIcon />,
    description: (
      <p>
        I've been with them for 4 months and have around 6000 more followers
        that are also liking my pictures.
      </p>
    ),
    category: "Beauty & Fashion", // Username suggests a focus on elegance, likely related to fashion
  },
  {
    avatar: "/images/testimonials/Emillia.png",
    full_name: "Emillia",
    username: "",
    socialIcon: <TrustPilot />,
    description: (
      <p>
        Very good to get more followers. However it depends on profile.. for
        example I have got around 700 new followers. I'm happy!
      </p>
    ),
    category: "Others", // Category not clearly defined
  },
  {
    avatar: "/images/testimonials/Peter L..png",
    full_name: "Peter L.",
    username: "",
    socialIcon: <TrustPilot />,
    description: (
      <p>
        I used Sprouty in the past for my fitness account and now I'm using it
        to grow my small business, it works like magic for fitness but little
        slower for second account. However I am very happy with their service
        and support!
      </p>
    ),
    category: "Fitness", // Mentions a fitness account specifically
  },
  {
    avatar: "/images/testimonials/Cockerry Pocket Coffee.png",
    full_name: "Cockerry Pocket Coffee",
    username: "@pockychocospaniel",
    socialIcon: <InstagramIcon />,
    description: (
      <p>
        I've started with 7 followers and after a month my happy Cocker is at
        1600 followers. Really impressed!!
      </p>
    ),
    category: "Others", // While it mentions a coffee shop, the main subject is a dog, so it doesn’t clearly fit into the predefined categories
  },
];

export default function Testimonials() {
  const [selectedCatg, setSelectedCatg] = useState("All");
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="my-16 md:my-40 max-w-[1280px] mx-auto" id="reviews">
      <div className="max-w-5xl mx-auto text-center mt-20 pb-4 px-4">
        <div className="text-[30px] md:text-[32px] lg:text-[48px] leading-8 lg:leading-[70px] font-dashboard text-center font-bold max-w-[940px] mx-auto _mb-8">
          Loved by
          <span className="bg-[#111111] bg-gradient-to-r from-[#65F571] to-[#01B9FF] text-transparent bg-clip-text ml-3">
            creators
          </span>
        </div>
        <p className="mb-2 sm:mb-0 _sm:mt-6 sm:text-[21px] text-xl font-medium sm:leading-[32px] leading-snug text-gray-600 _text-left sm:text-center font-dashboard max-w-[700px] mx-auto">
          23,000+ creators and businesses have chosen Sprouty to grow their
          Instagram presence.
        </p>
      </div>

      <div className="mt-8 px-4 md:px-10">
        <div className="flex items-center gap-2 justify-center flex-wrap">
          <div
            className={`px-4 py-[8px] rounded-[32px] bg-[#0000000d] ${
              selectedCatg === "All" ? "text-black" : "text-[#515151bf]"
            } transition-all duration-300 cursor-pointer`}
            onClick={() => setSelectedCatg("All")}
          >
            All
          </div>
          <div
            className={`px-4 py-[8px] rounded-[32px] bg-[#0000000d] ${
              selectedCatg === "Business" ? "text-black" : "text-[#515151bf]"
            } transition-all duration-300 cursor-pointer`}
            onClick={() => setSelectedCatg("Business")}
          >
            Business
          </div>
          <div
            className={`px-4 py-[8px] rounded-[32px] bg-[#0000000d] ${
              selectedCatg === "Fitness" ? "text-black" : "text-[#515151bf]"
            } transition-all duration-300 cursor-pointer`}
            onClick={() => setSelectedCatg("Fitness")}
          >
            Fitness
          </div>
          <div
            className={`px-4 py-[8px] rounded-[32px] bg-[#0000000d] ${
              selectedCatg === "Beauty & Fashion"
                ? "text-black"
                : "text-[#515151bf]"
            } transition-all duration-300 cursor-pointer`}
            onClick={() => setSelectedCatg("Beauty & Fashion")}
          >
            Beauty & Fashion
          </div>
          <div
            className={`px-4 py-[8px] rounded-[32px] bg-[#0000000d] ${
              selectedCatg === "Photography" ? "text-black" : "text-[#515151bf]"
            } transition-all duration-300 cursor-pointer`}
            onClick={() => setSelectedCatg("Photography")}
          >
            Photography
          </div>
          <div
            className={`px-4 py-[8px] rounded-[32px] bg-[#0000000d] ${
              selectedCatg === "Others" ? "text-black" : "text-[#515151bf]"
            } transition-all duration-300 cursor-pointer`}
            onClick={() => setSelectedCatg("Others")}
          >
            Others
          </div>
        </div>

        <motion.div
          className={`mt-8 masonry sm:masonry-sm md:masonry-md gap-4 ${
            !showMore && "max-h-[1200px] overflow-hidden"
          } relative`}
        >
          {!showMore && (
            <div className="absolute bottom-0 left-0 w-full min-h-[300px] _bg-white/70 bg-gradient-to-t from-[#F9F9FA] via-white/70 pointer-events-none"></div>
          )}

          {TESTIMONIALS.filter((item) => {
            if (selectedCatg === "All") {
              return true;
            } else if (item.category === selectedCatg) {
              return true;
            } else {
              return false;
            }
          }).map((testimonial, i) => {
            console.log("testimonial");
            console.log(testimonial);

            return (
              <div
                key={`testimonial-${i}`}
                className="break-inside-avoid rounded-[32px] bg-white p-6 mb-4 overflow-hidden break-words"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.username}
                      loading="lazy"
                      width={48}
                      height={48}
                      className="min-w-[48px] h-auto rounded-full"
                    />

                    <div className="">
                      <div className="text-[#222222] font-semibold">
                        {testimonial.full_name}
                      </div>
                      <div className="text-[#808A99] font-medium break-words">
                        {testimonial.username}
                      </div>
                    </div>
                  </div>

                  {testimonial.socialIcon}
                </div>

                {testimonial.description}
              </div>
            );
          })}
        </motion.div>

        <div className="flex items-center justify-center">
          <div
            className="rounded-[12px] border shadow-lg py-2 w-full max-w-[150px] text-center bg-white cursor-pointer font-semibold font-dashboard"
            onClick={() => setShowMore(!showMore)}
          >
            {!showMore ? "Show more" : "Show less"}
          </div>
        </div>
      </div>
    </div>
  );
}
