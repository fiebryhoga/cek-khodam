import React from "react";

interface LoadingBoxProps {
  name: string;
}

const LoadingBox: React.FC<LoadingBoxProps> = ({ name }) => {
  return (
    <div className="py-6 px-4 bg-black bg-opacity-30 flex flex-col items-center justify-center bg-transparent backdrop-blur-custom border border-white min-h-[100px] w-full lg:min-h-40 lg:w-[540px] rounded-xl gap-8">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
      <p className="text-white mt-4 text-center">
        Sebentar mbah sedang melihat khodam dalam diri {name}...
      </p>
    </div>
  );
};

export default LoadingBox;
