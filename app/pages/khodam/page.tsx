/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect } from "react";
import BoxContainer from "@/app/components/BoxContainer";
import Footer from "@/app/components/layouts/Footer";

const CekKhodam = () => {


  return (
    <div className="relative h-full w-full flex flex-col bg-black bg-opacity-10">
      <img
        className="w-full h-full absolute object-cover opacity-35 z-0"
        src="/assets/images/bg.khodam.jpg"
        alt=""
      />
      <div className="flex flex-col justify-center items-center h-full w-full z-10">
        <BoxContainer />
      </div>

      <Footer />
    </div>
  );
};

export default CekKhodam;




