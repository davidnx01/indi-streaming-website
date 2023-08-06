'use client';

import { Anton } from "next/font/google";

import { BsFillPlayFill } from "react-icons/bs";
import Button from "./Button";

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
});

const DesktopHero = () => {
  return (
    <div 
      className=" 
        sm:block hidden
        sm:py-6 md:py-8
        sm:px-8 md:px-12
        sm:pb-12 md:pb-24
        bg-hero
        bg-no-repeat
        bg-cover
        bg-left
        w-full
    ">
      <div className="sm:max-w-[350px] md:max-w-[405px] sm:space-y-4 md:space-y-6 leading-[1.8em]">
        <h1 
          className={`
            ${anton.className} 
            sm:text-5xl md:text-[5rem]
        `}>
          SAM AWAY
        </h1>

        <p className="mt-7 text-neutral-400 text-sm">
          Adventure, Fantasy | 2019 | 136 Min.
        </p>

        <p className="sm:text-sm md:text-normal">
          When a tornado hits through City of Peaceville,
          Samantha (Jenny Loifer) and her dog, Ricko, are 
          whisked away in their house to an amazing journey.
        </p>

        <p className="sm:text-sm md:text-normal">
          Director: Todd Burns <br/>
          Cast: Jenny Loifer, Sarah Obrien, Larry Moss Jr.
        </p>
      </div>

      
      <Button
        label="Watch Now"
        icon={BsFillPlayFill}
        bordered
        className="sm: mt-6 md:mt-12"
      />
    </div>
  )
}

export default DesktopHero