"use client";
import { NavbarList } from "@/utils/NavbarList";
import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import * as React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  const handleToggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    } else if (theme === "system") {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        setTheme("light");
      } else if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: light)").matches
      ) {
        setTheme("dark");
      } else {
        throw new Error("Error set theme for this app");
      }
    } else {
      throw new Error("Error set theme for this app");
    }
  };

  return (
    <nav className="flex items-center gap-3 md:gap-5 rounded-full fixed left-1/2 -translate-x-1/2 border border-ctp-overlay0 py-3 px-5 bg-ctp-base bg-opacity-70 backdrop-blur-sm z-50 bottom-4 md:top-4 w-fit h-fit max-w-[95vw]">
      <div className="flex items-center gap-2 md:gap-3">
        {NavbarList.map((item) => (
          <div className="relative group inline-block" key={item.url}>
            <Link href={item.url}>
              <p className="z-20 relative text-sm lg:text-base">{item.label}</p>
            </Link>

            <div
              className={cn(
                "absolute w-0 h-[2px] bg-ctp-green bottom-[2px] left-0 z-[1] group-hover:w-[80%] group-hover:transition-all group-hover:duration-500",
                pathname === item.url && "w-[80%]"
              )}
            ></div>
          </div>
        ))}
      </div>
      {/* toggle dark mode */}
      <div
        className={cn(
          "cursor-pointer user-select-none p-1 rounded-full",
          theme === "dark"
            ? "bg-[#dce0e8] text-[#4c4f69]"
            : "bg-[#11111b] text-[#cdd6f4]"
        )}
        onClick={handleToggleTheme}
      >
        {theme === "dark" ? <Sun size={16} /> : <MoonStar size={16} />}
      </div>
    </nav>
  );
};

export default Navbar;
