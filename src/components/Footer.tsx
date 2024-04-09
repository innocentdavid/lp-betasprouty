import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="max-w-[1280px] mx-auto px-6 font-dashboard">
      <div className="grid md:grid-cols-3 auto-cols-auto xl:grid-cols-5 gap-10 md:gap-4 text-[#374151]">
        <div className="flex flex-col gap-2">
          <img
            alt="SproutySocial logo text"
            title="SproutySocial logo text"
            // fetchPriority="high"
            loading="lazy"
            width="640"
            height="40"
            decoding="async"
            data-nimg="1"
            className="inline-block w-[fit-content] h-10 text-transparent"
            src="/logo-light-long.png"
          />

          <p className="">© 2024 Pianalytica Ltd. All rights reserved.</p>

          <div className="rounded-[8px] bg-white px-3 py-2 flex items-center gap-2 border border-[#E5E7EB] w-[fit-content]">
            <div className="min-w-3 h-3 bg-[#0E9F6E] rounded-full"></div>
            <div className="whitespace-nowrap">All Systems Operational</div>
          </div>

          <div className="rounded-[8px] bg-white px-3 py-2 flex items-center gap-2 border border-[#E5E7EB] w-[fit-content]">
            <div className="min-w-3 h-3 bg-[#0E9F6E] rounded-full"></div>
            <div className="whitespace-nowrap">Paddle Payment Gateway</div>
          </div>
        </div>

        <div className="">
            <div className="mb-[20px] text-[#111827] font-bold uppercase">PRODUCT</div>

            <div className="flex flex-col gap-4">
                <p className="">Instagram Growth Service</p>
                <p className="">Instagram Real Followers</p>
                <p className="">Instagram Real Engagement</p>
                <p className="">Perks & Discounts <span className="text-blue-500">— New</span></p>
            </div>
        </div>
        
        <div className="">
            <div className="mb-[20px] text-[#111827] font-bold uppercase">Resources</div>

            <div className="flex flex-col gap-4">
                <p className="">Pricing</p>
                <p className="">Video Reviews</p>
                <p className="">Text Reviews</p>
                <p className="">Blog</p>
                <p className="">Contact Us</p>
                <p className="">Press Kit</p>
                <p className="">Careers <span className="text-blue-500">— We're hiring</span></p>
                <p className="">Affiliate <span className="text-blue-500">— Earn 25%</span></p>
            </div>
        </div>
        
        <div className="">
            <div className="mb-[20px] text-[#111827] font-bold uppercase">Compare</div>

            <div className="flex flex-col gap-4">
                <p className="">Upgrow Alternative</p>
                <p className="">Plixi Alternative</p>
                <p className="">Kicksta Alternative</p>
                <p className="">SocialFollow Alternative</p>
                <p className="">Buffer Alternative</p>
                <p className="">Path Social Alternative</p>
                <p className="">Nitreo Alternative</p>
                <p className="">SocialBoost Alternative</p>
                <p className="">View all comparisons</p>
            </div>
        </div>
        
        <div className="">
            <div className="mb-[20px] text-[#111827] font-bold uppercase">Tools</div>

            <div className="flex flex-col gap-4">
                <p className="">Real-Time Instagram</p>
                <p className="">Post Preview <span className="text-blue-500">— Coming Soon</span></p>
                <p className="">Fake Followers Checker on Instagram</p>
                <p className="">Instagram Profile Report</p>
                <p className="">Instagram Caption Generator</p>
            </div>
        </div>
      </div>

      <div className="mt-6 py-8 flex flex-col gap-4 md:flex-row items-center justify-between w-full">
        <svg
          width="340"
          height="32"
          viewBox="0 0 340 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_85_6657)">
            <path
              d="M12.709 20.764L14.4471 10.7256H17.2261L15.488 20.764H12.709Z"
              fill="#0058A0"
            />
            <path
              d="M25.5646 10.9718C24.7671 10.6874 23.9247 10.5448 23.0766 10.5506C20.3308 10.5506 18.3896 11.9122 18.3896 13.8641C18.3739 15.3064 19.7703 16.1102 20.8248 16.591C21.8794 17.0718 22.27 17.3968 22.2661 17.8372C22.2661 18.5083 21.401 18.816 20.6022 18.816C19.7009 18.8421 18.8057 18.6618 17.9873 18.2891L17.6299 18.1295L17.2393 20.3775C17.8877 20.6583 19.0887 20.9006 20.3347 20.9121C23.264 20.9121 25.1525 19.566 25.174 17.4833C25.174 16.341 24.4436 15.4718 22.8305 14.7564C21.854 14.291 21.2682 13.9872 21.2682 13.5103C21.2682 13.0929 21.772 12.6468 22.8598 12.6468C23.5726 12.6322 24.2808 12.7632 24.9396 13.0314L25.1896 13.1487L25.5646 10.9718Z"
              fill="#0058A0"
            />
            <path
              d="M32.6905 10.7429H30.5423C29.8764 10.7429 29.3706 10.9218 29.0874 11.5756L24.9609 20.7679H27.8785C27.8785 20.7679 28.357 19.5294 28.4644 19.2583H32.0226C32.1066 19.6102 32.3605 20.764 32.3605 20.764H34.9403L32.6905 10.7429ZM29.2651 17.2044C29.4936 16.6275 30.3704 14.3987 30.3704 14.3987C30.3704 14.3987 30.5989 13.8218 30.7395 13.4371L30.9348 14.3025L31.5793 17.2006L29.2651 17.2044Z"
              fill="#0058A0"
            />
            <path
              d="M10.383 10.7429L7.65873 17.5775L7.36775 16.1871C6.86781 14.5891 5.28399 12.8448 3.52051 11.9756L6.00852 20.7563H8.93789L13.3221 10.7429H10.383Z"
              fill="#0058A0"
            />
            <path
              d="M5.13525 10.7256H0.653316L0.618164 10.9352C4.10411 11.766 6.4105 13.7737 7.36743 16.1871L6.39097 11.5718C6.22497 10.9352 5.7387 10.7429 5.13525 10.7256Z"
              fill="#FAA61A"
            />
          </g>
          <g clip-path="url(#clip1_85_6657)">
            <path
              d="M55.4757 23.858C55.3996 23.7829 55.3093 23.7238 55.21 23.684C55.1025 23.6416 54.9879 23.6202 54.8723 23.6212C54.805 23.6217 54.7379 23.6275 54.6716 23.6387C54.6007 23.6496 54.5316 23.6693 54.4656 23.6974C54.3974 23.7271 54.334 23.7667 54.2772 23.8148C54.2137 23.8675 54.1603 23.9313 54.1197 24.0032C54.0492 23.8858 53.9486 23.7894 53.8283 23.7241C53.6991 23.6542 53.5541 23.6188 53.4072 23.6212C53.352 23.6216 53.2969 23.6264 53.2425 23.6356C53.1845 23.6462 53.1279 23.6631 53.0736 23.6861C53.0161 23.7106 52.9624 23.7432 52.914 23.7828C52.86 23.8268 52.8131 23.8789 52.775 23.9373V23.6768H52.3271V25.807H52.7791V24.6261C52.7778 24.5437 52.7925 24.4619 52.8224 24.3852C52.8486 24.319 52.8878 24.2588 52.9377 24.2081C52.9861 24.1622 53.0436 24.1271 53.1066 24.1051C53.1723 24.0801 53.2421 24.0675 53.3125 24.068C53.4462 24.0604 53.5762 24.1134 53.6667 24.2122C53.7572 24.3297 53.8018 24.476 53.7923 24.624V25.8091H54.2443V24.6261C54.243 24.5437 54.2576 24.4619 54.2875 24.3852C54.3138 24.319 54.353 24.2588 54.4028 24.2081C54.4512 24.1622 54.5088 24.1271 54.5717 24.1051C54.6375 24.0802 54.7073 24.0676 54.7776 24.068C54.911 24.0606 55.0407 24.1135 55.1308 24.2122C55.2216 24.3295 55.2666 24.4759 55.2574 24.624V25.8091H55.7084V24.4706C55.7105 24.352 55.6895 24.2342 55.6466 24.1236C55.608 24.0245 55.5499 23.9342 55.4757 23.858Z"
              fill="#1D1D1B"
            />
            <path
              d="M57.8579 23.9351C57.7833 23.8415 57.6891 23.7652 57.582 23.7117C57.4599 23.6512 57.3249 23.6215 57.1887 23.6252C56.904 23.6222 56.6307 23.7365 56.4329 23.9413C56.3348 24.0432 56.2578 24.1636 56.2064 24.2955C56.0966 24.5857 56.0966 24.9061 56.2064 25.1964C56.2575 25.3284 56.3345 25.4488 56.4329 25.5506C56.6319 25.7543 56.906 25.8671 57.1907 25.8625C57.3267 25.8664 57.4616 25.8374 57.584 25.7781C57.6915 25.7237 57.7856 25.6464 57.86 25.5516V25.8069H58.3233V23.6767H57.8579V23.9351ZM57.8404 25.0131C57.8113 25.0932 57.7665 25.1668 57.7086 25.2293C57.6507 25.2909 57.5806 25.3397 57.5027 25.3724C57.4199 25.4084 57.3304 25.4263 57.2401 25.4249C57.1473 25.4264 57.0553 25.4078 56.9704 25.3704C56.8921 25.3364 56.822 25.2862 56.7645 25.2231C56.7087 25.1599 56.6657 25.0865 56.6378 25.0069C56.6079 24.9219 56.5929 24.8324 56.5935 24.7423C56.5927 24.6522 56.6077 24.5626 56.6378 24.4777C56.6657 24.3978 56.7087 24.3241 56.7645 24.2605C56.8223 24.1981 56.8924 24.1483 56.9704 24.1143C57.0552 24.0763 57.1473 24.0577 57.2401 24.0597C57.3304 24.0584 57.4199 24.0763 57.5027 24.1122C57.5808 24.1446 57.651 24.1934 57.7086 24.2553C57.7663 24.3177 57.8111 24.3908 57.8404 24.4705C57.8719 24.5576 57.8876 24.6497 57.8867 24.7423C57.8877 24.8346 57.872 24.9264 57.8404 25.0131Z"
              fill="#1D1D1B"
            />
            <path
              d="M60.4592 24.7415C60.2984 24.627 60.1108 24.5561 59.9145 24.5355L59.6942 24.5026C59.6458 24.4944 59.5994 24.4861 59.5562 24.4769C59.5177 24.4684 59.4803 24.4553 59.445 24.4377C59.4158 24.4228 59.3904 24.4013 59.3709 24.3749C59.3516 24.3479 59.3419 24.3154 59.3431 24.2823C59.3413 24.2069 59.3808 24.1366 59.446 24.099C59.5358 24.0469 59.639 24.0226 59.7426 24.029C59.8085 24.0286 59.8744 24.0344 59.9392 24.0465C60.0011 24.0575 60.0624 24.0723 60.1225 24.0908C60.1762 24.1068 60.2289 24.1264 60.28 24.1494C60.3212 24.1679 60.3614 24.1885 60.4005 24.2112L60.6002 23.8488C60.4799 23.7737 60.3486 23.7177 60.211 23.683C60.0563 23.6431 59.8972 23.6234 59.7374 23.6243C59.6136 23.6225 59.4902 23.6385 59.3709 23.6717C59.2709 23.6995 59.177 23.7456 59.0939 23.8076C59.0193 23.864 58.9593 23.9374 58.9189 24.0218C58.8766 24.1108 58.8555 24.2084 58.8571 24.307C58.8533 24.4648 58.9206 24.616 59.0404 24.7188C59.1966 24.838 59.384 24.9095 59.5799 24.9247L59.8023 24.9536C59.9006 24.9622 59.9959 24.9913 60.0823 25.039C60.1367 25.0697 60.1708 25.1269 60.1719 25.1893C60.171 25.2711 60.1234 25.3451 60.0494 25.3798C59.9363 25.433 59.8117 25.457 59.687 25.4498C59.6084 25.4503 59.5299 25.4445 59.4522 25.4323C59.3878 25.4215 59.3245 25.4053 59.2628 25.3839C59.2096 25.3657 59.1583 25.3426 59.1094 25.315C59.0658 25.2898 59.0238 25.2619 58.9837 25.2316L58.7686 25.5806C58.8431 25.6371 58.9244 25.6842 59.0105 25.7206C59.0911 25.7553 59.1744 25.7832 59.2597 25.804C59.3357 25.8237 59.4131 25.8371 59.4913 25.8442C59.5634 25.8514 59.6272 25.8545 59.6828 25.8545C59.8218 25.8563 59.9604 25.839 60.0947 25.803C60.2057 25.7749 60.3104 25.7264 60.4036 25.6599C60.4808 25.6035 60.5442 25.5303 60.5889 25.4457C60.6334 25.3588 60.656 25.2623 60.6548 25.1646C60.6622 25.0002 60.5893 24.8424 60.4592 24.7415Z"
              fill="#1D1D1B"
            />
            <path
              d="M64.8102 23.9321C64.7219 23.8336 64.6133 23.7553 64.492 23.7025C64.3619 23.647 64.2216 23.6193 64.0802 23.6212C63.9328 23.6196 63.7865 23.6473 63.6498 23.7025C63.5234 23.7547 63.4094 23.833 63.3152 23.9321C63.2193 24.0342 63.145 24.1547 63.0969 24.2863C63.0441 24.4325 63.0179 24.587 63.0197 24.7424C63.0173 24.8994 63.0442 25.0555 63.099 25.2026C63.1488 25.3345 63.2252 25.4547 63.3234 25.5558C63.4213 25.6546 63.5388 25.7317 63.6683 25.7823C63.8087 25.8371 63.9583 25.8644 64.109 25.8626C64.2652 25.8632 64.4207 25.8407 64.5703 25.7957C64.7223 25.7477 64.8626 25.6684 64.9821 25.563L64.7515 25.2315C64.663 25.3024 64.5636 25.3584 64.457 25.3972C64.3542 25.4354 64.2455 25.4553 64.1358 25.4559C64.0619 25.4562 63.9884 25.4458 63.9175 25.425C63.8492 25.405 63.7852 25.3721 63.7291 25.3283C63.6706 25.282 63.6213 25.225 63.5839 25.1604C63.5412 25.084 63.5133 25.0001 63.5015 24.9133H65.0758C65.0758 24.8866 65.081 24.8588 65.083 24.8289C65.0851 24.799 65.083 24.7692 65.083 24.7404C65.0852 24.5854 65.0597 24.4313 65.0079 24.2853C64.9651 24.156 64.898 24.0362 64.8102 23.9321ZM63.5098 24.5602C63.5209 24.4866 63.542 24.4149 63.5726 24.347C63.6007 24.2855 63.6394 24.2294 63.6869 24.1813C63.7341 24.1337 63.791 24.0968 63.8537 24.0732C63.9244 24.0465 63.9995 24.0336 64.075 24.0351C64.2096 24.03 64.3404 24.0798 64.4375 24.173C64.5377 24.279 64.6003 24.4151 64.6156 24.5602H63.5098Z"
              fill="#1D1D1B"
            />
            <path
              d="M70.9879 23.9353C70.8272 23.7311 70.5783 23.6163 70.3186 23.6264C70.034 23.6235 69.7607 23.7378 69.5629 23.9425C69.4644 24.0444 69.3871 24.1648 69.3354 24.2967C69.2255 24.587 69.2255 24.9074 69.3354 25.1976C69.3869 25.3296 69.4642 25.4501 69.5629 25.5518C69.6587 25.6512 69.7736 25.7303 69.9006 25.7845C70.0327 25.8408 70.175 25.8692 70.3186 25.8679C70.4546 25.8716 70.5895 25.8427 70.712 25.7835C70.8192 25.7288 70.9134 25.6515 70.9879 25.5569V25.8123H71.4522V23.6769H70.9879V23.9353ZM70.9694 25.0133C70.9407 25.0934 70.8962 25.1669 70.8386 25.2295C70.7806 25.291 70.7105 25.3397 70.6327 25.3726C70.5502 25.4085 70.4611 25.4264 70.3712 25.4251C70.278 25.4266 70.1857 25.408 70.1004 25.3706C70.0219 25.337 69.9517 25.2867 69.8945 25.2233C69.8387 25.1601 69.7957 25.0867 69.7678 25.0071C69.7379 24.9221 69.7229 24.8326 69.7235 24.7425C69.7227 24.6524 69.7377 24.5629 69.7678 24.4779C69.7957 24.398 69.8387 24.3243 69.8945 24.2607C69.952 24.1979 70.0222 24.1481 70.1004 24.1145C70.2706 24.0431 70.4624 24.0431 70.6327 24.1145C70.7107 24.147 70.7809 24.1958 70.8386 24.2576C70.896 24.32 70.9404 24.3931 70.9694 24.4728C71.0017 24.5597 71.0178 24.6518 71.0167 24.7446C71.0163 24.8366 70.9989 24.9277 70.9652 25.0133H70.9694Z"
              fill="#1D1D1B"
            />
            <path
              d="M62.4517 25.3827C62.381 25.4099 62.3061 25.4242 62.2303 25.4249C62.1854 25.4256 62.1407 25.4179 62.0985 25.4023C62.0593 25.3872 62.0241 25.3632 61.9956 25.3323C61.9632 25.2966 61.9386 25.2545 61.9235 25.2087C61.9046 25.1499 61.8955 25.0883 61.8967 25.0265V24.0998H62.6432V23.6767H61.8967V23.0321H61.4303V23.6767H61.001V24.0998H61.4262V25.0357C61.4262 25.3189 61.4931 25.5269 61.6321 25.6618C61.7847 25.8025 61.9881 25.875 62.1953 25.8625C62.3196 25.8644 62.4431 25.8434 62.5598 25.8007C62.628 25.7745 62.694 25.7432 62.7575 25.7071L62.5989 25.3179C62.5512 25.3423 62.502 25.364 62.4517 25.3827Z"
              fill="#1D1D1B"
            />
            <path
              d="M66.6463 23.6212C66.5244 23.6193 66.4036 23.6439 66.2922 23.6933C66.1834 23.7578 66.0925 23.8484 66.0275 23.9568V23.6768H65.6064V25.807H66.0327V24.6384C66.0312 24.5562 66.0441 24.4743 66.0708 24.3965C66.0925 24.3301 66.1276 24.2687 66.1737 24.2163C66.2176 24.1673 66.2722 24.1292 66.3333 24.1051C66.3988 24.0789 66.4688 24.066 66.5393 24.067C66.6005 24.0677 66.6616 24.0746 66.7215 24.0876C66.7533 24.0934 66.7847 24.1016 66.8152 24.1123L66.9521 23.6675C66.9149 23.6559 66.8771 23.6462 66.8389 23.6387C66.7753 23.6277 66.7109 23.6219 66.6463 23.6212Z"
              fill="#1D1D1B"
            />
            <path
              d="M73.1063 23.6212C72.9844 23.6192 72.8635 23.6438 72.7521 23.6933C72.6432 23.7575 72.5522 23.8482 72.4875 23.9568V23.6768H72.0654V25.807H72.4927V24.6384C72.4914 24.5563 72.5039 24.4745 72.5297 24.3965C72.5519 24.3303 72.5869 24.269 72.6327 24.2163C72.6765 24.1673 72.7311 24.1292 72.7923 24.1051C72.8577 24.0789 72.9277 24.066 72.9982 24.067C73.0595 24.0677 73.1205 24.0746 73.1804 24.0876C73.2122 24.0935 73.2435 24.1018 73.2741 24.1123L73.4111 23.6675C73.3735 23.6557 73.3354 23.6461 73.2968 23.6387C73.2339 23.6278 73.1702 23.6219 73.1063 23.6212Z"
              fill="#1D1D1B"
            />
            <path
              d="M75.2769 22.8117V23.935C75.1162 23.7308 74.8673 23.616 74.6077 23.6261C74.3228 23.6235 74.0493 23.7377 73.8509 23.9422C73.7531 24.0444 73.6761 24.1647 73.6244 24.2964C73.5145 24.5867 73.5145 24.9071 73.6244 25.1973C73.6759 25.3291 73.7529 25.4495 73.8509 25.5515C74.0493 25.756 74.3228 25.8702 74.6077 25.8676C74.7436 25.8713 74.8785 25.8424 75.001 25.7832C75.1082 25.7285 75.2024 25.6512 75.2769 25.5566V25.812H75.7413V22.8117H75.2769ZM75.2584 25.013C75.2297 25.0931 75.1852 25.1666 75.1276 25.2292C75.0696 25.2907 74.9995 25.3395 74.9217 25.3723C74.8392 25.4082 74.7501 25.4261 74.6602 25.4249C74.567 25.4263 74.4747 25.4077 74.3894 25.3703C74.3128 25.336 74.2443 25.2858 74.1886 25.2231C74.1321 25.1604 74.089 25.0868 74.062 25.0068C74.0317 24.9219 74.0164 24.8324 74.0167 24.7422C74.0162 24.6521 74.0315 24.5625 74.062 24.4776C74.089 24.3974 74.1321 24.3235 74.1886 24.2604C74.2446 24.1982 74.313 24.1484 74.3894 24.1142C74.5596 24.0428 74.7514 24.0428 74.9217 24.1142C74.9997 24.1467 75.0699 24.1955 75.1276 24.2573C75.185 24.3197 75.2294 24.3928 75.2584 24.4725C75.2902 24.5595 75.3063 24.6516 75.3057 24.7443C75.3061 24.836 75.2901 24.927 75.2584 25.013Z"
              fill="#1D1D1B"
            />
            <path
              d="M67.759 24.2492C67.8193 24.1888 67.8911 24.1412 67.9701 24.1092C68.0543 24.0757 68.1441 24.0589 68.2347 24.0598C68.334 24.0589 68.4326 24.0756 68.5261 24.1092C68.609 24.1396 68.6855 24.1854 68.7516 24.2441L68.975 23.8724C68.8895 23.8035 68.794 23.7479 68.6919 23.7076C68.398 23.5923 68.0714 23.5923 67.7776 23.7076C67.505 23.814 67.2878 24.0271 67.1763 24.2976C67.061 24.5829 67.061 24.9019 67.1763 25.1872C67.2886 25.4571 67.5055 25.67 67.7776 25.7771C68.0717 25.8911 68.3977 25.8911 68.6919 25.7771C68.7936 25.736 68.889 25.6806 68.975 25.6124L68.7516 25.2407C68.6855 25.299 68.609 25.3445 68.5261 25.3746C68.4327 25.4084 68.3341 25.4255 68.2347 25.425C68.1441 25.4255 68.0542 25.4083 67.9701 25.3746C67.8908 25.343 67.819 25.2953 67.759 25.2345C67.6984 25.1729 67.6508 25.0998 67.619 25.0193C67.5504 24.8411 67.5504 24.6437 67.619 24.4654C67.651 24.3848 67.6986 24.3113 67.759 24.2492Z"
              fill="#1D1D1B"
            />
            <path
              d="M76.7205 25.4951C76.7502 25.4951 76.7797 25.501 76.807 25.5126C76.8333 25.5237 76.8574 25.5394 76.8781 25.559C76.8984 25.5785 76.9145 25.602 76.9254 25.6279C76.9375 25.6544 76.9435 25.6833 76.9429 25.7124C76.9434 25.7415 76.9374 25.7703 76.9254 25.7968C76.9144 25.8227 76.8983 25.8462 76.8781 25.8658C76.8574 25.8857 76.8334 25.9018 76.807 25.9131C76.7796 25.9244 76.7502 25.93 76.7205 25.9296C76.6902 25.9301 76.6601 25.9245 76.632 25.9131C76.5785 25.8915 76.5356 25.8497 76.5126 25.7968C76.5014 25.7701 76.4958 25.7413 76.4961 25.7124C76.4956 25.6834 76.5012 25.6546 76.5126 25.6279C76.5237 25.6021 76.5398 25.5787 76.5599 25.559C76.6034 25.518 76.6608 25.4952 76.7205 25.4951ZM76.7205 25.8699C76.7414 25.87 76.7621 25.8658 76.7813 25.8575C76.7997 25.8494 76.8165 25.8379 76.8307 25.8236C76.8447 25.8093 76.8559 25.7925 76.8636 25.7742C76.8719 25.7546 76.8761 25.7336 76.876 25.7124C76.8762 25.6915 76.872 25.6708 76.8636 25.6516C76.8561 25.6328 76.8449 25.6157 76.8307 25.6012C76.8162 25.5875 76.7995 25.5764 76.7813 25.5682C76.7621 25.56 76.7414 25.5558 76.7205 25.5559C76.699 25.5557 76.6776 25.5599 76.6577 25.5682C76.6394 25.5761 76.6227 25.5873 76.6083 25.6012C76.5938 25.6156 76.5822 25.6327 76.5743 25.6516C76.5663 25.6709 76.5625 25.6916 76.563 25.7124C76.5626 25.7335 76.5664 25.7545 76.5743 25.7742C76.5825 25.7926 76.594 25.8093 76.6083 25.8236C76.6223 25.8381 76.6392 25.8496 76.6577 25.8575C76.6773 25.8673 76.6987 25.8729 76.7205 25.874V25.8699ZM76.7329 25.6156C76.7544 25.6139 76.7758 25.6205 76.7926 25.6341C76.8067 25.6452 76.8144 25.6626 76.8132 25.6805C76.814 25.6949 76.8088 25.7091 76.7988 25.7196C76.7869 25.7307 76.7717 25.7375 76.7555 25.7391L76.8163 25.8081H76.7535L76.6999 25.7412H76.6927V25.8081H76.6392V25.6156H76.7329ZM76.6951 25.6713V25.7151H76.7466C76.7547 25.7167 76.763 25.7167 76.771 25.7151C76.7765 25.7108 76.7794 25.704 76.7788 25.6971C76.7808 25.6902 76.7788 25.6827 76.7736 25.6778C76.7656 25.6756 76.7572 25.6756 76.7492 25.6778L76.6951 25.6713Z"
              fill="#1D1D1B"
            />
            <path
              d="M60.9714 13.7246C60.9699 11.2706 62.0929 8.95119 64.0191 7.4306C60.7303 4.82422 55.9894 5.18913 53.1383 8.26812C50.2872 11.3471 50.2872 16.1021 53.1383 19.181C55.9894 22.26 60.7303 22.6249 64.0191 20.0186C62.0928 18.4981 60.9697 16.1786 60.9714 13.7246Z"
              fill="#E30D17"
            />
            <path
              d="M64.0193 20.0144C65.7025 20.0144 67.0669 17.1965 67.0669 13.7205C67.0669 10.2444 65.7025 7.42649 64.0193 7.42649C62.3362 7.42649 60.9717 10.2444 60.9717 13.7205C60.9717 17.1965 62.3362 20.0144 64.0193 20.0144Z"
              fill="#EB610A"
            />
            <path
              d="M76.4814 18.0622V17.8274H76.3867V17.7636H76.6502V17.8274H76.5473V18.0622H76.4814ZM76.9849 18.0622V17.8562L76.9169 18.0354H76.8428L76.7759 17.8562V18.0622H76.7048V17.7636H76.8078L76.8819 17.9551L76.956 17.7636H77.059V18.0622H76.9849Z"
              fill="#F69F00"
            />
            <path
              d="M68.9978 5.69359C67.1899 5.69145 65.4346 6.30231 64.0186 7.42642C65.944 8.94773 67.0671 11.2666 67.0671 13.7204C67.0671 16.1742 65.944 18.4931 64.0186 20.0144C66.778 22.2049 70.6428 22.3412 73.5496 20.3506C76.4564 18.36 77.7264 14.7073 76.6816 11.3427C75.6367 7.97811 72.5209 5.68739 68.9978 5.69359Z"
              fill="#F69F00"
            />
          </g>
          <g clip-path="url(#clip2_85_6657)">
            <path
              d="M99.7996 13.8856C99.6091 15.1498 98.6537 15.1498 97.7227 15.1498H97.1957L97.5652 12.7887C97.5853 12.6453 97.7079 12.5391 97.8516 12.5405H98.0937C98.7254 12.5405 99.3212 12.5405 99.6292 12.9042C99.8139 13.1149 99.8698 13.4353 99.7996 13.8856ZM99.4 10.5792H95.8994C95.6583 10.5802 95.4543 10.7588 95.4196 10.9992L94.0044 20.0351C93.9895 20.1199 94.0129 20.2071 94.0683 20.2727C94.1237 20.3383 94.2054 20.3756 94.2909 20.3743H95.9624C96.2021 20.3743 96.4063 20.1986 96.4437 19.96L96.8218 17.5167C96.8592 17.2789 97.0627 17.1038 97.3016 17.1039H98.4088C100.712 17.1039 102.041 15.9797 102.389 13.7542C102.545 12.7801 102.389 12.0152 101.942 11.4797C101.448 10.8909 100.567 10.5792 99.4 10.5792Z"
              fill="#253B80"
            />
            <path
              d="M107.515 17.1227C107.383 18.0651 106.571 18.7581 105.626 18.7347C105.141 18.7347 104.751 18.5774 104.502 18.2801C104.244 17.9434 104.148 17.5088 104.24 17.0938C104.373 16.1556 105.175 15.4621 106.116 15.4731C106.538 15.4502 106.948 15.6186 107.233 15.932C107.496 16.2682 107.599 16.7033 107.515 17.1227ZM109.856 13.8394H108.176C108.032 13.8379 107.909 13.9441 107.889 14.0876L107.815 14.5595L107.697 14.3878C107.335 13.8581 106.527 13.6806 105.719 13.6806C103.869 13.6806 102.282 15.0921 101.981 17.0736C101.82 18.0622 102.048 19.0075 102.605 19.6714C103.115 20.2775 103.846 20.5373 104.714 20.5373C105.585 20.546 106.422 20.1975 107.033 19.5718L106.957 20.0408C106.942 20.1257 106.965 20.2128 107.021 20.2785C107.076 20.3441 107.158 20.3813 107.243 20.38H108.752C108.991 20.3807 109.195 20.2054 109.231 19.9672L110.142 14.1742C110.156 14.09 110.132 14.0041 110.076 13.9395C110.021 13.8749 109.94 13.8383 109.856 13.8394Z"
              fill="#253B80"
            />
            <path
              d="M118.77 13.8393H117.087C116.925 13.84 116.775 13.9204 116.684 14.0544L114.364 17.4935L113.38 14.1886C113.318 13.981 113.128 13.839 112.913 13.8393H111.26C111.165 13.8368 111.075 13.8818 111.019 13.9596C110.964 14.0374 110.951 14.1377 110.983 14.2275L112.837 19.7117L111.094 22.1912C111.027 22.2799 111.016 22.3995 111.067 22.4986C111.118 22.5976 111.221 22.6583 111.331 22.6544H113.007C113.167 22.6551 113.316 22.5762 113.407 22.4437L119.009 14.2997C119.074 14.2108 119.083 14.092 119.032 13.9939C118.981 13.8959 118.879 13.8358 118.77 13.8393Z"
              fill="#253B80"
            />
            <path
              d="M124.752 13.8855C124.562 15.1498 123.606 15.1498 122.675 15.1498H122.147L122.518 12.7887C122.538 12.6452 122.66 12.539 122.804 12.5404H123.046C123.676 12.5404 124.274 12.5404 124.582 12.9041C124.759 13.1148 124.815 13.4352 124.752 13.8855ZM124.348 10.5849H120.843C120.604 10.5855 120.401 10.761 120.363 10.9991L118.95 20.035C118.935 20.1199 118.958 20.207 119.014 20.2726C119.069 20.3383 119.151 20.3755 119.236 20.3742H121.028C121.195 20.3742 121.338 20.2519 121.365 20.0855L121.766 17.5238C121.803 17.286 122.007 17.111 122.246 17.1111H123.351C125.656 17.1111 126.985 15.9868 127.333 13.7614C127.489 12.7872 127.333 12.0223 126.886 11.4869C126.392 10.8909 125.511 10.5791 124.341 10.5791L124.348 10.5849Z"
              fill="#179BD7"
            />
            <path
              d="M132.46 17.1227C132.327 18.0651 131.515 18.7581 130.57 18.7347C130.085 18.7347 129.695 18.5774 129.446 18.2801C129.189 17.9434 129.093 17.5088 129.184 17.0938C129.317 16.1581 130.116 15.4657 131.055 15.4731C131.476 15.45 131.885 15.6185 132.17 15.932C132.437 16.2664 132.542 16.7022 132.46 17.1227ZM134.794 13.8394H133.121C132.978 13.8379 132.855 13.9441 132.835 14.0876L132.761 14.5595L132.643 14.3878C132.281 13.8581 131.473 13.6806 130.665 13.6806C128.814 13.6806 127.235 15.0921 126.927 17.0736C126.768 18.0622 126.994 19.0075 127.551 19.6714C128.062 20.2775 128.792 20.5373 129.66 20.5373C130.531 20.546 131.368 20.1975 131.978 19.5718L131.903 20.0408C131.888 20.1257 131.911 20.2128 131.966 20.2785C132.022 20.3441 132.103 20.3813 132.189 20.38H133.697C133.936 20.38 134.139 20.2048 134.176 19.9672L135.082 14.1944C135.103 14.1069 135.082 14.0148 135.025 13.9452C134.969 13.8756 134.884 13.8365 134.794 13.8394Z"
              fill="#179BD7"
            />
            <path
              d="M136.768 10.8274L135.335 20.0293C135.321 20.1141 135.344 20.2013 135.399 20.2669C135.455 20.3325 135.536 20.3698 135.622 20.3685H137.07C137.31 20.3685 137.514 20.1928 137.551 19.9542L138.966 10.9183C138.981 10.8335 138.958 10.7463 138.903 10.6807C138.847 10.6151 138.765 10.5778 138.68 10.5791H137.056C136.911 10.577 136.788 10.6834 136.768 10.8274Z"
              fill="#179BD7"
            />
          </g>
          <g clip-path="url(#clip3_85_6657)">
            <path
              d="M161.131 10.6943C160.762 11.1316 160.171 11.4765 159.579 11.4273C159.505 10.836 159.795 10.2078 160.134 9.81973C160.503 9.37012 161.15 9.04985 161.673 9.02521C161.735 9.64112 161.495 10.2447 161.131 10.6943ZM161.667 11.5443C160.811 11.495 160.078 12.0308 159.672 12.0308C159.259 12.0308 158.637 11.5689 157.959 11.5812C157.079 11.5935 156.26 12.0924 155.81 12.887C154.886 14.476 155.57 16.8288 156.463 18.1222C156.9 18.7627 157.424 19.4649 158.113 19.4402C158.766 19.4156 159.025 19.0153 159.813 19.0153C160.608 19.0153 160.836 19.4402 161.526 19.4279C162.24 19.4156 162.69 18.7874 163.127 18.1468C163.626 17.4201 163.829 16.7118 163.841 16.6748C163.829 16.6625 162.462 16.139 162.449 14.5622C162.437 13.2442 163.527 12.616 163.577 12.579C162.961 11.6675 162 11.5689 161.667 11.5443ZM166.613 9.75814V19.3602H168.104V16.0774H170.167C172.052 16.0774 173.376 14.784 173.376 12.9116C173.376 11.0392 172.076 9.75814 170.216 9.75814H166.613ZM168.104 11.0146H169.822C171.115 11.0146 171.854 11.7044 171.854 12.9178C171.854 14.1311 171.115 14.8271 169.816 14.8271H168.104V11.0146ZM176.098 19.4341C177.034 19.4341 177.903 18.9598 178.297 18.2084H178.328V19.3602H179.707V14.5807C179.707 13.1949 178.599 12.3018 176.892 12.3018C175.31 12.3018 174.139 13.2072 174.096 14.4514H175.439C175.55 13.8601 176.098 13.4721 176.849 13.4721C177.761 13.4721 178.272 13.8971 178.272 14.6793V15.2089L176.412 15.3198C174.681 15.4245 173.745 16.1328 173.745 17.3646C173.745 18.6088 174.712 19.4341 176.098 19.4341ZM176.498 18.2946C175.704 18.2946 175.199 17.9128 175.199 17.3277C175.199 16.7241 175.685 16.373 176.615 16.3176L178.272 16.2129V16.7549C178.272 17.6541 177.508 18.2946 176.498 18.2946ZM181.549 21.9716C183.002 21.9716 183.686 21.4173 184.283 19.7359L186.901 12.3942H185.386L183.631 18.0668H183.6L181.844 12.3942H180.286L182.811 19.3848L182.676 19.8098C182.448 20.5304 182.079 20.8076 181.42 20.8076C181.302 20.8076 181.075 20.7952 180.982 20.7829V21.9347C181.068 21.9593 181.438 21.9716 181.549 21.9716Z"
              fill="black"
            />
          </g>
          <path
            d="M222.678 15.5032V19.1688H221.515V10.1164H224.599C224.967 10.1087 225.333 10.174 225.676 10.3085C226.019 10.443 226.331 10.644 226.596 10.9C226.863 11.1405 227.076 11.4354 227.22 11.7649C227.364 12.0945 227.436 12.451 227.43 12.8105C227.438 13.172 227.367 13.5308 227.223 13.8624C227.079 14.194 226.865 14.4906 226.596 14.7318C226.057 15.2461 225.391 15.503 224.599 15.5025L222.678 15.5032ZM222.678 11.2309V14.3909H224.628C224.842 14.3972 225.054 14.3589 225.252 14.2783C225.451 14.1977 225.63 14.0766 225.778 13.9228C225.926 13.7791 226.044 13.6071 226.124 13.4171C226.204 13.2271 226.246 13.0229 226.246 12.8166C226.246 12.6104 226.204 12.4062 226.124 12.2162C226.044 12.0262 225.926 11.8542 225.778 11.7105C225.632 11.5534 225.453 11.4294 225.255 11.3466C225.056 11.2638 224.843 11.2241 224.628 11.2301L222.678 11.2309ZM230.11 12.7729C230.969 12.7729 231.648 13.0026 232.145 13.462C232.643 13.9214 232.891 14.5512 232.891 15.3515V19.1688H231.778V18.3093H231.728C231.246 19.0172 230.606 19.3711 229.807 19.3711C229.124 19.3711 228.553 19.1688 228.094 18.7644C227.874 18.5787 227.697 18.3462 227.578 18.0838C227.459 17.8214 227.4 17.5357 227.405 17.2475C227.405 16.6066 227.647 16.0969 228.132 15.7185C228.616 15.34 229.263 15.1502 230.072 15.1493C230.762 15.1493 231.331 15.2757 231.778 15.5285V15.2627C231.779 15.0662 231.737 14.872 231.654 14.6939C231.57 14.5159 231.449 14.3586 231.297 14.2334C230.99 13.956 230.589 13.8046 230.175 13.8094C229.525 13.8094 229.011 14.0834 228.633 14.6314L227.609 13.9864C228.172 13.1774 229.006 12.7729 230.11 12.7729ZM228.605 17.2728C228.605 17.4208 228.639 17.5669 228.706 17.6988C228.773 17.8307 228.871 17.9447 228.991 18.0312C229.248 18.2335 229.568 18.3407 229.895 18.3346C230.385 18.3338 230.856 18.1384 231.203 17.7914C231.588 17.4288 231.781 17.0034 231.781 16.5151C231.418 16.2262 230.912 16.0818 230.264 16.0818C229.791 16.0818 229.398 16.1956 229.082 16.4234C228.764 16.6545 228.605 16.9355 228.605 17.2728ZM239.276 12.9752L235.393 21.8991H234.192L235.633 18.7766L233.08 12.9752H234.344L236.189 17.4245H236.215L238.01 12.9752H239.276Z"
            fill="#5F6368"
          />
          <path
            d="M217.978 14.713C217.979 14.3586 217.949 14.0049 217.889 13.6556H212.984V15.6585H215.793C215.736 15.9784 215.614 16.2833 215.436 16.5549C215.257 16.8266 215.026 17.0592 214.755 17.2389V18.539H216.431C217.413 17.634 217.978 16.2956 217.978 14.713Z"
            fill="#4285F4"
          />
          <path
            d="M212.985 19.7951C214.389 19.7951 215.57 19.3342 216.432 18.5397L214.756 17.2396C214.289 17.556 213.688 17.7365 212.985 17.7365C211.629 17.7365 210.478 16.8221 210.066 15.5899H208.339V16.9297C208.772 17.7911 209.435 18.5151 210.256 19.0211C211.076 19.5271 212.021 19.795 212.985 19.7951Z"
            fill="#34A853"
          />
          <path
            d="M210.066 15.5899C209.848 14.9442 209.848 14.2449 210.066 13.5992V12.2594H208.339C207.975 12.984 207.785 13.7836 207.785 14.5946C207.785 15.4055 207.975 16.2052 208.339 16.9297L210.066 15.5899Z"
            fill="#FBBC04"
          />
          <path
            d="M212.985 11.4526C213.727 11.4405 214.444 11.7207 214.98 12.2327L216.465 10.7484C215.523 9.86433 214.277 9.37898 212.985 9.39407C212.021 9.39411 211.076 9.66208 210.256 10.1681C209.435 10.674 208.772 11.3981 208.339 12.2594L210.066 13.5992C210.478 12.367 211.629 11.4526 212.985 11.4526Z"
            fill="#EA4335"
          />
          <g clip-path="url(#clip4_85_6657)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M262.775 7.96011L260 14.3847H261.822L262.332 13.1004H265.283L265.79 14.3847H267.63L264.858 7.96011H262.775ZM263.795 9.45695L264.706 11.7037H262.884L263.795 9.45695Z"
              fill="#016FD0"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M267.819 14.3847V7.96011L270.376 7.96922L271.863 12.1106L273.315 7.96011H275.85V14.3847H274.244V9.65127L272.544 14.3847H271.135L269.425 9.65127V14.3847H267.819Z"
              fill="#016FD0"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M276.948 14.3847V7.96011H282.192V9.39623H278.573V10.4953H282.107V11.8495H278.573V12.9911H282.192V14.3847H276.948Z"
              fill="#016FD0"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M283.121 7.96011V14.3847H284.727V12.1045H285.404L287.326 14.3847H289.288L287.162 12.0195C288.173 11.9188 288.939 11.0618 288.926 10.046C288.926 8.69487 287.864 7.96011 286.679 7.96011H283.121ZM284.727 9.39927H286.549C286.948 9.37481 287.294 9.67445 287.326 10.0733C287.3 10.4597 286.976 10.7577 286.588 10.7504H284.727V9.39927Z"
              fill="#016FD0"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M291.236 14.3847H289.597V7.96011H291.236V14.3847Z"
              fill="#016FD0"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M295.123 14.3847H294.77C293.058 14.3847 292.017 13.0366 292.017 11.1997C292.017 9.31729 293.046 7.96011 295.208 7.96011H296.984V9.47821H295.144C294.266 9.47821 293.644 10.1644 293.644 11.2119C293.644 12.4567 294.354 12.9789 295.378 12.9789H295.8L295.123 14.3816V14.3847Z"
              fill="#016FD0"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M298.62 7.96011L295.854 14.3847H297.649L298.159 13.1004H301.122L301.629 14.3847H303.469L300.715 7.96011H298.62ZM299.641 9.45695L300.551 11.7037H298.73L299.641 9.45695Z"
              fill="#016FD0"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M303.663 14.3847V7.96011H305.703L308.311 11.9952V7.96011H309.918V14.3847H307.941L305.266 10.2433V14.3847H303.663Z"
              fill="#016FD0"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M271.707 23.5021V17.0776H276.947V18.5137H273.331V19.6128H276.866V20.9669H273.331V22.1085H276.947V23.5021H271.707Z"
              fill="#016FD0"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M297.391 23.5021V17.0776H302.631V18.5137H299.012V19.6128H302.528V20.9669H299.012V22.1085H302.631V23.5021H297.391Z"
              fill="#016FD0"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M277.151 23.5021L279.704 20.3293L277.09 17.0776H279.115L280.67 19.0875L282.23 17.0776H284.176L281.599 20.2898L284.155 23.5021H282.13L280.621 21.5225L279.145 23.5021H277.151Z"
              fill="#016FD0"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M284.348 17.0776V23.5021H285.996V21.474H287.684C289.117 21.474 290.201 20.7149 290.201 19.2393C290.201 18.0249 289.351 17.0776 287.894 17.0776H284.348ZM285.996 18.5319H287.775C287.982 18.5127 288.187 18.5828 288.338 18.7244C288.489 18.8659 288.573 19.0655 288.568 19.2727C288.568 19.4791 288.481 19.676 288.33 19.8161C288.178 19.9561 287.975 20.0266 287.769 20.0105H285.996V18.5319Z"
              fill="#016FD0"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M290.896 17.0776V23.5021H292.502V21.2189H293.179L295.104 23.5021H297.068L294.943 21.1339C295.953 21.0331 296.718 20.1757 296.704 19.1604C296.704 17.8093 295.644 17.0776 294.46 17.0776H290.896ZM292.502 18.5137H294.323C294.717 18.5009 295.052 18.7984 295.085 19.1907C295.06 19.5772 294.735 19.8752 294.348 19.8678H292.487V18.5137H292.502Z"
              fill="#016FD0"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M303.375 23.5021V22.1085H306.591C307.064 22.1085 307.271 21.8504 307.271 21.5681C307.271 21.2857 307.064 21.0246 306.591 21.0246H305.136C303.873 21.0246 303.172 20.2564 303.172 19.0997C303.172 18.0704 303.816 17.0776 305.692 17.0776H308.819L308.142 18.5228H305.437C304.921 18.5228 304.76 18.793 304.76 19.0541C304.759 19.2111 304.825 19.3611 304.94 19.4674C305.056 19.5737 305.211 19.6264 305.367 19.6128H306.885C308.291 19.6128 308.901 20.4113 308.901 21.4588C308.901 22.5822 308.221 23.5021 306.806 23.5021H303.375Z"
              fill="#016FD0"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M309.269 23.5021V22.1085H312.348C312.824 22.1085 313.031 21.8504 313.031 21.5681C313.031 21.2857 312.824 21.0246 312.348 21.0246H311.033C309.77 21.0246 309.065 20.2564 309.065 19.0997C309.065 18.0704 309.709 17.0776 311.585 17.0776H314.652L313.975 18.5228H311.333C310.814 18.5228 310.656 18.793 310.656 19.0541C310.656 19.2083 310.72 19.3557 310.832 19.4614C310.944 19.5672 311.095 19.622 311.248 19.6128H312.633C314.042 19.6128 314.652 20.4113 314.652 21.4588C314.652 22.5822 313.972 23.5021 312.557 23.5021H309.269Z"
              fill="#016FD0"
            />
          </g>
          <defs>
            <clipPath id="clip0_85_6657">
              <rect
                width="35"
                height="11"
                fill="white"
                transform="translate(0 10)"
              />
            </clipPath>
            <clipPath id="clip1_85_6657">
              <rect
                width="27"
                height="21"
                fill="white"
                transform="translate(51 5)"
              />
            </clipPath>
            <clipPath id="clip2_85_6657">
              <rect
                width="45"
                height="13"
                fill="white"
                transform="translate(94 10)"
              />
            </clipPath>
            <clipPath id="clip3_85_6657">
              <rect
                width="32"
                height="13"
                fill="white"
                transform="translate(155 9)"
              />
            </clipPath>
            <clipPath id="clip4_85_6657">
              <rect
                width="55"
                height="17"
                fill="white"
                transform="translate(260 7)"
              />
            </clipPath>
          </defs>
        </svg>

        <div className="flex items-center gap-3">
          <Link to={"#terms-of-service"} className="hover:text-blue-500">
            Terms of Service
          </Link>
          <Link to={"#privacy"} className="hover:text-blue-500">
            Privacy
          </Link>
        </div>
      </div>
    </div>
  );
}
