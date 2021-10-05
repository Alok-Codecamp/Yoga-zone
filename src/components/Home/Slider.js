import React from 'react';
import { Carousel } from 'react-bootstrap';
import './slider.css'
const Slider = () => {
    return (
        <div className="my-slider">
          <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://www.blueosa.com/wp-content/uploads/2020/07/15705495207_9917c24488_z.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
          
            <p>It is our mission to enrich your life with unforgettable yoga teacher training experiences</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://www.blueosa.com/wp-content/uploads/2020/07/15271579893_ec691ddd8a_z.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
           
            <p>It’s always exciting to see what comes out of the Yoga zone Kitchen!
               Today the boys surprised us with nutritious and delicious pizza day!!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.blueosa.com/wp-content/uploads/2020/07/15271576433_2eed5ce681_z.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
          
            <p>We’ve had some incredible classes so far. I can’t wait to see what these students come up with next!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </div>
    );
};

export default Slider;