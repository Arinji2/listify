"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as React from "react";
import Error from "./error";

export default function Home() {
  const [link, setLink] = useState("");
  const [showError, setShowError] = useState("");
  const router = useRouter();
  const handleErrors = () => {
    if (!link.startsWith("https://open.spotify.com/playlist/"))
      setShowError("Please enter a valid Spotify Playlist Link");
    else if (link.length === 0)
      setShowError("Please enter a valid Spotify Playlist Link");
    else {
      const regex = /playlist\/([\w\d]+)/;
      const match = link.match(regex);

      if (match) {
        router.push(`/playlist/generate?playlistId=${match[1]}`);
      } else setShowError("Please enter a valid Spotify Playlist Link");
    }
  };

  return (
    <React.Fragment>
      {showError.length > 0 ? (
        <Error flag={true} message={showError} />
      ) : (
        <Error flag={false} message={showError} />
      )}
      <div className="flex h-[100svh] w-full flex-col items-center justify-start  bg-[#EDAE49] md:flex-row md:justify-center">
        <div className="m-2 flex h-1/2 w-full flex-col items-center justify-center gap-5 md:h-full md:w-1/2">
          <h1 className="text-[80px] font-bold text-white md:text-[130px]">
            LISTIFY
          </h1>
          <h3 className="text-center text-[20px] font-medium text-[#F5F5F5] md:text-[30px]">
            Looking at Spotify Playlists, Through New Eyes
          </h3>
          <input
            type="text"
            className="w-[90%] bg-[#E6E6E8]  p-3 text-2xl font-bold text-[#3F3D56] outline-none md:w-[80%]"
            placeholder="Link..."
            onChange={(e) => setLink(e.target.value)}
          />
          <p
            className="mt-10 border-4 border-[#6C63FF] bg-[#6C63FF] p-2 pl-4 pr-4 text-3xl font-bold text-white transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-white hover:text-[#6C63FF]"
            onClick={handleErrors}
          >
            Impress Me!
          </p>
        </div>
        <div className="flex h-1/2 w-full flex-col items-center justify-center md:h-full md:w-1/2 md:items-start">
          <Image
            src={"/hero.svg"}
            width={500}
            height={500}
            quality={100}
            alt="Mellow Svg"
            className="object-fit"
          />
        </div>
      </div>
    </React.Fragment>
  );
}
