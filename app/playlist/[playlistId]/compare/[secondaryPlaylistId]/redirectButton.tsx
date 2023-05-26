"use client";
import Link from "next/link";

export default function RedirectButton({
  playListId,
  playListName,
}: {
  playListId: string;
  playListName: string;
}) {
  return (
    <p
      onClick={() => {
        window.location.href = `/playlist/${playListId}`;
      }}
      className="z-[100] mb-5 mt-10 border-4 border-[#6C63FF] bg-[#6C63FF] p-2 pl-4 pr-4 text-3xl font-bold text-white transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-white hover:text-[#6C63FF]"
    >
      Back to {playListName}
    </p>
  );
}
