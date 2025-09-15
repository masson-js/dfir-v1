import Footer from "@/app/Components/Footer";
import Header from "@/app/Components/Header";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
      <div className="flex flex-col min-h-screen w-full">
      <Header  />
      <div className="flex-1">
        <div className="w-full max-w-screen-xl mx-auto mt-24 sm:mt-24 animate-fade-in opacity-0 animate-[fadeIn_0.6s_ease-in-out_forwards] px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8">
            <div className="flex flex-col w-full lg:w-1/2 items-center lg:items-start text-center lg:text-left p-4 sm:p-6">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-300 leading-tight">
                Hi! 👋
              </h1>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mt-4 mb-4 text-gray-800">
                My name is Wlod Simon
              </h2>
              <p className="text-sm sm:text-base text-gray-700 mb-4 text-balance">
                I'm a software developer, Cybersecurity, and DFIR Analyst.
              </p>
              <p className="text-sm sm:text-base text-gray-700 text-balance">
                I have been working as a JavaScript/Python developer for over 4
                years, and recently I have been studying Digital Forensics and
                Incident Response (DFIR) to deepen my expertise in Cybersecurity.
              </p>
            </div>
            <div className="flex justify-center lg:justify-start flex-shrink-0">
              <Image
                src="/pic.jpg"
                width={150}
                height={150}
                alt="Picture of Wlod Simon"
                className="rounded-full object-cover w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] shadow-md"
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6 mx-auto max-w-screen-md">
            <Image
              src="/bages/3.png"
              width={75}
              height={75}
              alt="Badge 3"
              className="rounded-md shadow-sm"
            />
            <Image
              src="/bages/2.png"
              width={75}
              height={75}
              alt="Badge 2"
              className="rounded-md shadow-sm"
            />
            <Image
              src="/bages/1.png"
              width={75}
              height={75}
              alt="Badge 1"
              className="rounded-md shadow-sm"
            />
          </div>
        </div>
      </div>
      <Footer />
  
   
    </div>
  );
}
