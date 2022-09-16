import React from "react";
import { menuLink } from "./api/Navbar.api";
const Navbar = () => {
  return (
    <>
      <nav>
        <div
          className="flex
        items-center
        justify-between"
        >
          <div className="mx-7">
            <h4 className="text-4xl uppercase font-bold">
              M<span className="text-teal-600">T</span>
            </h4>
          </div>
          <div
            className="text-gray-900 
          md:block
          hidden
          px-7
          py-7
          font-medium
          bg-white
          rounded-bl-full"
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
        </div>
      </nav>
    </>
  );
};

export default Navbar;
