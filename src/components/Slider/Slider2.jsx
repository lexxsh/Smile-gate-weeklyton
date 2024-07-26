import React from 'react'
import { useNavigate } from 'react-router-dom'

const Slider2 = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/calendar')
  }
  return (
    <div className="Slider2">
      <div className="Slider2text">
        <div className="Slider2text1">AI 00일기</div>
        <div className="Slider2text2">오늘 하루를</div>
        <div className="Slider2text2">추천해줘</div>
        <div className="Slider2text3">일상의 순간들을 기록하면,</div>
        <div className="Slider2text4">AI가 다양한 내용을 추천해드려요.</div>
      </div>
      <div className="Slider2button" onClick={handleClick}>
        오늘부터 기록하기
      </div>
    </div>
  )
}

export default Slider2
