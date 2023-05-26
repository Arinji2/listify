import { supabaseClient } from "@/utils/supabaseClient";
import { Data } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import Choice2 from "./choice2";

export default async function Page({
  params,
}: {
  params: { playlistId: string };
}) {
  const res = await supabaseClient
    .from("playlists")
    .select("*")
    .eq("playlist_id", params.playlistId)
    .single();

  const data = res.data as Data;
  return (
    <div className="flex h-fit w-full flex-col items-center justify-start gap-5 bg-[#EDAE49] md:h-[100svh]">
      <h1 className="mt-5 text-[70px] font-bold text-white md:text-[100px]">
        Compare
      </h1>
      <div className="mb-5 flex h-full w-full flex-col items-center justify-center md:flex-row">
        <div className="relative flex h-[40vh] w-[90%] shrink-0 flex-col items-center justify-center gap-10 overflow-hidden rounded-lg md:h-full md:w-[40%]">
          <Image
            alt="Image 1"
            src={data.images}
            fill
            className="absolute rounded-lg object-cover"
          />
          <div className="absolute h-full w-full bg-[#1E1E1E] opacity-50"></div>
          <h1 className="z-20 text-[80px] font-bold text-white">{data.name}</h1>
          <Link
            href="/"
            className="absolute bottom-5 z-20 rounded-lg border-4 border-[#6C63FF] bg-[#6C63FF] p-2 pl-4 pr-4 text-3xl font-bold text-white transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-white hover:text-[#6C63FF] md:bottom-20"
          >
            Change Playlist
          </Link>
        </div>
        <div className="flex h-full w-[10%] shrink-0 flex-col items-center justify-center">
          <h2 className="text-[90px] font-bold text-white">=</h2>
        </div>
        <Choice2 id={params.playlistId} />
      </div>
    </div>
  );
}
