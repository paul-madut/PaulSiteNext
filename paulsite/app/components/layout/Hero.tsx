"use client";
import React from "react";
import { SparklesCore } from "../ui/Sparkles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDown} from '@fortawesome/free-regular-svg-icons';
import Socials from "../ui/Socials";

function  Hero() {
  return (
    <div className="hero">

    <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="hero__text space-y-4">
      <h2 className="md:text-3xl text-lg lg:text-5xl font-bold text-start text-white relative z-20">Hello! My name is</h2>
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        Paul the Programmer
      </h1>
      <p className="text-lg lg:text-2xl text-center text-[#787878] py-2">I make things on the web. Come take a look</p>
      </div>
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
    </div>

    
    <div className="hero__bottom flex justify-between w-screen grid-col-3">
    <Socials></Socials>
    <FontAwesomeIcon className=" pulse text-6xl self-end right-1/2 bottom-12 absolute" icon={faCircleDown} style={{color: "#FFF",}} />

    <p className="text-white text-lg -rotate-90 absolute bottom-32 left-[92%]">paul.madut@icloud.com</p>
    </div>
          </div>
  );
}

export default Hero;