import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
      wrapper = shallow(<App />)
  });

  it('should match a snapshot of all the information being passed in correctly', () => {
      expect(wrapper).toMatchSnapshot();
  });

  it('should have an empty state to before login', () => {
    expect(wrapper.state()).toEqual({
        movies: [],
        characters: [],
        userName: '',
        userQuote: '',
        userRank: '',
        isLoading: true
    });
  });

  it('should update state when user submits form on login', () => {
      const mockUserInfo = {
        userName: 'Consuelo',
        userQuote: 'Go Forth I Will',
        userRank: 'Expert'
      }

      wrapper.instance().userInfo(mockUserInfo);
      expect(wrapper.state('userName')).toEqual('Consuelo');
      expect(wrapper.state('userQuote')).toEqual('Go Forth I Will');
      expect(wrapper.state('userRank')).toEqual('Expert');
  });

  it('should retrieve Movies after mounting', () => {
      const movieData = [
        {
          title: 'A New Hope',
          episode: 4
          releaseYear: '1974',
          characters: 
          scrollText: 'blah blah',
        }, {
          title: 'Whatever',
          episode: 7
          releaseYear: '1985',
          characters:
          scrollText: 'blah blah',
        }
      ];

      wrapper.instance().setMovie(['the land before time', 'the land before time ii'])
      expect(wrapper.state('movies')).toEqual(movieData)
  });

});
