"use client";
// import ArrowCircle from "../btn/ArrowCircle";
import Image from "next/image";
import cleanUp from "../../public/assets/Images/TempVid.png";
import jahi from "../../public/assets/Images/Jahi.png";
import jahi2 from "../../public/assets/Images/jahi2.png";

import { Play } from "lucide-react";
// import InfoCard from "../card/InfoCard";
import { use, useRef } from "react";
import ArrowCircle from "./button/Arrow";
import InfoCard from "./InforCard";
import Carousel from "./Carousel";

export default function CleanUp() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handlePrev = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  const cards = [
    {
      title: "3-Bedroom Flat in Jahi",
      description: "3 units left for sale",
      imageUrl: jahi,
    },
    {
      title: "3-Bedroom Flat in Jahi",
      description: "3 units left for sale",
      imageUrl: jahi2,
    },
    {
      title: "3-Bedroom Flat in Jahi",
      description: "3 units left for sale",
      imageUrl: jahi,
    },
    {
      title: "3-Bedroom Flat in Jahi",
      description: "3 units left for sale",
      imageUrl: jahi2,
    },
  ];

  return (
    <section className="px-6 py-16  bg-gradient-to-b from-[#091717]  to-[#105625] text-white gap-12 items-start md:px-24 lg:px-32">
      {/* Heading */}
      <div className="flex items-center justify-between mt-6"></div>

      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-start justify-between mt-2 gap-10 sm:gap-20">
        <div className="lg:w-1/2 text-center lg:text-left">
          {/* <p className="font-serif2 capitalize font-extrabold text-2xl sm:text-5xl lg:text-7xl tracking-normal">
            Projects in Progress{" "}
          </p> */}

          <p className="font-serif2 font-extrabold md:text-3xl tracking-normal">
            Completed Projects{" "}
          </p>
          <p className="mt-3 text-sm sm:text-base font-light tracking-normal">
            As a General Contractor, our services begin with pricing. We bid out
            the job in predetermined packages, and verify the validity of the
            bids using our extensive cost histories. During actual construction,
            we manage the day to day activity on the job, including safety,
            quality control and adherence to the schedule. We also provide
            bonding for the project and hold all subcontractor contracts, unless
            instructed to do otherwise by the owner.
          </p>
          {/* <p className="mt-1.5 text-xs sm:text-sm font-light tracking-normal">
            22 August, 2025.
          </p> */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6">
            <button className="flex gap-2 w-full sm:w-[160px] h-[48px] sm:h-[58px] rounded-full bg-[#0A1816] text-white font-medium px-4 sm:px-6 py-2 sm:py-3 transition hover:bg-[#082a4a] items-center justify-center text-[14px] border border-[#B3B3B3]">
              <Play className="w-5 h-5 text-gray-300" />
              View More{" "}
            </button>
            <button className="flex  text-[14px] gap-2 w-full sm:w-[160px] h-[48px] sm:h-[58px] rounded-full bg-[#0A1816] text-white font-medium px-4 sm:px-6 py-2 sm:py-3 transition hover:bg-[#082a4a] items-center justify-center">
              Make Enquiries{" "}
            </button>
          </div>
        </div>

        <div className="relative rounded-xl w-full h-64 sm:h-100 lg:w-1/2">
          {/* <Image
            src={cleanUp}
            alt="Veteran"
            fill
            className="rounded-xl object-contain absolute top-0 left-0"
          /> */}
          <Carousel />
        </div>
      </div>

      {/* Scrollable Cards */}
      <div className="relative mt-10  hidden sm:block">
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-4">
          {cards.map((card, index) => (
            <div key={index} className="flex-shrink-0">
              <InfoCard
                title={card.title}
                description={card.description}
                imageUrl={card.imageUrl}
                className="bg-white text-gray-900"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center">
        <h2 className="text-[40px] font-bold"> Other Projects in Progress</h2>
        <div className="flex gap-3">
          <ArrowCircle
            size={50}
            borderColor="white"
            direction="left"
            onClick={handlePrev}
          />
          <ArrowCircle
            size={50}
            borderColor="white"
            direction="right"
            onClick={handleNext}
          />
        </div>
      </div>
    </section>
  );
}
