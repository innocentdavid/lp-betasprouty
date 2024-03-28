export default function Testimonials() {
  return (
    <div className="">
    <div className="max-w-5xl mx-auto text-center mt-20 pb-4 px-4">
      <div className="text-[28px] md:text-[32px] lg:text-[64px] lg:leading-[70px] font-dashboard text-center font-bold max-w-[940px] mx-auto mb-8">
        Here's What Our Clients Say About Followers.com
      </div>
      <p className="mt-4 mb-2 sm:mb-0 sm:mt-6 sm:text-[21px] text-xl font-medium sm:leading-[32px] leading-snug text-gray-600 _text-left sm:text-center">
        See their Instagram growth results and platform reviews
      </p>
    </div>

    <div className="flex gap-4 px-3 md:px-12 mt-8 w-full overflow-x-auto no-scrollbar">
        <div className="relative min-h-[700px] bg-black rounded-md min-w-[280px] md:min-w-[320px] lg:max-w-[500px]">
            <img src="/icons/play-btn.svg" alt="play-btn" className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 grayscale-[20%] hover:grayscale-0 cursor-pointer" />
        </div>
        <div className="relative min-h-[700px] bg-black rounded-md min-w-[280px] md:min-w-[320px] lg:max-w-[500px]">
            <img src="/icons/play-btn.svg" alt="play-btn" className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 grayscale-[20%] hover:grayscale-0 cursor-pointer" />
        </div>
        <div className="relative min-h-[700px] bg-black rounded-md min-w-[280px] md:min-w-[320px] lg:max-w-[500px]">
            <img src="/icons/play-btn.svg" alt="play-btn" className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 grayscale-[20%] hover:grayscale-0 cursor-pointer" />
        </div>
    </div>
    </div>
  );
}
