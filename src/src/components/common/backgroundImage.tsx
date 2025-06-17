import React from "react";
import LazyImage from "next/image";

const BackgroundImage = () => {
  return (
    <div className="absolute h-screen w-screen inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-2xl z-0 opacity-[7%]">
      <LazyImage
        src="/DAL_Brand_Pattern_@4x.png"
        alt="Our Creative Team"
        fill
        className="rounded-2xl shadow-xl w-full h-full"
      />
    </div>
  );
};

export default BackgroundImage;
