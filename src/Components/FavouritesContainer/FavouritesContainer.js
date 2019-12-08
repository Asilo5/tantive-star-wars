import React from 'react';
import { Link } from 'react-router-dom';
import './FavouritesContainer.scss';
import CharacterCard from '../CharacterCard/CharacterCard';


const FavouritesContainer = ({ toggleFavourites, favourites, characters }) => {
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

const characterList = characters.map((character) => {
    if (favourites.includes(character.id)) {
      return <CharacterCard
        id={character.id}
        name={character.name} 
        homeworld={character.homeworld}
        population={character.population}
        species={character.species}
        films={character.films}
        toggleFavourites={toggleFavourites} 
        favourites={favourites}
        />
    }
});

   return (
     <section className='favourite'>
       {characterList}
     </section>
    )
}

export default FavouritesContainer;