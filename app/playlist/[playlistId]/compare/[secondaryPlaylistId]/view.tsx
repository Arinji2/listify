"use client";

import { Track } from "@/utils/types";
import { CompareTrackCard, TrackCard } from "../../trackCard";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/fontawesome-free-solid";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export default function View({
  primaryTracks,
  secondaryTracks,
  primaryName,
  secondaryName,
}: {
  primaryTracks: Track[];
  secondaryTracks: Track[];
  primaryName: string;
  secondaryName: string;
}) {
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
    <div>
      <div className="mt-10 flex h-fit w-full flex-row flex-wrap items-center justify-center gap-3 text-center text-[30px] font-bold text-white md:text-[40px]">
        <h2>There {primaryTracks.length === 1 ? "is" : "are"}</h2>
        <h2 className="text-[#6C63FF]">{primaryTracks.length}</h2>
        <h2>{primaryTracks.length === 1 ? "song" : "songs"} in</h2>
        <h2 className="text-[#6C63FF]">{primaryName}</h2>
        <h2>that {primaryTracks.length === 1 ? "is" : "are"} not in</h2>
        <h2 className="text-[#6C63FF]">{secondaryName}</h2>
      </div>

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
        className={`mb-10 flex h-full w-full shrink-0 flex-row flex-wrap items-center justify-evenly gap-5 gap-y-8 transition-all duration-500 ease-in-out`}
      >
        {primaryTracks.map((track, i) =>
          track.track.album.images[0] === undefined ? null : (
            <CompareTrackCard track={track} images={images} i={i} key={i} />
          )
        )}
      </div>
    </div>
  );
}
