import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'
const Footer = () => {
    
    return (
        <div className="footer-container d-lg-flex justify-content-around">
            <div className="address">
                <h4>Address</h4>
                <p>101 N. Washington Ave.
                    Margate, NJ 08402 Suite 1B
                </p>
                <h4>Phone</h4>
                <p>+1-202-555-0112</p>
                <h4>Email</h4>
                <p>yogaZone35@gmail.com</p>
            </div>
            <div className="social-media">
                <p>Our social media link. join with us</p>
                <div className="icon d-flex">

                </div>
            </div>
            <div className="google-map">
           
            </div>
        </div>
    );
};

export default Footer;