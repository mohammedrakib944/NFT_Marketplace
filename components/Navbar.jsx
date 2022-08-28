import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

import { NavUrls } from "./Navlinks";
import { themeChange } from "../pages";

const Navbar = () => {
  const [theme, setTheme] = useState(false);
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleTheme = () => {
    setTheme(!theme);
    themeChange();
  };

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 10 ? setShadow(true) : setShadow(false);
    });
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-[60px] duration-300 z-[100] shadow-lg bg-[#fafeff] dark:bg-gray-800 backdrop-blur-xl"
          : "fixed w-full h-[90px] duration-300 z-[100] dark:bg-gray-900"
      }
    >
      <div className="container mx-auto flex w-full h-full justify-between items-center px-2 2xl:px-16">
        <a
          href="/#"
          className="hidden md:flex items-center justify-center gap-3 -mt-2"
        >
          {/* <img src={logo} className="w-[45px] " alt="" /> */}
          <span className="font-bold text-2xl dark:text-gray-200 mt-2">
            Logo
          </span>
        </a>
        <div className="flex items-center justify-center">
          <ul className="hidden md:flex md:gap-x-3 lg:gap-x-8 mt-5">
            {NavUrls.map((data) => (
              <a href={data.url} key={data.id}>
                <li className="c-link ml-0 mb-6 w-fit text-gray-700 dark:text-gray-200 text-lg pt-2 hover:border-b border-gray-700 dark:hover:text-indigo-400 hover:text-indigo-600 duration-300">
                  {data.title}
                </li>
              </a>
            ))}
          </ul>
          <div
            onClick={handleNav}
            className="md:hidden text-black dark:text-white cursor-pointer"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
        <div>
          <a href="#">
            <button className="py-2 px-6 mt-2 c-button text-white rounded-lg">
              Get Started
            </button>
            <button
              onClick={handleTheme}
              className="text-gray-700 dark:text-gray-200 pl-6 pr-2"
            >
              {theme ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
            </button>
          </a>
        </div>
      </div>

      <div
        onClick={handleNav}
        className={
          nav ? "fixed left-0 top-0 w-full h-screen bg-black/70 md:hidden" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed h-screen bg-[#f0f7f8] dark:bg-gray-800 left-0 top-0 w-[80%] p-10 ease-in duration-300"
              : "fixed h-screen left-[-100%] w-[70%] dark:bg-gray-800 p-10 top-0 ease-in duration-300"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <a
                href="/#"
                className="flex items-center justify-center gap-3 -mt-2"
              >
                <span className="font-bold text-2xl dark:text-gray-200">
                  Logo
                </span>
              </a>
              <div onClick={handleNav} className="c-button">
                <AiOutlineClose />
              </div>
            </div>
            <br />
            <hr />
          </div>

          <div className="h-[70%] py-4 flex flex-col justify-between">
            <ul>
              {NavUrls.map((data) => (
                <a href={data.url} key={data.id}>
                  <li className="c-link ml-0 mb-6 w-fit text-gray-700 dark:text-gray-200 hover:border-b hover:text-indigo-500 duration-300">
                    {data.title}
                  </li>
                </a>
              ))}
              <li>
                <a href="#">
                  <button className="py-2 px-6 mt-2 c-button text-white rounded-lg">
                    Get Started
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
