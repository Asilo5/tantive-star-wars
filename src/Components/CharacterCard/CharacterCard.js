import React from 'react';
import './CharacterCard.scss';

const CharacterCard = ({ name, homeWorld, population, species, films }) => {
  return (
      <section>
        <h2>{name}</h2>
        <p>Homeworld: {homeWorld}</p>
        <p>Population: {population}</p>
        <p>Species: {species}</p>
        <p>Seen in:{films}</p>
      </section>
  ) 
}

export default CharacterCard;