import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useDarkMode from "../hooks/useDarkMode";
import { MdNightlight, MdWbSunny } from "react-icons/md";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";

const linkItems = [
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Team",
    path: "/team",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const classItem =
  "text-base font-semibold text-text2 dark:text-white relative after:absolute after:w-0 after:h-[2px] after:rounded after:bg-primary after:bottom-[-4px] after:left-0 hover:after:duration-300 hover:after:ease-in-out hover:after:w-full";

const Header = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const [showMenu, setShowMenu] = useState(false);

  const handleClickDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  const handleOpenMenu = () => {
    setShowMenu(true);
  };

  return (
    <div>
      <div className="bg-white dark:bg-darkSecondary p-5 flex items-center justify-between fixed top-0 z-30 w-full">
        <div className="flex items-center gap-x-10">
          <div
            className="text-2xl text-text1 dark:text-white cursor-pointer block lg:hidden"
            onClick={handleOpenMenu}>
            <HiOutlineMenuAlt1 />
          </div>
          <Link to="/">
            <span className="text-2xl font-semibold text-text1 dark:text-white">
              {"<hongduccodedao/>"}
            </span>
          </Link>
          <ul className="hidden lg:flex">
            {linkItems.map((item, index) => (
              <li key={index} className="inline-block ml-5">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? `${classItem} after:w-full` : `${classItem}`
                  }>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="cursor-pointer select-none w-8 h-8 rounded-full bg-icon-color flex items-center justify-center bg-opacity-0 hover:bg-opacity-50 hover:duration-300 hover:ease-in-out"
          onClick={handleClickDarkMode}>
          {darkMode === true ? (
            <MdWbSunny className="text-xl text-whiteSoft" />
          ) : (
            <MdNightlight className="text-xl text-darkSecondary" />
          )}
        </div>
      </div>
      <div
        className={`shadow-2xl absolute top-0 h-screen z-50 bg-white dark:bg-darkSecondary flex items-center justify-center ${
          showMenu === true ? "w-[60vw]" : "hidden"
        }`}>
        <div
          className="cursor-pointer select-none w-8 h-8 rounded-full bg-icon-color flex items-center justify-center bg-opacity-0 hover:bg-opacity-50 hover:duration-300 hover:ease-in-out text-3xl absolute top-5 left-5"
          onClick={handleCloseMenu}>
          <IoCloseSharp className="dark:text-whiteSoft text-text1" />
        </div>
        <ul className="flex flex-col justify-center w-full gap-10 p-10">
          {linkItems.map((item, index) => (
            <li key={index} className="">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? `${classItem} after:w-full` : `${classItem}`
                }>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
