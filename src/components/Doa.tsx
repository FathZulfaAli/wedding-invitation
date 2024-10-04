"use client";

/* eslint-disable react/no-unescaped-entities */
import React, { useRef } from "react";
import { Bodoni_Moda, Pinyon_Script } from "next/font/google";
import Typewriter from "typewriter-effect";
import { motion, useInView } from "framer-motion";

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
export default function Doa() {
  const ref = useRef(null); // Create a ref for the wrapper
  const inView = useInView(ref, { once: true }); // Trigger animation once

  return (
    <div className="flex justify-center items-center">
      <div
        ref={ref}
        className="relative flex items-center justify-center lg:w-2/4 "
      >
        <motion.div
          className="border-white border-[17px] border-b-[50px] shadow-[0_-10px_20px_-5px_rgba(0,0,0,0.3),0_10px_20px_-5px_rgba(0,0,0,0.3),-10px_0_20px_-5px_rgba(0,0,0,0.3),10px_0_20px_-5px_rgba(0,0,0,0.3)]"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="flex flex-col items-center py-6 bg-[#f0f0f0]">
            <motion.span
              className={`text-4xl ${pnyonScript.className}`}
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              Doa Pengantin
            </motion.span>

            <motion.span
              className="mt-7 text-xl text-right w-5/6"
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              اَللّٰهُمَّ اجْعَلْ هٰذَا الْعَقْدَ عَقْدًا مُبَارَكًا مَعْصُوْمًا
              وَأَلْقِ بَيْنَهُمَا أُلْفَةً وَقَرَارًا دَائِمًا وَلَا تَجْعَلْ
              بَيْنَهُمَا فِرْقَةً وَفِرَارًا وَخِصَامًا وَاكْفِهِمَا مُؤْنَةَ
              الدُّنْيَا وَالْاٰخِرَةِ
            </motion.span>

            <motion.span
              className={`mt-3 text-sm text-pretty w-5/6 ${bodoniModaItalic.className}`}
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.7 }}
            >
              Allâhummaj'al hâdzal 'aqda 'aqdan mubârakan ma'shûman wa alqi
              bainahumâ ulfatan wa qarâran dâiman wa lâ taj'al bainahumâ
              firqatan wa firâran wa khishâman wakfihimâ mu'natad dunyâ wal
              âkhirah.
            </motion.span>

            <motion.span
              className={`py-4 text-2xl ${pnyonScript.className}`}
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.9 }}
            >
              ~~ Artinya ~~
            </motion.span>

            <motion.span
              className="text-sm w-5/6 text-pretty text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 2.1 }}
            >
              {inView && (
                <Typewriter
                  options={{
                    strings:
                      " Ya Allah, jadikanlah akad ini sebagai ikatan yang diberkahi dan dilindungi, tanamkan di antara keduanya kerukunan dan ketetapan yang langgeng, jangan Engkau jadikan di antara keduanya perpecahan, perpisahan dan permusuhan, dan cukupi keduanya bekal hidup di dunia dan akhirat.Ya Allah, jadikanlah akad ini sebagai ikatan yang diberkahi dan dilindungi...",
                    autoStart: true,
                    loop: false,
                    delay: 50,
                  }}
                />
              )}
            </motion.span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
