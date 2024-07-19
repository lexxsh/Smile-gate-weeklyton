import React from 'react'
import './Serch.css'
const SearchCard = () => {
  return (
    <div className="SearchCard">
      <div className="SearchCard-img">
        <div className="SearchCard-sale">{product.sale}</div>
      </div>
      <h3 className="SearchCard-name">{product.name}</h3>
      <p className="SearchCard-price">{product.price}</p>
      <div className="SearchCard-rating">
        <span className="SearchCard-stars">★</span>
        <span className="SearchCard-rating-number">{product.rating}</span>
        <span className="SearchCard-reviews">리뷰 {product.reviews}</span>
      </div>
    </div>
  )
}

export default SearchCard
