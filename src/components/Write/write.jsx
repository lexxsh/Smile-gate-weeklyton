import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './write.css'
const Write = () => {
  const location = useLocation()
  const { selectedDate } = location.state || {}
  const { selectedEmotion } = location.state || {}
  const [image, setImage] = useState(null)
  const [inputText, setInputText] = useState('')
  const navigate = useNavigate()
  const handleImageUpload = event => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }
  const handleInputChange = event => {
    setInputText(event.target.value)
  }

  const handleClick = () => {
    if (!inputText.trim()) {
      alert('내용을 입력해 주세요.')
      return
    }

    navigate('/loading', {
      state: { selectedDate, selectedEmotion },
    })
  }

  return (
    <div className="Write-Container">
      <div className="Write-date">{`7월 ${selectedDate}일의 일기`}</div>
      <div className="Write-text">기록하고 싶은 내용을 입력해주세요!</div>
      <textarea
        className="Write-input"
        placeholder="여기에 일기를 작성하세요..."
        value={inputText}
        onChange={handleInputChange}
      ></textarea>
      <div className="image-upload-container">
        <label htmlFor="image-upload" className="image-upload-label">
          대표 이미지 추가
        </label>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          className="image-upload-input"
          onChange={handleImageUpload}
        />
        {image && <img src={image} alt="미리보기" className="image-preview" />}
      </div>
      <div className="Write-next" onClick={handleClick}>
        다 적었어요!
      </div>
    </div>
  )
}

export default Write
