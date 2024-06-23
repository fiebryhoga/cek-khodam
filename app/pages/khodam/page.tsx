/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import BoxContainer from "@/app/components/BoxContainer";
import Link from "next/link";

const CekKhodam = () => {
  return (
    <div className="flex h-full w-full flex-row bg-black bg-opacity-10">
      <img
        className="w-full h-full absolute object-cover opacity-35 z-0"
        src="/assets/images/bg.khodam.jpg"
        alt=""
      />
      <div className="flex px-6 flex-col justify-center items-center h-full w-full z-10">
        <BoxContainer />
      </div>
      
    </div>
  );
};

export default CekKhodam;
