"use client";
import Link from "next/link";
import {
  IconEmailOutline,
  IconLocationOutline,
  IconSend,
  IconWhatsapp,
  IconGithub,
  IconLinkedin,
  IconTwitter,
  IconSpinner,
} from "./icons";

import { useEffect, useState } from "react";

const initialState = {
  email: "",
  name: "",
  message: "",
  isLoading: false,
};
const Contact = () => {
  const [state, setState] = useState(initialState);
  const [successMsg, setSuccessMsg] = useState("");
  const [err, setErr] = useState("");

  const handleChange = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!state.email || !state.name || !state.message) {
      return setErr("All fields are required.");
    }
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    // console.log(JSON.stringify(state));
    const data = JSON.stringify(state);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      });
      console.log(response.json());
      if (!response.ok) {
        setState((prev) => ({
          ...prev,
          isLoading: false,
        }));
        return setErr("Something went wrong! Try again later.");
      }
      setSuccessMsg("Message Sent successfully.");
      setState(initialState);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setErr("");
      setSuccessMsg("");
    }, 3000);
  }, [err, successMsg]);

  return (
    <>
      <div className="mt-6 py-10 bg-slate-100 rounded-md px-4">
        <h2
          id="contact"
          className="text-4xl md:text-5xl font-bold text-blue-800 w-fit scroll-smooth relative"
        >
          Contact Me
          <span className="absolute w-3/4 h-1 bg-blue-800 left-0 -bottom-2"></span>
        </h2>
        <div className="mt-6 md:grid grid-cols-2 gap-5">
          <div className="bg-slate-300 py-6 px-4 rounded-md my-3">
            <form action="">
              <input
                type="email"
                name="email"
                id="email"
                value={state.email}
                onChange={handleChange}
                minLength={5}
                maxLength={50}
                required
                placeholder="Enter your email"
                className="w-full py-3 px-3 text-sm rounded-md bg-slate-100 focus:outline-blue-200"
              />
              <input
                type="text"
                name="name"
                id="name"
                value={state.name}
                onChange={handleChange}
                minLength={4}
                maxLength={40}
                required
                placeholder="Enter your name"
                className="w-full mt-3 py-3 px-3 focus:outline-blue-200 text-sm rounded-md bg-slate-100"
              />
              <textarea
                name="message"
                id="message"
                value={state.message}
                onChange={handleChange}
                minLength={20}
                maxLength={500}
                required
                rows="8"
                className="resize-none w-full mt-3 py-3 px-3 focus:outline-blue-200 text-sm rounded-md bg-slate-100"
                placeholder="Your Message"
              ></textarea>
              <button
                onClick={handleSubmit}
                disabled={state.isLoading}
                className={`flex items-center px-5 py-2 rounded-lg bg-cyan-200/90 hover:bg-cyan-300/70 hover:scale-95 font-bold tracking-wide text-cyan-900 transition-all ease-in-out duration-300 mt-6`}
              >
                <span>{state.isLoading ? "Sending..." : "Send Message"}</span>{" "}
                {!state.isLoading ? (
                  <IconSend className={"w-[22px] ml-3"} />
                ) : (
                  <IconSpinner className={"w-[22px] ml-3 animate-spin"} />
                )}
              </button>
            </form>
            {err && (
              <div className="mt-4 bg-red-100 text-red-600 text-center py-1 rounded-md w-full">
                {err}
              </div>
            )}
            {successMsg && (
              <div className="mt-4 bg-green-100 text-green-600 text-center py-1 rounded-md w-full">
                {successMsg}
              </div>
            )}
          </div>
          <div className="my-3 flex flex-col justify-center text-gray-600 text-sm md:text-base">
            <div className="flex mb-3">
              <IconEmailOutline className={"mr-3 w-[18px]"} />

              <span>
                <b>Email: </b>basharatmehdi@myyahoo.com
              </span>
            </div>
            <div className="flex mb-3">
              <IconLocationOutline className={"mr-3 w-[18px]"} />
              <span>
                <b>Location: </b>Jammu and Kashmir, India.
              </span>
            </div>
            <div className="flex mb-3">
              <IconWhatsapp className={"mr-3 w-[16px]"} />
              <span>
                <b>WhatsApp: </b>+91 - 7006305586
              </span>
            </div>
            <div className="flex items-center justify-center md:justify-normal gap-3 mt-8">
              <Link
                href="https://www.linkedin.com/in/basharat-mehdi-642524168"
                className={"hover:scale-95"}
              >
                <IconLinkedin className={"w-8 text-[#0e76a8]"} />
              </Link>
              <Link
                href="https://www.github.com/basharatmehdi"
                className={"hover:scale-95 transition"}
              >
                <IconGithub className={"w-8"} />
              </Link>
              <Link
                href="https://www.twitter.com/basharatmehdi2"
                className={"hover:scale-95"}
              >
                <IconTwitter className={"w-10 text-[#2fbdff]"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
