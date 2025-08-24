import React from "react";
import { PrimaryButton } from "./Button";

export default function HeroSection() {
  return (
    <div className="relative  bg-gradient-to-b from-[#0f172a] to-[#1e1b4b] text-white min-h-screen flex flex-col">
    
      {/* Hero Content */}
      <div className="flex flex-col justify-center items-center text-center flex-1 px-6 md:px-20">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Data to enrich your <br /> online business
        </h1>

        <p className="text-gray-400 max-w-2xl mb-8">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
        </p>

        <div className="flex space-x-4">

          <PrimaryButton 
          label="Get started"
          href={"/search"}
          className="bg-indigo-500 hover:bg-indigo-600 transition-all 
          duration-200 ease-in text-white px-6 py-3 rounded-lg text-lg shadow-md">
         </PrimaryButton>

          <PrimaryButton 
           label=" Learn more " 
           icon={"Chevron_Right"}
           className="rounded-lg text-gray-200 ring-2 ring-transparent hover:ring-indigo-500
            transition-all duration-300 ease-in-out hover:text-white px-6 py-3 text-lg flex items-center gap-3">
          </PrimaryButton>
        </div>
      </div>
     
    </div>
  );
}
