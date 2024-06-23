import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className=" absolute bottom-0 py-2 w-full bg-white bg-opacity-10 flex flex-col gap-1 justify-center items-center z-50">
      <h1 className="text-xs font-semibold text-white tracking-wide">
        
        Cek Khodam by DimasKanjeng
      </h1>
      <Link className="text-xs font-semibold text-green-500 hover:text-green-600 tracking-wide" href="https://sppay.shopee.co.id/qr/00d6c808e377706ecabc">
        Buat beliin mbah kopi
      </Link>
    </footer>
  );
}

export default Footer
