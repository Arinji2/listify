"use client";

import { useRouter } from "next/navigation";

export default function Button({ playlistId }: { playlistId: string }) {
  const router = useRouter();
  return (
    <p
      className="mt-10 border-4 border-[#6C63FF] bg-[#6C63FF] p-5 text-3xl font-bold text-white transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-white hover:text-[#6C63FF]"
      onClick={() => router.push(`/playlist/${playlistId}`)}
    >
      Check it Out!
    </p>
  );
}
