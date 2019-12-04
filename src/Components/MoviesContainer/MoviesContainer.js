import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesContainer.scss'

const MoviesContainer = ({movies}) => {
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
        <section className="movieContainer">
            {allMovies}
        </section>
    )
}

export default MoviesContainer;