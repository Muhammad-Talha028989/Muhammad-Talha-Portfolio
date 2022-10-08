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
          <div className="p-2">
            <div className="text-slate-600 my-3">
              <p className="text-justify leading-10 sm:w-11/12 mx-auto">
                I was born in Pakistan and grew up in Lahore, Punjab, primary
                education from private school. Now currently studying Bachelor
                of Computer Science in last semester of Information Technology
                with 2.99 CGPA from Punjab University Old Campus. I have created
                two college projects one is a CV maker website and the other is
                a template selling website in MERN technology. A CV making
                website called CV Crafts which is entirely created by me is
                another template selling website called Web Fork I build the
                backend on this project and it is for me Absolutely good
                experience. I am also love learning new programming languages,
                currently I am focusing on typescript and it has become my
                hobby. Another good thing in my habits is playing video games
                which is my second hobby. I am seeking for website development
                job working with MERN technology .... and I am also fresh
                graduate keep in mind... Thanks for look my profile.
              </p>
              <div className="flex mt-10 items-center gap-7">
                {infoAbout.map((content) => (
                  <div className="" key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-slate-700">
                      {content.count} +
                    </h3>
                    <span className="text-lg text-cyan-600 md:text-base">
                      {content.text}
                    </span>
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
          <div className="flex-1 flex justify-center items-center ">
            <div className="lg:w-96 h-[100%] relative -top-[11rem] sm:w-10/12 w-11/12 max-w-sm">
              <img
                src={AboutImage}
                alt="About"
                className="w-full h-auto object-cover bg-cyan-600 ml-4 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
