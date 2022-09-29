import React from "react";
import HeroImage from "../assets/images/Hero_image.png";

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
            className={`md:w-11/12 h-full object-cover rounded-full`}
          />
        </div>
        <div className="flex-1">
          <div className="">
            <h1 className="">
              <span>
                Hello!
                <br />
              </span>
              My name is <span className="">Muhammad Talha</span>
            </h1>
            <h4 className="">Fullstack Developer</h4>
            <button className="">Contact Me</button>
          </div>
          <div className=""></div>
        </div>
      </section>
    </>
  );
};

export default Hero;
