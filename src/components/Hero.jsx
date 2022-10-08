import React from "react";
import HeroImage from "../assets/images/Hero_image.png";
import { social_media } from "./api/Hero.api";

const Hero = () => {
  return (
    <>
      <section
        id={"home"}
        className={`min-h-screen flex py-10 
      md:flex-row flex-col items-center`}
      >
        <div className="flex-1 flex items-center justify-center h-full">
          <img
            src={HeroImage}
            alt="HeroImgage"
            // className={`md:w-11/12 h-full object-cover rounded-full`}
            className={` w-[40rem] h-full -object-cover  ml-4 rounded-full`}
          />
        </div>
        <div className="flex-1">
          <div className="md:text-left text-center">
            <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-cyan-600 font-bold">
              <span className={`text-cyan-600 md:text-6xl text-5xl`}>
                Hello!
                <br />
              </span>
              My name is <span className="">Muhammad Talha</span>
            </h1>
            <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-slate-700">
              Fullstack Developer
            </h4>
            <button className="btn-primary mt-8">Contact Me</button>
          </div>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-cyan-600 cursor-pointer"
              >
                <ion-icon name={icon}></ion-icon>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
