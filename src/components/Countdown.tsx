"use client";

import React, { useState, useEffect } from "react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import SaveDateButton from "../../public/SaveDateButton";
import { Bodoni_Moda, Pinyon_Script } from "next/font/google";

const pnyonScript = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

const googleCalendar =
  "https://www.google.com/calendar/render?action=TEMPLATE&text=Resepsi+Pernikahan+Fath+%26+Mega&dates=20241019T030000Z/20241019T060000Z&details=Kami+mengundang+saudara/i+untuk+bergabung+dalam+perayaan+pernikahan+kami%2C+Resepsi+Pernikahan+Fath+%26+Mega.+Kami+sangat+menantikan+untuk+berbagi+hari+istimewa+ini+bersama+Anda!&location=Taman+Candra+Wilwatikta&trp=false&sprop=&sprop=name:";

export default function Countdown() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Ensures client-side rendering only
  }, []);

  if (!mounted) return null; // Avoid rendering during SSR

  const handleSaveDate = () => {
    window.open(googleCalendar, "_blank");
  };

  return (
    <div className="flex flex-col justify-center py-16 items-center w-full">
      <h1 className={`text-4xl pb-6 ${pnyonScript.className}`}>Countdown</h1>
      <FlipClockCountdown
        to={new Date("2024-10-19T03:00:00Z").getTime()}
        className="flip-clock"
      />
      <div
        onClick={handleSaveDate}
        className="flex flex-row items-center justify-center mt-8 gap-x-2 py-2 cursor-pointer border-y border-black"
      >
        <SaveDateButton />
        <span>SAVE THE DATE </span>
      </div>
    </div>
  );
}
