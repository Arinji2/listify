"use client";
import Image from "next/image";

function Screen1({
  playlistName,
  userName,
  image,
  description,
  url,
}: {
  playlistName: string;
  userName: string;
  image: string;
  description: string;
  url: string;
}) {
  return (
    <div className="flex h-[100svh] w-full flex-col items-center justify-center md:flex-row">
      <div className="absolute h-full w-full md:relative md:w-[45%] ">
        <Image
          src={image === null ? "/screen1.jpeg" : image}
          alt="Playlist Image"
          className=" absolute object-cover"
          fill
          priority
          quality={100}
        />
        <div className="absolute h-full w-full bg-[#1E1E1E] opacity-70"></div>
      </div>
      <div className="relative flex h-full w-[95%] flex-col items-center justify-center gap-20 bg-transparent text-center md:w-[55%] md:justify-start md:bg-[#1E1E1E] md:shadow-lg md:shadow-black">
        <h1
          className=" mt-20 text-[70px] font-bold text-[#EDAE49] underline decoration-white hover:cursor-pointer md:text-[100px]"
          onClick={() => {
            window.open(url, "_blank");
          }}
        >
          {playlistName}
        </h1>
        <h2 className="line-clamp-2 text-center text-[20px] font-medium text-white md:text-[30px]">
          {description === null || description === undefined ? "" : description}
        </h2>
        <h3 className="line-clamp-1 text-[30px] font-bold text-white">
          By: <span className="text-[#EDAE49]">{userName}</span>
        </h3>
      </div>
    </div>
  );
}

export default Screen1;
