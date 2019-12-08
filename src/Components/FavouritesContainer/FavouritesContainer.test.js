import React from 'react';
import { shallow } from 'enzyme';
import FavouritesContainer from './FavouritesContainer';

describe('FavouritesContainer', () => {
  let wrapper
  const mockChangeSelectedMovie = jest.fn();
  const mockSetFavorite = jest.fn();

  it('should match the snapshot with all the data passed in correctly', () => {
      wrapper = shallow(<FavouritesContainer
          characters={[]}
          changeSelectedMovie={mockChangeSelectedMovie}
          isReady={false}
          setFavorite={mockSetFavorite}
          favoriteList={[{}, {}]} />)
      expect(wrapper).toMatchSnapshot();
  });

});