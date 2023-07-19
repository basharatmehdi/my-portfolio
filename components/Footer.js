import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-[100px] flex justify-center items-center">
      Made with <span className="text-red-500 text-lg mx-1">&#x2764;</span> by{" "}
      <Link
        href="/"
        className="text-blue-800 hover:text-blue-600 font-bold ml-1"
      >
        Basharat Mehdi
      </Link>
    </div>
  );
};
export default Footer;
