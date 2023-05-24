import * as React from "react";
import { useState, useEffect } from "react";
import { faInfoCircle } from "@fortawesome/fontawesome-free-solid";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import type { Track } from "@/utils/types";

export const TrackCard = ({
  track,
  images,
  i,
  setSelection,
}: {
  track: Track;
  images: boolean;
  i: number;
  setSelection: Dispatch<SetStateAction<Track>>;
}) => {
  const [artist, setArtist] = useState([""]);
  useEffect(() => {
    setArtist(track.track.artists.map((artist) => artist.name));
  }, [track]);
  return (
    <div
      key={i}
      className={`${
        images
          ? "h-[400px] w-[300px] "
          : "h-[200px] w-[300px] hover:bg-[#b88635] "
      }group relative mt-20 flex  shrink-0 flex-col items-start justify-end gap-2 overflow-hidden rounded-2xl bg-black transition-all duration-300 ease-in-out hover:cursor-pointer`}
    >
      <FontAwesomeIcon
        icon={faInfoCircle as IconProp}
        className="absolute right-5 top-5 z-20 h-[30px] w-[30px] text-white"
        onClick={() => setSelection(track)}
      />
      <Image
        src={track.track.album.images[0].url}
        alt="Album Art"
        className={`${
          images ? "block " : "hidden "
        }absolute object-cover transition-all duration-300 ease-in-out group-hover:scale-110`}
        fill
        priority
        quality={100}
      />
      <div
        onClick={() =>
          window.open(
            track.track.external_urls.spotify,
            "_blank",
            "noopener noreferrer"
          )
        }
        className={`${
          images ? "block " : "hidden "
        }absolute h-full w-full bg-[#1E1E1E] opacity-70`}
      ></div>
      <h3 className="z-20 mb-6 ml-3 line-clamp-1 text-[30px] font-bold text-white">
        {track.track.name}
      </h3>
      <h3
        className={`${
          images ? "" : "group-hover:text-white "
        }z-20 mb-3 ml-3 line-clamp-1 text-[15px] font-bold text-[#9A9A9A]`}
      >
        {artist.join(", ")}
      </h3>
    </div>
  );
};

export const CompareTrackCard = ({
  track,
  images,
  i,
}: {
  track: Track;
  images: boolean;
  i: number;
}) => {
  const [artist, setArtist] = useState([""]);
  useEffect(() => {
    setArtist(track.track.artists.map((artist) => artist.name));
  }, [track]);
  return (
    <div
      key={i}
      className={`${
        images
          ? "h-[400px] w-[300px] "
          : "h-[200px] w-[300px] hover:bg-[#b88635] "
      }group relative mt-20 flex  shrink-0 flex-col items-start justify-end gap-2 overflow-hidden rounded-2xl bg-black transition-all duration-300 ease-in-out hover:cursor-pointer`}
    >
      <Image
        src={track.track.album.images[0].url}
        alt="Album Art"
        className={`${
          images ? "block " : "hidden "
        }absolute object-cover transition-all duration-300 ease-in-out group-hover:scale-110`}
        fill
        priority
        quality={100}
      />
      <div
        onClick={() =>
          window.open(
            track.track.external_urls.spotify,
            "_blank",
            "noopener noreferrer"
          )
        }
        className={`${
          images ? "block " : "hidden "
        }absolute h-full w-full bg-[#1E1E1E] opacity-70`}
      ></div>
      <h3 className="z-20 mb-6 ml-3 line-clamp-1 text-[30px] font-bold text-white">
        {track.track.name.trim()}
      </h3>
      <h3
        className={`${
          images ? "" : "group-hover:text-white "
        }z-20 mb-3 ml-3 line-clamp-1 text-[15px] font-bold text-[#9A9A9A]`}
      >
        {artist.join(", ")}
      </h3>
    </div>
  );
};
