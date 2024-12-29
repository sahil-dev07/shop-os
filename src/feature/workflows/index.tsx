import React, { useState } from 'react';
import Card from './components/Card/Card';
import LeftArrow from '../../assets/icons/leftArrow.svg';
import { cardData, categories } from '../../constants/mockData';

const CardList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <div className="flex flex-col gap-3 p-6">
      <div className="flex gap-5 items-center">
        <img
          src={LeftArrow}
          className="hover:bg-slate-200 p-3 rounded-lg"
          alt="Left Arrow"
          onClick={() => history.back()}
        />
        <h2 className="text-3xl font-semibold">Workflows</h2>
      </div>

      <div className="flex flex-wrap items-center gap-3 pb-2">
        {categories.map((category, index) => (
          <span
            key={index}
            className={`${
              selectedCategory === index
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

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardData.map((card, index) => (
          <Card
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
            onClick={card.onClick}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
