"use client";

import React, { useState, useEffect } from "react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import SaveDateButton from "../../public/SaveDateButton";
import { Pinyon_Script } from "next/font/google";
import { motion, useAnimation } from "framer-motion";

const pnyonScript = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

const googleCalendar =
  "https://www.google.com/calendar/render?action=TEMPLATE&text=Resepsi+Pernikahan+Fath+%26+Mega&dates=20241019T030000Z/20241019T060000Z&details=Kami+mengundang+saudara/i+untuk+bergabung+dalam+perayaan+pernikahan+kami%2C+Resepsi+Pernikahan+Fath+%26+Mega.+Kami+sangat+menantikan+untuk+berbagi+hari+istimewa+ini+bersama+Anda!&location=Taman+Candra+Wilwatikta&trp=false&sprop=&sprop=name:";

export default function Countdown() {
  const [mounted, setMounted] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    setMounted(true);
    controls.start({
      rotate: [0, -10, 10, -10, 0], // Jiggle movement
      transition: { duration: 0.6, repeat: Infinity, repeatDelay: 3 }, // Loop with a delay
    });
  }, [controls]);

  if (!mounted) return null;

  const handleSaveDate = () => {
    window.open(googleCalendar, "_blank");
  };

  return (
    <div className="flex flex-col justify-center py-16 items-center w-full">
      <h1 className={`text-4xl lg:text-6xl pb-6 ${pnyonScript.className}`}>
        Countdown
      </h1>
      <FlipClockCountdown
        to={new Date("2024-10-19T03:00:00Z").getTime()}
        className="flip-clock"
      />
      <motion.div
        onClick={handleSaveDate}
        className="flex flex-row items-center justify-center mt-8 gap-x-2 py-2 cursor-pointer border-y border-black"
        animate={{
          rotate: [0, -2, 2, -2, 0], // Jiggle effect
        }}
        transition={{
          duration: 0.6, // Duration of one jiggle cycle
          repeat: Infinity, // Repeat indefinitely
          repeatDelay: 2, // Delay between jiggles
          ease: "easeInOut", // Smooth out the jiggle
        }}
      >
        <SaveDateButton />
        <span>SAVE THE DATE</span>
      </motion.div>
    </div>
  );
}
