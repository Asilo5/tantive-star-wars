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
    shallow(<App />)
    expect(getMovies).toHaveBeenCalled();
  });

//   it.skip('should have an empty state to before login', () => {
//     expect(wrapper.state()).toEqual({
//         movies: [],
//         characters: [],
//         userName: '',
//         userQuote: '',
//         userRank: '',
//         isLoading: true
//     });
//   });

  it.skip('should update state when user submits form on login', () => {
      const mockUserInfo = {
        userName: 'Consuelo',
        userQuote: 'Go Forth I Will',
        userRank: 'Expert'
      }

      expect(wrapper.state('userName')).toEqual('');
      expect(wrapper.state('userQuote')).toEqual('');
      expect(wrapper.state('userRank')).toEqual('');
      wrapper.instance().userInfo(mockUserInfo);
      expect(wrapper.state('userName')).toEqual('Consuelo');
      expect(wrapper.state('userQuote')).toEqual('Go Forth I Will');
      expect(wrapper.state('userRank')).toEqual('Expert');
  });

  it('should update state with an movies when getMovies is called', async () => {
     getMovies.mockImplementation(() => {
         return Promise.resolve(
         { title: 'The Phantom Menace', episode_id: 1, release_date: '1999',characters: ['person'], opening_crawl: 'Turmoil has engulfed...'}
         );
     })
     const mockIdea = { title: 'The Phantom Menace', episode_id: 1, release_date: '1999',characters: ['person'], opening_crawl: 'Turmoil has engulfed...'};
     const expected = [{ title: 'The Phantom Menace', episode_id: 1, release_date: '1999',characters: ['person'], opening_crawl: 'Turmoil has engulfed...'}, mockIdea];

     await wrapper.instance().getMovies(mockIdea);

     expect(getMovies).toHaveBeenCalledWith(mockIdea);
     expect(wrapper.state('movies')).toEqual(expected);
    });

});
