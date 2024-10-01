"use client";
import { useState } from "react";
import { destinations } from "../_data/_data";
import { motion } from "framer-motion";

import Header from "@/components/Header";
import Image from "next/image";
import { Barlow_Condensed, Barlow } from "next/font/google";
const barlowCondensed = Barlow_Condensed({ subsets: ["latin"], weight: "400" });
const barlow = Barlow({ subsets: ["latin"], weight: "400" });
const DestinationPage = () => {
  const [showDestination, setShowDestination] = useState("Moon");

  const destination = destinations.find(
    (destination) => destination.name === showDestination
  );

  const toggleDestination = (destination: string) => {
    setShowDestination(destination);
  };
  const navDestination = [
    {
      name: "Moon",
      id: 1,
    },
    {
      name: "Mars",
      id: 2,
    },
    {
      name: "Europa",
      id: 3,
    },
    {
      name: "Titan",
      id: 4,
    },
  ];

  const contentVariant = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: 100,
    },
  };
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 }, // Shrink and fade out
    visible: { opacity: 1, scale: 1 }, // Grow to normal size and fade in
  };
  return (
    <div className="bg-[url(/assets/destination/background-destination-tablet.jpg)]  min-h-screen bg-cover">
      {/* md:bg-[url(/assets/home/background-home-tablet.jpg)] xl:bg-[url(/assets/home/background-home-desktop.jpg)] */}
      <Header />

      <div className="p-6 md:p-10 xl:px-40 2xl:px-60">
        <h1
          className={`${barlowCondensed.className} text-white text-center md:text-[1.25rem] lg:text-[1.75rem] md:text-left uppercase tracking-[15%]`}
        >
          <span className="font-bold pr-6">01</span> Pick your destination
        </h1>

        <div className="pt-6 flex flex-col lg:flex-row lg:gap-8 items-center">
          <motion.div
            key={`image-sm-${showDestination}`}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={imageVariants}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="pb-8"
          >
            <Image
              src={`${destination?.image}`}
              alt={`Image of ${destination?.image}`}
              width={327}
              height={203}
              priority={true}
              className="object-cover flex-1 my-8 lg:min-w-[30rem] md:my-10"
            />
          </motion.div>

          <div className="flex flex-col xl:px-10 2xl:px-20 lg:items-start items-center lg:max-w-[33.75rem]">
            {/* <NavDestination/> */}
            <ul className="flex flex-row gap-8 ">
              {navDestination.map((destination) => (
                <div key={destination.id} className="group">
                  <li
                    className={`${barlowCondensed.className} ${
                      destination.name === showDestination &&
                      "border-b-[0.188rem]"
                    } cursor-pointer text-blue300 text-[0.875rem] md:text-[1rem] tracking-[0.125rem] uppercase`}
                    onClick={() => toggleDestination(destination.name)}
                  >
                    {destination.name}
                  </li>
                  {destination.name !== showDestination && (
                    <div
                      className={` opacity-0 group-hover:opacity-100 
                      h-[0.188rem] bg-white/50 transition-all ease-in-out duration-300 w-full`}
                    ></div>
                  )}
                </div>
              ))}
            </ul>

            <motion.div
              key={showDestination}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={contentVariant}
              transition={{ duration: 1, type: "spring " }}
              className="text-center lg:text-left"
            >
              <div className="lg:h-[275px]">
                <h2 className=" text-white uppercase md:text-[5rem] lg:text-[6rem] text-[3.5rem]">
                  {destination?.name}
                </h2>
                <p
                  className={`${barlow.className}  text-blue300 leading-[180%] lg:text-[1.125rem] md:text-[1rem] text-[0.938rem]`}
                >
                  {destination?.desc}
                </p>
              </div>

              <div className="my-6 lg:my-10 h-[0.063rem] bg-[#979797] "></div>

              <div className=" flex flex-col md:flex-row md:gap-6  lg:justify-start justify-center">
                <div className="pb-6 md:pb-0 md:min-w-[13.75rem]">
                  <p
                    className={`${barlowCondensed.className} tracking-[0.125rem] uppercase text-blue300 text-[0.875rem]`}
                  >
                    Avg. distance
                  </p>
                  <p className=" uppercase text-white text-[1.75rem] ">
                    {destination?.averageDistance}
                  </p>
                </div>
                <div className="md:min-w-[13.75rem]">
                  <p
                    className={`${barlowCondensed.className} tracking-[0.125rem] uppercase text-blue300 text-[0.875rem]`}
                  >
                    Est. travel time
                  </p>
                  <p className="uppercase text-white text-[1.75rem]">
                    {destination?.estimateTravelTime}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationPage;
