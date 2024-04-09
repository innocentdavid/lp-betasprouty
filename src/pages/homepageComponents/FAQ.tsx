/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function FAQ() {
  const [expanded, setExpanded] = useState(false);

  const accordionIds = [
    {
      title: "How quickly will my followers grow?",
      description:
        "Follower growth typically ranges between 1,000 to 2,000 monthly, with our best-performing clients seeing up to 10,000 new followers.",
    },
    {
      title: "How long does it take to see first results?",
      description:
        "You can expect to see initial results within the first few days of using our service, with interactions typically starting within 24 hours. Over time, you'll experience significant growth as your account continues to engage with your target audience.",
    },
    {
      title: "Will SproutySocial work for my industry or niche?",
      description:
        "SproutySocial is designed to work across various industries and niches. Our tailored approach ensures that your account receives targeted growth specific to your niche.",
    },
    {
      title: "Is my account safe with your service?",
      description:
        "Yes, your Instagram account is safe with us. We prioritize security and compliance with Instagram's terms of service to ensure the safety and integrity of your account.",
    },
    {
      title: "Are the followers I receive real users?",
      description:
        "Absolutely, all the followers you receive through our service are real, active users who are genuinely interested in your content and niche.",
    },
    {
      title: "How can I maximize growth further?",
      description:
        "To maximize your growth further, we recommend reaching out to your dedicated account manager. They can provide personalized strategies and insights to help you achieve your growth goals effectively.",
    },
    {
      title: "Does SproutySocial offer a free trial?",
      description:
        "Yes, we offer a 7-day risk-free trial to help you experience the benefits of our service firsthand and decide if SproutySocial aligns with your goals.",
    },
    {
      title: "Will I lose followers if I cancel the subscription?",
      description:
        "No, you won't lose any followers if you decide to cancel your subscription. The followers you've gained through our service are real users who are not affiliated with us, ensuring that they remain yours to keep.",
    },
    {
      title: "Is SproutySocial secure?",
      description:
        "Yes, SproutySocial prioritizes the security of your account, there are many measures in place to protect your data and ensure a safe experience on our platform. You can trust that your information is safeguarded against unauthorized access or misuse.",
    },
    {
      title: "Do you have a refund policy?",
      description:
        "SproutySocial offers a 7-day free trial period. Not only that, we are so confident in our service that we guarantee you a 7 days money back guarantee if you are not satisfied with our service.",
    },
  ];  

  return (
    <div className="mb-16 md:mb-40 max-w-[1280px] px-[15px] mx-auto">
      <div className="max-w-[50rem] mx-auto">
        <div className="max-w-5xl mx-auto text-center mt-20 pb-4 px-4">
          <div className="text-[28px] md:text-[32px] lg:text-[64px] lg:leading-[70px] font-dashboard text-center font-bold max-w-[940px] mx-auto mb-8">
            Frequently asked <br />
            <span className="bg-[#111111] bg-gradient-to-r from-[#FED33B] to-[#FA3324] text-transparent bg-clip-text">
              questions
            </span>
          </div>
          <p className="mt-4 mb-2 sm:mb-0 sm:mt-6 sm:text-[21px] text-xl font-medium sm:leading-[32px] leading-snug text-gray-600 _text-left sm:text-center font-dashboard">
            Got more questions? Reach out to us for help!
          </p>
        </div>

        <div className="flex flex-col gap-4 mt-8">
          {accordionIds.map((item, i) => (
            <Accordion
              key={i}
              i={i}
              expanded={expanded}
              setExpanded={setExpanded}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const Accordion = ({ i, expanded, setExpanded, title, description }: any) => {
  const isOpen = i === expanded;

  return (
    <>
      <motion.div
        initial={false}
        animate={{
          backgroundColor: isOpen ? "white" : "white",
        }}
        onClick={() => setExpanded(isOpen ? false : i)}
        className="flex justify-between items-center p-[2rem_4rem] cursor-pointer bg-white text-[#111111] text-[18px] md:text-[20px] font-bold font-dashboard px-[25px] rounded-lg"
      >
        {/* Add title here */}
        <div className="flex items-center justify-between gap-3 w-full ">
          {title}
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${isOpen ? "rotate-90" : ""} transition-all duration-300 min-w-[32px] h-[32px]`}
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
      </motion.div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.p
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="text-base md:text-[18px] leading-[28px] px-[25px] break-words"
          >
            {description}
          </motion.p>
        )}
      </AnimatePresence>
    </>
  );
};
