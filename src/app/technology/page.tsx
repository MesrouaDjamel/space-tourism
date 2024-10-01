"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { technologies } from "../_data/_data";
import Header from "@/components/Header";
import Image from "next/image";
import { barlow, barlowCondensed } from "../_fonts/fonts";


const TechnologyPage = () => {
  const [showTechnology, setShowTechnology] = useState("Launch vehicle");

  const toggleTechnology = (technology: string) => {
    setShowTechnology(technology);
  };

  const contentVariant = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
    // exit: {
    //   opacity: 0,
    //   y: 100,
    // },
  };

  const technology = technologies.find(
    (technology) => technology.name === showTechnology
  );
  return (
    <div className="bg-[url(/assets/technology/background-technology-mobile.jpg)] md:bg-[url(/assets/technology/background-technology-tablet.jpg)] xl:bg-[url(/assets/technology/background-technology-desktop.jpg)] min-h-screen bg-center bg-cover ">
      <Header />

      <h1
        className={`${barlowCondensed.className} py-6 md:pl-10 xl:pl-40 text-white text-center md:text-[1.25rem] lg:text-[1.75rem] md:text-left uppercase tracking-[15%]`}
      >
        <span>03</span> Space Launch 101
      </h1>

      <div className="pt-16 xl:pt-0 2xl:px-60 flex flex-col lg:pl-10 xl:pl-40 lg:flex-row gap-8">
        <motion.div
          key={`image-sm-${showTechnology}`}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={contentVariant}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="lg:hidden"
        >
          <Image
            src={`${technology?.image}`}
            alt={`Image of ${technology?.image}`}
            width={327}
            height={203}
            priority={true}
            className="object-cover w-full"
          />
        </motion.div>

        <div className="flex flex-col gap-10 lg:flex-row lg:max-w-[39.688rem]">
          <div className="flex justify-center lg:flex-col gap-4">
            <span
              onClick={() => toggleTechnology("Launch vehicle")}
              className={`md:h-[3.5rem] ${
                technology?.name === "Launch vehicle"
                  ? "bg-white text-blue900"
                  : "text-white"
              }  hover:border-white transition-all ease-in-out duration-300  border-white/25  text-[1.125rem] md:text-[1.5rem] lg:text-[2rem] border h-[2.5rem] md:w-[3.5rem] w-[2.5rem] lg:w-[5rem] lg:h-[5rem] rounded-full font-bold cursor-pointer flex items-center justify-center`}
            >
              1
            </span>
            <span
              onClick={() => toggleTechnology("Spaceport")}
              className={`md:h-[3.5rem] ${
                technology?.name === "Spaceport"
                  ? "bg-white text-blue900"
                  : "text-white"
              } hover:border-white transition-all ease-in-out duration-300  border-white/25  text-[1.125rem] md:text-[1.5rem] lg:text-[2rem] border h-[2.5rem] md:w-[3.5rem] w-[2.5rem] lg:w-[5rem] lg:h-[5rem] rounded-full font-bold cursor-pointer flex items-center justify-center`}
            >
              2
            </span>
            <span
              onClick={() => toggleTechnology("Space Capsule")}
              className={`md:h-[3.5rem] ${
                technology?.name === "Space Capsule"
                  ? "bg-white text-blue900"
                  : "text-white"
              } hover:border-white transition-all ease-in-out duration-300  border-white/25  text-[1.125rem] md:text-[1.5rem] lg:text-[2rem] border h-[2.5rem] md:w-[3.5rem] w-[2.5rem] lg:w-[5rem] lg:h-[5rem] rounded-full font-bold cursor-pointer flex items-center justify-center`}
            >
              3
            </span>
          </div>

          <motion.div
            key={showTechnology}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={contentVariant}
            transition={{ duration: 1 }}
            className="flex flex-col md:px-32 lg:px-0 px-6 pb-12 gap-4 lg:items-start lg:justify-center items-center"
          >
            <p className="uppercase text-white/50 text-[1.125rem] md:text-[1.5rem] lg:text-[2rem]">
              The terminology ...
            </p>

            <h1 className="text-white uppercase text-[1.5rem] md:text-[2.5rem] lg:text-[3.5rem]">
              {technology?.name}
            </h1>

            <p
              className={`${barlow.className} lg:text-left text-center text-blue300 leading-[180%] lg:text-[1.125rem] font-normal md:text-[1rem] text-[0.938rem]`}
            >
              {technology?.desc}
            </p>
          </motion.div>
        </div>

        <motion.div
          key={`image-${showTechnology}`}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={contentVariant}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="hidden lg:block"
        >
          <Image
            src={`${technology?.image}`}
            alt={`Image of ${technology?.image}`}
            width={327}
            height={203}
            priority={true}
            className="object-cover flex-1 lg:w-[39.688rem] w-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default TechnologyPage;
