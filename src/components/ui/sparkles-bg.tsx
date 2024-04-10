import { ReactNode } from "react";
import { SparklesCore } from "./sparkles";

export function SparklesPreview2({ children }: { children: ReactNode }) {
  return (
    <div
      className="min-h-[40rem] relative w-full bg-black _bg-gradient-to-tr _from-[#65F5714d] _to-[#01B9FF4d] flex flex-col items-center justify-center overflow-hidden rounded-md _text-white"
      // style={{
      //   background: "rgb(247,247,247)",
      //   backgroundImage:
      //     "linear-gradient(45deg, rgba(247,247,247,1) 0%, rgba(54,141,253,1) 3%, rgba(234,135,124,1) 95%, rgba(240,144,109,1) 100%)",
      // }}
    >
      <div className="w-full absolute inset-0 _h-screen">
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
