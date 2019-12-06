import React from 'react';
import { shallow } from 'enzyme';
import MoviesContainer from './MoviesContainer';

describe('MoviesContainer', () => {
    let wrapper = shallow(<MoviesContainer />)

    it('should match snapshot with all information passing in correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

});