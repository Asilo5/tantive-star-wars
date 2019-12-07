import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesContainer.scss';
// import NavBar from '../NavBar/NavBar';

const MoviesContainer = ({movies, userName, userQuote, userRank, setCharacters }) => {
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
            />
        }); 
    return (
            <section className='movie-container'>
              {allMovies}
            </section>
    )
}

export default MoviesContainer;