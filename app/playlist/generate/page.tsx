import { generateStep, uploadStep } from "@/utils/generateFunc";
import Button from "./redirectButton";
async function Page({
  searchParams,
}: {
  searchParams: { playlistId: string };
}) {
  const { playlist, tracks } = await generateStep(searchParams.playlistId);
  await uploadStep(playlist, tracks, searchParams.playlistId);

  return (
    <div className="flex h-[100svh] w-full flex-col items-center justify-center gap-10 bg-[#EDAE49] text-center md:gap-20">
      <h1 className="text-[80px] font-bold text-white md:text-[130px]">
        Playlist Created!!
      </h1>
      <Button playlistId={searchParams.playlistId} />
    </div>
  );
}

export default Page;
