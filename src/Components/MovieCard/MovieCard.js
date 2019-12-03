import React from 'react';
import './MovieCard.scss';

const MovieCard = () => {
    return (
    <article>
        <p>Name</p>
        <p>Homeworld</p>
        <p>Population of Homeworld</p>
        <p>Species</p>
        <p>Related Films</p>
        <button type="submit">Favorite</button>
    </article>
    )
}

export default MovieCard;