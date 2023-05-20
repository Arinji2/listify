import Image from "next/image";

function Page() {
  return (
    <div className="flex h-[100svh] w-full flex-col items-center justify-center bg-[#EDAE49]">
      <div className="flex h-fit w-full flex-col items-center justify-start md:flex-row md:justify-center">
        <div className="flex h-1/2 w-full flex-col items-center justify-center gap-5 md:h-full md:w-1/2">
          <h1 className="text-[80px] font-bold text-white md:text-[130px]">
            LOADING
          </h1>
        </div>
        <div className="flex h-1/2 w-full flex-col items-center justify-center md:h-full md:w-1/2 md:items-start">
          <Image
            src="/hero.svg"
            alt="Mellow Svg"
            className="object-fit"
            width={500}
            height={500}
            priority
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
