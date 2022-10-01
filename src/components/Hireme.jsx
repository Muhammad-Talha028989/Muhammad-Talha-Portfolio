import React from "react";
import HireMe from "../assets/images/Hero_image.png";
const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-slate-500 mt-3 text-lg">Do you have any work?</p>
        <div className="bg-gray-600 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
          <div className="">
            <h2 className="text-2xl font-semibold">
              Do you want any work from me?
            </h2>
            <p className="max-w-lg text-md mt-4 text-gray-200 text-justify leading-[2]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
              totam ab ratione laborum expedita accusamus delectus quia odio
              exercitationem numquam maiores tempore suscipit autem, voluptates
              repellat culpa ducimus? Autem, cupiditate!
            </p>
            <button className="btn-primary mt-10">Say Hello</button>
          </div>
          <img
            src={HireMe}
            alt=""
            className="lg:h-[28rem] rounded-full h-80 lg:absolute bottom-0 -right-[9rem] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hireme;
