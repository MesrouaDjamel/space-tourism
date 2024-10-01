"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { crews } from "../_data/_data";
import Header from "@/components/Header";
import Image from "next/image";
import { barlow, barlowCondensed } from "../_fonts/fonts";


const CrewPage = () => {
  const [showCrew, setShowCrew] = useState("Douglas Hurley");

  const crew = crews.find((crew) => crew.name === showCrew);
  const toggleCrew = (crew: string) => {
    setShowCrew(crew);
  };

  const contentVariant = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    // exit: {
    //   opacity: 0,
    //   y: 100,
    // },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 }, // Shrink and fade out
    visible: { opacity: 1, scale: 1 }, // Grow to normal size and fade in
  };
  return (
    <div className="bg-[url(/assets/crew/background-crew-mobile.jpg)] md:bg-[url(/assets/crew/background-crew-tablet.jpg)] xl:bg-[url(/assets/crew/background-crew-desktop.jpg)] min-h-screen bg-bottom bg-cover ">
      <Header />
      <h1
        className={`${barlowCondensed.className} text-white text-center md:text-[1.25rem] lg:text-[1.75rem] md:text-left uppercase tracking-[15%] p-6 md:pt-10 md:mx-10 2xl:mx-60`}
      >
        <span className="font-bold pr-6">02</span> Meet your crew
      </h1>

      <div className="p-6 md:mx-10 lg:px-10 xl:px-40 2xl:mx-60">
        <div className="lg:max-w-[33.75rem] flex flex-col lg:flex-row lg:gap-10">
          <div className="flex flex-col  items-center lg:items-start">
            <motion.div
              key={showCrew}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={contentVariant}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="lg:justify-center lg:gap-24 md:px-20 lg:px-0 flex flex-col min-h-[19.063rem] lg:min-h-[38.125rem] lg:min-w-[28.125rem] items-center lg:items-start justify-between "
            >
              <div className="max-h-[17.813rem]">
                <h2 className="text-white/50 uppercase text-[1.125rem] md:text-[1.5rem] lg:text-left text-center">
                  {crew?.role}
                </h2>
                <h3 className="text-white uppercase md:text-[2.5rem] text-[1.5rem] pb-6 lg:text-left text-center">
                  {crew?.name}
                </h3>
                <p
                  className={`${barlow.className} lg:text-left text-center text-blue300 leading-[180%] lg:text-[1.125rem] font-normal md:text-[1rem] text-[0.938rem]`}
                >
                  {crew?.desc}
                </p>
              </div>
            </motion.div>

            <div className="flex gap-4">
              <span
                onClick={() => toggleCrew("Douglas Hurley")}
                className={`w-[0.625rem] h-[0.625rem] lg:h-[0.938rem] lg:w-[0.938rem] cursor-pointer rounded-full hover:bg-white/50 ${
                  crew?.name === "Douglas Hurley" ? "bg-white" : "bg-white/30"
                }`}
              ></span>
              <span
                onClick={() => toggleCrew("Mark Shuttleworth")}
                className={`w-[0.625rem] h-[0.625rem] lg:h-[0.938rem] lg:w-[0.938rem] cursor-pointer rounded-full hover:bg-white/50 ${
                  crew?.name === "Mark Shuttleworth"
                    ? "bg-white"
                    : "bg-white/30"
                }`}
              ></span>
              <span
                onClick={() => toggleCrew("Victor Glover")}
                className={`w-[0.625rem] h-[0.625rem] lg:h-[0.938rem] lg:w-[0.938rem] cursor-pointer rounded-full hover:bg-white/50 ${
                  crew?.name === "Victor Glover" ? "bg-white" : "bg-white/30"
                }`}
              ></span>
              <span
                onClick={() => toggleCrew("Anousheh Ansari")}
                className={`w-[0.625rem] h-[0.625rem] lg:h-[0.938rem] lg:w-[0.938rem] cursor-pointer rounded-full hover:bg-white/50 ${
                  crew?.name === "Anousheh Ansari" ? "bg-white" : "bg-white/30"
                }`}
              ></span>
            </div>
          </div>

          <motion.div
            key={`image-sm-${showCrew}`}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={imageVariants}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="mt-12 lg:mt-0 flex lg:min-w-[540px] flex-1 items-center lg:items-start justify-center"
          >
            <Image
              src={`${crew?.image}`}
              alt={`Image of ${crew?.image}`}
              width={327}
              height={203}
              className="object-cover flex-1 mx-8 md:px-16 lg:min-w-[33.75rem] lg:my-0 md:my-10"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CrewPage;
