import AboutUsCustomCard from "./AboutCustomCard";
import abs_1 from "../../public/assets/abs_1.svg";
import abs_2 from "../../public/assets/abs_2.svg";

export default function WhoWeAreSubHero() {
  return (
    <section className="px-6 py-16 bg-gradient-to-b from-[#091717]  to-[#105625] text-white gap-12 items-start md:px-24 lg:px-32 flex md:flex-row flex-col justify-center">
      <AboutUsCustomCard
        imageUrl={abs_1}
        headerText={"Mission"}
        description={`  We aim to be a world class engineering Construction Company
providing efficient affordable, sustainable, cost effective services of
highest level of quality`}
      />
      <AboutUsCustomCard
        imageUrl={abs_2}
        headerText={"Vision"}
        description={`We believe in maintaining the highest standard of professionalism,
integrity, creativity, positive attitude, delivery that meets and surpass
expectations while offering prompt and lasting solutions that stand the
test of time.`}
      />
    </section>
  );
}
