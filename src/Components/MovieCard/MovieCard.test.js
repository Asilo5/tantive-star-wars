import React from 'react';
import { shallow } from 'enzyme';
import MovieCard from './MovieCard';

describe('MovieCard', () => {
    let wrapper, mockMovie, mockSetCharacters;
    beforeEach(() => {
      mockSetCharacters = jest.fn()
      mockMovie = {
        title: 'The Phantom Menace',
        episode_id: 1,
        release_date: 2005,
        id: 1
      }

    wrapper = shallow(<MovieCard movie={mockMovie} setCharacters={mockSetCharacters} />)
  })

  it('should match snapshot with all information passing in correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call setCharacters on click', () => {
    wrapper.find('Link').simulate('click')
    
    expect(mockSetCharacters).toHaveBeenCalled()
  })
});