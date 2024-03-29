import React from 'react';
import './CharactersContainer.scss';
import PropTypes from 'prop-types';
import CharacterCard from '../CharacterCard/CharacterCard';

const CharactersContainer = ({ characters, toggleFavourites, favourites }) => {
    const allCharacters = characters.map((character) => {
        return <CharacterCard key={character.name} {...character} toggleFavourites={toggleFavourites} favourites={favourites} />
    })
   return ( 
           <section className='characters'>
             {allCharacters} 
           </section>
   )
}

CharactersContainer.propTypes = {
  characters: PropTypes.array, 
  toggleFavourites: PropTypes.func, 
  favourites: PropTypes.array
}

export default CharactersContainer;