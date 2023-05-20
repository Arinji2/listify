import { supabaseClient } from "@/utils/supabaseClient";
import { Data } from "@/utils/types";
import Screen1 from "./screen1";
import Screen2 from "./screen2";
import Screen3 from "./screen3";
import Footer from "./screen4";

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
    <div className="h-fit w-full">
      <Screen1
        playlistName={data.name}
        userName={data.user_name}
        image={data.images}
        description={data.description}
        url={data.url}
      />
      <Screen2
        songs={data.tracks.length}
        followers={data.followers}
        userName={data.user_name}
      />
      <Screen3 tracks={data.tracks} />
      <Footer />
    </div>
  );
}
