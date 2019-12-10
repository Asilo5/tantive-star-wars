import React from 'react';
import './ScrollText.scss';

const ScrollText = ({ movieScroll }) => {
  //   let movieSet = movies.map(movie => {
  //       let romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];
  //       let romanEpisodeID = romanNumerals[parseInt(movie.episode_id) - 1]
     
  //   return (
  //       <article className="scroll">
  //         <div className="scrollText"> 
  //           <section className="text">
  //             <p>Episode {romanEpisodeID}</p>
  //             <h3 className="episode_title">{movie.title}</h3>
  //             <p>{movie.opening_crawl}</p>
  //           </section>
  //         </div>  
  //       </article>
  //   )
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
       <button className="movie_card_btn" >Continue ..</button>
      </section>
    )
}

export default ScrollText;