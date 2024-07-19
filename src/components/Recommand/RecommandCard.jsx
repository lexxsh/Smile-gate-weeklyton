import React from 'react'
import './Recommand'

const RecommandCard = ({ product }) => {
  const { price, salePrice, title, rate, viewCount, imageUrl } = product
  const discountPercentage = ((price - salePrice) / price) * 100
  return (
    <div className="Recommand">
      <div className="RecommandCard-img1">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="Text">
        <h3 className="RecommandCard-name">{title}</h3>
        <p className="RecommandCard-price">{salePrice}원</p>
        <div className="RecommandCard-rating">
          <span className="RecommandCard-stars">★</span>
          <span className="RecommandCard-rating-number">{rate}</span>
          <span className="RecommandCard-reviews">리뷰 {viewCount}</span>
        </div>
      </div>
    </div>
  )
}

export default RecommandCard
