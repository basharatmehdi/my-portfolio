import Link from "next/link";
import { IconGithub, IconLinkedin, IconTwitter } from "./icons";

const MobileNavbar = ({ className, setMNav }) => {
  return (
    <>
      <nav
        className={`${className} flex flex-col items-center bg-white/90 backdrop-blur-[3px] shadow-2xl rounded-b-lg py-7 absolute md:hidden w-full z-50 left-0`}
      >
        <Link
          onClick={() => {
            setMNav(false);
          }}
          href="#about"
          className={
            "hover:bg-blue-300 w-11/12 text-center py-2 rounded-md mb-3"
          }
        >
          ABOUT
        </Link>
        <Link
          onClick={() => {
            setMNav(false);
          }}
          href="#skills"
          className={
            "hover:bg-blue-300 w-11/12 text-center py-2 rounded-md mb-3"
          }
        >
          SKILLS
        </Link>
        <Link
          onClick={() => {
            setMNav(false);
          }}
          href="#projects"
          className={
            "hover:bg-blue-300 w-11/12 text-center py-2 rounded-md mb-3"
          }
        >
          PROJECTS
        </Link>
        <Link
          onClick={() => {
            setMNav(false);
          }}
          href="#contact"
          className={
            "hover:bg-blue-300 w-11/12 text-center py-2 rounded-md mb-3"
          }
        >
          CONTACT
        </Link>
        <div className="flex items-center gap-3 mt-10">
          <Link
            onClick={() => {
              setMNav(false);
            }}
            href="https://www.linkedin.com/in/basharat-mehdi-642524168"
            className={"hover:scale-95"}
          >
            <IconLinkedin className={"w-7 text-[#0e76a8]"} />
          </Link>
          <Link
            onClick={() => {
              setMNav(false);
            }}
            href="https://www.github.com/basharatmehdi"
            className={"hover:scale-95 transition"}
          >
            <IconGithub className={"w-7"} />
          </Link>
          <Link
            onClick={() => {
              setMNav(false);
            }}
            href="https://www.twitter.com/basharatmehdi2"
            className={"hover:scale-95"}
          >
            <IconTwitter className={"w-9 text-[#2fbdff]"} />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default MobileNavbar;
