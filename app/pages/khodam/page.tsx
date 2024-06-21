/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import BoxContainer from "@/app/components/BoxContainer";

const CekKhodam = () => {
  return (
    <div className="flex h-full w-full flex-row bg-white bg-opacity-20">
      <img
        className="w-full h-full absolute object-cover opacity-35 z-0"
        src="/assets/images/bg-khodam2.jpg"
        alt=""
      />
      <div className="flex flex-col justify-center items-center h-full w-full z-10">
        <BoxContainer />
      </div>
    </div>
  );
};

export default CekKhodam;
