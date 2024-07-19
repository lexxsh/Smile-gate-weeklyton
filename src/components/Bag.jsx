import React, { useState } from 'react'
import './Bag.css'
const Bag = () => {
  const [quantity, setQuantity] = useState(5) // Default quantity
  const unitPrice = 5330 // price per item

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1)
  }

  const decreaseQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1)) // Prevent quantity less than 1
  }
  return (
    <div className="product-detail">
      <div className="section1">
        <div className="header1">
          <h2>상주조합 천완 3~5입 (1kg)</h2>
          <h2>226,650원</h2>
        </div>
        <img src="path_to_image" alt="상주조합 천완" />
        <div className="container2">
          <span className="text2">5,330원</span>
          <span className="text2">품질 보장! 얼른 구매하세요.</span>
        </div>
        <div className="quantity-section">
          <button onClick={decreaseQuantity} className="button1">
            -
          </button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity} className="button1">
            +
          </button>
        </div>
      </div>
      <div className="separator"></div>
      <div className="extra-options">
        <button>더 많이 할인받기 ⯆</button>
      </div>
      <div className="pricing">
        <span>{quantity * unitPrice}원 더 많이 담으면 배달팁 무료</span>
      </div>
      <div className="total">
        <button className="button2">
          예약배달 주문하기
          <span>{quantity * unitPrice}원</span>
        </button>
      </div>
    </div>
  )
}

export default Bag
