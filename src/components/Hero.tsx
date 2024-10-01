import { barlow, barlowCondensed } from "@/app/_fonts/fonts";
import Button from "./Button";
import Header from "./Header";

const Hero = () => {
  return (
    <section className="bg-[url(/assets/home/background-home-mobile.jpg)] md:bg-[url(/assets/home/background-home-tablet.jpg)] lg:bg-[url(/assets/home/background-home-desktop.jpg)] min-h-screen bg-bottom bg-cover">
      <Header />

      <div className=" p-6 md:px-10 md:py-32 xl:px-40 2xl:px-60 flex flex-col lg:flex-row lg:pt-72 lg:justify-between">
        <div className="flex flex-col items-center lg:items-start lg:max-w-[33.75rem]  ">
          <h1
            className={`${barlowCondensed.className} tracking-[0.25rem] text-center uppercase text-blue300 text-[1rem] md:text-[1.75rem]`}
          >
            So, you want to travel to
          </h1>

          <span className="text-white uppercase text-[5rem] md:text-[9rem]">
            Space
          </span>

          <p
            className={`${barlow.className} lg:text-left text-blue300 text-center text-[0.938rem] md:text-[1rem] lg:text-[1.125rem] leading-[180%]`}
          >
            Let&apos;s face it; if you want to go to space you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we&apos;ll give you a truly out of
            this world experience
          </p>
        </div>
        <div className="flex items-center justify-center pt-[7.438rem] lg:pt-0">
          <Button
            text="Explore"
            className="relative bg-white text-blue900 cursor-pointer text-[1.125rem] md:text-[2rem] h-[9rem] flex items-center justify-center uppercase rounded-full w-[9rem] md:h-[17rem] md:w-[17rem]"
          >
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-all ease-in-out duration-300 bg-white/10 h-[14.5rem] md:h-[22.5rem] w-[14.5rem] md:w-[22.5rem]"></span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
