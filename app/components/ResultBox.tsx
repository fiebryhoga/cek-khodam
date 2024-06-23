import React from "react";

interface ResultBoxProps {
  result: string;
  description: string | null;
  name: string;
  onReset: () => void;
}

const ResultBox: React.FC<ResultBoxProps> = ({
  result,
  description,
  name,
  onReset,
}) => {
  return (
    <div className="py-6 px-4 bg-black bg-opacity-30 flex flex-col justify-center items-center bg-transparent backdrop-blur-custom border border-white min-h-[100px] w-full lg:min-h-40 lg:w-[540px] rounded-xl gap-8">
      <p className="text-white font-medium tracking-wider">
        Khodam <span className="font-semibold text-green-500">{name}</span>{" "}
        adalah
      </p>
      <p className="text-3xl font-bold text-green-400 text-center">{result}</p>
      {description && (
        <p className="text-white text-sm mt-2 text-center font-medium tracking-wide"> Dalam diri {name} terdapat {description}
        </p>
      )}
      <button
        onClick={onReset}
        className="py-3 flex flex-row justify-center items-center px-8 font-bold hover:bg-green-800 hover:text-white transition-all duration-200 bg-green-500 border-green-800 border rounded-full mt-4"
      >
        Cek Lagi
      </button>
    </div>
  );
};

export default ResultBox;
