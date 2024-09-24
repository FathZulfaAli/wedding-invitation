import Image from "next/image";
import React from "react";
import { Bodoni_Moda, Yatra_One } from "next/font/google";

const yatraOne = Yatra_One({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

const mainHero = "https://placehold.co/350x500/000000/FFFFFF/png";
const mainHeroMobile = "https://placehold.co/500x900/000000/FFFFFF/png";
const leftHero = "https://placehold.co/200x300/000000/FFFFFF/png";
const rightHero = "https://placehold.co/200x300/000000/FFFFFF/png";

export default function Hero() {
  return (
    <>
      <div className="flex justify-between items-center lg:h-auto h-screen lg:mx-28">
        <Image
          className="hidden lg:block"
          alt="hero"
          src={leftHero}
          width={200}
          height={300}
        />
        <div className="flex w-full relative items-center justify-center h-full">
          <div
            className={`absolute flex flex-col lg:flex-row gap-y-9 text-center text-7xl lg:text-8xl text-white z-10 ${yatraOne.className}`}
          >
            <span>19</span>
            <span>• 10 •</span>
            <span className="hidden lg:block">2024</span>
            <span className="lg:hidden">24</span>
          </div>
          <div
            className={`absolute flex flex-col h-screen lg:hidden py-7 items-center justify-between text-xl text-white z-10 ${bodoniModa.className}`}
          >
            <span>Fath Zulfa Ali</span>
            <span>Megawati Indah Mayang Sari</span>
          </div>
          <div className="w-screen h-screen lg:hidden">
            <Image
              alt="main hero mobile"
              src={mainHeroMobile}
              layout="fill"
              objectFit="cover"
              className="lg:hidden"
            />
          </div>
          <Image
            className="hidden lg:block"
            alt="hero"
            src={mainHero}
            width={350}
            height={500}
          />
        </div>

        <Image
          className="hidden lg:block"
          alt="hero"
          src={rightHero}
          width={200}
          height={300}
        />
      </div>
    </>
  );
}
