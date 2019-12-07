import React from 'react';
import { Link } from 'react-router-dom';
import './FavouritesContainer.scss';
import CharacterCard from '../CharacterCard/CharacterCard';


const FavouritesContainer = ({ characters, toggleFavourites, favourites }) => {
    const allCharacters = characters.map((character) => {
        return <CharacterCard key={character.name} {...character} toggleFavourites={toggleFavourites} favourites={favourites} />
    })
   return (
           <section className='characters'>
             {allCharacters} 
           </section>
   )
}



export default FavouritesContainer;