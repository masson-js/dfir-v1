import Footer from "@/app/Components/Footer";
import Header from "@/app/Components/Header";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <div className="flex-1">
        <div className="flex flex-col w-auto mt-24 sm:ml-52 animate-fade-in opacity-0 animate-[fadeIn_0.6s_ease-in-out_forwards]">
          <div className="flex flex-row flex-wrap gap-6">
            <div className="flex flex-col mx-6 sm:w-2/4">
              <h1 className="text-2xl sm:text-4xl font-bold text-gray-300">
                Hi! 👋
              </h1>
              <h2 className="text-lg sm:text-xl font-semibold mt-4 mb-4">
                My name is Wlod Simon
              </h2>
              <p className="text-sm text-wrap sm:text-sm text-gray-700 mb-4">
                I'm software developer, Cybersecurity and DFIR Analyst
              </p>
              <p className="text-sm text-wrap sm:text-sm text-gray-700">
                I have been working as a JavaScript/Python developer for over 4
                years, and recently I have been studying DFIR and Cybersecurity
              </p>
            </div>
            <div className="flex mx-4 flex-shrink-0">
              <Image
                src="/pic.jpg"
                width={200}
                height={200}
                alt="Picture of the author"
                className="rounded-full object-cover w-[200px] h-[200px]"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mx-6">
            <Image
              src="/bages/3.png"
              width={75}
              height={75}
              alt="1r"
              className=""
            />
            <Image
              src="/bages/2.png"
              width={75}
              height={75}
              alt="1r"
              className=""
            />
            <Image
              src="/bages/1.png"
              width={75}
              height={75}
              alt="1r"
              className=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
