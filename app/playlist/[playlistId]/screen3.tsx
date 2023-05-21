"use client";

import { Track } from "@/utils/types";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/fontawesome-free-solid";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Image from "next/image";
import { useEffect, useState } from "react";

function Screen3({ tracks }: { tracks: Track[] }) {
  const [images, setImages] = useState(true);
  return (
    <div className="flex h-fit min-h-[100svh] w-full flex-col items-center justify-start bg-[#1E1E1E]">
      <div className="mt-10 flex h-fit w-full flex-row items-center justify-center gap-4 text-4xl font-bold text-white">
        <h1 className="">View with Images</h1>
        <FontAwesomeIcon
          onClick={() => setImages(!images)}
          className={`${
            images ? "text-green-500" : "text-red-500 "
          }  h-[30px] w-[30px] hover:cursor-pointer`}
          icon={
            images ? (faCheckCircle as IconProp) : (faTimesCircle as IconProp)
          }
        />
      </div>

      <div className="mb-10 flex h-full w-full shrink-0 flex-row flex-wrap items-center justify-evenly gap-5 gap-y-8">
        {tracks.map((track, i) =>
          track.track.album.images[0] === undefined ? null : (
            <TrackCard track={track} images={images} i={i} key={i} />
          )
        )}
      </div>
    </div>
  );
}

const TrackCard = ({
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
      onClick={() => window.open(track.track.external_urls.spotify)}
      key={i}
      className={`${
        images
          ? "h-[400px] w-[300px] "
          : "h-[150px] w-[300px] hover:bg-[#b88635] "
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

export default Screen3;
