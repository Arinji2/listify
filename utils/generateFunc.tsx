import {
  getAccessToken,
  getPlaylist,
  getPlaylistTracks,
} from "./fetchFunctions";
import { supabaseClient } from "./supabaseClient";
import { Playlist, Track } from "./types";

export const generateStep = async (playlistId: string) => {
  const access_token = await getAccessToken();
  const playlist = await getPlaylist(playlistId, access_token);
  const tracks = await getPlaylistTracks(playlistId, access_token);

  return { playlist, tracks };
};

export const uploadStep = async (
  playlist: Playlist,
  tracks: Track[],
  playlistId: string
) => {
  console.log(playlist);
  const response = await fetch(playlist.images[0].url);
  var imageBuffer, buffer;
  if (response !== null && response !== undefined) {
    imageBuffer = await response.arrayBuffer();
    buffer = Buffer.from(imageBuffer);
    await supabaseClient.storage
      .from("images")
      .upload(`playlist/${playlistId}.jpeg`, buffer);
  }

  const url = supabaseClient.storage
    .from("images")
    .getPublicUrl(`playlist/${playlistId}.jpeg`);

  await supabaseClient.from("playlists").insert({
    playlist_id: playlistId,
    name: playlist.name,
    user_name: playlist.owner.display_name,
    followers: playlist.followers.total,
    images: url.data.publicUrl,
    tracks: tracks,
    description: playlist.description,
    url: playlist.external_urls.spotify,
  });
};
