import React from 'react'
import './First'

const FirstCard = ({ product }) => {
  return (
    <div className="FirstCard">
      <div className="FirstCard-img"></div>
      <h3 className="FirstCard-name">{product.name}</h3>
      <p className="FirstCard-price">{product.price}</p>
      <div className="FirstCard-rating">
        <span className="FirstCard-stars">★</span>
        <span className="FirstCard-rating-number">{product.rating}</span>
        <span className="FirstCard-reviews">리뷰 {product.reviews}</span>
      </div>
    </div>
  )
}

export default FirstCard
