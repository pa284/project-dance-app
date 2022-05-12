import React from 'react';
import bollywood2 from '../bollywood/bollywood2.jpeg';
import classical5 from '../classical/classical5.jpeg';
import bollywood3 from '../bollywood/bollywood3.jpeg';
import classical4 from '../classical/classical4.jpeg';
import bollywood1 from '../bollywood/bollywood1.jpeg';
import classical2 from '../classical/classical2.jpeg';
import './Home.css';
import { Link } from 'react-router-dom';

export const Home = () => (
    <div className="row">
        <h1>Come Join Sudhamini Dance Academy Today!</h1>
        <h3>Checkout what we do</h3>
        <div id="theCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#theCarousel" data-slide-to="0" className="active"/>
                <li data-target="#theCarousel" data-slide-to="1" />
                <li data-target="#theCarousel" data-slide-to="2" />
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={classical4} alt="first slide"/>
                </div>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={bollywood1} alt="second slide"/>
                </div>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={classical2} alt="third slide"/>
                </div>
            </div>
        </div>
        <div className="col-sm-4">
            <img className="card-img-top" src={bollywood2} alt="card image"/>
            <div className="card-body">
                <h5 class="card-title">Classes</h5>
                <p>Click one of the two buttons below to visit the different pages to learn more.</p>
                <p><Link to="../Classical" className="btn btn-primary">Classical</Link></p>
                <p><Link to="../Modern" className="btn btn-primary">Modern</Link></p>
            </div>
        </div>
        <div className="col-sm-4">
            <img className="card-img-top" src={classical5} alt="card image"/>
            <div className="card-body">
                <h5 className="card-title">Performances</h5>
                <p>If you want to see where we compete, do charity events, and our annual performances, click below.</p>
                <p><Link to="../Performances" className="btn btn-primary">Performances</Link></p>
            </div>
        </div>
        <div className="col-sm-4">
            <img className="card-img-top" src={bollywood3} alt="card image"/>
            <div className="card-body">
                <h5 className="card-title">Contact Us</h5>
                <p>Click on the contact us page to fill out some information to reach us.</p>
                <p><Link to="../ContactUs" className="btn btn-primary">Contact Us</Link></p>
            </div>
        </div>
    </div>
)