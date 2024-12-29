import React from 'react';

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  description,
  onClick,
}) => {
  return (
    <div className="hover:shadow-xl bg-white rounded-[18px] border border-[#E5E5E5] overflow-hidden sm:max-w-[200px] md:max-w-full p-4">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-48 object-cover rounded-md"
      />
      <div className="flex pt-4 pb-5 flex-col gap-2">
        <span className="text-[10px] max-w-min text-[#838383] font-semibold rounded-full py-[8px] px-[15px] bg-[#F0F0F0]">
          Comfy
        </span>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-[#939393] font-normal text-sm">{description}</p>
      </div>
      <button
        onClick={onClick}
        className="w-full p-4 bg-[#0F172A] rounded-full text-white"
      >
        Try it out
      </button>
    </div>
  );
};

export default Card;
