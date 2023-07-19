import Image from "next/image";
import Link from "next/link";
import { IconArrowDown, IconGithub, IconLinkedin } from "./icons";

const Hero = () => {
  return (
    <>
      <div className="md:flex items-center justify-between mt-6 py-10 bg-slate-100 rounded-md px-4 overflow-hidden">
        <div className="md:w-7/12">
          <div className="flex">
            <p className="">Hi there, my name is</p>
            <h1 className="font-black text-blue-800 ml-1">Basharat Mehdi</h1>
          </div>

          <p className="mt-3 capitalize text-[40px] leading-[44px] md:text-5xl text-cyan-800 font-black">
            {/* text for heading of portfolio about section */}
            fullstack software engineer
          </p>
          <div className="capitalize mt-2 flex items-center">
            Know more about me{" "}
            <Link
              href="#about"
              className="py-[6px] px-5 flex items-center rounded-lg text-bold text-cyan-950 border-2 border-cyan-700 hover:bg-cyan-500/20 hover:scale-95 transition-all ease-in-out duration-300 ml-4 scroll-smooth"
            >
              Click Here{" "}
              <IconArrowDown
                className={"w-[20px] ml-2 text-blue-800 animate-bounce"}
              />
            </Link>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <Link
              href="https://www.github.com/basharatmehdi"
              className={"hover:scale-95 transition"}
            >
              <IconGithub className={"h-8 w-8"} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/basharat-mehdi-642524168"
              className={"hover:scale-95"}
            >
              <IconLinkedin className={"h-8 w-8 text-[#0e76a8]"} />
            </Link>
          </div>
          <div className="flex items-center mt-5 gap-6">
            <Link
              href="#contact"
              className="px-5 py-2 rounded-lg font-bold tracking-wide text-blue-800 bg-blue-500/20 hover:bg-blue-500/30 hover:scale-95 transition-all ease-in-out duration-300"
            >
              Hire Me
            </Link>
            <button className="px-5 py-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 hover:scale-95 font-bold tracking-wide text-cyan-900 transition-all ease-in-out duration-300">
              Download Resume
            </button>
          </div>
        </div>
        <div className="self-center hidden md:block">
          <Image
            src="./hero-dark.png"
            width={300}
            height={300}
            alt={"Basharat Mehdi"}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
