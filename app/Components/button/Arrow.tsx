import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

interface ArrowCircleProps {
  size?: number;
  borderColor?: string;
  borderWidth?: string;
  bgColor?: string;
  direction?: "left" | "right" | "up" | "down";
  onClick?: () => void;
}

const ArrowCircle: React.FC<ArrowCircleProps> = ({
  size = 80,
  borderColor = "#05192E",
  borderWidth = "0.5px",
  bgColor = "transparent",
  direction = "left",
  onClick,
}) => {
  const getIcon = () => {
    switch (direction) {
      case "right":
        return <ChevronRight size={24} color={borderColor} />;
      case "up":
        return <ChevronUp size={24} color={borderColor} />;
      case "down":
        return <ChevronDown size={24} color={borderColor} />;
      default:
        return <ChevronLeft size={24} color={borderColor} />;
    }
  };

  return (
    <div
      onClick={onClick}
      className="flex items-center justify-center rounded-full cursor-pointer hover:opacity-80 transition-opacity"
      style={{
        width: size,
        height: size,
        padding: "16px",
        border: `${borderWidth} solid ${borderColor}`,
        backgroundColor: bgColor,
      }}>
      {getIcon()}
    </div>
  );
};

export default ArrowCircle;
