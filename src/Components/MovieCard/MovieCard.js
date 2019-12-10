import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MovieCard.scss';

const MovieCard = ({ title, episode_id, release_date, id, characters, openingCrawl, setCharacters, addMovieScroll }) => {
    
  const scrollInfo = {
    title,
    episode_id,
    openingCrawl
  }

   return ( 
    <article className="movieCard">
      <ul>    
        <li>{title}</li>
        <li>Episode: {episode_id}</li>
        <li>Released in {release_date}</li>
        <Link to='/scroll'>
        <button  
          className="movie_card_btn" 
          type="submit" 
          onClick={() => {
            setCharacters(characters)
            addMovieScroll(scrollInfo)
            }}>View Characters
        </button>
        </Link>
      </ul>
    </article>
    )
}

MovieCard.propTypes = {
  title: PropTypes.string, 
  episode_id: PropTypes.number, 
  release_date: PropTypes.number, 
  id: PropTypes.number, 
  characters: PropTypes.array, 
  openingCrawl: PropTypes.string, 
  setCharacters: PropTypes.func, 
  addMovieScroll: PropTypes.func
}

export default MovieCard;