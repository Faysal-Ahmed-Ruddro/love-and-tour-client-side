import React from 'react';
import "./Banner.css"
import { Button, Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
      <Carousel fade>
        <Carousel.Item>
          <div className="carousel-img"></div>
          <Carousel.Caption>
            <h1 className=" slide-title">We make dreams come true!</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-img2"></div>

          <Carousel.Caption>
            <h1 className="slide-title">Traveling is the spice of life.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-img3"></div>

          <Carousel.Caption>
            <h1 className="slide-title">Spreading smiles across the globe</h1>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;