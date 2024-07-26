// Result.jsx
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Result.css'

const Result = () => {
  const [bgColor, setBgColor] = useState('#ddcfb9')
  const [videoId] = useState('fTwVEu6itik') // 비디오 ID 설정
  const [videoTitle, setVideoTitle] = useState('')
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

    setBgColor(getRandomColor())
  }, [])

  useEffect(() => {
    const fetchVideoTitle = async () => {
      const apiKey = 'AIzaSyDOD2iNEKiXF1B3t1_GmwlYQBQkrqP18sA' // YouTube Data API 키
      const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`

      try {
        const response = await axios.get(url)
        const title = response.data.items[0].snippet.title
        setVideoTitle(title)
      } catch (error) {
        console.error('Error fetching video title:', error)
      }
    }

    fetchVideoTitle()
  }, [videoId])

  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`

  return (
    <div className="Result-Container" style={{ backgroundColor: bgColor }}>
      <div className="Result-Text">2024. 07. 20</div>
      <div className="Result-time">오전 11시 34분</div>
      <div className="Result-emotion">#사랑</div>
      <div className="Result-img"></div>
      <div className="Result-text">생성된 이미지 및 내용</div>

      <div className="Result-Title">음악 추천🎵</div>

      <div className="Result-YouTubeContainer">
        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="YouTube-Link"
        >
          {videoTitle || '비디오 제목을 가져오는 중...'}
        </a>
      </div>

      <div className="Result-button" onClick={handleClick}>
        다음 내용 보기
      </div>
    </div>
  )
}

export default Result
