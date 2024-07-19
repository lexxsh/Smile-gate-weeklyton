import React from 'react'
import './Header.css'
import { FaWallet, FaSearch, FaFire } from 'react-icons/fa'
function Header() {
  return (
    <header className="header">
      <div className="logo">
        <FaFire
          style={{ color: '#6E56EF', fontSize: '24px', marginRight: '10px' }}
        />
        <span>마감요정</span>
      </div>
      <nav className="nav">
        <a href="#home">H</a>
        <a href="#explore">E</a>
        <div className="search-wallet">
          <FaSearch color="black" />
        </div>
      </nav>
    </header>
  )
}

export default Header
