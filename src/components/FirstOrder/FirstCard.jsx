import React from 'react'
import './First'

const FirstCard = ({ product }) => {
  const { price, salePrice, title, rate, viewCount, imageUrl } = product
  const discountPercentage = ((price - salePrice) / price) * 100

  return (
    <div className="FirstCard">
      <div className="FirstCard-img">
        <img src={imageUrl} alt={title} />
        <div className="FirstCard-sale">{discountPercentage.toFixed(0)}%</div>
      </div>
      <h3 className="FirstCard-name">{title}</h3>
      <div className="FirstCard-rating">
        <span className="FirstCard-price">{salePrice}원</span>
        <span className="FirstCard-stars">★</span>
        <span className="FirstCard-rating-number">{rate}</span>
        <span className="FirstCard-reviews">리뷰 {viewCount}</span>
      </div>
    </div>
  )
}

export default FirstCard
