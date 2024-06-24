import React from "react";
import Link from "next/link";
import { HiChatBubbleLeftEllipsis } from "react-icons/hi2";

const Footer = () => {
  return (
    <footer className=" absolute bottom-0 py-2 w-full bg-white bg-opacity-10 flex flex-col gap-1 justify-center items-center z-50">
      <h1 className="text-xs font-semibold text-white tracking-wide">
        Cek Khodam by DimasKanjeng
      </h1>
      <Link
        className="flex flex-row gap-1 justify-center items-center text-xs font-semibold text-green-500 hover:text-white tracking-wide"
        href="https://fiebryhoga.vercel.app"
      >
        Konsultasi ke mbah <HiChatBubbleLeftEllipsis color="white" size="15" />
      </Link>
    </footer>
  );
};

export default Footer;
