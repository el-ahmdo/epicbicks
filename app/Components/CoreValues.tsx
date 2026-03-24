import React from "react";

interface CoreValue {
  id: number;
  title: string;
  description: string;
}

// const values: CoreValue[] = [
//   {
//     id: 1,
//     title: "Professionalism",
//     description:
//       "We shall be committed to working with a high sense of professional attitude towards achieving our corporate goal and making the desired impact in the military community.",
//   },
//   {
//     id: 2,
//     title: "Respect",
//     description:
//       "We shall be guided by respect for human values, human rights and dignity for all our engagements.",
//   },
//   {
//     id: 3,
//     title: "Insight",
//     description:
//       "Our work shall be informed by knowledge of the armed forces, their family members and the pain points observed which we intend to address. At all times, we shall be guided by knowledge, research, understanding and probity.",
//   },
//   {
//     id: 4,
//     title: "Decency",
//     description:
//       "As a social enterprise, we shall remain committed to our goal of supporting the growth and advancement of the welfare of the members of the military community as we consider this as keen to sustain the trust of our partners.",
//   },
//   {
//     id: 5,
//     title: "Empathy",
//     description:
//       "We shall operate with a sense of empathy, concern and feeling for the welfare needs of the serving and retired officers, men and their dependents. This shall reflect in all solutions we offer and in every program we deliver.",
//   },
// ];

export default function CoreValues() {
  return (
    <section className="bg-[#F2F2F2] py-16 px-6 md:px-20 lg:px-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Our Core Values
      </h2>

      <div className="w-full min-h-[400px]  flex flex-col ">
        {/* first row right */}
        <div className="w-full h-[150px] flex flex-col md:flex-row ">
          {/* left */}
          <div className="md:w-1/2 w-full h-full "></div>

          {/* right */}
          <div className="md:w-1/2 w-full  h-full border-l-[3px] border-l-[#1E7B40] flex flex-col p-2 items-start">
            <div className="w-15 h-15 flex justify-center items-center bg-[#FFFFFF] rounded-full text-[#002D5B] ">
              1
            </div>

            <p className="text-[16px] font-bold">Professionalism</p>
            <p className="text-[14px] font-thin text-#0D0D0D[]">
              We shall be committed to delivering high standards with
              integrity.and making the desired impact in the community.
            </p>
          </div>
        </div>

        {/* second row left */}

        <div className="w-full h-[150px] flex flex-col md:flex-row ">
          {/* left */}
          <div className="md:w-1/2 w-full  h-full  flex flex-col p-2  md:items-end">
            <div className="w-15 h-15 flex justify-center items-center bg-[#FFFFFF] rounded-full text-[#002D5B] ">
              2
            </div>

            <p className="text-[16px] font-bold">Innovation</p>
            <p className="text-[14px] font-thin text-#0D0D0D[]">
              We shall be guided by respect for human values, human rights and
              dignity for all our engagements.
            </p>
          </div>

          {/* right */}
          <div className="md:w-1/2 w-full  h-full border-l-[3px]   border-white   "></div>
        </div>

        {/* third row right  */}

        <div className="w-full h-[150px] flex flex-col md:flex-row ">
          {/* left */}
          <div className="md:w-1/2 w-full h-ful"></div>

          {/* right */}
          <div className="md:w-1/2 w-full  h-full border-l-[3px]  border-white   flex flex-col p-2 items-start">
            <div className="w-15 h-15 flex justify-center items-center p-3 bg-[#FFFFFF] rounded-full text-[#002D5B] ">
              3
            </div>

            <p className="text-[16px] font-bold">Customer-Centric Approach</p>
            <p className="text-[14px] font-thin text-#0D0D0D[]">
              Ensuring quality service that meets and exceeds expectations.
            </p>
          </div>
        </div>

        {/* fourth row left  */}
        <div className="w-full h-[150px] flex flex-col md:flex-row ">
          {/* left */}
          <div className="md:w-1/2 w-full  h-full  flex flex-col p-2  items-en">
            <div className="w-15 h-15 flex justify-center items-center mt-2 p-3 bg-[#FFFFFF] rounded-full text-[#002D5B] ">
              4
            </div>

            <p className="text-[16px] font-bold">Sustainability</p>
            <p className="text-[14px] font-thin text-#0D0D0D[]">
              Implementing environmentally sound building practices.
            </p>
          </div>

          {/* right */}
          <div className="md:w-1/2 w-full  h-full border-l-[3px]  border-white   "></div>
        </div>

        {/* fifth row right  */}

        <div className="w-full h-[250px] flex flex-col md:flex-row ">
          {/* left */}
          <div className="md:w-1/2 w-full h-ful"></div>

          {/* right */}
          <div className="md:w-1/2 w-full  h-full border-l-[3px]  border-white  flex flex-col p-2 items-start">
            <div className="w-15 h-15 flex justify-center  mt-5 items-center p-3 bg-[#FFFFFF] rounded-full text-[#002D5B] ">
              5
            </div>

            <p className="text-[16px] font-bold">Quality & Safety</p>
            <p className="text-[14px] font-thin text-#0D0D0D[]">
              Epic Bricks Limited understands the importance of providing
              quality, safe and clean services to our client is the vital part
              of being a successful building services provider
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
