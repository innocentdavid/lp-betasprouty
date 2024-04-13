import { ReactNode } from "react";
import { SparklesCore } from "../ui/sparkles-2";

export function SparklesPreview({ children }: { children: ReactNode }) {
  return (
    <div
      className="h-screen relative w-full bg-[#65f5714d] bg-gradient-to-tr from-[#65F5714d] to-[#01B9FF4d] flex flex-col items-center justify-center overflow-hidden rounded-md _text-white pb-20 2xl:pb-40"
      style={{
        background: "rgb(247,247,247)",
        backgroundImage:
          "linear-gradient(45deg, rgba(247,247,247,1) 0%, rgba(54,141,253,1) 3%, rgba(234,135,124,1) 95%, rgba(240,144,109,1) 100%)",
      }}
    >
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      {/* <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        Build great products
      </h1> */}
      {children}
    </div>
  );
}
