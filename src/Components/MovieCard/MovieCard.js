import React from 'react';
import './MovieCard.scss';

const MovieCard = ({title, episode_id, release_date, id }) => {
    return (
    <article className="movieCard">
      <ul>    
        <li>{title}</li>
        <li>Episode: {episode_id}</li>
        <li>Released in {release_date}</li>
        <button className="movie_card_btn" type="submit">Favorite</button>
      </ul>  
    </article>
    )
}

export default MovieCard;