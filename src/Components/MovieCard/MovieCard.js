import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.scss';

const MovieCard = ({title, episode_id, release_date, id, characters, openingCrawl, setCharacters }) => {
    return (
    <article className="movieCard">
      <ul>    
        <li>{title}</li>
        <li>Episode: {episode_id}</li>
        <li>Released in {release_date}</li>
        <Link to='/movies/:id'>
        <button 
          className="movie_card_btn" 
          type="submit" 
          onClick={() => setCharacters(characters)}>View Characters
        </button>
        </Link>
      </ul>
    </article>
    )
}

export default MovieCard;