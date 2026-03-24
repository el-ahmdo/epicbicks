import Image from "next/image";
import hero from "@/public/assets/Images/whowe.png";

export default function WhoWeAreAboutUs() {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center gap-10 px-6  md:px-24 lg:px-32 ">
      <div className="">
        <h1 className="flex justify-center text-2xl font-bold">Who We Are</h1>
        {/* Top Section */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10  mt-8 bg-[#F2F2F2] rounded-3xl pt-12 pb-62">
          <Image src={hero} alt="About Veteran" width={400} height={400} />

          <div className="flex flex-col justify-center items-start gap-6 max-w-lg ml-10">
            <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold">
              Our Team{" "}
            </h1>
            <h1 className="text-l sm:text-l lg:text-l font-light">
              The company has a team of well qualified, highly experienced
              technical hands with tentacles well spread in consultancy
              Services, Design, Maintenance, Advertising and Public Relations
              and Safety Systems. The partners of the firm are all Professional
              Engineers who each have over 20 years experience in the design and
              construction of engineering projects. They are all members of the
              Nigerian Society of Engineers and registered members of COREN{" "}
            </h1>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative flex flex-col md:flex-row gap-10 bg-[#FFFFFF] p-10 rounded-tl-4xl -mt-52">
          <div className="md:w-1/2">
            <h1 className="font-bold text-3xl">Executive Summary</h1>
            <h1 className="font-light text-l mt-2">
              Epic Bricks Limited was registered with the Corporate Affairs
              Commission and incorporated on August 25th, 2016. Epic Bricks
              Limited is a company that delivers high quality, reliable
              construction services for governmental and private establishments.
              In addition, we have broad expertise with commercial clients. We
              are fully licensed specialist in all facets of building
              maintenance and refurbishment, programmed maintenance works and
              other specialised works. Our principals have over many years of
              collective experience offering the highest standards for safety,
              quality, and integrity.
            </h1>
          </div>
          <div className="md:w-1/2">
            <h1 className="font-light text-l md:mt-10">
              Dedicated to Excellence, we utilise innovative building
              contraction, maintenance And renovation skills to change and
              improve the way Projects are designed, managed and build. We work
              closely with our clients to accurately interpret their
              dreams/visions in drawings and bring them to the desired reality
              through construction solutions to meet their needs; We communicate
              with our clients throughout the construction process to keep them
              informed of progress and to ensure that our project keeps on
              schedule and within budget.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
