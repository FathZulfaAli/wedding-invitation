"use client";

import Image from "next/image";
import React from "react";
import { Bodoni_Moda, Yatra_One } from "next/font/google";
import { motion } from "framer-motion"; // Import framer-motion

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
        <motion.div
          initial={{ x: -100, opacity: 0 }} // Animation from left and transparent
          animate={{ x: 0, opacity: 1 }} // Move to original position and fully visible
          transition={{ duration: 1 }} // Animation duration
          className="hidden lg:block"
        >
          <Image
            alt="hero"
            src={"/left-hero.JPG"}
            width={200}
            height={300}
            className=" grayscale contrast-75"
          />
        </motion.div>

        <div className="flex w-full relative items-center justify-center h-full">
          <motion.div
            className={`absolute flex flex-col lg:flex-row gap-y-9 text-center text-7xl lg:text-8xl text-black z-10 ${yatraOne.className}`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }} // Delayed animation for the date
          >
            <span>19</span>
            <span>• 10 •</span>
            <span className="hidden lg:block">2024</span>
            <span className="lg:hidden">24</span>
          </motion.div>

          <motion.div
            className={`absolute flex flex-col h-screen lg:hidden py-10 items-center justify-between text-xl text-black z-10 ${bodoniModa.className}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          >
            <motion.span
              initial={{ y: -50, opacity: 0 }} // Slide down from top
              animate={{ y: 0, opacity: 1 }} // Settle into position with full opacity
              transition={{ duration: 1.2, delay: 0.8 }} // Control the animation duration and delay
            >
              Fath Zulfa Ali
            </motion.span>

            <motion.span
              initial={{ y: 50, opacity: 0 }} // Slide up from bottom
              animate={{ y: 0, opacity: 1 }} // Settle into position with full opacity
              transition={{ duration: 1.2, delay: 0.8 }} // Control the animation duration and delay
            >
              Megawati Indah Mayang Sari
            </motion.span>
          </motion.div>

          <motion.div
            className="w-screen h-screen lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <Image
              alt="main hero mobile"
              src={"/mobile-hero.JPG"}
              layout="fill"
              objectFit="cover"
              className="lg:hidden grayscale contrast-75"
            />
          </motion.div>

          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Image
              className="hidden lg:block grayscale contrast-75"
              alt="hero"
              src={"/mobile-hero.JPG"}
              width={500}
              height={650}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hidden lg:block"
        >
          <Image
            alt="hero"
            src={"/right-hero.JPG"}
            width={200}
            height={300}
            className=" grayscale contrast-75"
          />
        </motion.div>
      </div>
    </>
  );
}
