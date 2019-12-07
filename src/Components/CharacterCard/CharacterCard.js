import React from 'react';
import './CharacterCard.scss';
import { FaJedi } from "react-icons/fa";

const CharacterCard = ({ id, name, homeworld, population, species, films, toggleFavourites }) => {
  let theFilm = films.map((film, i) => <p key={i}>{film}</p>)
  return (
      <section className='card'>
        <p className='favourite-icon' onClick={() => toggleFavourites(id)}><FaJedi/></p>
        <h2>{name}</h2>
        <h3>Homeworld:</h3>
        <p>{homeworld}</p>
        <h3>Population:</h3>
        <p>{population}</p>
        <h3>Species: </h3>
        <p>{species}</p>
        <h3>Seen in:</h3>
        {theFilm}
      </section>
  ) 
}

export default CharacterCard;