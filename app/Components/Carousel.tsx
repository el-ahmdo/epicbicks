"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import terrace from "../../public/assets/Images/teraces.png";
import terrace1 from "../../public/assets/Images/teraces1.jpg";
import terrace2 from "../../public/assets/Images/teraces2.jpg";
import terrace3 from "../../public/assets/Images/teraces3.jpg";
import terrace4 from "../../public/assets/Images/teraces4.jpg";
import terrace5 from "../../public/assets/Images/teraces5.jpg";
import Block from "../../public/assets/Images/Block2.jpg";
import Block1 from "../../public/assets/Images/Block3.jpg";
import Block2 from "../../public/assets/Images/Block4.jpg";
import Block3 from "../../public/assets/Images/Block5.jpg";
import Block4 from "../../public/assets/Images/Block6.jpg";
import Block5 from "../../public/assets/Images/Block7.jpg";
import Block6 from "../../public/assets/Images/Block8.jpg";

const images = [
  terrace,
  Block,
  terrace1,
  Block1,
  terrace2,
  Block2,
  terrace3,
  Block3,
  terrace4,
  Block4,
  terrace5,
  Block5,
  Block6,
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[400px]  overflow-hidden">
      <Image
        src={images[index]}
        alt="carousel"
        fill
        className="object-cover rounded-xl"
      />
    </div>
  );
}
