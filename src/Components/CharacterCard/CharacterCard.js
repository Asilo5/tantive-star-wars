import React from 'react';
import './CharacterCard.scss';
import PropTypes from 'prop-types';
import { FaJedi } from "react-icons/fa";

const CharacterCard = ({ id, name, homeworld, population, species, films, toggleFavourites, favourites }) => {
  const theFilm = films.map((film, i) => <p key={i}>{film}</p>);
  const toggleIcon = favourites.includes(id) ? 'favourite-icon' : 'jedi-icon';
  return ( 
      <section className='card'>
        <p className={toggleIcon} onClick={() => toggleFavourites(id)}><FaJedi/></p>
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

CharacterCard.propTypes = {
  id: PropTypes.number, 
  name: PropTypes.string, 
  homeworld: PropTypes.string, 
  population: PropTypes.number, 
  species: PropTypes.string, 
  films: PropTypes.array, 
  toggleFavourites: PropTypes.func, 
  favourites: PropTypes.array
}

export default CharacterCard;