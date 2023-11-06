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

  return (
    <nav className="flex items-center gap-5 rounded-full fixed left-1/2 -translate-x-1/2 border border-ctp-overlay0 py-3 px-5 bg-ctp-base bg-opacity-30">
      <div className="flex items-center gap-3">
        {NavbarList.map((item) => (
          <div className="relative group inline-block" key={item.url}>
            <Link href={item.url}>
              <p className="z-20 relative">{item.label}</p>
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
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? <Sun /> : <MoonStar />}
      </div>
    </nav>
  );
};

export default Navbar;
