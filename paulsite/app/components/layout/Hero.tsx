"use client";
import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="hero p-1">
      <div className="hero__container pt-20  flex flex-col justify-center items-center">
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

            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>

          <button className="p-[3px] mt-10 relative">
            <div className="absolute inset-0 " />
            <div className="px-8 py-2  bg-purple-500 text-white rounded-[6px]  ">
              Check Out My Work
            </div>
          </button>
        </div>
      </div>

      <div className="hero__bottom flex justify-between w-screen grid-col-3">
        <div className="socials absolute bottom-0">

        {/* <Socials /> */}
        </div>

        <p className="text-white text-lg -rotate-90 absolute bottom-32 left-[92%]">
          paul.madut@icloud.com
        </p>
      </div>
    </div>
  );
}

export default Hero;
