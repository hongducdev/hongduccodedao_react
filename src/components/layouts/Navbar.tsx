import { navbarLinks } from "@/utils/paths";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Navbar = () => {
  const router = useRouter();
  const { pathname } = router;

  const activeClasses =
    "font-medium cursor-pointer relative after:absolute after:w-full after:h-0.5 after:bg-ctp-green after:-bottom-1 after:left-0";

  const notActiveClasses =
    "font-medium cursor-pointer relative after:absolute after:w-0 after:h-0.5 after:bg-ctp-green after:-bottom-1 after:left-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full";

  return (
    <div className="bg-ctp-surface0 text-ctp-text p-5 flex items-center gap-10">
      <Link
        href="/"
        className="text-2xl font-semibold cursor-pointer"
      >{`>_hongduccodedao`}</Link>
      <div className="flex items-center gap-5">
        {navbarLinks.map((link) => (
          <Link href={link.path} key={link.path}>
            <p
              className={`
              ${pathname === link.path ? activeClasses : notActiveClasses}
            `}
            >
              {link.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
