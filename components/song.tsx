"use client";

interface SongProps {
  title: string;
  artist: string;
  album: string;
  dateAdded: string;
  duration: string;
  src: string;
}

const Song = ({ title, artist, album, dateAdded, duration, src }: SongProps) => {
  return (
    <div className="flex justify-center">
      <div className="grid pr-4 gap-4 relative h-14 pl-[18px] trackRow transition hover:bg-white/5 rounded-[8px] w-[98%]">
        {/* image */}
        <div className="flex items-center justify-self-start">
          <img
            className="w-10 h-10 mr-4 rounded-[8px] bg-card object-cover object-center"
            src={src}
          />
          <div className="pr-2 grid items-center trackInfoG">
            <span>{title}</span>
            <span
              className="text-sm"
              style={{ gridArea: "subtitle", gridColumnStart: "badges" }}
            >
              {artist}
            </span>
          </div>
        </div>

        {/* album */}
        <div className="flex items-center justify-self-start">
          <span className="text-sm">{album}</span>
        </div>

        {/* date */}
        <div className="flex items-center justify-self-start">
          <span className="text-sm">{dateAdded}</span>
        </div>

        <div
          className="flex items-center justify-self-end"
          style={{ gridColumn: "last" }}
        >
          <span className="mr-6 text-sm">{duration}</span>
        </div>
      </div>
    </div>
  );
};

export default Song;
