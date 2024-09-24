import { Bodoni_Moda, Great_Vibes, Pinyon_Script } from "next/font/google";
import Image from "next/image";
import React from "react";

const bodoniModaItalic = Bodoni_Moda({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

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

const logoUrl =
  "https://res.cloudinary.com/dzdrs7dkj/image/upload/v1726891407/luxhuss33n8toe1jo0mr.png";

export default function ContentInvitation() {
  return (
    <div className={`flex flex-col mt-20 justify-center items-center`}>
      <div
        className={`flex flex-col items-center text-center ${bodoniModaItalic.className}`}
      >
        <span className="text-4xl">WELCOME</span>
        <div className="flex flex-col lg:flex-row">
          <span className="text-2xl">to our</span>
          <span className={`text-4xl ${bodoniModaItalicBolder.className}`}>
            WEDDING
          </span>
        </div>

        <span className={`text-3xl mt-4 ${pnyonScript.className}`}>
          Celebration
        </span>

        <p className={`text-xs px-3 mt-9 lg:w-[30%] text-center  `}>
          Segala puji dan syukur yang teramat mulia kami haturkan ke hadirat
          Allah SWT., Tuhan Semesta Alam, Sang Maha Kuasa yang menguasai segala
          kejayaan dan kemuliaan, yang dengan kasih sayang-Nya telah melimpahkan
          kebahagiaan yang tak terhingga kepada kami.
        </p>
        <Image
          className="opacity-25"
          alt="logo pengantin"
          src={logoUrl}
          width={150}
          height={150}
        />
      </div>
      <div className="flex flex-col items-center justify-center w-full h-screen lg:w-screen mt-10 bg-white">
        <strong className={`text-center text-4xl ${pnyonScript.className}`}>
          The Week of Divine Love&apos;s Radiance
        </strong>
        <p className={`mt-7 text-center text-xs w-11/12 text-pretty `}>
          Dengan penuh rasa hormat dan kerendahan hati di hadapan-Nya, kami
          mengundang saudara/i untuk berkenan hadir dalam acara resepsi
          pernikahan kami.
        </p>
        <div className={`flex flex-col items-center `}>
          <p className={`text-2xl mt-10 ${pnyonScript.className}`}>
            Akad Nikah
          </p>
          <p className="text-sm">Sabtu, 14 Oktober 2024</p>
          <p className="text-xs">Kediaman Mempelai Putri</p>
        </div>
        <div className={`flex flex-col items-center `}>
          <p className={`text-2xl mt-10 ${pnyonScript.className}`}>
            Resepsi Pernikahan
          </p>

          <p className="text-sm">Sabtu, 19 Oktober 2024</p>
          <p className="text-xs">Pukul : 10.00 - 13.00 WIB</p>
          <p className="text-xs">Graha Taman Candhra Wilwatikta</p>
        </div>
        <p
          className={`mt-9 text-center text-xs w-11/12 text-pretty ${bodoniModaItalic.className}`}
        >
          “Semoga Allah memberkahimu di waktu bahagia dan memberkahimu di waktu
          susah, serta semoga Allah mempersatukan kalian berdua dalam kebaikan”.
        </p>
        <p
          className={`mt-1 text-center text-xs w-11/12 text-pretty ${bodoniModaItalic.className}`}
        >
          HR. Abu Dawud No. 2130
        </p>
      </div>
    </div>
  );
}
