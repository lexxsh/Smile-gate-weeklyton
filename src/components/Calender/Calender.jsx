import React, { useState } from 'react'
import './Calendar.css'
import { useNavigate } from 'react-router-dom'

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null)
  const navigate = useNavigate()

  const emotions = {
    3: '😊',
    7: '😢',
    15: '😎',
    22: '🥳',
  }

  const renderHeader = () => (
    <div className="header">
      <span className="month">24년 7월</span>
      <span className="menu-icon">≡</span>
    </div>
  )

  const renderDaysOfWeek = () => (
    <div className="days-of-week">
      {['일', '월', '화', '수', '목', '금', '토'].map((day, index) => (
        <span key={index} className="day-of-week">
          {day}
        </span>
      ))}
    </div>
  )

  const renderDays = () => {
    const days = []
    for (let i = 1; i <= 31; i++) {
      days.push(
        <div
          key={i}
          className={`day ${selectedDate === i ? 'selected' : ''}`}
          onClick={() => setSelectedDate(i)}
        >
          <div className="emotion-circle">{emotions[i] || ''}</div>
          <span className="date-number">{i}</span>
        </div>
      )
    }
    return <div className="days-container">{days}</div>
  }

  const renderInfoBox = () => {
    if (!selectedDate) {
      return <div className="info-box">날짜를 선택하세요.</div>
    }
    return (
      <div className="info-box">
        <h3>{selectedDate}일의 일정</h3>
        <p>여기에 선택된 날짜의 일정이나 정보를 표시합니다.</p>
      </div>
    )
  }

  const handleClick = () => {
    if (selectedDate) {
      navigate('/emotion', { state: { selectedDate } })
    } else {
      alert('날짜를 선택해 주세요.')
    }
  }

  return (
    <div className="calendar">
      {renderHeader()}
      {renderDaysOfWeek()}
      {renderDays()}
      {renderInfoBox()}
      <div className="button-container">
        <button className="diary-button">일기 보러가기</button>
        <div className="add-button" onClick={handleClick}>
          +
        </div>
      </div>
    </div>
  )
}

export default Calendar
