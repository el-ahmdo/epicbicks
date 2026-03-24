import React from "react";
import Image, { StaticImageData } from "next/image";
import { ChevronRight } from "lucide-react";

interface InfoCardProps {
  title: string;
  description?: string;
  imageUrl: string | StaticImageData;
  className?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div
      className={`w-full max-w-[503px] md:w-[450px] md:h-[164px] flex flex-col md:flex-row items-center justify-between border border-[#B3B3B3] rounded-2xl p-4 md:p-6 gap-6 text-stone-50`}>
      {/* Text Section */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-lg font-semibold">{title}</h2>
        {description && (
          <p className="text-[16px] font-thin mt-2">{description}</p>
        )}

        <div className="flex gap-2 mt-2">
          {/* <p>Read more </p> <ChevronRight size={24} color="white" /> */}
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-shrink-0">
        <Image
          src={imageUrl}
          alt={title}
          width={112}
          height={112}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default InfoCard;
