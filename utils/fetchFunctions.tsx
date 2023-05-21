import { Playlist, Track } from "./types";

export const getAccessToken = async () => {
  const authData = Buffer.from(
    process.env.SPOTIFY_ID + ":" + process.env.SPOTIFY_SECRET
  ).toString("base64");

  const res = await fetch("https://accounts.spotify.com/api/token", {
    headers: {
      Authorization: `Basic ${authData}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
    method: "POST",
    cache: "no-store",
  });

  const data = await res.json();
  return data.access_token;
};

export const getPlaylist = async (id: string, access_token: string) => {
  const res = await fetch(
    `https://api.spotify.com/v1/playlists/${id}?fields=name,followers(total),images,owner(display_name),description,external_urls(spotify)`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
  const playlist = await res.json();
  return playlist as Playlist;
};

export const getPlaylistTracks = async (id: string, access_token: string) => {
  const res = await fetch(
    `https://api.spotify.com/v1/playlists/${id}/tracks?fields=items(track(name,artists(name),album(images),external_urls(spotify)))`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
  const tracks = await res.json();
  return tracks.items as Track[];
};
