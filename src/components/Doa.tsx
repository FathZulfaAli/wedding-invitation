/* eslint-disable react/no-unescaped-entities */
import { Bodoni_Moda, Pinyon_Script } from "next/font/google";
import Image from "next/image";
import React from "react";

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
  return (
    <div className="flex justify-center items-center">
      <div className="relative flex items-center justify-center lg:w-2/4 ">
        <div className=" border-white border-[17px] border-b-[50px] shadow-[0_-10px_20px_-5px_rgba(0,0,0,0.3),0_10px_20px_-5px_rgba(0,0,0,0.3),-10px_0_20px_-5px_rgba(0,0,0,0.3),10px_0_20px_-5px_rgba(0,0,0,0.3)]">
          <div className=" flex flex-col items-center py-6 bg-[#f0f0f0]">
            <span className={`text-4xl ${pnyonScript.className}`}>
              Doa Pengantin
            </span>
            <span className="mt-7 text-xl text-right w-5/6">
              اَللّٰهُمَّ اجْعَلْ هٰذَا الْعَقْدَ عَقْدًا مُبَارَكًا مَعْصُوْمًا
              وَأَلْقِ بَيْنَهُمَا أُلْفَةً وَقَرَارًا دَائِمًا وَلَا تَجْعَلْ
              بَيْنَهُمَا فِرْقَةً وَفِرَارًا وَخِصَامًا وَاكْفِهِمَا مُؤْنَةَ
              الدُّنْيَا وَالْاٰخِرَةِ
            </span>
            <span
              className={`mt-3 text-sm text-pretty w-5/6 ${bodoniModaItalic.className}`}
            >
              Allâhummaj'al hâdzal 'aqda 'aqdan mubârakan ma'shûman wa alqi
              bainahumâ ulfatan wa qarâran dâiman wa lâ taj'al bainahumâ
              firqatan wa firâran wa khishâman wakfihimâ mu'natad dunyâ wal
              âkhirah.
            </span>
            <span className={`py-4 text-2xl ${pnyonScript.className}`}>
              ~~ Artinya ~~
            </span>
            <span className="text-sm w-5/6 text-pretty text-center">
              Ya Allah, jadikanlah akad ini sebagai ikatan yang diberkahi dan
              dilindungi, tanamkan di antara keduanya kerukunan dan ketetapan
              yang langgeng, jangan Engkau jadikan di antara keduanya
              perpecahan, perpisahan dan permusuhan, dan cukupi keduanya bekal
              hidup di dunia dan akhirat.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
