import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import './Result.css'
import { useNavigate } from 'react-router-dom'

const Result = () => {
  const [bgColor, setBgColor] = useState('#ddcfb9') // 초기 배경색 설정
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/result1')
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

  const onReady = event => {
    // 비디오가 로드되면 음소거하고 자동 재생
    event.target.mute()
    event.target.playVideo()
  }

  const opts = {
    height: '0', // 비디오가 보이지 않도록 설정
    width: '0',
    playerVars: {
      autoplay: 1, // 자동으로 비디오 재생
      controls: 0, // 컨트롤 숨기기
      showinfo: 0, // 비디오 정보 숨기기
      modestbranding: 1, // 브랜드 로고 숨기기
      iv_load_policy: 3, // 비디오에 광고 표시하지 않기
      cc_load_policy: 0, // 자막 숨기기
      rel: 0, // 관련 비디오 숨기기
      loop: 1, // 비디오 루프
      playlist: '5qap5aO4i9A', // 루프용 비디오 ID
    },
  }

  return (
    <div className="Result-Container" style={{ backgroundColor: bgColor }}>
      <div className="Result-Text">2024. 07. 20</div>
      <div className="Result-time">오전 11시 34분</div>
      <div className="Result-emotion">#사랑</div>
      <div className="Result-img"></div>
      <div className="Result-text">생성된 이미지 및 내용</div>

      <div className="Result-Title">음악 추천🎵</div>

      <div className="Result-YouTubeContainer">
        <YouTube
          videoId="5qap5aO4i9A" // 여기에 유튜브 비디오 ID 입력
          opts={opts}
          onReady={onReady}
        />
        <div className="YouTube-Content">추천 음악</div>
      </div>

      <div className="Result-button" onClick={handleClick}>
        다음 내용 보기
      </div>
    </div>
  )
}

export default Result
