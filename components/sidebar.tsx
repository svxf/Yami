"use client";

import {
  Home,
  Search,
  ShoppingCart,
  Mic2,
  Folder,
  BarChartIcon,
  Circle,
  Library,
  Plus,
  ArrowRight,
  ChevronRight,
  Pin,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import SidebarSong from "./sidebar-song";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const routes = [
    {
      icon: Home,
      href: "/",
      label: "Home",
    },
    {
      icon: Search,
      href: "/search",
      label: "Search",
    },
    {
      icon: ShoppingCart,
      href: "/marketplace",
      label: "Marketplace",
    },
    {
      icon: Mic2,
      href: "/lyrics",
      label: "Lyrics",
    },
    {
      icon: Folder,
      href: "/LocalFiles",
      label: "Local Files",
    },
    {
      icon: BarChartIcon,
      href: "/statistics",
      label: "Statistics",
    },
    {
      icon: Circle,
      href: "/ncs",
      label: "NCS Visualizer",
    },
  ];

  const onNavigate = (url: string) => {
    return router.push(url);
  };
  return (
    <div className="gap-2 w-[280px] bg-sidebar flex flex-col relative pt-2 pb-2 pl-3 pr-3" style={{ gridArea: "nav-bar" }}>
      {routes.map((route) => (
        <div
          onClick={() => onNavigate(route.href)}
          key={route.href}
          className={cn(
            "pt-4 pb-4 pl-3 pr-3 items-center flex gap-5 h-10 cursor-pointer",
            pathname === route.href && "bg-primary/10 text-primary"
          )}
        >
          <route.icon className="h-6 w-6" />
          <span className="text-base font-bold">{route.label}</span>
        </div>
      ))}

      <div className="flex gap-2 pt-4 pb-2 pl-3 pr-3 text-center items-center">
        <Library className="h-6 w-6" />
        <span className="text-base font-bold">Your Library</span>
        <div className="flex w-2/5 gap-2 justify-end">
          <Plus />
          <ArrowRight />
        </div>
      </div>

      <div className="flex gap-2 mt-2 mb-2 ml-4 mr-4 text-center items-center relative h-8">
        <button className="rounded-lg me-2 text-sm">Playlists</button>
        <button className="rounded-lg me-2 text-sm">Artists</button>
        <button className="rounded-lg me-2 text-sm">Downloaded</button>
        <div className="absolute mask bg-gradient-to-r from-transparent via-transparent to-sidebar h-full w-full"></div>
        <ChevronRight className="absolute right-2 opacity-80" />
      </div>

      <div className="h-full w-full relative gap-2 pl-2 pr-2 flex flex-col">
        <div>
          <div className="flex gap-2 h-8 items-center bg-rgb-selected-row/10 rounded-3xl">
            <Search className="w-5 h-5 text-rgb-selected-row/70" />
            <input
              className="w-[188px] pe-2 text-sm  text-rgb-selected-row/70 
                    bg-transparent placeholder-rgb-selected-row/70"
              role="searchbox"
              maxLength={80}
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              placeholder="Search in Your Library"
            />
          </div>
          <div className="h-full relative flex flex-col">
          <div className="grid grid-cols-[auto,1fr] grid-rows-[auto,1fr,auto] gap-3 relative rounded-md cursor-pointer p-2 w-full items-center object-contain">
            
              <SidebarSong name="Like So..." playlist="8 songs" src="https://misc.scdn.co/liked-songs/liked-songs-300.png" />

              <SidebarSong name="▸ DN 🌙" playlist="sv" src="cat.jpg" />


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
