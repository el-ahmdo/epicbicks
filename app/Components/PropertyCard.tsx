// components/PropertyCard.tsx
import Image, { StaticImageData } from "next/image";
import { MapPin } from "lucide-react";

interface PropertyCardProps {
  imageUrl: string | StaticImageData;
  logo?: string | StaticImageData;
  title: string;
  price: string;
  location: string;
  description: string;
  badge?: string; // e.g., "Exclusive Deal"
  tag?: string; // e.g., "For Rental"
  onProfileClick?: () => void;
  short_description: string;
  badgecolor?: string;
  tagcolor?: string;
}

export default function PropertyCard({
  imageUrl,
  title,
  price,
  location,
  description,
  badge,
  tag,
  // onProfileClick,
  logo,
  short_description,
  badgecolor,
  tagcolor,
}: PropertyCardProps) {
  return (
    <div className="max-w-sm min-h-[560px] rounded-2xl shadow-md border border-gray-200 overflow-hidden bg-white relative p-5 flex flex-col">
      {badge && (
        <span
          style={{ background: badgecolor }}
          className="absolute top-0 right-0 bg-blue-900 text-white text-xs font-semibold px-8 py-3 rounded-bl-2xl shadow">
          {badge}
        </span>
      )}

      <div className="flex items-center gap-2 px-4 py-6">
        {logo && <Image src={logo} alt={title} width={30} height={30} />}
        <h3 className="text-[17px] font-semibold">{title}</h3>
      </div>

      <div className="relative w-full h-52">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover rounded-2xl"
        />
        {tag && (
          <span
            style={{ background: tagcolor }}
            className="absolute bottom-0 right-0 bg-red-600 text-white text-sm font-medium px-5 py-2 rounded-tl-2xl rounded-br-2xl ">
            {tag}
          </span>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1 space-y-3">
        <div className=" w-full flex items-center justify-between">
          <h3 className=" flex-1 text-[14px] font-semibold text-gray-900 line-clamp-2">
            {short_description}
          </h3>
          <span className=" flex-1 text-[#0A345E] font-bold">{price}</span>
        </div>

        <div className="flex items-center text-gray-500 text-[10px] fon-thin">
          <MapPin size={16} className="mr-1" />
          <span>{location}</span>
        </div>

        <p className="text-gray-600  text-[14px] font-thin  text-left text-gray-600leading-relaxed">
          {description}
        </p>
        <div className="mt-auto flex items-center justify-center">
          <button
            //   onClick={onProfileClick}
            className="text-[#002D5B] font-semibold text-sm mt-2 flex items-center gap-1 ">
            Go to Profile →
          </button>
        </div>
      </div>
    </div>
  );
}
