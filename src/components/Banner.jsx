import React from 'react'
import Slider from 'react-slick'
import './Banner.css' // CSS 파일을 별도로 만들어서 관리

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  }

  return (
    <div className="banner">
      <Slider {...settings}>
        <img src={'aws.jpg'} alt="Slide 1" className="img1" />

        <img src={'nxtcloud.jpg'} alt="Slide 2" className="img1" />

        <img src={'ai.jpg'} alt="Slide 3" className="img1" />
        <img src={'hasi.jpg'} alt="Slide 4" className="img1" />
      </Slider>
    </div>
  )
}

export default Banner
