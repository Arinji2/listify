"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

function Footer() {
  const router = useRouter();
  return (
    <div className="flex h-fit w-full flex-col items-center justify-center gap-10 bg-[#b88635] p-5">
      <h4
        onClick={() => router.back()}
        className="border-[#6C63FF] bg-[#6C63FF] p-2 pl-4 pr-4 text-2xl font-bold text-white transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-white hover:text-[#6C63FF]"
      >
        Back to Options
      </h4>
      <h3 className="text-5xl font-bold text-white md:text-8xl">
        Listify By Arinjii
      </h3>
      <Link
        href="/"
        className="border-[#6C63FF] bg-[#6C63FF] p-2 pl-4 pr-4 text-2xl font-bold text-white transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-white hover:text-[#6C63FF]"
      >
        Stylize your own Playlist for Free!
      </Link>
    </div>
  );
}

export default Footer;
