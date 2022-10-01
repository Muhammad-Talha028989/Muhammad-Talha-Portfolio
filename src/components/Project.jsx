import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import ProjectImage from "../assets/images/projectCvcraft.png";
import ProjectAuther from "../assets/images/Hero_image.png";
import { projects } from "./api/Projects.api";

const Project = () => {
  return (
    <section id={"projects"} className={"py-10 text-white"}>
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My<span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-600 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl px-5 mx-auto items-center relative justify-center text-center">
        <div className="lg:w-2/3 w-full">
          <Swiper
            className={""}
            slidesPerview={1.5}
            spaceBetween={10}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects?.map((content, index) => (
              <SwiperSlide key={index}>
                <div className="h-fit w-fit p-4 bg-slate-700 rounded-xl text-center ">
                  <img src={content?.img?.ProjectsImages} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{content?.name}</h3>
                  <div className="flex gap-3 justify-center items-center">
                    <a
                      href={content?.github_link}
                      className="hover:text-white text-cyan-600 bg-slate-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={content?.live_link}
                      className="hover:text-white text-cyan-600  bg-slate-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          {/* <img src={ProjectAuther} alt="" /> */}
        </div>
      </div>
    </section>
  );
};

export default Project;
