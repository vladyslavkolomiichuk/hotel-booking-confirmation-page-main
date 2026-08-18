import React from 'react';
import { InfoCardColors, InfoCardData } from '../App';

type InfoCardProps = {
  card: InfoCardData;
  cardColor: InfoCardColors;
  children: React.ReactNode;
};

const InfoCard = ({ cardColor, children, card }: InfoCardProps) => {
  return (
    <article className="py-250 px-200 md:py-300 bg-neutral-50 w-[343px] h-[232px] md:w-[351px] md:h-[252px] flex flex-col gap-250 md:gap-300 border border-neutral-400 rounded-16 shadow-[0_0_1px_rgba(0,0,0,0.02),0_1px_1px_rgba(62,44,30,0.04),0_18px_40px_rgba(62,44,30,0.25)]">
      <div className="flex gap-125 items-center" style={{ color: cardColor }}>
        <div
          className="size-500 rounded-8 flex items-center justify-center"
          style={{ backgroundColor: cardColor }}
        >
          <img src={card.icon} alt="" />
        </div>

        <p className="flex-1 text-preset-6 uppercase">{card.label}</p>
        <p className="text-preset-3">{card.number}</p>
      </div>

      <div className="flex flex-col gap-100">
        <h3 className="text-preset-3 text-neutral-900">{card.title}</h3>
        <p className="text-preset-7 text-neutral-600">{card.subtitle}</p>
      </div>

      {children}
    </article>
  );
};

export default InfoCard;
