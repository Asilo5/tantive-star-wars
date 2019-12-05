import { getMovies, getCharacters } from './apiCalls'

describe('apiCalls', () => {

  const mockData = [{episode_id: 1},{episode_id: 2},{episode_id: 3}]

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData)
      })
    });
  });

  it('should call fetch with the correct url', () => {
    getMovies()
    expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/films/')
  });

  it('should return an array of movies when getMovies is called', () => {
    expect(getMovies()).resolves.toEqual(mockData)
  });

  it('should return character info when getCharacters is called', () => {
    const mockCharacters = [{name: 'Princess Leia'}, {name: 'Luke Skywalker'}, {name: 'Yoda'}]
    
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockCharacters)
      })
    });
    
    expect(getCharacters()).resolves.toEqual(mockCharacters)
  })


});