"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";


export default function Navbar() {
    
 
  return (
    <nav className="navbar flex justify-center ">
        <div className="navbar flex justify-between items-center p-6 m-4 w-full h-12 bg-black text-[#787878] border-b-[1px] border-[#212121] fixed z-10"  >

            <Link href="/">
            <Image src="/ptp.png" alt="logo" width={100} height={100}>
            
            </Image>
            </Link>

            <a className="flex space-r-60" href="index.html" id="navbar__logo"> </a>
        
                <ul className="flex space-x-6 text-2xl " >

                <li className="navbar__item">
                    <a href="#header" className="navbar__links" id="homepage"> Home </a>
                </li>

                <li className="navbar__item">
                    <a href="#about" className="navbar__links" id="aboutpage"> About</a>
                </li>

                <li className="navbar__item">
                    <a href="#services" className="navbar__links" id="servicepage"> Services </a>
                </li>

                <li className="navbar__item">
                    <a href="#portfolio" className="navbar__links" id="portfoliopage"> Portfolio </a>
                </li>

                <li className="navbar__item">
                    <a href="#contact" className="navbar__links" id="contactpage"> Contact Me </a>
                </li>
            </ul>
    
        </div>
        </nav>
  );
}
