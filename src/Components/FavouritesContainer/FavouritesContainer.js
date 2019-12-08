import React from 'react';
import { Link } from 'react-router-dom';
import './FavouritesContainer.scss';
import CharacterCard from '../CharacterCard/CharacterCard';
import { FaJedi } from "react-icons/fa";


const FavouritesContainer = ({ id, name, homeworld, population, species,toggleFavourites, favourites, characters, films }) => {
    if(favourites.length === 0) {
      return (
        <section className='favourite'>
        <h2 className='fav_h2'>Want to see your favorite character!</h2>
          <h3 className='fav_h3'>Go back to movies and select a few first.</h3>
          <Link to='/movies'>
            <button className='back_to_movies__btn'>Back to Movies</button>
          </Link>
        </section>
     ) 
    } 

    const allCharacters = characters.map((character) => {
        return <CharacterCard key={character.name} {...character} toggleFavourites={toggleFavourites} favourites={favourites} />
    })
    
    const toggleIcon = favourites.includes(id) ? 'favourite-icon' : 'jedi-icon';
    const theFilm = films.map((film, i) => <p key={i}>{film}</p>);

    return (
      <section className='card'>
        <p className={toggleIcon} onClick={() => toggleFavourites(id)}><FaJedi/></p>
        <h2>{name}</h2>
        <h3>Homeworld:</h3>
        <p>{homeworld}</p>
        <h3>Population:</h3>
        <p>{population}</p>
        <h3>Species: </h3>
        <p>{species}</p>
        <h3>Seen in:</h3>
        {theFilm}
      </section>
  ) 
}



export default FavouritesContainer;