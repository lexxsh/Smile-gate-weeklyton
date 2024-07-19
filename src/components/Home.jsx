import React from 'react'
import Hot from './Hot/Hot'
import Banner from './Banner'
import SearchBar from './SearchBar'
import CategoryList from './CategoryList'
import './Home.css'
import First from './FirstOrder/First'
import Recommand from './Recommand/Recommand'
function Home() {
  return (
    <div className="Container">
      <Banner />
      <div className="separator"></div>
      <SearchBar />
      <CategoryList />
      <div className="separator"></div>
      <Hot />
      <div className="separator"></div>
      <First />
      <div className="separator1"></div>
      <Recommand />
    </div>
  )
}

export default Home
