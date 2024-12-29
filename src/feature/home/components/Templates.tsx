import React, { useState } from 'react';
import LeftArrow from '../../../assets/icons/leftArrow.svg';
import {
  templateCardData,
  templateCategories,
} from '../../../constants/mockData';

interface CardData {
  id?: number;
  title: string;
  imageUrl: string;
}

const Card: React.FC<CardData> = ({ id, title, imageUrl }) => (
  <img
    className="flex flex-col rounded-lg shadow-lg bg-white mt-3"
    src={imageUrl}
    alt={title}
    key={id}
    onClick={() => alert('Hello')}
  />
);

const Templates: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <div className="flex flex-col gap-3 p-6">
      <div className="flex gap-5">
        <img
          src={LeftArrow}
          onClick={() => {
            history.back();
          }}
          className="hover:bg-slate-200 p-3 rounded-lg"
        />
        <h2 className="text-3xl font-semibold">Templates</h2>
      </div>
      <div className="flex flex-wrap items-center gap-3 pb-2">
        {templateCategories.map((category, index) => (
          <span
            key={index}
            className={`${selectedCategory === index
              ? 'bg-[#0F172A] text-white'
              : 'border-[#E5E5E5] border'
              } 
                            hover:shadow-md cursor-pointer rounded-full px-6 py-2 min-w-max`}
            onClick={() => setSelectedCategory(index)}
          >
            {category}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {templateCardData.map((card, index) => (
          <Card id={index} title={card.title} imageUrl={card.imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default Templates;
