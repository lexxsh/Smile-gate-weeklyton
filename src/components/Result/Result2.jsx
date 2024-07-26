import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import './Result.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useNavigate } from 'react-router-dom'
const sliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  centerMode: true,
  centerPadding: '35px',
  dots: true,
}
const Result2 = () => {
  const [bgColor, setBgColor] = useState('#ddcfb9') // 초기 배경색 설정
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/calendar')
  }
  useEffect(() => {
    const colors = [
      '#ddcfb9',
      '#c9aab9',
      '#adc6d8',
      '#a5cea5',
      '#ccc18b',
      '#d49d9d',
      '#A0D6B4',
      '#9ebcda',
      '#ccb3da',
      '#ddc9be',
    ]

    const getRandomColor = () => {
      const randomIndex = Math.floor(Math.random() * colors.length)
      return colors[randomIndex]
    }

    // 배경색 설정
    setBgColor(getRandomColor())
  }, []) // 빈 배열로 설정하여 컴포넌트 마운트 시 한 번만 실행

  return (
    <div className="Result-Container" style={{ backgroundColor: bgColor }}>
      <div className="Result-Text">2024. 07. 20</div>
      <div className="Reuslt-time">오전 11시 34분</div>
      <div className="Result-Title">책 추천🎞️</div>
      <Slider {...sliderSettings} className="Result-Slider">
        <div className="Result-Slide">
          <h3>Slide 1dd</h3>
        </div>
        <div className="Result-Slide">
          <h3>Slide 2dddd</h3>
        </div>
        <div className="Result-Slide">
          <h3>Slide 3d</h3>
        </div>
      </Slider>
      <div className="Result-button2" onClick={handleClick}>
        오늘 일기 끝!
      </div>
    </div>
  )
}

export default Result2
