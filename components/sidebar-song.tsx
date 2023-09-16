"use client";

interface SongProps {
  name: string;
  playlist: string;
  src: string;
}

const SidebarSong = ({ name, playlist, src }: SongProps) => {
  return (
    <>
      <div className="w-7">
        <img
          className="w-7 h-7 rounded-[8px]"
          src={src}
        />
      </div>
      <div className="flex flex-row items-center gap-1">
        <p className="text-base truncate">{name}</p>
        <span className="text-sm truncate">Playlist • {playlist}</span>
      </div>
    </>
  );
};

export default SidebarSong;
