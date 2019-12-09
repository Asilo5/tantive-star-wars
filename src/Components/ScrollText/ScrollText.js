import React from 'react';
import './ScrollText.scss';

const ScrollText = ({ movies }) => {
  let romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];
  let romanEpisodeID = romanNumerals[parseInt(movies.episode_id) - 1]
  let movieSet = movies.map(movie => {
    return (
        <article className="scroll">
          <div className="scrollText"> 
            <section className="text">
              <p>Episode {romanEpisodeID}</p>
              <h3 className="episode_title">{movie.title}</h3>
              <p>{movie.opening_crawl}</p>
            </section>
          </div>  
        </article>
    )
  });
    return (
        <>
        {movieSet}
        </>
    )
}

export default ScrollText;