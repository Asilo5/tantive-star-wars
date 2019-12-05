import React from 'react';
import './CharactersContainer.scss';
import CharacterCard from '../CharacterCard/CharacterCard';

const CharactersContainer = ({ characters }) => {
    const allCharacters = characters.map((character) => {
        return <CharacterCard key={character.id} {...character} />
    })
   return (
       <section>
          {allCharacters}
       </section>
   )
}

export default CharactersContainer;