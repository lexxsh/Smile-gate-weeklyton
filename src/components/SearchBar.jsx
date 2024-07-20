import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Search.css'
import api from '../api'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  const handleSearch = async () => {
    if (searchTerm.trim() === '') return // 빈 검색어 방지

    try {
      const response = await api.consumer.search(searchTerm)
      console.log('검색 결과:', response.data)
      navigate('/search', { state: { searchResults: response.data } })
    } catch (error) {
      console.error('검색 중 오류 발생:', error)
    }
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder=" 상품을 검색해보세요!"
        className="Search1"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <img
        className="Search-img"
        alt="Search icon"
        src="searchiocn1.svg"
        onClick={handleSearch}
      />
    </div>
  )
}

export default SearchBar
