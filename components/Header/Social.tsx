import { SocialList } from "@/utils/SocialList";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

const Social = () => {
  return (
    <div className="flex items-center gap-5">
      {SocialList.map((item) => (
        <TooltipProvider key={item.url}>
          <Tooltip>
            <TooltipTrigger>
              <Link href={item.url} className="hover:text-ctp-green">
                {item.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent className="bg-ctp-base">
              <p>
                {item.label} - {item.username}
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
};

export default Social;
