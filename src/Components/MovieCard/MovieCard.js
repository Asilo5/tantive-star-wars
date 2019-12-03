import React from 'react';
import './MovieCard.scss';

const MovieCard = ({name, homeworld, population, species, films}) => {
    return (
    <article className="movieCard">
      <ul>    
        <li>{name}</li>
        <li>{homeworld}</li>
        <li>{population}</li>
        <li>{species}</li>
        <li>{films}</li>
      </ul>  
      <button type="submit">Favorite</button>
    </article>
    )
}

export default MovieCard;