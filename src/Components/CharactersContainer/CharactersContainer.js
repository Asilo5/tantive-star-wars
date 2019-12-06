import React from 'react';
import './CharactersContainer.scss';
import CharacterCard from '../CharacterCard/CharacterCard';
import NavBar from '../NavBar/NavBar';

const CharactersContainer = ({ characters }) => {
    const allCharacters = characters.map((character) => {
        return <CharacterCard key={character.name} {...character} />
    })
   return (
       <section className='characters-section'>
           <NavBar />
           <section className='characters'>
            {allCharacters} 
           </section>
       </section>
   )
}

export default CharactersContainer;