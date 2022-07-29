import React from "react";
import Slider from "react-slick";

function HeroSection() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5500,
    arrows: false,
  };

  return (
    <div className="hero_section">
      <div className="gradient"></div>
      <div className="carusel">
        <Slider {...settings}>
          <div className="image">
            <img src="https://mulkicahan.az/img/slidenew1.jpg" alt="" />
            <h3>Müasir Layihələrin təşkili</h3>
          </div>
          <div className="image">
            <img src="https://mulkicahan.az/img/slide11.jpg" alt="" />
            <h3>Konstruksiya işləri</h3>

          </div>
          <div className="image">
            <img src="https://mulkicahan.az/img/slide2.jpg" alt="" />
          </div>
          <div className="image">
            <img src="https://mulkicahan.az/img/engineer.jpg" alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default HeroSection;
