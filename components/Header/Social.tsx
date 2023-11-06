import { SocialList } from "@/utils/SocialList";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Social = () => {
  return (
    <div className="flex items-center gap-5">
      {SocialList.map((item) => (
        <a href={item.url} className="" key={item.url}>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {item.icon}
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  {item.label} - {item.username}
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </a>
      ))}
    </div>
  );
};

export default Social;
