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
           .then(char => {
              const fetchedHomeworld = getHomeworld(char.homeworld)
                                     .then(home => home)
              const fetchedSpecies = getSpecies(char.species)
                                     .then(charSpecies => charSpecies.species)
              const fetchedFilms = getFilms(char.films)
                                   .then(film => film)

             Promise.all([fetchedHomeworld, fetchedSpecies, fetchedFilms])
             .then(data => console.log({
                name: char.name,
                homeworld: data[0].name,
                population: data[0].population,
                species: data[1],
                films: data[2]
             }));
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

const getSpecies = (url) => {
    return fetch(url)
    .then(resp => resp.json())
    .then(speciesChar => ({ species: speciesChar.name }))
    .catch(err => console.log(err))
}

const getFilms = (allFilms) => {
   const charactFilms = allFilms.map((film) => {
       return fetch(film)
       .then(resp => resp.json())
       .then(movie => movie.title)
       .catch(err => console.log(err))
   })
   return Promise.all(charactFilms);
}
