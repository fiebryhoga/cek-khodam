import React, { useState, useEffect } from "react";
import { GiPrayer } from "react-icons/gi";
import LoadingBox from "./LoadingBox";
import ResultBox from "./ResultBox";
import { khodam } from "../data/khodam";

const BoxContainer = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [musicPlaying, setMusicPlaying] = useState(false);

  useEffect(() => {
    if (musicPlaying) {
      const audio = new Audio("/assets/music/music.mp3");
      audio.play();
      return () => {
        audio.pause();
        audio.currentTime = 0;
      };
    }
  }, [musicPlaying]);

  const handleCheck = () => {
    if (name.length < 2 || name.length > 100) {
      setError("Nama tidak valid");
      setTimeout(() => setError(null), 2000);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const firstLetter = name[0].toLowerCase();
      const lastLetter = name[name.length - 1].toLowerCase();
      const khodamResult = khodam.find(
        (k) => k.awalan === firstLetter && k.akhiran === lastLetter
      );

      if (khodamResult) {
        setResult(khodamResult.khodam);
        setDescription(khodamResult.deskripsi);
      } else {
        setResult("Tidak ditemukan");
        setDescription(null);
      }

      setLoading(false);
    }, 3000);
  };

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === "Enter") {
      handleCheck();
    }
  };

  const handleInputFocus = () => {
    setMusicPlaying(true);
  };

  const handleReset = () => {
    setName("");
    setResult(null);
    setDescription(null);
  };

  return (
    <div className="flex flex-col items-center justify-center rounded-lg w-full">
      {loading ? (
        <LoadingBox name={name} />
      ) : result ? (
        <ResultBox
          result={result}
          description={description}
          name={name}
          onReset={handleReset}
        />
      ) : (
        <div className="py-6 md:px-4 bg-white bg-opacity-5 flex flex-col items-center bg-transparent backdrop-blur-custom border border-white min-h-[400px] w-full md:min-h-80 md:w-[540px] rounded-xl gap-16 lg:gap-8">
          <h1 className="text-xl text-white font-bold tracking-wider">
            Cek Khodam
          </h1>
          <div className="flex flex-col justify-center items-center w-full gap-4">
            <p className="text-white text-sm font-medium tracking-wide">
              Masukkan nama untuk melihat khodam
            </p>
            <input
              className="lg:w-96 py-4 text-sm bg-transparent rounded-full border border-white outline-none px-8 text-white text-opacity-80"
              type="text"
              placeholder="Nama"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={handleInputFocus}
              onKeyDown={handleKeyDown}
            />
            {error && <p className="text-red-500">{error}</p>}
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-4">
            <p className="flex gap-2 justify-center items-center lg:px-20 text-white font-medium text-sm">
              <GiPrayer size={30} color="white" />
              Dimohon membaca Bismillah 3x
            </p>
            <button
              onClick={handleCheck}
              className="py-3 flex flex-row justify-center items-center px-8 w-32 font-bold hover:bg-green-800 hover:text-white transition-all duration-200 bg-green-500 border-green-800 border rounded-full"
            >
              Cek
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BoxContainer;
