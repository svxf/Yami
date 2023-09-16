import Song from "@/components/song";
import { Clock, Download, MoreHorizontal, Play } from "lucide-react";

const RootPage = () => {
  return (
    <>
      <div className="h-full">
        <div className="absolute p-0 top-0 bottom-0 right-0 left-0 margin -0 w-auto h-auto z-10 overflow-y-auto">
          <div className="rounded-[8px]">
            <div
              className="pb-0"
              style={{ minHeight: "calc(((100vh - 64px) - 90px) - 519px)" }}
            >
              <section className="block">
                <div className="p-8 justify-center h-[30vh] max-h-[500px] min-h-[340px] flex relative text-text m-0">
                  <div className="h-[192px] min-w-[192px] w-[192px] self-center shrink-0 me-6">
                    <div className="flex relative">
                      <div className="h-full w-full">
                        <img
                          className="rounded-[8px] artShadow object-cover object-center h-[192px] w-[192px]"
                          src="/cat.jpg"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className="flex justify-center"
                    style={{ flexFlow: "column" }}
                  >
                    <span className="text-sm font-bold">Playlist</span>
                    <span className="w-full text-left break-words mt-2">
                      <h1
                        className="w-full text-[50px] font-[900] text-text"
                        style={{ margin: "0.08em 0px 0.12em" }}
                      >
                        ▸ DN 🌙
                      </h1>
                    </span>
                    <div className="flex flex-row items-center w-full mt-2 gap-2">
                      <div className="text-rgb-selected-row/70 whitespace-nowrap grid gap-1 items-center">
                        <img
                          className="w-6 h-6 relative inline-block rounded-[8px] object-cover object-center"
                          src="https://i.scdn.co/image/ab6775700000ee85e6098f63b5363e11b8371410"
                        />
                      </div>
                      <span className="text-sm font-bold">sv</span>

                      <span className="text-sm whitespace-nowrap">
                        135 songs, 7 hr 40 min
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  {/* background */}
                  <div
                    className="mainViewContainer absolute w-full z-[-1]"
                    style={{ height: "calc(100% - 275px)" }}
                  />

                  {/* header */}
                  <div className="absolute left-0 right-0 margin-0 w-auto h-auto">
                    <div className="flex flex-col relative items-start pt-2 pb-4 pl-4 pr-4">
                      <div className="flex flex-row w-full items-center">
                        <div className="-mt-6 ml-[27px] mr-8 flex text-[8px] h-10 relative w-10">
                          <button className="bg-play-button text-main rounded-[8px] h-14 w-14 flex items-center justify-center p-4 transition hover:scale-105">
                            <Play className="fill-main" />
                          </button>
                        </div>
                        <div className="mr-[24px] relative">
                          <button className="rounded-[8px] flex justify-center p-0 text-rgb-selected-row/70 hover:text-white">
                            <Download className="w-8 h-8" />
                          </button>
                        </div>
                        <div className="mr-[24px] relative">
                          <button className="rounded-[8px] flex justify-center p-0 text-rgb-selected-row/70 hover:text-white">
                            <MoreHorizontal className="w-8 h-8" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* content */}
                  <div className="max-w-[1955px] pl-6 pr-6 pt-12">
                    <div className="static block -ml-6 -mr-6 mb-4 h-9">
                      {/* sections */}
                      <div className="grid gap-4 pr-4 h-9 pl-[18px] rounded-[8px] trackGrid">
                        <div className="flex justify-self-end items-center">
                          <span className="text-sm">#</span>
                        </div>
                        <div className="flex justify-self-start items-center">
                          <button className="flex justify-center items-center rounded-[8px]">
                            <span className="text-sm">Title</span>
                          </button>
                        </div>
                        <div className="flex justify-self-start items-center">
                          <button className="flex justify-center items-center rounded-[8px]">
                            <span className="text-sm">Album</span>
                          </button>
                        </div>
                        <div className="flex justify-self-start items-center">
                          <button className="flex justify-center items-center rounded-[8px]">
                            <span className="text-sm">Date added</span>
                          </button>
                        </div>
                        <div className="flex justify-self-end items-center">
                          <button className="flex justify-center items-center rounded-[8px] mr-8">
                            <Clock />
                          </button>
                        </div>
                      </div>
                      
                        {/* content */}
                        <div className="h-[7560px] absolute w-full top-[36rem] bg-main" />
                        <div className="h-[7560px]">
                            <div>
                                <Song title="dreamy night" artist="LilyPichu" album="dreamy night" dateAdded="May 28, 2023" duration="4:06" src="/happy2.jpg" />
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <img
          className="position w-full h-full top-0 left-0 object-cover rounded-[8px] mainImage"
          src="/happy.jpg"
        />
      </div>
    </>
  );
};

export default RootPage;
