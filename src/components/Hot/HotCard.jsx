import React from 'react'
import './Hot.css'

const HotCard = ({ product }) => {
  const { price, salePrice, title, rate, viewCount, imageUrl } = product
  const discountPercentage = ((price - salePrice) / price) * 100
  return (
    <div className="HotCard">
      <div className="HotCard-img">
        <img src={imageUrl} alt={title} />
        <div className="HotCard-sale">{discountPercentage.toFixed(0)}%</div>
      </div>
      <h3 className="HotCard-name">{title}</h3>
      <p className="HotCard-price">{salePrice}원</p>
      <div className="HotCard-rating">
        <span className="HotCard-stars">★</span>
        <span className="HotCard-rating-number">{rate}</span>
        <span className="HotCard-reviews">리뷰 {viewCount}</span>
      </div>
    </div>
  )
}

export default HotCard
