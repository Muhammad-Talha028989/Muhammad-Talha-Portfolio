import React, { useState, useEffect } from "react";
import { menuLink } from "./api/Navbar.api";
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    let isRender = true;
    if (isRender) {
      window?.addEventListener("scroll", () => {
        const navDom = document?.querySelector("nav");
        window.scrollY > 0 ? setSticky(true) : setSticky(false);
      });
    }

    return () => {
      isRender = false;
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed
      w-full
      left-0
      top-0
      z-[999] ${sticky ? "md:bg-white/60 text-gray-900" : "text-white"}`}
      >
        <div
          className="flex
        items-center
        justify-between"
        >
          <div className="mx-7">
            <h4 className="text-4xl uppercase font-bold text-slate-600">
              M<span className="text-cyan-600">T</span>
            </h4>
          </div>
          <div
            className={`${
              sticky ? "md:bg-white/0 bg-white" : "bg-white"
            } text-gray-900 
          md:block
          hidden
          px-7
          py-7
          font-medium
          rounded-bl-full`}
          >
            <ul
              className="flex
            items-senter
            gap-1
            py-2
            text-lg"
            >
              {menuLink?.map((menu, index) => (
                <li
                  className="px-7
                hover:text-teal-600"
                  key={index}
                >
                  <a href={menu?.link}>{menu?.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className={`z-[998] cursor-pointer ${
              open ? "text-teal-900" : "text-white"
            } text-3xl md:hidden m-5`}
          >
            <ion-icon name="menu"></ion-icon>
          </div>
          <div
            className={`text-teal-900 md:hidden absolute w-2/3 h-screen px-7 py-2 font-medium bg-white/30 top-0 duration-300 ${
              open ? "right-0 " : "right-[-100%]"
            }`}
          >
            <ul
              className={`flex flex-col justify-center h-full gap-10 py-2 text-lg`}
            >
              {menuLink?.map((menu, i) => (
                <li className={`px-6 hover:text-teal-500`} key={i}>
                  <a href={menu?.link} className={``}>
                    {menu?.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
