"use client";

import { Bodoni_Moda, Pinyon_Script } from "next/font/google";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion"; // Import useInView

const logoUrl =
  "https://res.cloudinary.com/dzdrs7dkj/image/upload/v1726891407/luxhuss33n8toe1jo0mr.png";

const bodoniModaItalicBolder = Bodoni_Moda({
  subsets: ["latin"],
  weight: "500",
  style: "italic",
});

const pnyonScript = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

const bodoniModaItalic = Bodoni_Moda({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

export default function Filler() {
  const ref = useRef(null); // Create a ref for the wrapper
  const isInView = useInView(ref, { once: true }); // Trigger animation once when in view

  return (
    <div
      ref={ref} // Attach ref to this div
      className={`flex flex-col items-center justify-between h-screen py-16 text-center ${bodoniModaItalic.className}`}
    >
      <div className="flex flex-col items-center justify-center text-center">
        {/* Animate from above */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        >
          <span className="text-4xl lg:text-8xl">WELCOME</span>
          <div className="flex flex-col lg:flex-row lg:justify-center">
            <span className="text-2xl">to our</span>
            <span className={`text-4xl ${bodoniModaItalicBolder.className}`}>
              WEDDING
            </span>
          </div>
        </motion.div>

        {/* Animate from above */}
        <motion.span
          className={`text-3xl mt-4 lg:text-7xl ${pnyonScript.className}`}
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        >
          Celebration
        </motion.span>

        {/* Animate fade in */}
        <motion.p
          className={`text-xs px-3 mt-9 lg:w-[30%] lg:text-lg text-center`}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.5, delay: 1.7 }}
        >
          Segala puji dan syukur yang teramat mulia kami haturkan ke hadirat
          Allah SWT., Tuhan Semesta Alam, Sang Maha Kuasa yang menguasai segala
          kejayaan dan kemuliaan, yang dengan kasih sayang-Nya telah melimpahkan
          kebahagiaan yang tak terhingga kepada kami.
        </motion.p>
      </div>

      {/* Animate from bottom */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 2, ease: "easeOut" }}
      >
        <Image
          className="opacity-25"
          alt="logo pengantin"
          src={logoUrl}
          width={150}
          height={150}
        />
      </motion.div>
    </div>
  );
}
