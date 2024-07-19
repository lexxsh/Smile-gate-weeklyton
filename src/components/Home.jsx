import React from 'react'
import Hot from './Hot/Hot'
import Banner from './Banner'
import SearchBar from './SearchBar'
import CategoryList from './CategoryList'
import './Home.css'
function Home() {
  return (
    <div className="Container">
      <Banner />
      <div className="separator"></div>
      <SearchBar />
      <CategoryList />
      <div className="separator"></div>
      <Hot />
    </div>
  )
}

export default Home
