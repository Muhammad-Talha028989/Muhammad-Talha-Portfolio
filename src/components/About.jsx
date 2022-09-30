import React from "react";
import { infoAbout } from "./api/about.api";
import AboutImage from "../assets/images/Hero_image.png";

const About = () => {
  return (
    <section className={`py-10 text-white`} id="about">
      <div className="text-center mt-g">
        <h3 className="text-4xl font-semibold text-slate-700">
          About<span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="">
            <div className="text-slate-600 my-3">
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, quisquam quibusdam! Et nihil voluptatem quibusdam quod
                ratione, voluptatum iure totam minima ducimus eligendi ratione,
                voluptatum iure totam minima ducimus eligendi ratione,
                voluptatum iure totam minima ducimus eligendi praesentium aut
                sunt, voluptates sed quos excepturi.
              </p>
              <div className="flex mt-10 items-center gap-7">
                {infoAbout.map((content) => (
                  <div className="" key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold">
                      {content.count} +
                    </h3>
                    <span className="">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a href="" download>
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm ">
              <img
                src={AboutImage}
                alt="About"
                className="w-full-object-cover bg-cyan-600 ml-4 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
