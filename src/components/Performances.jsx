import React from 'react';
import bollywood9 from '../bollywood/bollywood9.jpeg';
import bollywood7 from '../bollywood/bollywood7.jpeg';
import bollywood10 from '../bollywood/bollywood10.jpeg';

export const Performances = () => (
    <div className="row">
        <section>
            <h3>Performances</h3>
            <article>
                <p> Here are a few pictures from competitions, charity events, and annual shows that we love so much. Come join us!</p>
                <p>But before you do... click on this link below and check out one of the competitions we performed at!
                    <a href="https://www.youtube.com/watch?v=VFo4pMSPKwE">Link</a></p>
                <div class="row">
                    <div className="col-sm-4">
                        <img className="card-img-top" src={bollywood9} alt="bollywood9"/>
                    </div>
                    <div className="col-sm-4">
                        <img className="card-img-top" src={bollywood7} alt="bollywood7"/>
                    </div>
                    <div className="col-sm-4">
                        <img className="card-img-top" src={bollywood10} alt="bollywood10"/>
                    </div>
                </div>
            </article>
        </section>
    </div>
)