import React from 'react'
import './Search.css'
const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="마감세일 상품을 검색해보세요!"
        className="Search"
      />
      <img className="Search-img" alt="Search icon" src="searchiocn1.svg" />
    </div>
  )
}

export default SearchBar
