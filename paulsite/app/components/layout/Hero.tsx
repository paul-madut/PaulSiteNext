"use client";
import React from "react";
import { SparklesCore } from "../ui/Sparkles";
import Socials from "../ui/Socials";
import Image from "next/image";

function Hero() {
  return (
    <div className="hero p-8">
      <div className="hero__container pt-12  flex flex-col justify-center items-center">
          <div className="image rounded-full border-2 border-[#787878] w-72 h-72  overflow-hidden items-center flex">
            <Image
              src={"/headshot.jpg"}
              alt="logo"
              width={350}
              height={350}
              className=" pt-12 "
            ></Image>
          </div>
        <div className="h-[40rem] pt-2 w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
          <div className="hero__text items-center">
            <h1 className="text-6xl  text-white ">
              Hi! My name is{" "}
              <span className="text-white font-bold">Paul Madut </span>
              <br></br>
            </h1>
          </div>
          <p className="text-2xl pt-8 text-center w-1/3 text-[#a9a9a9]">
            I am a full stack developer and content creator living in Ottawa,
            Ontario. Currently, I am the CTO at Flocksteet, a fintech startup as
            well as an aspiring niche internet microcelebrity.
          </p>
          <div className="w-[40rem] h-40 relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px w-1/4" />
            {/* Core component */}

            <SparklesCore
              background="#transparent"
              minSize={0.6}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />

            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>

          <button className="p-[3px] mt-10 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              Check Out My Work
            </div>
          </button>
        </div>
      </div>

      <div className="hero__bottom flex justify-between w-screen grid-col-3">
        <div className="socials absolute bottom-0">

        <Socials />
        </div>

        <p className="text-white text-lg -rotate-90 absolute bottom-32 left-[92%]">
          paul.madut@icloud.com
        </p>
      </div>
    </div>
  );
}

export default Hero;
