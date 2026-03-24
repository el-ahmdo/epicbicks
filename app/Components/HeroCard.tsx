import Image from "next/image";
import hero from "../../public/assets/Images/Hero.png";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
type Props = {
  title: string;
  btn_wright_up: string;
  body: string;
  after?: string;
};

export default function HeroCard({ title, btn_wright_up, body, after }: Props) {
  return (
    <div className="relative  bg-white flex flex-col items-center justify-between  gap-10 md:flex-row md:gap-16">
      {/* Left Content */}
      <div className="flex-1 text-left md:mb-20">
        <h1 className="text-3xl md:text-5xl font-semibold leading-snug tracking-tight">
          {title}{" "}
          <span className="inline-flex items-center justify-center px-6 py-3 mt-3 rounded-full border-4 border-[#218546]  font-extrabold text-2xl md:text-3xl">
            {btn_wright_up}
          </span>
          {after && (
            <span className="text-3xl md:text-5xl font-semibold leading-snug tracking-tight">
              {" "}
              {after}
            </span>
          )}
        </h1>

        <p className="mt-6 text-[#333333] font-thin max-w-md mx-auto md:mx-0 text-xl">
          {body}
        </p>

        {/* Buttons Row */}
        <div className="mt-8 flex flex-col items-center gap-4 md:flex-row md:items-start">
          <button
            className={`h-[40px] cursor-pointer w-full md:w-[235px] md:h-[58px] px-6 py-2 flex items-center justify-center gap-3 
        rounded-full border border-[#2DD62D] bg-[#F2F2F2] text-[#27C732] font-medium 
        hover:opacity-90 transition `}>
            Get a Quote{" "}
          </button>{" "}
          <button
            className={`h-[40px] cursor-pointer w-full md:w-[235px] md:h-[58px] px-6 py-2 flex items-center justify-center gap-3 
        rounded-full border border-[#75B2F0] bg-[#0A1816] text-[#E8F2FD] font-medium 
        hover:opacity-90 transition `}>
            View Our Projects <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Right Image - Always Last */}
      <div className="flex-1 flex justify-center">
        <Image
          src={hero}
          alt="Veteran"
          width={520}
          height={400}
          priority
          className="rounded-xl shadow-lg object-cover"
        />
      </div>
    </div>
  );
}
