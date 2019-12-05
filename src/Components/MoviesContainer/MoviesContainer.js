import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesContainer.scss';
import NavBar from '../NavBar/NavBar';

const MoviesContainer = ({movies, userName, userQuote, userRank}) => {
    let allMovies = movies.map(movie => {
    return <MovieCard 
            title={movie.title}
            episode_id={movie.episode_id}
            release_date={movie.release_date}
            id={movie.episode_id}
            key={movie.episode_id}
            />
        }); 
    return (
        <section className='movie-section'>
            <NavBar serName={userName} userQuote={userQuote} userRank={userRank}/> 
            <section className='movie-container'>
              {allMovies}
            </section>
        </section>
    )
}

export default MoviesContainer;