"use client";

import { useRef, useState, useEffect } from "react";
import HeroCard from "./HeroCard";

const events = [
  {
    title: "Building  Dreams",
    btn_wright_up: "Shaping",
    body: "We deliver high quality construction solutions on time and within your budget.",
    after: "Futures",
  },
  {
    title: "Building  Dreams",
    btn_wright_up: "Shaping",
    body: "We deliver high quality construction solutions on time and within your budget.",
    after: "Futures",
  },
  {
    title: "Building  Dreams",
    btn_wright_up: "Shaping",
    body: "We deliver high quality construction solutions on time and within your budget.",
    after: "Futures",
  },
  {
    title: "Building  Dreams",
    btn_wright_up: "Shaping",
    body: "We deliver high quality construction solutions on time and within your budget.",
    after: "Futures",
  },
  //   {
  //     title: "Health and Wellness",
  //     btn_wright_up: "Initiatives",
  //     body: "Programs promoting mental health and physical fitness for veterans.",
  //   },
  //   {
  //     title: "Employment",
  //     btn_wright_up: "Opportunities",
  //     body: "Job placement services and career development workshops tailored for veterans and service men.",
  //   },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.clientWidth * index,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  // Auto-scroll every 5s (stable interval, no flicker)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % events.length;
        if (containerRef.current) {
          containerRef.current.scrollTo({
            left: containerRef.current.clientWidth * next,
            behavior: "smooth",
          });
        }
        return next;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Update index when user scrolls manually
  const handleScroll = () => {
    if (containerRef.current) {
      const newIndex = Math.round(
        containerRef.current.scrollLeft / containerRef.current.clientWidth,
      );
      if (newIndex !== currentIndex) setCurrentIndex(newIndex);
    }
  };

  return (
    <section className="flex flex-col gap-6 w-full px-6 md:py-6 md:px-24 lg:px-32 bg-white">
      {/* Slider */}

      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex w-full h-full  bg-white overflow-x-auto snap-x transition-all duration-5000 ease-in-out snap-mandatory scroll-smooth no-scrollbar">
        {events.map((event, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-full h-full snap-center flex items-center justify-center">
            <HeroCard {...event} />
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-3 mt-2">
        {events.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToIndex(idx)}
            className={`transition-all duration-500 ease-in-out cursor-pointer ${
              idx === currentIndex
                ? "w-[50px] h-[12px] bg-[#0A1816] rounded-full"
                : "w-[12px] h-[12px] bg-gray-400 rounded-full"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
