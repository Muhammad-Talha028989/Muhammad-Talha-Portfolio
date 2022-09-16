import React from "react";
import { menuLink } from "./api/Navbar.api";
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="">
          <div className="mx-7">
            <h4 className="text-4xl uppercase font-bold">
              M<span className="text-teal-600">T</span>
            </h4>
          </div>
          <div className="">
            <ul className="">
              {menuLink?.map((menu, index) => (
                <li
                  className="px-6
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
