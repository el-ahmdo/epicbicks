import React from "react";

interface StyledCardProps {
  text: string;
  className?: string;
}

const AboutUsCard: React.FC<StyledCardProps> = ({ text, className }) => {
  return (
    <div
      className={`bg-[#F2F2F2] border border-[#6B6B6B] rounded-2xl 
        p-4 sm:p-6 md:p-8 text-2xl font-semibold
        w-full max-w-[464px] 
        min-h-[145px] flex flex-col items-center justify-center
        shadow-sm text-[#333333bd] ${className}`}>
      {text}
    </div>
  );
};

export default AboutUsCard;
