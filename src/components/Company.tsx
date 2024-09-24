"use client";
import React from "react";
import InstagramSvg from "../../public/InstagramSvg";
import DiscordSvg from "../../public/DiscordSvg";

const igUrl = "https://www.instagram.com/fathandmayang";
const discordUrl = "https://discordapp.com/users/543676213147861003";

export default function Company() {
  const handleIgClick = () => {
    window.open(igUrl, "_blank");
  };
  const handleDiscordClick = () => {
    window.open(discordUrl, "_blank");
  };

  return (
    <footer className="flex flex-row items-center justify-between px-3 lg:px-9 w-full mt-20 py-6 lg:w-full bg-black">
      <span className=" text-white"> Made by F&M Production</span>
      <div className="flex flex-row gap-x-3">
        <div onClick={handleDiscordClick} className="mt-2 cursor-pointer">
          <DiscordSvg />
        </div>
        <div onClick={handleIgClick} className="mt-2 cursor-pointer">
          <InstagramSvg />
        </div>
      </div>
    </footer>
  );
}
