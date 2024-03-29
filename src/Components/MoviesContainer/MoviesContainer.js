import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import PropTypes from 'prop-types';
import './MoviesContainer.scss';

const MoviesContainer = ({ movies, setCharacters, addMovieScroll }) => {
    let allMovies = movies.map(movie => {
    return <MovieCard 
            title={movie.title}
            episode_id={movie.episode_id}
            release_date={movie.release_date}
            id={movie.episode_id}
            characters={movie.characters}
            openingCrawl={movie.opening_crawl}
            key={movie.episode_id}
            setCharacters={setCharacters}
            addMovieScroll={addMovieScroll}
            />
        });  
    return (
            <section className='movie-container'>
              {allMovies}
            </section>
    )
}

MoviesContainer.propTypes = {
  movies: PropTypes.array, 
  setCharacters: PropTypes.func, 
  addMovieScroll: PropTypes.func
}

export default MoviesContainer;