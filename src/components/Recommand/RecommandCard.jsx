import React from 'react'
import './Recommand'

const RecommandCard = ({ product }) => {
  return (
    <div className="Recommand">
      <div className="RecommandCard-img1"></div>
      <div className="Text">
        <h3 className="RecommandCard-name">{product.name}</h3>
        <p className="RecommandCard-price">{product.price}</p>
        <div className="RecommandCard-rating">
          <span className="RecommandCard-stars">★</span>
          <span className="RecommandCard-rating-number">{product.rating}</span>
          <span className="RecommandCard-reviews">리뷰 {product.reviews}</span>
        </div>
      </div>
    </div>
  )
}

export default RecommandCard
