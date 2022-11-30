import React from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Carousel1 from "../public/assets/carousel8.png";
import Carousel2 from "../public/assets/carousel2.png";
import Carousel3 from "../public/assets/carousel3.png";
import Carousel4 from "../public/assets/carousel9.png";
import Carousel5 from "../public/assets/carousel10.png";

export default function NextJsCarousel() {
  return (
    <div>
      <Carousel>
        <div>
          <Image src={Carousel1} alt="image1" width="1200" height="300" />
        </div>
        <div>
          <Image src={Carousel3} alt="image2" width="1200" height="300" />
        </div>
        <div>
          <Image src={Carousel2} alt="image3" width="1200" height="300" />
        </div>
        <div>
          <Image src={Carousel4} alt="image4" width="1200" height="300" />
        </div>
        <div>
          <Image src={Carousel5} alt="image5" width="1200" height="300" />
        </div>
      </Carousel>
    </div>
  );
}
