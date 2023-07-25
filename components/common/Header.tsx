import useDarkMode from "@/hooks/useDarkMode";
import { useState } from "react";
import { MdNightlight, MdWbSunny } from "react-icons/md";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/router";
import { Inconsolata } from "next/font/google";

const inconsolata = Inconsolata({
  subsets: ["latin-ext"],
});

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
  {
    name: "Chat GPT",
    path: "/chat-gpt",
  },
];

const classItem =
  "text-base font-semibold text-text2 dark:text-white relative after:absolute after:w-0 after:h-[2px] after:rounded after:bg-primary after:bottom-[-4px] after:left-0 hover:after:duration-300 hover:after:ease-in-out hover:after:w-full";

const Header = () => {
  const router = useRouter();
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
    <div className={inconsolata.className}>
      <div className="fixed top-0 z-30 flex items-center justify-between w-full p-5 bg-white dark:bg-darkSecondary">
        <div className="flex items-center gap-x-10">
          <div
            className="block text-2xl cursor-pointer text-text1 dark:text-white lg:hidden"
            onClick={handleOpenMenu}
          >
            <HiOutlineMenuAlt1 />
          </div>
          <Link href="/">
            <span className="text-2xl font-semibold text-text1 dark:text-white">
              {"<hongduccodedao/>"}
            </span>
          </Link>
          <ul className="hidden lg:flex">
            {linkItems.map((item, index) => (
              <li key={index} className="inline-block ml-5">
                <Link href={item.path}>
                  <p
                    className={`
                    ${
                      router.pathname === item.path
                        ? `${classItem} after:w-full`
                        : `${classItem}`
                    }
                  `}
                  >
                    {item.name}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="flex items-center justify-center w-8 h-8 bg-opacity-0 rounded-full cursor-pointer select-none bg-icon-color hover:bg-opacity-50 hover:duration-300 hover:ease-in-out"
          onClick={handleClickDarkMode}
        >
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
        }`}
      >
        <div
          className="absolute flex items-center justify-center w-8 h-8 text-3xl bg-opacity-0 rounded-full cursor-pointer select-none bg-icon-color hover:bg-opacity-50 hover:duration-300 hover:ease-in-out top-5 left-5"
          onClick={handleCloseMenu}
        >
          <IoCloseSharp className="dark:text-whiteSoft text-text1" />
        </div>
        <ul className="flex flex-col justify-center w-full gap-10 p-10">
          {linkItems.map((item, index) => (
            <li key={index} className="inline-block ml-5">
              <Link href={item.path}>
                <p
                  className={`
                    ${
                      router.pathname === item.path
                        ? `${classItem} after:w-full`
                        : `${classItem}`
                    }
                  `}
                >
                  {item.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
