import {
  getAccessToken,
  getPlaylist,
  getPlaylistTracks,
} from "@/utils/fetchFunctions";
import { compareStep } from "@/utils/generateFunc";
import { supabaseClient } from "@/utils/supabaseClient";
import { Track } from "@/utils/types";
import View from "./view";
import RedirectButton from "./redirectButton";

export default async function Page({
  params,
}: {
  params: { playlistId: string; secondaryPlaylistId: string };
}) {
  const access_token = await getAccessToken();
  const primaryData = await supabaseClient
    .from("playlists")
    .select("*")
    .eq("playlist_id", params.playlistId)
    .single();
  const secondaryTracks = await getPlaylistTracks(
    params.secondaryPlaylistId,
    access_token
  );

  const secondaryData = await getPlaylist(
    params.secondaryPlaylistId,
    access_token
  );

  const primaryTracks = primaryData.data?.tracks as Track[];

  const arrayOfPrimaryObs = await compareStep(primaryTracks, secondaryTracks);
  const arrayOfSecondaryObs = await compareStep(secondaryTracks, primaryTracks);

  const primaryPlaylistName = primaryData.data?.name as string;
  const secondaryPlaylistName = secondaryData.name as string;

  return (
    <div className="flex h-fit min-h-[100svh] w-full flex-col items-center justify-start bg-[#1E1E1E] text-center">
      <h1 className="mt-10 text-[50px] font-bold text-[#b88635] md:text-[80px]">
        Comparison Results
      </h1>
      <View
        primaryName={primaryPlaylistName}
        secondaryName={secondaryPlaylistName}
        primaryTracks={arrayOfPrimaryObs}
        secondaryTracks={arrayOfSecondaryObs}
      />
      <View
        primaryName={secondaryPlaylistName}
        secondaryName={primaryPlaylistName}
        primaryTracks={arrayOfSecondaryObs}
        secondaryTracks={arrayOfPrimaryObs}
      />
      <RedirectButton
        playListId={params.playlistId}
        playListName={primaryPlaylistName}
      />
    </div>
  );
}
