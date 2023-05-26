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
import { TrackCard } from "../trackCard";
import Link from "next/link";

function Screen3({ tracks, id }: { tracks: Track[]; id: string }) {
  const [selection, setSelection] = useState<Track>({
    track: {
      name: "",
      artists: [{ name: "" }],
      album: { images: [{ url: "", height: 0, width: 0 }] },
      external_urls: { spotify: "" },
    },
  });

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
      <div
        className={`${
          selection.track.name === ""
            ? "translate-x-[4000px] "
            : "-translate-x-[50%] "
        }left-[50%] fixed top-[50%] z-[1000] flex h-fit min-h-[60vh] w-[90vw] -translate-y-[50%] flex-col items-center justify-start gap-10 overflow-hidden rounded-lg bg-black text-center transition-all duration-500 ease-in-out md:min-h-[90vh] md:w-[50vw]`}
      >
        <FontAwesomeIcon
          icon={faTimesCircle as IconProp}
          className="absolute right-10 top-10 z-30 h-[40px] w-[40px] text-white hover:cursor-pointer"
          onClick={() =>
            setSelection({
              track: {
                name: "",
                artists: [{ name: "" }],
                album: { images: [{ url: "", height: 0, width: 0 }] },
                external_urls: { spotify: "" },
              },
            })
          }
        />
        <Image
          alt="Image"
          src={selection.track.album.images[0].url}
          fill
          quality={100}
          className="absolute object-cover"
        />
        <div className="absolute z-20 flex h-full w-full flex-col items-center justify-center bg-[#1E1E1E] opacity-70"></div>
        <h1 className="z-30 mt-20 text-[60px] font-bold text-white">
          {selection.track.name}
        </h1>
        <h2 className="z-30 mt-5 text-[30px] font-bold text-[#9A9A9A] ">
          <span className="text-white">By:</span>{" "}
          {selection.track.artists.map((artist) => artist.name).join(", ")}
        </h2>
        <p
          onClick={() =>
            window.open(
              selection.track.external_urls.spotify,
              "_blank",
              "noopener noreferrer"
            )
          }
          className="z-30 m-2 mb-5 rounded-lg border-4 border-[#b88635] bg-[#b88635] p-4 text-2xl font-bold text-white transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-white hover:text-[#b88635]"
        >
          Open in Spotify
        </p>
        <Link
          href={`/track/lyrics/${selection.track.external_urls.spotify.substring(
            selection.track.external_urls.spotify.lastIndexOf("/") + 1
          )}/${id}`}
          className="z-30  rounded-lg border-4 border-[#b88635] bg-[#b88635] p-4 text-2xl font-bold text-white transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-white hover:text-[#b88635]"
        >
          View Lyrics
        </Link>
      </div>

      <div
        className={`${
          selection.track.name === "" ? "opacity-100 " : "opacity-30 "
        }mb-10 flex h-full w-full shrink-0 flex-row flex-wrap items-center justify-evenly gap-5 gap-y-8 transition-all duration-500 ease-in-out`}
      >
        {tracks.map((track, i) =>
          track.track.album.images[0] === undefined ? null : (
            <TrackCard
              track={track}
              images={images}
              i={i}
              key={i}
              setSelection={setSelection}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Screen3;
