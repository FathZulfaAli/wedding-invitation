"use client";

import React from "react";
import { Bodoni_Moda } from "next/font/google";
import { motion } from "framer-motion"; // Import framer-motion

const bodoniModa_Bold = Bodoni_Moda({
  subsets: ["latin"],
  weight: "800",
  style: "italic",
});

function Nav() {
  return (
    <motion.nav
      className="flex justify-center items-center lg:mb-14 lg:mx-28"
      initial={{ opacity: 0, y: -50 }} // Initial state
      animate={{ opacity: 1, y: 0 }} // Animate to full opacity and position
      transition={{ duration: 1 }} // Control the animation duration
    >
      {/* <motion.div
        className="hidden lg:block"
        initial={{ opacity: 0, x: -50 }} // Slide in from left
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span>Left</span>
      </motion.div> */}

      <motion.div
        className="hidden lg:block flex-grow text-center"
        initial={{ opacity: 0, scale: 0.8 }} // Scale up and fade in
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }} // Add a slight delay
      >
        <span className={`text-2xl lg:text-3xl ${bodoniModa_Bold.className}`}>
          ZULFA & MEGAWATI
        </span>
      </motion.div>

      {/* <motion.div
        className="hidden lg:block"
        initial={{ opacity: 0, x: 50 }} // Slide in from right
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span>Right</span>
      </motion.div> */}
    </motion.nav>
  );
}

export default Nav;
