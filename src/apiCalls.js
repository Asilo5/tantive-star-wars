export const getMovies = () => {
  return fetch('https://swapi.co/api/films/')
    .then(res => res.json())
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

export const getCharacters = (movies) => {
   let allCharacters = movies.map((character) => {
       character.forEach((charUrl) => {
           fetch(charUrl)
           .then(resp => resp.json())
           .then(data => {
              let fetchedHomeworld = getHomeworld(data.homeworld)
                                     .then(home => console.log(home))

              let starCharacter = {
                name: data.name,
                homeworld: data.homeworld,
                population: data.population,
                species: data.species,
                films: data.films
              }
           })
           .catch(err => console.log(err))
       });
   })
   return allCharacters;
};

const getHomeworld = (url) => {
  return fetch(url)
  .then(resp => resp.json())
  .then(homeworld => ({ name: homeworld.name, population: homeworld.population }))
  .catch(err => console.log(err))
}

