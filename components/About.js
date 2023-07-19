import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <div className="mt-6 py-10 bg-blue-100/90 px-4 rounded-md">
      <h2
        id="about"
        className="text-4xl md:text-5xl font-bold text-blue-800 w-fit scroll-smooth relative"
      >
        About Me
        <span className="absolute w-3/4 h-1 bg-blue-800 left-0 -bottom-2"></span>
      </h2>

      <div className="md:flex mt-6 items-center justify-between">
        <div className="md:w-7/12 md:text-sm space-y-2">
          <p>
            Hi everyone! My name is <b>Basharat Mehdi Dar</b>, and I am a{" "}
            <b>Fullstack Software Engineer</b> based in J&K, India. After
            completing my undergrad studies in <b>Mathematics</b> followed by a{" "}
            <b>Masters degree in Computer Applications</b>, I started pursuing
            my interest in software development by picking up coding langusges
            and diving deep into emerging tech trends. I have always had a
            passion for technology and problem solving, which led me down the
            path becoming a programmer.
          </p>
          <p>
            Over the years I have developed strong experience in several
            programming languages, such as JavaScript, Dart, Java, Python and
            many more. I take pride in constantly improving my skills through
            online courses, attending meetups and staying updated with the
            latest trends and advancements within the tech community.
          </p>
          <p>
            When I am not coding away at my computer, I enjoy engaging in
            outdoor activities like, trekking, playing Cricket, and biking. At
            the heart of everything I do, I believe in continuous growth and
            making positive contributions however small they may be. Thank you
            for taking the time to learn more about me. If you require more
            details or want to connect, feel free to reach out via{" "}
            <Link
              href="mailto:basharatmehdi@myyahoo.com"
              className="text-blue-800 font-bold"
            >
              Email
            </Link>{" "}
            or by{" "}
            <Link
              href="#contact"
              className="text-blue-800 font-bold rounded border-2 border-blue-800 px-2 py-[1px]"
            >
              Message
            </Link>
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="./hero-light.png"
            width={300}
            height={300}
            alt={"Basharat Mehdi"}
          />
        </div>
      </div>
    </div>
  );
};
export default About;
