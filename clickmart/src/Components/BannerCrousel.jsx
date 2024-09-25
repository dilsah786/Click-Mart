import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../assets/banner1.avif";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.webp";
import banner5 from "../assets/banner5.webp";
import banner6 from "../assets/banner6.avif";

const BannerCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="mx-auto max-w-screen-xl mt-4 h-[50vh] ">
      <Slider {...settings}>
        <div>
          <img src={banner1} alt="Banner 1" className="w-full h-auto" />
        </div>
        <div>
          <img src={banner2} alt="Banner 2" className="w-full h-auto" />
        </div>
        <div>
          <img src={banner3} alt="Banner 3" className="w-full h-auto" />
        </div>
        <div>
          <img src={banner4} alt="Banner 4" className="w-full h-auto" />
        </div>
        <div>
          <img src={banner5} alt="Banner 5" className="w-full h-auto" />
        </div>
        <div>
          <img src={banner6} alt="Banner 6" className="w-full h-auto" />
        </div>
      </Slider>
    </div>
  );
};

export default BannerCarousel;
