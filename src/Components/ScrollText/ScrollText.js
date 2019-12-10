import React from 'react';
import './ScrollText.scss';

const ScrollText = ({ movieScroll }) => {
  //   let movieSet = movies.map(movie => {
  //       let romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];
  //       let romanEpisodeID = romanNumerals[parseInt(movie.episode_id) - 1]
     
  // });

  console.log(movieScroll)
    return (
      <section>
          <section className='scroll-text'>
            <div className="fade"></div>
            <section className='star-wars-text'>
              <div className='crawl'>
              <div className='title-text'>
                <p>Episode  </p>
                <h3>title</h3>
              </div>
              {movieScroll}
            </div>
          </section>
      </section>
       <button className="scroll-button" >Continue to see characters..</button>
      </section>
    )
}

export default ScrollText;