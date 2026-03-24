// components/WhoWeAre.tsx
import Image from "next/image";
import { FC } from "react";

const OurValues: FC = () => {
  return (
    <section className="px-6 md:px-24 lg:px-32 py-12">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center lg:text-left mb-8">
        About Epic Bricks{" "}
      </h1>

      <p className="leading-relaxed mb-12 italic text-center lg:text-left">
        We believe in maintaining the highest standard of professionalism,
        integrity, creativity, positive attitude, delivery that meets and
        surpass expectations while offering prompt and lasting solutions that
        stand the test of time.
      </p>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 ">
        {" "}
        {/* Column 1 - Logo & Mission */}
        <div className="flex flex-col items-center lg:items-start gap-6">
          <Image
            src="/assets/Images/Logo.svg"
            alt="Epic bricks Logo"
            width={420}
            height={120}
          />
        </div>
        {/* Column 2 - Vision */}
        <div className="flex flex-col items-center lg:items-start gap-6">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">01</h1>
            <h3 className="italic mb-2">Our Mission</h3>
            <p className="leading-relaxed">
              We aim to be a world class engineering Construction Company
              providing efficient affordable, sustainable, cost effective
              services of highest level of quality.
            </p>
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">02</h1>
            <h3 className="italic mb-2">Our Vision</h3>
            <p className="leading-relaxed">
              A regional market leader in provision of civil engineering and
              building construction services.A regional market leader in
              provision of civil engineering and building construction services.
            </p>
          </div>
          <button className="bg-[#091717] transition text-white font-medium px-6 py-2 rounded-full w-full md:w-47 h-14.5">
            More About Us
          </button>
        </div>
        {/* Column 3 - Soldier Image */}
        <Image
          src="/assets/Images/Values.png"
          alt="Epic bricks team"
          width={600}
          height={600}
        />
      </div>
    </section>
  );
};

export default OurValues;
