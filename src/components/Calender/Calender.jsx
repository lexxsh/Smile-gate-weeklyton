import React, { useState, useEffect } from 'react'
import './Calendar.css'
import { useNavigate } from 'react-router-dom'
import api from '../../api'

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null)
  const [diaryData, setDiaryData] = useState(null)
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
    if (diaryData) {
      return (
        <div className="info-box">
          <h3>{selectedDate}일의 일정</h3>
          <p>{diaryData.data.content || '일기 내용이 없습니다.'}</p>
        </div>
      )
    }
    return <div className="info-box">데이터를 가져오는 중...</div>
  }

  useEffect(() => {
    if (selectedDate) {
      const fetchDiaryData = async () => {
        try {
          // 날짜 형식: 20240701 (YYYYMMDD)
          const dateStr = `202407${selectedDate.toString().padStart(2, '0')}`
          const data = await api.getDiary(dateStr)
          setDiaryData(data)
        } catch (error) {
          console.error('Error fetching diary data:', error)
        }
      }
      fetchDiaryData()
    }
  }, [selectedDate])

  const handleClick = () => {
    if (selectedDate) {
      navigate('/emotion', { state: { selectedDate } })
    } else {
      alert('날짜를 선택해 주세요.')
    }
  }

  const handleClick2 = () => {
    if (selectedDate) {
      const url = `https://main--lofibackground.netlify.app/?selectedDate=${encodeURIComponent(
        `202407${selectedDate.toString().padStart(2, '0')}`
      )}`
      window.open(url, '_blank', 'noopener,noreferrer')
    } else {
      alert('날짜를 선택해 주세요.')
    }
  }

  const handleClick3 = async () => {
    if (selectedDate) {
      try {
        // 날짜 형식: 20240701 (YYYYMMDD)
        const dateStr = `202407${selectedDate.toString().padStart(2, '0')}`
        const data = await api.getDiary(dateStr)
        navigate('/result', { state: { selectedDate, diaryData: data } })
      } catch (error) {
        alert('일기 데이터를 가져오는 데 실패했습니다.')
      }
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
        <button className="background-button" onClick={handleClick2}>
          배경화면 보러가기
        </button>
        <button className="diary-button" onClick={handleClick3}>
          일기 보러가기
        </button>
        <div className="add-button" onClick={handleClick}>
          +
        </div>
      </div>
    </div>
  )
}

export default Calendar
