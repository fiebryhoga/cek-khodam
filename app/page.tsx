import React from "react";
import CekKhodam from "./pages/khodam/page";
import Footer from "./components/layouts/Footer";

export default function Home() {
  return (
    <main className=" h-screen w-full flex flex-col justify-center items-center">
      <CekKhodam />
      <Footer />
    </main>
  );
}
