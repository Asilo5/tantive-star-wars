import React from 'react';
import { Link } from 'react-router-dom';
import './FavouritesContainer.scss';
import CharacterCard from '../CharacterCard/CharacterCard';


const FavouritesContainer = ({ characters, toggleFavourites, favourites }) => {
    if(favourites.length===0) {
      return (
        <>
        <h2 className='fav_h2'>Want to see your favorite character!</h2>
          <h3 className='fav_h3'>Go back to movies and select a few first.</h3>
          <Link to='/movies'>
            <button className='back_to_movies__btn'>Back to Movies</button>
          </Link>
        </>
     ) 
    } 
    const allCharacters = characters.map((character) => {
      return <CharacterCard key={character.name} {...character} toggleFavourites={toggleFavourites} favourites={favourites} />
    });

    return (
     <section className='characters'>
       {allCharacters} 
     </section>
    )
}



export default FavouritesContainer;