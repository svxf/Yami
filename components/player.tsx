"use client";

import { Heart, ListMusic, Maximize2, MonitorSmartphone, Pause, PlayIcon, Repeat, Rewind, Shuffle, SkipBack, SkipForward, View, Volume2 } from "lucide-react";
import { Play } from "next/font/google";

const Player = () => {
  return (
    <div
      className="bg-player rounded-[8px] w-full"
      style={{ gridArea: "now-playing-bar" }}
    >
      <div className="relative h-auto max-w-screen-[620px] flex flex-col">
        <div className="pl-[18px] pr-[18px] pb-[6px] h-[72px] flex flex-row justify-between items-center">
          <div className="h-full min-w-[180px] w-[30%]">
            <div className="flex flex-row justify-start relative transition h-0">
              <div className="bottom-5 -translate-x-2 relative w-[84px] h-[84px] rounded-[8px] shadow bg-card">
                <img
                  className="bg-sidebar bg-center bg-contain h-full w-full absolute left-0 top-0 rounded-[8px]"
                  src="/happy.jpg"
                />
              </div>

              <div className="relative top-5">
                <div className="text-text w-full justify-self-start">
                  <div className="flex pe-3 ps-[6px] w-fit text-sm">
                    <a>happy</a>
                  </div>
                </div>

                <div className="text-text w-full justify-self-start">
                  <div className="flex pe-3 ps-[6px] w-fit text-xs">
                    <a>LilyPichu</a>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center h-6 w-6 relative top-6">
                <Heart className="text-heart h-4 w-4" />
              </div>
            </div>
          </div>

          <div className="max-w-[722px]">
            <div className="flex flex-col justify-center align-center relative transition h-0">
              <div className="gap-4 w-full flex flex-row">
                <div className="flex justify-end gap-2">
                  <button className="flex h-8 w-8 justify-center relative text-rgb-selected-row/70 items-center align-middle">
                    <Shuffle className="fill-rgb-selected-row/70" />
                  </button>
                  <button className="flex h-8 w-8 justify-center relative text-rgb-selected-row/70 items-center align-middle">
                    <SkipBack className="fill-rgb-selected-row/70" />
                  </button>
                </div>

                <button className="flex h-8 w-8 justify-center relative rounded-[8px] bg-text text-sidebar items-center align-middle">
                    <PlayIcon className="fill-sidebar w-4 h-4" />
                </button>

                <div className="flex justify-end gap-2">
                  <button className="flex h-8 w-8 justify-center relative text-rgb-selected-row/70 items-center align-middle">
                    <SkipForward className="fill-rgb-selected-row/70" />
                  </button>
                  <button className="flex h-8 w-8 justify-center relative text-button items-center align-middle">
                    <Repeat />
                  </button>
                </div>
              </div>

              <div className="playbackBar w-full justify-between items-center">

                <div className="w-full h-[6px] rounded-[50px] text-center relative" style={{ gridColumn: "1/3", gridArea: "bar" }} >
                    <div className="w-full h-full">
                        <div className="h-[6px] w-full bg-[rgba(10,10,16,0.5)] flex absolute top-1/2 -translate-y-1/2">
                            <div className="h-[6px] rounded[50px] w-full progressBar" style={{ width: "50%" }} />
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>

          
          <div className="flex flex-row justify-end min-w-[180px] w-[30%]">
                <div className="flex justify-end items-center gap-4 relative">
                    <View className="h-5 w-5 text-rgb-selected-row/70" />
                    <ListMusic className="h-5 w-5 text-rgb-selected-row/70" />
                    <MonitorSmartphone className="h-5 w-5 text-rgb-selected-row/70" />
                    <div className="flex w-32 relative mr-2 items-center gap-3">
                        <Volume2 className="h-6 w-6 text-rgb-selected-row/70" />
                        <div className="w-full ">
                            <div className="h-1 relative w-full">
                                <div className="flex w-full h-full bg-white rounded-3xl" />
                            </div>
                        </div>
                    </div>
                    <Maximize2 className="h-5 w-5 text-rgb-selected-row/70" />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
