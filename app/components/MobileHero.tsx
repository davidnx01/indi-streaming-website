'use client';

import Button from "./Button";
import Image from "next/image";
import { Anton } from "next/font/google";

import { BsFillPlayFill } from "react-icons/bs";

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
});

const MobileHero = () => {
  return (
    <>
      <div className="block sm:hidden">
        <div 
          className=" 
            bg-hero
            bg-no-repeat
            bg-cover
            bg-center
            w-full
            h-[250px]
            p-6
        ">
          <Image 
            src="/images/indi-logo.svg"
            width={45}
            height={27}
            alt="Logo"
            style={{ cursor: 'pointer' }}
          />
        </div>  

        <div className="py-6 px-8 pb-10 bg-[#080808]">
          <div 
            className="
              max-w-[410px] 
              space-y-4 
              leading-[1.8em]
          ">
            <h1 className={`${anton.className} text-4xl`}>
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
            className="mt-16"
          />
        </div>
      </div>
    </>
  )
}

export default MobileHero