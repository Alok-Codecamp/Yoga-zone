import React from 'react';
import { Carousel } from 'react-bootstrap';
import './slider.css'
import slider1  from '../../Images/slider1.jpg'
import slider2  from '../../Images/slider2.jpg'
import slider3  from '../../Images/slider3.jpg'
const Slider = () => {
    return (
        <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={slider1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Learn with us</h3>
            <p>It is our mission to enrich your life with unforgettable yoga teacher training experiences</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={slider2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Learn with us</h3>
            <p>It is our mission to enrich your life with unforgettable yoga teacher training experiences</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Learn with us</h3>
            <p>It is our mission to enrich your life with unforgettable yoga teacher training experiences</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Slider;