import React from 'react';
import './Footer.css'
import img1 from '../../Images/facebook-tile.svg';
import img2 from '../../Images/instagram-icon.svg';
import img3 from '../../Images/youtube-icon.svg';
import img4 from '../../Images/whatsapp-icon.svg';
import img5 from '../../Images/twitter-icon.svg';
const Footer = () => {
    
    return (
      <div className="footer-container">
            <div className=" d-lg-flex justify-content-around">
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
                <div className="text-center mt-5">
                    <p>stay conect with us</p>
                <div className="d-flex social-icon">
            <img src={img1} alt="facebook" />
            <img src={img2} alt="instagram" />
            <img src={img3} alt="youtube" />
            <img src={img4} alt="whatsapp" />
            <img src={img5} alt="twitter" />
             </div>
                </div>
            </div>           
        
       <p className="text-center"> <small >Copywrite &copy; 2021 yoga zone</small></p>
      </div>
    );
};

export default Footer;