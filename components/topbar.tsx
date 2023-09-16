"use client";

import { cn } from "@/lib/utils";
import {
  ChevronLeft,
  ChevronRight,
  Circle,
  Flame,
  Maximize,
  Maximize2,
  Settings,
  Tv,
  Users2,
} from "lucide-react";

const Topbar = () => {
  const buttonsLeft = [
    {
      icon: ChevronLeft,
      label: "Back",
      disabled: true,
    },
    {
      icon: ChevronRight,
      label: "Right",
      disabled: true,
    },
    {
      icon: Tv,
      label: "TV",
      disabled: false,
    },
    {
      icon: Flame,
      label: "Flame",
      disabled: false,
    },
  ];

  const buttonsRight = [
    {
      icon: Maximize2,
      label: "Fullscreen",
      disabled: false,
    },
    {
      icon: Settings,
      label: "Settings",
      disabled: false,
    },
    {
      icon: Users2,
      label: "Friends",
      disabled: false,
    },
  ];

  return (
    <div className="h-16 mb-4 z-50" style={{ gridArea: "main-view" }}>
      <div className="relative flex w-full justify-between h-16 items-center pt-4 pb-4 pl-6 pr-6 gap-2 pe-6">
        <div className="flex gap-2">
          {buttonsLeft.map((button) => (
            <button
              key={button.label}
              className={cn(
                "rounded-[8px] bg-rgb-shadow/70 w-10 h-10 relative justify-center inline-flex text-text items-center",
                button.disabled && "opacity-60"
              )}
            >
              <button.icon className="w-6 h-6 opacity-100" />
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          {buttonsRight.map((button) => (
            <button
              key={button.label}
              className={cn(
                "rounded-[8px] bg-rgb-shadow/70 w-8 h-8 relative justify-center inline-flex text-text items-center",
                button.disabled && "opacity-60"
              )}
            >
              <button.icon className="w-4 h-4 opacity-100" />
            </button>
          ))}
          <button className="rounded-[8px] bg-rgb-shadow/70 w-8 h-8 relative justify-center inline-flex text-text items-center">
            <div className="w-6 h-6">
              <img
                src="https://i.scdn.co/image/ab67757000003b82e6098f63b5363e11b8371410"
                className="rounded-[8px] w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-[2px] right-0">
                <Circle className="w-2 h-2 text-main fill-main"/>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
