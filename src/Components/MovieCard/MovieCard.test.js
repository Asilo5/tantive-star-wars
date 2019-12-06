import React from 'react';
import { shallow } from 'enzyme';
import MovieCard from './MovieCard';

describe('MovieCard', () => {

    let wrapper = shallow(<MovieCard />)

    it('should match snapshot with all information passing in correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

});