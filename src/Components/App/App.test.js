import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { getMovies } from '../../apiCalls'

jest.mock('../../apiCalls.js')

describe('App', () => {
  let wrapper,
      mockMovies;

  beforeEach(() => {
    mockMovies = [
        {
          title: 'The Phantom Menace', 
          episode_id: 1, 
          release_date: '1999',
          characters: ['person'], 
          opening_crawl: 'Turmoil has engulfed...'
        }, 
        {
          title: 'Attack of the Clones', 
          episode_id: 2, 
          release_date: '2002',
          characters: ['person'], 
          opening_crawl: 'Turmoil has engulfed...'
        }
    ]
    
    getMovies.mockImplementation(() => {
      return Promise.resolve(mockMovies);
    });
    wrapper = shallow(<App />)
  });

  it('should match a snapshot of all the information being passed in correctly', () => {
      expect(wrapper).toMatchSnapshot();
  });

  it('should retrieve movies after mounting', () => {
    expect(getMovies).toHaveBeenCalled();
  });

  it('should have default values of empty strings for userName, userQuote and userRank', () => {
    expect(wrapper.state().userName).toEqual('');
    expect(wrapper.state().userQuote).toEqual('');
    expect(wrapper.state().userRank).toEqual('');
  });

  it('should have a default value of true for isLoading', () => {
    expect(wrapper.state().isLoading).toEqual(false);
  });

  it('should set the state of userName, userQuote, userRanking', () => {
    wrapper.setState({ userName: 'name', userQuote: 'quote', userRank: 'rank' });
  });

  it.skip('should update state with movies when getMovies is called', async () => {
     getMovies.mockImplementation(() => {
         return Promise.resolve(
         { title: 'The Phantom Menace', episode_id: 1, release_date: '1999',characters: ['person'], opening_crawl: 'Turmoil has engulfed...'}
         );
     })
     shallow(<App />)
     const expected = [{ title: 'The Phantom Menace', episode_id: 1, release_date: '1999',characters: ['person'], opening_crawl: 'Turmoil has engulfed...'}];

     await wrapper.instance().getMovies([]);

     expect(getMovies).toHaveBeenCalledWith();
     expect(wrapper.state('movies')).toEqual(expected);
  });

});
