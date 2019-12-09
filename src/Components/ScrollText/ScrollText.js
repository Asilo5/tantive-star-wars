import React from 'react';
import './ScrollText.scss';

const ScrollText = ({ movies }) => {
  let romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];
  let romanEpisodeID = romanNumerals[parseInt(movies.episode_id) - 1]
    return (
        <article className="scroll">
            <section className="text">
                <p>Episode {romanEpisodeID}</p>
              <h3 className="episode_title">{movies.title}</h3>
              <p>{movies.opening_crawl}</p>
            </section>
        </article>
    )
}

export default ScrollText;