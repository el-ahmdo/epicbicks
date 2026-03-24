// components/Packages.tsx
import { FC } from "react";
import housing from "@/public/assets/housing.svg";
import Image from "next/image";
// import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const About = [
  {
    image: housing,
    title: "About Us",
    description:
      "Discover our commitment to supporting veterans and service members through professional counseling and mental health services tailored to enhance their well-being.",
    navigateTo: "/#about",
  },
  {
    image: housing,
    title: "Our Team",
    description:
      "Explore our blog for insights on housing programs, rental assistance, and homeownership options specifically designed for veterans and active military personnel.",
    navigateTo: "/#team",
  },
  {
    image: housing,
    title: "Our Projects",
    description:
      "Explore funding options like grants and loans for veterans and active service members. Interested partners can reach out via our website for collaboration. Users can apply for tokens to use in partner stores and online.",
    navigateTo: "/#projects",
  },
];

interface AboutProps {
  setShowStories: (show: boolean) => void;
}

const AboutUs: FC<AboutProps> = ({ setShowStories }) => {
  const router = useRouter();
  return (
    <section className="bg-white text-gray-900 py-4 px-6 lg:px-20 space-y-16">
      {/* Subscription Packages */}
      <div>
        <div className="grid md:grid-cols-3 gap-8">
          {About.map((pkg, idx) => (
            <div
              key={idx}
              className=" rounded-xl p-6 hover:shadow-md transition"
              id="view-all-button"
              onClick={() => {
                setShowStories(false);
                router.push(pkg.navigateTo);
              }}>
              <Image
                src={pkg.image}
                alt="Veteran"
                width={40}
                height={40}
                priority
                className="rounded-xl shadow-lg object-cover"
              />
              <h3 className="text-lg font-semibold mb-2 mt-4">{pkg.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{pkg.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
