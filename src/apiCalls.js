export const getMovies = () => {
    return fetch('https://swapi.co/api/films/')
      .then(res => res.json())
      .then(films => {
        return films.results.map((film) => {
          const newDate = film.release_date.split('-')[0]
          const tenCharacters = film.characters.slice(0, 10)
          return {
            title: film.title,
            episode_id: film.episode_id,
            release_date: newDate,
            characters: tenCharacters,
            opening_crawl: film.opening_crawl
          }
        })
      })
  }