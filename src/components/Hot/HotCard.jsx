import React from 'react'
import './Hot.css'

const HotCard = ({ product }) => {
  return (
    <div className="HotCard">
      <div className="HotCard-img"></div>
      <h3 className="HotCard-name">{product.name}</h3>
      <p className="HotCard-price">{product.price}</p>
      <div className="HotCard-rating">
        <span className="HotCard-stars">★</span>
        <span className="HotCard-rating-number">{product.rating}</span>
        <span className="HotCard-reviews">리뷰 {product.reviews}</span>
      </div>
    </div>
  )
}

export default HotCard
