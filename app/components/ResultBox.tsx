import React from "react";

interface ResultBoxProps {
  result: string;
  name: string;
  onReset: () => void;
}

const ResultBox: React.FC<ResultBoxProps> = ({ result, name, onReset }) => {
  return (
    <div className="py-6 px-4 bg-black bg-opacity-30 flex flex-col items-center bg-transparent backdrop-blur-custom border border-white min-h-[400px] w-full lg:min-h-40 lg:w-[540px] rounded-xl gap-8">
      <p className="text-white">Khodam anda adalah: {result}</p>
      <p className="text-white">Nama yang diinputkan: {name}</p>
      <button
        onClick={onReset}
        className="py-3 flex flex-row justify-center items-center px-8 w-32 font-bold hover:bg-green-800 hover:text-white transition-all duration-200 bg-green-500 border-green-800 border rounded-full mt-4"
      >
        Cek Lagi
      </button>
    </div>
  );
};

export default ResultBox;
