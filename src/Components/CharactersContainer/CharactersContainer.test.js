import React from 'react';
import { shallow } from 'enzyme';
import CharactersContainer from './CharactersContainer';

describe('CharactersContainer', () => {

    const mockCharacters = [
      {name: "Luke Skywalker", homeworld: "Tatooine", population: "200000", species: "Human", films: Array(5)},
      {name: "C-3PO", homeworld: "Tatooine", population: "200000", species: "Droid", films: Array(6)},
      {name: "R2-D2", homeworld: "Naboo", population: "4500000000", species: "Droid", films: Array(7)},
      {name: "Darth Vader", homeworld: "Tatooine", population: "200000", species: "Human", films: Array(4)},
      {name: "Leia Organa", homeworld: "Alderaan", population: "2000000000", species: "Human", films: Array(5)},
      {name: "Obi-Wan Kenobi", homeworld: "Stewjon", population: "unknown", species: "Human", films: Array(6)},
      {name: "Chewbacca", homeworld: "Kashyyyk", population: "45000000", species: "Wookiee", films: Array(5)},
      {name: "Han Solo", homeworld: "Corellia", population: "3000000000", species: "Human", films: Array(4)},
      {name: "Jabba Desilijic Tiure", homeworld: "Nal Hutta", population: "7000000000", species: "Hutt", films: Array(3)},
      {name: "Wedge Antilles", homeworld: "Corellia", population: "3000000000", species: "Human", films: Array(3)}
    ]

    const wrapper = shallow(<CharactersContainer characters={mockCharacters} />)

    it('should match snapshot with all data passing in correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
})