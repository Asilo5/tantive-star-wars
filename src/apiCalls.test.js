import { getMovies, getCharacters } from './apiCalls'

describe('getMovies', () => {

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

  it('should return an error if the server is down', () => {
    window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      });
      expect(getMovies()).rejects.toEqual(Error('There was an error getting the data.'))
    });
});

describe('getCharacters', () => { 

  const mockCharactersData = [{
    name: 'C-3PO',
    homeworld: 'Tatooine',
    population: 200000,
    species: "Droid",
    films: ["The Empire Strikes Back", "Attack of the Clones", "The Phantom Menace", "Revenge of the Sith", "Return of the Jedi", "A New Hope"]
  }]

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockCharactersData)
      })
    });
  });

  it.skip('should return character info when getCharacters is called', () => {
    expect(getCharacters()).resolves.toEqual(mockCharactersData)
  });

  it('should return an error if the server is down', () => {
    window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      });
      expect(getMovies()).rejects.toEqual(Error('There was an error getting the data.'))
    });

});

