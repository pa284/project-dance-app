import React from 'react';
import classical9 from '../classical/classical9.jpeg';
import classicalself from '../classical/classical_self.jpeg';
import classical10 from '../classical/classical10.jpeg';

export const Classical = () => (
    <div>
        <section>
            <h3>Classical Indian Dancing: Odissi</h3>
            <article>
                <p>Many students  pursue their Manch Pravesh.
                    A Manch Pravesh is the solo dance debut of a dancer who has reached that pinnacle after several years of learning and dedication to the Odissi dance form.
                    Sudha has the proud distinction of having presented more than 50 students in their Manch Pravesh.</p>
            <br/>
                <p> Sudha also has the unique honor of having taken a troupe to India for workshops and highly acclaimed performances in Delhi, Agra, Odisha, and cities across NJ & NY.</p>

                <div class="row">
                    <div className="col-sm-4">
                        <img className="card-img-top" src={classical9} alt="classical1"/>
                    </div>
                    <div className="col-sm-4">
                        <img className="card-img-top" src={classicalself} alt="classical2"/>
                    </div>
                    <div className="col-sm-4">
                        <img className="card-img-top" src={classical10} alt="classical3"/>
                    </div>
                </div>
            </article>
        </section>
    </div>
)