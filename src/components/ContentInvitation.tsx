"use client";

import { Bodoni_Moda, Pinyon_Script } from "next/font/google";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion"; // Import framer-motion

const bodoniModaItalic = Bodoni_Moda({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

const pnyonScript = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

export default function ContentInvitation() {
  const ref = useRef(null); // Create a ref for the wrapper
  const isInView = useInView(ref, { once: true }); // Trigger animation once

  return (
    <div className={`flex flex-col justify-center items-center`}>
      <div
        ref={ref} // Attach ref here
        className="flex flex-col items-center justify-center w-full h-screen lg:w-screen bg-white"
      >
        {/* Animate from above */}
        <motion.strong
          className={`text-center text-4xl lg:text-6xl ${pnyonScript.className}`}
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
        >
          The Week of Divine Love&apos;s Radiance
        </motion.strong>

        {/* Animate fade in */}
        <motion.p
          className={`mt-7 text-center text-xs lg:text-lg w-11/12 text-pretty lg:w-1/2`}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.3 }}
        >
          Dengan penuh rasa hormat dan kerendahan hati di hadapan-Nya, kami
          mengundang saudara/i untuk berkenan hadir dalam acara resepsi
          pernikahan kami.
        </motion.p>

        {/* Animate Akad Nikah section */}
        <motion.div
          className={`flex flex-col items-center`}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
        >
          <p className={`text-2xl lg:text-4xl mt-10 ${pnyonScript.className}`}>
            Akad Nikah
          </p>
          <p className="text-sm lg:text-lg">Sabtu, 14 Oktober 2024</p>
          <p className="text-xs lg:text-base">Kediaman Mempelai Putri</p>
        </motion.div>

        {/* Animate Resepsi Pernikahan section */}
        <motion.div
          className={`flex flex-col items-center`}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.7, ease: "easeOut" }}
        >
          <p className={`text-2xl lg:text-5xl mt-10 ${pnyonScript.className}`}>
            Resepsi Pernikahan
          </p>

          <p className="text-sm lg:text-xl">Sabtu, 19 Oktober 2024</p>
          <p className="text-xs lg:text-base ">Pukul : 10.00 - 13.00 WIB</p>
          <p className="text-xs lg:text-base">Graha Taman Candhra Wilwatikta</p>
        </motion.div>

        {/* Animate fade in for the quotes */}
        <motion.p
          className={`mt-9 text-center text-xs lg:text-lg w-11/12 lg:w-1/2 text-pretty ${bodoniModaItalic.className}`}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.9 }}
        >
          “Semoga Allah memberkahimu di waktu bahagia dan memberkahimu di waktu
          susah, serta semoga Allah mempersatukan kalian berdua dalam kebaikan”.
        </motion.p>
        <motion.p
          className={`mt-1 text-center text-xs lg:text-lg w-11/12 text-pretty ${bodoniModaItalic.className}`}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 2.3 }}
        >
          HR. Abu Dawud No. 2130
        </motion.p>
      </div>
    </div>
  );
}
