"use client";

import Image from "next/image";

export default function Options({
  image,
  name,
  link,
}: {
  image: string;
  name: string;
  link: string;
}) {
  return (
    <a
      href={link}
      className="group relative flex h-[300px] w-[300px] flex-col items-center justify-start gap-5 overflow-hidden rounded-lg bg-[#b88635] p-4 transition-all duration-300 ease-in-out hover:scale-110 hover:cursor-pointer hover:shadow-lg hover:shadow-black"
    >
      <div className="relative h-[78%] w-full overflow-hidden">
        <Image src={image} alt="Options" fill className="object-fit" />
      </div>
      <div className="h-[2%] w-[90%] bg-white"></div>
      <h1 className=" text-5xl font-bold text-white">{name}</h1>
    </a>
  );
}
