import React from "react";
import "./Media.css";

import Carousel from "react-bootstrap/Carousel"; //Bootstrap for Carousel https://react-bootstrap.github.io/components/carousel/
import Img0 from "./image0.jpeg";
import Img1 from "./image1.jpeg";
import Img4 from "./image4.jpeg";
import Img5 from "./image5.jpeg";

export const Media = () => {
  return (
    <div id="Media1">
      <Carousel slide={false}>
        <Carousel.Item interval={4000}>
          <img className="ImgCarousel" src={Img1} alt="First slide" />
          {/* <Carousel.Caption>
            <p>First slide</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img className="ImgCarousel" src={Img4} alt="Second slide" />
          {/* <Carousel.Caption>
            <p>Second slide</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img className="ImgCarousel" src={Img5} alt="Third slide" />
          {/* <Carousel.Caption><p>Third slide</p></Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img className="ImgCarousel" src={Img0} alt="Fourth slide" />
          {/* <Carousel.Caption><p>Fourth slide</p></Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
