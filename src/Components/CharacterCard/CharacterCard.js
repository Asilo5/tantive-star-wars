import React from 'react';
import './CharacterCard.scss';
import { FaJedi } from "react-icons/fa";

const CharacterCard = ({ name, homeworld, population, species, films }) => {
  return (
      <section className='card'>
        <FaJedi />
        <h2>{name}</h2>
        <h3>Homeworld:</h3>
        <p>{homeworld}</p>
        <h3>Population:</h3>
        <p>{population}</p>
        <h3>Species: </h3>
        <p>{species}</p>
        <h3>Seen in:</h3>
        <p>{films}</p>
      </section>
  ) 
}

export default CharacterCard;