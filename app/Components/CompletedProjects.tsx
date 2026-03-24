import housingLogo from "../../public/assets/housing_truse.png";
import PropertyCard from "./PropertyCard";
import { ArrowUpRight } from "lucide-react";
import Block6 from "../../public/assets/Images/Block9.jpg";
import terrace from "../../public/assets/Images/teraces.png";
import terrace1 from "../../public/assets/Images/teraces1.jpg";

export default function HousingSupport() {
  return (
    <main id="projects" className="px-6 py-16 md:px-24 lg:px-32 ">
      <div className="text-center flex flex-col gap-4">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          Completed Projects{" "}
        </h3>
        <p className="font-sans font-normal italic text-lg leading-7">
          Discover exceptional deals from partnering businesses, customized just
          for you.
        </p>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PropertyCard
            logo={housingLogo}
            title="Terraces"
            imageUrl={terrace}
            short_description="3-Bedroom Flat"
            price="₦00,000.00"
            location="Life-camp - Abuja, Nigeria"
            description="Explore a comfortable 3-bedroom flat ideal for families or roommates. It includes a modern kitchen, cozy living area, and plenty of storage. Benefit from nearby amenities and a friendly community."
            badge="Discount Offer"
            tag="For Sale"
            badgecolor="#814218"
            tagcolor="#0F4C8A"
          />

          <PropertyCard
            logo={housingLogo}
            title="Block of Flats"
            imageUrl={Block6}
            short_description="3-Bedroom Flat"
            price="₦00,000.00"
            location="Life-camp - Abuja, Nigeria"
            description="Explore a comfortable 3-bedroom flat ideal for families or roommates. It includes a modern kitchen, cozy living area, and plenty of storage. Benefit from nearby amenities and a friendly community."
            badge="Exclusive Deal"
            tag="For Sale"
            badgecolor="#0A345E"
            tagcolor="#C4101F"
          />

          <PropertyCard
            logo={housingLogo}
            title="Terraces"
            imageUrl={terrace1}
            short_description="3-Bedroom Flat"
            price="₦00,000.00"
            location="Life-camp - Abuja, Nigeria"
            description="Explore a comfortable 3-bedroom flat ideal for families or roommates. It includes a modern kitchen, cozy living area, and plenty of storage. Benefit from nearby amenities and a friendly community."
            badge="Exclusive Deal"
            tag="For Sale"
            badgecolor="#806D19"
            tagcolor="#806D19"
          />
        </div>

        <div className="flex items-center justify-center gap-2">
          Explore more <ArrowUpRight />
        </div>
      </div>
    </main>
  );
}
