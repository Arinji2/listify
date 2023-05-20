"use client";

import { Track } from "@/utils/types";

import Image from "next/image";

function Screen3({ tracks }: { tracks: Track[] }) {
  return (
    <div className="flex h-fit min-h-[100svh] w-full flex-col items-center justify-start bg-[#1E1E1E]">
      <div className="mb-10 flex h-full w-full shrink-0 flex-row flex-wrap items-center justify-evenly gap-5 gap-y-8">
        {tracks.map((track, i) =>
          track.track.album.images[0] === undefined ? null : (
            <div
              key={i}
              className="group relative mt-20 flex h-[400px] w-[300px] shrink-0 flex-col items-start justify-end gap-2 overflow-hidden rounded-2xl bg-black"
            >
              <Image
                src={track.track.album.images[0].url}
                alt="Album Art"
                className="absolute object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
                fill
                priority
                quality={100}
              />
              <div className="absolute h-full w-full bg-[#1E1E1E] opacity-70"></div>
              <h3 className="z-20 mb-6 ml-3 line-clamp-1 text-[30px] font-bold text-white">
                {track.track.name}
              </h3>
              <h3 className="z-20 mb-3 ml-3 line-clamp-1 text-[15px] font-bold text-[#9A9A9A]">
                {track.track.artists[0].name}
              </h3>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Screen3;
