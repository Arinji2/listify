import RedirectButton from "@/app/playlist/[playlistId]/compare/[secondaryPlaylistId]/redirectButton";
import {
  getAccessToken,
  getPlaylist,
  getRandomColor,
  getTrackLyrics,
  getTrackName,
} from "@/utils/fetchFunctions";
import Image from "next/image";

export default async function Lyrics({
  params,
}: {
  params: { trackId: string; playlistId: string };
}) {
  const { lyrics, error } = await getTrackLyrics(params.trackId);
  const access_token = await getAccessToken();
  const name = await getTrackName(params.trackId, access_token);
  const playlist = await getPlaylist(params.playlistId, access_token);
  const playListName = playlist.name;

  return (
    <div className="flex h-fit min-h-[100svh] w-full flex-col items-center justify-start gap-20 bg-black">
      <h1 className="z-[100] m-2 mt-10 text-center text-4xl font-bold text-white md:text-7xl">
        {name}
      </h1>
      <div className="flex h-full w-[90%] flex-col items-center justify-center  md:w-[70%] ">
        <div className="fixed top-0 h-[100svh] w-full">
          <Image
            src="/lyrics.jpg"
            fill
            className="absolute object-cover"
            priority
            quality={100}
            alt="Image"
          />
          <div className="absolute h-full w-full bg-[#1E1E1E] opacity-50"></div>
        </div>
        <div className="z-[100] h-full w-full">
          {error ? (
            <h1 className="text-center text-6xl font-bold text-white">
              No Lyrics Found!
            </h1>
          ) : (
            lyrics.map((lyric: string, i: number) => (
              <LyricText lyrics={lyric} index={i} key={i} />
            ))
          )}
        </div>
        <RedirectButton
          playListId={params.playlistId}
          playListName={`${playListName}`}
        />
      </div>
    </div>
  );
}

const LyricText = ({ lyrics, index }: { lyrics: string; index: number }) => {
  const firstLetterCaps = lyrics.charAt(0).toUpperCase() + lyrics.slice(1);

  return (
    <h1
      className={`z-[100] m-2 text-left text-xl font-medium md:text-3xl ${
        index % 2 == 0 ? " text-white" : " text-[#EDAE49]"
      }`}
    >
      {firstLetterCaps}
    </h1>
  );
};
