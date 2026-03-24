"use client";

import Image, { StaticImageData } from "next/image";
import theone from "../../public/assets/Images/Placeholder.png";

import { Linkedin } from "lucide-react";

type TeamMember = {
  name: string;
  title: string;
  image: string | StaticImageData;
  linkedin?: string;
};

const team: TeamMember[] = [
  {
    name: "Mr Sani",
    title: "Chief Operating Officer (COO)",
    image: theone,
    linkedin: "#",
  },
  {
    name: "Mr Dare",
    title: "Director of Strategy & Planning",
    image: theone,
    linkedin: "#",
  },
  {
    name: "Mr Sam",
    title: "Director of Digital Transformation",
    image: theone,
    linkedin: "#",
  },
  {
    name: "Mr Yakubu Isa",
    title: "Head of IT / Head of IT Operations & Service Delivery",
    image: theone,
    linkedin:
      "https://www.linkedin.com/in/yakubu-isa-b27ba8130?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    name: "Mr Ahmed Dahiru",
    title: "IT Strategy Lead / Digital Strategy Manager",
    image: theone,
    linkedin:
      "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEjUTiXXTZUqgAAAZv6gvyYrUa3HDPjGtN0LqL6ksUYFBdKfn9PyJtsfv9Kkxr_T3m0KxovqjCo9Y4kq6ORSI1jSfnTTva8UqrbvsWlUuWFoOckZIKIteSuBsALGpnsBVc5D_w=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fdahiru-ahmed-damburam-1849a9220%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dios_app",
  },
  {
    name: "Mrs Ibironke",
    title: "Director of Corporate Relations and strategic alliances",
    image: theone,
    linkedin: "#",
  },

  {
    name: "Mrs adesewa",
    title: "Operations & Partnerships Coordinator",
    image: theone,
    linkedin: "#",
  },
  {
    name: "Mr Deji Garuba",
    title: "Campaigns and Communications Coordinator",
    image: theone,
    linkedin: "#",
  },
];

export default function TeamPage() {
  return (
    <div
      id="team"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <h2 className="text-3xl font-bold mb-8">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {team.map((member, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl border-[0.5px] border-[#E6D37F] overflow-hidden flex flex-col">
            {/* Profile Image */}
            <div className="relative w-[90%] h-84 items-center mx-auto mt-6 mb-4 rounded-full">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="   rounded-2xl -top-50"
              />
            </div>

            {/* Details */}
            <div className="p-4 flex justify-between items-end">
              <div>
                <h3 className="font-semibold   capitalize text-lg">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm">{member.title}</p>
              </div>
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-700">
                  <Linkedin size={15} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
