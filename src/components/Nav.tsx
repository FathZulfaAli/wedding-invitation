import React from "react";
import { Bodoni_Moda } from "next/font/google";

const bodoniModa_Bold = Bodoni_Moda({
  subsets: ["latin"],
  weight: "800",
  style: "italic",
});

function Nav() {
  return (
    <nav className="flex justify-between items-center lg:mb-14 lg:mx-28">
      <div className="hidden lg:block">
        <span>Left</span>
      </div>
      <div className="hidden lg:block flex-grow text-center">
        <span className={` text-2xl lg:text-3xl ${bodoniModa_Bold.className}`}>
          ZULFA & MEGAWATI
        </span>
      </div>
      <div className="hidden lg:block">
        <span>Right</span>
      </div>
    </nav>
  );
}

export default Nav;
