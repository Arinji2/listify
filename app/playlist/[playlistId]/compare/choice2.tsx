"use client";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useState } from "react";
import Error from "../../../error";
import Image from "next/image";
function Choice2({ id }: { id: string }) {
  const [link, setLink] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleError = () => {
    if (link === "") {
      setError(true);
      setErrorMessage("Please enter a valid Spotify Playlist Link");
    } else if (!link.startsWith("https://open.spotify.com/playlist/")) {
      setError(true);
      setErrorMessage("Please enter a valid Spotify Playlist Link");
    } else {
      const regex = /playlist\/([\w\d]+)/;
      const match = link.match(regex);

      if (match) {
        router.push(`/playlist/${id}/compare/${match[1]}`);
      } else {
        setError(true);
        setErrorMessage("Please enter a valid Spotify Playlist Link");
      }
    }
  };

  return (
    <React.Fragment>
      {error ? (
        <Error flag={true} message={errorMessage} />
      ) : (
        <Error flag={false} message={errorMessage} />
      )}
      <div className="relative flex h-[40vh] w-[90%] shrink-0 flex-col items-center justify-center gap-10 overflow-hidden rounded-lg md:h-full md:w-[40%]">
        <Image
          src="/screen1.jpeg"
          fill
          className="absolute object-cover"
          alt="Image 2"
        />
        <div className="absolute h-full w-full bg-[#1E1E1E] opacity-50"></div>
        <input
          type="text"
          placeholder="Playlist Link..."
          className="z-20 h-fit w-[80%] rounded-lg bg-white p-3 text-[20px] font-bold text-[#1E1E1E] outline-none "
          onChange={(e) => setLink(e.target.value)}
        ></input>
        <p
          className="absolute bottom-5 z-20 rounded-lg border-4 border-green-500 bg-green-500 p-2 pl-4 pr-4 text-3xl font-bold text-white transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-white hover:text-green-500 md:bottom-20"
          onClick={handleError}
        >
          Set Playlist
        </p>
      </div>
    </React.Fragment>
  );
}

export default Choice2;
