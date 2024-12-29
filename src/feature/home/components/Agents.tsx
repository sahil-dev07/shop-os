import React, { useState } from 'react';
import LeftArrow from '../../../assets/icons/leftArrow.svg';
import { agentCardData, agentCategories } from '../../../constants/mockData';

interface CardData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardData> = ({ title, description, imageUrl }) => (
  <div className="flex flex-col px-6 py-4 rounded-lg shadow-lg bg-white mt-3">
    <img className="h-8 w-8" src={imageUrl} alt={title} />
    <div className=" py-4">
      <h2 className="font-semibold text-lg text-gray-800">{title}</h2>
      <p className="font-inter text-[14px] text-[#C7C6C4]">{description}</p>
    </div>
  </div>
);

const AgentList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <div className="flex flex-col gap-3 p-6">
      <div className="flex gap-5">
        <img
          className="hover:bg-slate-200 p-3 rounded-lg"
          src={LeftArrow}
          onClick={() => {
            history.back();
          }}
        />
        <h2 className="text-3xl font-semibold">Agents</h2>
      </div>
      <div className="flex flex-wrap items-center gap-3 pb-2">
        {agentCategories.map((category, index) => (
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {agentCardData.map((card) => (
          <Card
            id={card.id}
            key={card.id}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default AgentList;
