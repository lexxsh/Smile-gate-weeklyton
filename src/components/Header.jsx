import React from 'react'
import './Header.css'
import { FaShoppingCart, FaSearch, FaFire } from 'react-icons/fa'
function Header() {
  return (
    <header className="header">
      <a href="/" className="logo">
        <FaFire
          style={{ color: '#006eff', fontSize: '24px', marginRight: '10px' }}
        />
        <span>마감요정</span>
      </a>
      <nav className="nav">
        <a href="owner">
          <span className="owner">사장님용</span>
        </a>
        <a href="bag">
          <div className="bag">
            <FaShoppingCart color="black" />
          </div>
        </a>
      </nav>
    </header>
  )
}

export default Header
