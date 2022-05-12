import React from 'react';
import bollywood5 from '../bollywood/bollywood5.jpeg';
import bollywood6 from '../bollywood/bollywood6.jpeg';
import bollywood4 from '../bollywood/bollywood4.jpeg';

export const Modern = () => (
    <div>
        <section>
            <h3>Modern Bollywood</h3>
            <article>
                <p>The Academy participates in bollywood competitions, several charity shows such as March of Dimes, WRG, Dance 4 A Cause, nursing homes, as well as community events at several temples throughout the year.</p>
                <div className="row">
                    <div className="col-sm-4">
                        <img className="card=img-top" src={bollywood5} alt="bollywood1"/>
                    </div>
                    <div className="col-sm-4">
                        <img className="card=img-top" src={bollywood6} alt="bollywood2"/>
                    </div>
                    <div className="col-sm-4">
                        <img className="card=img-top" src={bollywood4} alt="bollywood3"/>
                    </div>
                </div>
            </article>
        </section>
    </div>
)