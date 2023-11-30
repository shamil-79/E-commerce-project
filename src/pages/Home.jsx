import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Review from "../components/review/Review";
import Testimonials from "../components/HomeChild/Testimonials";

const Home = () => {
  return (
    <div>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{maxHeight:"100 vh"}}
            src={require('../components/Assets/18899173.jpg')}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5></h5>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{maxHeight:"100 vh"}}
            src={require('../components/Assets/18899181.jpg')}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5></h5>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{maxHeight:"100 vh"}}
            src={require('../components/Assets/black_friday_facebook_banner_06.jpg')}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5></h5>
            <p>
             
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Testimonials/>


      
    </div>
  );
};

export default Home;
