import React from 'react';
import { shallow } from 'enzyme';
import FavouritesContainer from './FavouritesContainer';

describe('FavouritesContainer', () => {
    let wrapper;

    wrapper = shallow(<FavouritesContainer />);

    it.skip('should match snapshot with all information passing in correctly', () => {
        expect(wrapper).toMatchSnapshot()
      })
});