import React from 'react';
import './ScrollText.scss';
import { Link } from 'react-router-dom';

const ScrollText = ({ movieScroll }) => {
    return (
      <section>
          <section className='scroll-text'>
            <div className="fade"></div>
            <section className='star-wars-text'>
              <div className='crawl'>
              <div className='title-text'>
                <p>Episode {movieScroll.episode_id}</p>
                <h3>{movieScroll.title}</h3>
              </div>
              {movieScroll.openingCrawl}
            </div>
          </section>
      </section>
       <Link to='/movies/:id'>
         <button className="scroll-button" >Continue to see characters..</button>
       </Link>
      </section>
    )
}

export default ScrollText;