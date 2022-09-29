import React from "react";

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
              <div className="">
                <div className="">
                  <h3 className="">04+</h3>
                  {setTimeout(() => {}, 1000)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
