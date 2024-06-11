"use client";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#2357F9] gap-10 p-4">
      <div className="p-8 rounded-md text-center">
        <Image
          src="https://carlelieser.github.io/tiper-js/img/empty-state.svg"
          alt="Not Found Image"
          width={150}
          height={150}
          className="m-auto w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]"
        />
      </div>
      <div className="text-center w-full md:w-[600px] gap-5">
        <h2 className="text-[40px] md:text-[60px] lg:text-[100px] font-semibold text-white">404 - error</h2>
        <p className="text-[20px] md:text-[30px] lg:text-[50px] text-white">PAGE NOT FOUND</p>
        <p className="mb-8 text-white text-[16px] md:text-[18px] lg:text-[20px]">
          Your search has ventured beyond the known universe.
        </p>

        <a
          href="/"
          className="border px-4 py-2 bg-white text-[#2357F9] rounded-lg"
        >
          Go to Loading Page
        </a>
      </div>
    </div>
  );
}
