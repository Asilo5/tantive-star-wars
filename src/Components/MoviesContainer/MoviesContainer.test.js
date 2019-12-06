import React from 'react';
import { shallow } from 'enzyme';
import MoviesContainer from './MoviesContainer';

describe('MoviesContainer', () => {

    it('should match snapshot with all information passing in correctly', () => {
        const wrapper = shallow(<MoviesContainer movies={[
            {
              title: 'The Phantom Menace',
              episode_id: 1,
              release_date: 2005,
              id: 1,
            },
            {
              title: 'Revenge of the Sith',
              episode_id: 3,
              release_date: 1977,
              id: 3,
            }
          ]} 
            getCharacters={jest.fn()} />
    
        )
        expect(wrapper).toMatchSnapshot();
    });

});