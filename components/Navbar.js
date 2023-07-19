"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { IconMenuRight, IconTimes } from "@/components/icons";
import MobileNavbar from "@/components/MobileNavbar";

const NavLink = ({ href, title, className }) => {
  const pathname = usePathname();

  return (
    <>
      <Link
        href={href}
        className={`${className} relative group ${
          pathname === href ? "text-blue-800" : ""
        } uppercase text-sm tracking-wider hover:text-blue-800 transition-colors ease-in-out duration-300`}
      >
        {title}
        <span
          className={`${
            pathname === href ? "w-full" : "w-0"
          } h-[2px] hidden md:inline-block absolute bg-blue-800 left-0 -bottom-[2px] group-hover:w-full transition-[width] ease-in-out duration-300`}
        ></span>
      </Link>
    </>
  );
};

function Navbar() {
  const [mNav, setMNav] = useState(false);
  const handleNav = () => {
    setMNav(!mNav);
  };
  return (
    <>
      <div className="flex items-center px-4 md:px-8 lg:w-[980px] xl:w-[1100px] 2xl:w-[1400px] justify-between mx-auto h-full">
        <div className="logo">
          <Link
            href="/"
            className="text-3xl uppercase font-black tracking-wide text-blue-800"
          >
            bm
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-4">
          {/* <NavLink href="/" title="Home" /> */}
          <NavLink href="#about" title="About" />
          <NavLink href="#skills" title="Skills" />
          <NavLink href="#projects" title="Projects" />
          <NavLink href="#contact" title="Contact" />
        </nav>
        <div className="md:hidden text-cyan-950">
          {!mNav ? (
            <IconMenuRight onClick={handleNav} />
          ) : (
            <IconTimes onClick={handleNav} />
          )}
        </div>
      </div>
      {mNav && (
        <MobileNavbar
          setMNav={setMNav}
          className={
            mNav
              ? "top-14 transition-all ease-in-out duration-500 opacity-100"
              : "-top-[500px] opacity-0"
          }
        />
      )}
      {/* {mNav && (
        <div
          className="bg-black/10 w-screen h-screen md:hidden absolute top-14"
          onClick={setMNav(false)}
        ></div>
      )} */}
    </>
  );
}
export default Navbar;
