"use client";
import Image from "next/image";
import { useState } from "react";
import { ArrowUpRightIcon, Plus, Minus } from "lucide-react";
import hero from "../../public/assets/Images/get_help_hero.svg";

const FAQ = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "What services does Epic Bricks Ltd provide?",
      a: `Epics Bricks Ltd provides professional construction and building services including residential and commercial building construction, brickwork, structural development, renovation projects, and general construction consultancy.
 `,
    },

    {
      q: "Where is Epic Bricks Ltd located?",
      a: `Epic Bricks Ltd is based in Abuja, Nigeria, and provides construction services across Abuja and surrounding areas.`,
    },
    {
      q: " Do you handle both residential and commercial construction projects?",
      a: `Yes. We handle a wide range of projects including private homes, apartment buildings, offices, commercial facilities, and other structural developments.`,
    },

    {
      q: " Can Epic Bricks help with building design and planning?",
      a: `Yes. We can work with architects, engineers, and consultants to help guide clients through design, planning, and construction phases of a project.`,
    },

    {
      q: "How long does a typical construction project take?",
      a: `Project timelines vary depending on the size, complexity, and scope of the project. During consultation, we provide an estimated timeline based on the specific requirements of the project`,
    },

    {
      q: " Do you offer renovation or remodeling services?",
      a: `Yes. Epic Bricks Ltd also undertakes renovation, remodeling, and structural upgrades for existing buildings.`,
    },
  ];
  <br />;
  return (
    <section className="px-6 py-8 bg-[#0A1816] text-white md:flex gap-12 items-start md:px-24 lg:px-32">
      <div className="flex-1">
        <p className="text-l font-bold">Get some answers</p>
        <br />
        <Image
          src={hero}
          alt="FAQ"
          width={700}
          height={600}
          className="rounded-lg shadow"
        />
      </div>
      <div className="flex-1">
        <h2 className="text-6xl font-bold mb-6 mt-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b pb-4">
                <button
                  onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                  className="flex justify-between items-center w-full text-left">
                  <span className="font-semibold">{faq.q}</span>
                  <span>
                    {faqOpen === idx ? (
                      <Minus className="text-[#2DD62D]" size={20} />
                    ) : (
                      <Plus size={20} className="text-[#2DD62D]" />
                    )}
                  </span>
                </button>

                {faqOpen === idx && (
                  <div className="mt-2 text-sm space-y-2">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row items-center justify-between mt-8 md:mt-20">
          <p className="text-[14px]">Didn’t get what you are looking for?</p>
          <a href="/getHelp">
            <button
              className="w-[285px] h-[58px] flex items-center justify-center gap-1
            px-1 pr-1 py-3 
  text-white font-semibold  text-[12px]
  bg-transparent border border-[#B3B3B3] 
  rounded-full shadow-sm 
  hover:bg-gray-100 hover:text-black transition 
  opacity-100">
              Chat with our Customer Support
              <ArrowUpRightIcon className="w-5 h-5" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
