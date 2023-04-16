
import React,{ } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Banner1 from '../images/arthur.jpg';
import Banner2 from '../images/parrot.jpg';
import Banner3 from '../images/curiousgeorge.jpg';
import './Banner.css';

function Banner() {
    return (
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Banner2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
             src={Banner3}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    ); 
    
  }
  
export default Banner;