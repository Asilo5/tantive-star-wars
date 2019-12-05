export const getMovies = () => {
  return fetch('https://swapi.co/api/films/')
  .then(response => {
    if (!response.ok) {
      throw Error('There was an error getting the data');
    }
    return response.json();
  })
    .then(movies => {
      return movies.results.map((movie) => {
        const firstTenCharacters = movie.characters.slice(0, 10)
        return {
          title: movie.title,
          episode_id: movie.episode_id,
          release_date: movie.release_date.slice(0, 4),
          characters: firstTenCharacters,
          opening_crawl: movie.opening_crawl
        }
      });
    });
  };

 