import Image from "next/image";
import NavBar from "./Components/Nav";
import Hero from "./Components/Hero";
import NigerianMap from "./Components/NigerianMap";
import Slider from "./Components/Slider";
import WhoWeAreAboutUs from "./Components/WhoWeAre";
import WhoWeAreSubHero from "./Components/WhoWeAreSub";
import CoreValues from "./Components/CoreValues";
import TeamPage from "./Components/TeamPage";
import HousingSupport from "./Components/CompletedProjects";
import CleanUp from "./Components/ProjectsInProgress";
import Contact from "./Components/Contact";
import FAQ from "./Components/Faq";
import Footer from "./Components/Footer";
import OurValues from "./Components/OurValues";

export default function Home() {
  return (
    <div className=" space-y-16 bg-[#ffffff] text-gray-800 w-full overflow-hidden">
      <NavBar />
      <Hero />
      <OurValues />
      <NigerianMap />
      <Slider />
      <WhoWeAreAboutUs />
      <WhoWeAreSubHero />
      <CoreValues />
      <TeamPage />
      <HousingSupport />
      <CleanUp />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
}
