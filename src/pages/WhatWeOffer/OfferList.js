import React from 'react';
import { OfferContainer } from './OfferStyles';
import OfferCard from './OfferCard';

function OfferList() {
  const offers = [
    { title: 'Smart Learning', description: 'Your personal tutor, tailored just for you!' },
    { title: 'Cool Visuals', description: 'Fun graphics to make learning a blast.' },
    { title: 'Quick Quizzes', description: 'Test yourself and level up fast!' },
  ];

  return (
    <OfferContainer>
      <h2>Why Merp.ai Rocks</h2>
      <div className="offer-cards">
        {offers.map((offer, index) => (
          <OfferCard key={index} title={offer.title} description={offer.description} />
        ))}
      </div>
    </OfferContainer>
  );
}

export default OfferList;