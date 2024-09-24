import { Pinyon_Script } from "next/font/google";
import React from "react";

const pnyonScript = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

export default function Map() {
  return (
    <div className="flex flex-col items-center justify-center mb-20">
      <span className={`text-4xl pb-6 ${pnyonScript.className}`}>
        Event Location
      </span>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.2320477821836!2d112.67246067500368!3d-7.658181392358235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f12!3m3!1m2!1s0x2dd7d9c93fee0033%3A0x709acf4f884c682f!2sTaman%20Candra%20Wilwatikta!5e0!3m2!1sen!2sid!4v1726997303756!5m2!1sen!2sid"
        loading="lazy"
        width="250"
        height="300"
        allowFullScreen={false}
        className="rounded-md border-white border-4 "
      />
    </div>
  );
}
