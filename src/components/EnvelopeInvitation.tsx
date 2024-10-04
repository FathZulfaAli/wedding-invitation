"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import useIsMobile from "@/Hooks/useIsMobile";

const logoUrl =
  "https://res.cloudinary.com/dzdrs7dkj/image/upload/v1726891407/luxhuss33n8toe1jo0mr.png";

export default function EnvelopeInvitation({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isEnvelopeClicked, setIsEnvelopeClicked] = useState(false);
  const [isBlocksVisible, setIsBlocksVisible] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showWeddingInvitation, setShowWeddingInvitation] = useState(false);
  const [showChildren, setShowChildren] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    console.log("handleLoad called");

    setIsLoading(false); // Set loading to false when the image has loaded
  };

  const isMobile = useIsMobile();

  // Handle envelope click
  const handleOpenEnvelope = () => {
    setIsEnvelopeClicked(true);

    // Delay showing welcome message until the envelope fades out
    setTimeout(() => {
      setShowWelcome(true);
    }, 1000); // Adjust based on envelope fade-out duration

    // Delay block sliding out and hiding the welcome message
    setTimeout(() => {
      setIsBlocksVisible(false); // Slide blocks out after welcome message
      setShowWelcome(false); // Hide welcome before showing content
    }, 3000); // Adjust timing to match the welcome message animation

    // Delay to show Wedding Invitation Logo
    setTimeout(() => {
      setShowWeddingInvitation(true);
    }, 4000); // Adjust this delay to fit your animation timing

    // Delay to show content after the wedding invitation logo
    setTimeout(() => {
      setShowWeddingInvitation(false);
      setShowChildren(true); // Show the children content
    }, 9000); // Adjust this delay to match the logo duration
  };

  return (
    <>
      {/* Sliding Blocks Section */}
      <div className="absolute w-screen h-screen inset-0 z-0 bg-[#e4e1dc]">
        <AnimatePresence>
          {isBlocksVisible && (
            <>
              {isMobile ? (
                // Mobile
                <>
                  {/* Left Door */}
                  <motion.div
                    className="fixed left-0 top-0 h-screen w-1/2 bg-[#151516] z-10 flex items-center"
                    initial={{ x: 0 }}
                    animate={{ x: isEnvelopeClicked ? "-250%" : 0 }}
                    exit={{ x: "-250%" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />

                  {/* Right Door */}
                  <motion.div
                    className="fixed right-0 top-0 h-screen w-1/2 bg-[#151516] z-10 flex items-center"
                    initial={{ x: 0 }}
                    animate={{ x: isEnvelopeClicked ? "250%" : 0 }}
                    exit={{ x: "250%" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  >
                    <motion.img
                      src="/gunungan.png"
                      alt="Gunungan"
                      style={{
                        objectFit: "cover",
                        width: "60%",
                        height: "60%",
                        translateX: "-50%",
                        overflow: "visible",
                        opacity: isLoading ? "0" : "1",
                      }}
                      initial={{ opacity: 0, scale: 4 }} // Start fully transparent and at scale 1
                      animate={{ opacity: 1, scale: 1 }} // Fade in and scale down to 0.8
                      exit={{ opacity: 0, scale: 1 }} // Fade out and scale back to 1
                      transition={{ duration: 1, ease: "easeInOut" }}
                    />
                  </motion.div>
                </>
              ) : (
                // Dekstop
                <>
                  {/* Left Door */}
                  <motion.div
                    className="fixed left-0 top-0 h-screen w-1/2 bg-[#151516] z-10"
                    initial={{ x: 0 }}
                    animate={{ x: isEnvelopeClicked ? "-100%" : 0 }}
                    exit={{ x: "-100%", opacity: 0 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  >
                    <Image
                      src={"/gunungan.png"}
                      alt="Gunungan"
                      layout="fill"
                      objectFit="contain"
                      className="absolute h-full w-auto right-0 z-20 transform translate-x-1/2 overflow-visible "
                    />
                  </motion.div>

                  {/* Right Door */}
                  <motion.div
                    className="fixed right-0 top-0 h-screen w-1/2 bg-[#151516] z-10 flex justify-end items-center"
                    initial={{ x: 0 }}
                    animate={{ x: isEnvelopeClicked ? "100%" : 0 }}
                    exit={{ x: "100%", opacity: 0 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  >
                    <div className="h-1/2 w-auto">
                      <Image
                        src={"/gunungan.png"}
                        alt="Gunungan"
                        layout="fill"
                        objectFit="contain"
                        className="absolute h-full w-auto right-0 z-20 transform -translate-x-1/2 overflow-visible "
                      />
                    </div>
                  </motion.div>
                </>
              )}
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Envelope Section */}
      <AnimatePresence>
        {!isEnvelopeClicked && (
          <div className="absolute flex flex-col h-screen w-screen py-10 justify-end items-center">
            {/* <motion.div
              className=" w-64 h-48 bg-gray-300 rounded-lg shadow-lg flex items-center justify-center z-20 cursor-pointer"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <p className="text-xl font-bold text-black">Buka Undangan</p>
            </motion.div> */}
            <motion.div
              className=" w-64 h-10 bg-gray-300 rounded-lg shadow-lg flex items-center justify-center z-20 cursor-pointer"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              onClick={handleOpenEnvelope}
            >
              <p className="text-xl font-bold text-black">Buka Undangan</p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Welcome Section */}
      <AnimatePresence>
        {showWelcome && (
          <div className="absolute flex flex-col h-screen w-screen justify-center items-center">
            <motion.div
              className="text-center text-xl lg:text-4xl font-bold text-black z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              FathMayang Production
              <br />
              Present
            </motion.div>
            <motion.div
              className="mt-5 text-center text-xl font-bold text-black z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <div className="loader" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Wedding Invitation Logo Section */}
      <AnimatePresence>
        {showWeddingInvitation && (
          <div className="absolute flex flex-col justify-center items-center h-screen w-screen bg-[#e4e1dc]">
            <motion.img
              src={logoUrl}
              alt="Wedding Invitation Logo"
              className="w-64 h-64 z-20"
              initial={{ opacity: 0 }} // Start fully transparent
              animate={{
                opacity: 1, // Fade in
                scale: [1, 1.05, 1], // Breathing effect
              }}
              exit={{ opacity: 0 }} // Fade out on exit
              transition={{
                opacity: { duration: 1, ease: "easeInOut" }, // Smooth fade-in effect (first 1 second)
                scale: {
                  delay: 1, // Wait for fade-in before starting the breathing effect
                  duration: 2, // Duration of one breathing cycle
                  repeat: Infinity, // Repeat breathing effect infinitely
                  ease: "easeInOut", // Smooth easing
                },
              }}
            />
          </div>
        )}
      </AnimatePresence>

      {/* Content Section */}
      {showChildren && (
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
}
