import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Slider1 from '../Slider/Slider1'
import Slider2 from '../Slider/Slider2'
import './Home.css'
function Home() {
  const settings = {
    dots: true, // 페이지네이션 점 표시
    infinite: true, // 무한 루프 활성화
    speed: 500, // 슬라이드 전환 속도 (밀리초)
    slidesToShow: 1, // 한 번에 보여줄 슬라이드 수
    slidesToScroll: 1, // 한 번의 스크롤로 넘길 슬라이드 수
    arrows: true, // 화살표 표시
    fade: false, // 페이드 효과 사용 여부 (true로 설정 시 페이드 효과)
  }

  return (
    <Slider {...settings}>
      <div>
        <Slider1 />
      </div>
      <div>
        <Slider2 />
      </div>
    </Slider>
  )
}

export default Home
