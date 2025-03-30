import React from 'react';
import { OfferCardStyled } from './OfferStyles';

function OfferCard({ title, description }) {
  return (
    <OfferCardStyled>
      <h3>{title}</h3>
      <p>{description}</p>
    </OfferCardStyled>
  );
}

export default OfferCard;