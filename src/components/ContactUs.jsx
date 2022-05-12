import React from 'react';
import logo from '../bollywood/school_icon.jpeg';

export const ContactUs = () => (
    <div className="container">
        <div className="row">
            <form action="">
                <img src={logo} alt="logo"/>
                <div class="form-group">
                    <label htmlFor="firstname">First Name:</label>
                    <input type="text" className="form-control" id="firstname" placeholder="First Name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="lastname">Last Name:</label>
                    <input type="text" className="form-control" id="lastname" placeholder="Last Name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter Email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <input type="message" className="form-control" id="message" placeholder="Message"/>
                </div>
                <div className="form-group form-check">
                    <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" id="subscribe"/>
                        Subscribe
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
)
