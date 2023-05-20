"use client";

import { faHeart, faMusic, faUser } from "@fortawesome/fontawesome-free-solid";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

function Screen2({
  songs,
  followers,
  userName,
}: {
  songs: number;
  followers: number;
  userName: string;
}) {
  return (
    <div className="relative  flex h-fit w-full flex-col items-center justify-start md:h-[100svh]">
      <Image
        src={"/screen2.jpg"}
        alt="Screen2"
        fill
        className="absolute object-cover"
        priority
        quality={100}
      />
      <div className="absolute h-full w-full bg-[#1E1E1E] opacity-70"></div>
      <h2 className="z-20 mt-10 text-[50px] font-bold text-white md:text-[80px]">
        Playlist Details
      </h2>
      <div className="z-20 mb-5 mt-20 flex h-full w-full flex-col items-center justify-start gap-20 md:mt-0 md:w-[80%] md:items-start md:justify-center">
        <div className="flex h-fit w-fit flex-row items-center justify-center gap-4">
          <FontAwesomeIcon
            icon={faMusic as IconProp}
            className="h-[50px] w-[50px] text-[#D1495B]"
          />
          <h3 className="text-[30px] font-bold text-white">{songs} Songs</h3>
        </div>
        <div className="flex h-fit w-fit flex-row items-center justify-center gap-4">
          <FontAwesomeIcon
            icon={faHeart as IconProp}
            className="h-[50px] w-[50px] text-[#00798C]"
          />
          <h3 className="text-[30px] font-bold text-white">
            {followers} Followers
          </h3>
        </div>
        <div className="flex h-fit w-fit flex-row items-center justify-center gap-4">
          <FontAwesomeIcon
            icon={faUser as IconProp}
            className="h-[50px] w-[50px] text-[#EDAE49]"
          />
          <h3 className="text-[30px] font-bold text-white">{userName}</h3>
        </div>
      </div>
    </div>
  );
}

export default Screen2;
