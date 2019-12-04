import React from 'react';
import './MovieCard.scss';

const MovieCard = ({title, episode_id, release_date, id }) => {
    return (
    <article className="movieCard">
      <ul>    
        <li>{title}</li>
        <li>{episode_id}</li>
        <li>{release_date}</li>
      </ul>  
      <button type="submit">Favorite</button>
    </article>
    )
}

export default MovieCard;