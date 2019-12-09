import React from 'react';
import { shallow } from 'enzyme';
import FavouritesContainer from './FavouritesContainer';

describe('FavouritesContainer', () => {
  let wrapper
  const mocktoggleFavourites = jest.fn();

  it('should match the snapshot with all the data passed in correctly', () => {
      wrapper = shallow(<FavouritesContainer
        name = 'Leia'
        homeWorld = 'Alderan'
        population = '200000000000'
        species = 'Human'
        films = {[
            "The Empire Strikes Back",
            "Revenge of the Sith",
            "Return of the Jedi"
        ]}
        characters={[]}
        toggleFavourites={mocktoggleFavourites}
        favorites={[]} />)
      expect(wrapper).toMatchSnapshot();
  });

});