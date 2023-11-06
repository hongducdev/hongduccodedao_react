import { CalendarDays } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface HoverCardCustomProps {
  avatarLink: string;
  avatarFallback?: string;
  name: string;
  description: string;
  joinedDate: string;
}

const HoverCardCustom: React.FC<HoverCardCustomProps> = ({
  avatarLink,
  avatarFallback,
  name,
  description,
  joinedDate,
}) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" className="text-xl text-ctp-text font-semibold">{name}</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 bg-ctp-base">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src={avatarLink} />
            <AvatarFallback>
              {avatarFallback ? avatarFallback : "ND"}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">
              {name}
            </h4>
            <p className="text-sm">
              {description}
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Joined {joinedDate}
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default HoverCardCustom;
