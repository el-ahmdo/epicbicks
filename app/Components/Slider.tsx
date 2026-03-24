"use client";

import { useEffect, useRef } from "react";
import AboutUsCard from "./AboutusCard";

const cards = [
  "Real Estate Services",
  "Restoration & Renovations",
  "Procurement Services",
  "Design & Construction of Office Furniture",
  "Procurement & Supply",
];

export default function Slider() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let position = 0;
    const speed = 1.0; // 👈 lower = slower, smoother

    const animate = () => {
      position -= speed;

      // when half of the track has scrolled, reset seamlessly
      if (Math.abs(position) >= track.scrollWidth / 2) {
        position = 0;
      }

      track.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center gap-10  py-12  overflow-hidden">
      {/* Cards Infinite Slider */}
      <div className="w-full overflow-hidden mt-8">
        <div
          ref={trackRef}
          className="flex gap-6 whitespace-nowrap will-change-transform">
          {[...cards, ...cards].map((text, index) => (
            <div key={index} className="flex-shrink-0">
              <AboutUsCard text={text} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      {/* <div className="text-center mt-12 space-y-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          Who We Are
        </h1>
        <h3 className="text-lg text-gray-600">
          Save up to 50% on flights, retail, healthcare, and more from
          veteran-friendly brands
        </h3>
      </div> */}
    </section>
  );
}
