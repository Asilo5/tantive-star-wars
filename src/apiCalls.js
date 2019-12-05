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

export const getCharacters = (movies) => {
   const allCharacters = movies.map((movie) => {
       let characterInfo = movie.map((charUrl) => {
           return fetch(charUrl)
           .then(resp => {
            if (!resp.ok) {
              throw Error('Error fetching characters');
            }
            return resp.json();
          })
           .then(char => {
              const fetchedHomeworld = getHomeworld(char.homeworld)
                                     .then(home => home)
              const fetchedSpecies = getSpecies(char.species)
                                     .then(charSpecies => charSpecies.species)
              const fetchedFilms = getFilms(char.films)
                                   .then(film => film)

             return Promise.all([fetchedHomeworld, fetchedSpecies, fetchedFilms])
             .then(data => ({
                name: char.name,
                homeworld: data[0].name,
                population: data[0].population,
                species: data[1],
                films: data[2]
             }));
           })
       });
       return Promise.all(characterInfo)
              .then(data => data)
   })
   return Promise.all(allCharacters)
        .then(data => data);
};

const getHomeworld = (url) => {
  return fetch(url)
  .then(resp => {
    if (!resp.ok) {
      throw Error('Error fetching HomeWorld');
    }
    return resp.json();
  })
  .then(homeworld => ({ name: homeworld.name, population: homeworld.population }))
  .catch(err => console.log(err))
}

const getSpecies = (url) => {
    return fetch(url)
    .then(resp => {
        if (!resp.ok) {
          throw Error('Error fetching ideas');
        }
        return resp.json();
      })
    .then(speciesChar => ({ species: speciesChar.name }))
    .catch(err => console.log(err))
}

const getFilms = (allFilms) => {
   const charactFilms = allFilms.map((film) => {
       return fetch(film)
       .then(resp => {
        if (!resp.ok) {
          throw Error('Error fetching ideas');
        }
        return resp.json();
      })
       .then(movie => movie.title)
       .catch(err => console.log(err))
   })
   return Promise.all(charactFilms);
}
