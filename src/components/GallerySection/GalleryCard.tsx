import React from "react";

interface GalllerCardProps {
  title: string;
  img: string;
}

const GalleryCard = ({ title, img }: GalllerCardProps) => {
  return (
    <div className="w-100 font-arimo bg-slate-800/10">
      <div className="p-8 flex flex-col justify-center  gap-y-6">
        <h3 className="text-center font-medium text-2xl">{title}</h3>

        <button className="w-fit self-center border rounded-full px-6 py-2  border-gray-900/20">Learn More</button>
      </div>

      <img className="w-fit z-102" src={img} />
    </div>
  );
};

export default GalleryCard;
