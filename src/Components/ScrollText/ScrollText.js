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
        <section className='scroll'>
          <div className='scrollText'>
            <p className='episode_title'>{movieScroll}</p>
          </div>
        </section>
    )
}

export default ScrollText;