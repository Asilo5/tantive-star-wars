import React from 'react';
import './ScrollText.scss';

const ScrollText = ({ movies }) => {
    return (
        <section className="scroll">
            <div>
                {movies.opening_crawl}
            </div>
        </section>
    )
}

export default ScrollText;