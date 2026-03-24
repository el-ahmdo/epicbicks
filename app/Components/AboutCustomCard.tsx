import Image from "next/image";

interface CustomCardProps {
  imageUrl: string;
  onClick?: () => void;
  headerText: string;
  description: string;
}

export default function AboutUsCustomCard({
  imageUrl,
  headerText,
  description,
}: CustomCardProps) {
  return (
    <div
      className="
        md:w-[535px] md:h-[389px] 
        border border-[#1E7B40]/80 
        rounded-tl-2xl rounded-br-[24px] 
        overflow-hidden
        flex
      ">
      {/* Left side: Text + Button */}
      <div className="w-1/2 flex flex-col px-8 py-6">
        {/* Header stays at top */}
        <h1 className="text-2xl font-bold mb-4">{headerText}</h1>

        {/* Paragraph fills remaining space */}
        <p className="text-base flex-1 mb-6">{description}</p>
      </div>

      {/* Right side: Image */}
      <div className="w-1/2 flex items-end justify-center">
        <Image
          src={imageUrl}
          alt="Card"
          width={250}
          height={230}
          className="object-contain"
        />
      </div>
    </div>
  );
}
