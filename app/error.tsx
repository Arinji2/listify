"use client";

interface ErrorProps {
  flag: boolean;
  message: string;
}
function Error({ flag, message }: ErrorProps) {
  return flag ? (
    <div className="fixed top-0 z-[1000] flex h-[100vh] w-full translate-y-0 flex-col items-center justify-center gap-10 bg-[#D1495B] text-center transition-all duration-500 ease-in-out">
      <h1 className="text-[50px] font-bold text-white md:text-[90px]">
        Uh Oh! An Error Occurred
      </h1>
      <h3 className="text-center text-[20px] font-medium text-[#F5F5F5] md:text-[30px]">
        {message}
      </h3>
      <p
        onClick={() => window.location.reload()}
        className="m-2 mt-10 border-4 border-[#EDAE49] bg-[#EDAE49] p-3 pl-5 pr-5 text-3xl font-bold text-white transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-white hover:text-[#EDAE49]"
      >
        Take Me Back!!
      </p>
    </div>
  ) : (
    <div className="fixed top-0 flex h-[100vh] w-full -translate-y-[3000px] flex-col items-center justify-center bg-[#D1495B] transition-all duration-500 ease-in-out"></div>
  );
}

export default Error;
