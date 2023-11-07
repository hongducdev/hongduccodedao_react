import { paths } from "@/utils/paths";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404: Page not found | hongduccodedao",
  description: "404: Page not found! The page you are looking for might have been removed had its name changed or is temporarily unavailable.",
};

export default function NotFound() {
  return (
    <div className="w-screen h-[calc(100vh-80px)] flex items-center justify-center flex-col">
      <div className="relative">
        <h2 className="font-bold text-[200px] lg:text-[300px] text-ctp-surface0 leading-none">
          404
        </h2>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full">
          <h3 className="font-bold text-3xl lg:text-5xl">PAGE NOT FOUND!</h3>
          <span className="text-sm lg:text-lg text-ctp-subtext0">
            THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED HAD ITS NAME
            CHANGED OR IS TEMPORARILY UNAVAILABLE.
          </span>
        </div>
      </div>
      <Link
        href={paths.HOME}
        className="bg-ctp-green text-ctp-base px-3 py-2 lg:py-3 lg:px-5 rounded-lg font-medium"
      >
        Return Home
      </Link>
    </div>
  );
}
