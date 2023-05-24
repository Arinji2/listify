import { supabaseClient } from "@/utils/supabaseClient";
import Image from "next/image";
import Options from "./option";

export default async function Home({
  params,
}: {
  params: { playlistId: string };
}) {
  const res = await supabaseClient
    .from("playlists")
    .select("*")
    .eq("playlist_id", params.playlistId)
    .single();
  const name = res.data?.name as string;
  return (
    <div className="flex h-[100svh] w-full flex-col items-center justify-start">
      <div className="fixed top-0 h-[100svh] w-full">
        <Image
          src={"/screen1.jpeg"}
          fill
          className="absolute object-cover"
          alt="Wallpaper"
        />
        <div className="absolute h-full w-full bg-[#1E1E1E] opacity-50"></div>
      </div>

      <h1 className="z-20 mt-10 text-[50px] font-bold text-white md:text-[80px]">
        {name}
      </h1>
      <div className="z-20 flex h-full w-full flex-row flex-wrap items-center justify-evenly gap-5">
        <Options
          image={`/hearing.svg`}
          link={`${params.playlistId}/view`}
          name="View"
        />
        <Options
          image={`/searching.svg`}
          link={`${params.playlistId}/compare`}
          name="Compare"
        />
      </div>
    </div>
  );
}
