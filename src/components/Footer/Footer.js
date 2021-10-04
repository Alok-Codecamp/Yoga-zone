import React from 'react';
import './Footer.css'
const Footer = () => {
    
    return (
      <div>
            <div className="footer-container d-lg-flex justify-content-around">
            <div className="address">
                <h4>Address</h4>
                <p>101 N. Washington Ave.
                    Margate, NJ 08402 Suite 1B
                </p>
                <p>Know more about us</p>
            </div>
            <div>
            <h4>Phone</h4>
                <p>+1-202-555-0112</p>
                <h4>Email</h4>
                <p>yogaZone35@gmail.com</p>

                </div>           
        </div>
        <small>Copywrite &copy; 2021 yoga zone</small>
      </div>
    );
};

export default Footer;