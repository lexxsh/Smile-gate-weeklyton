import React, { useState } from 'react'
import './Owner.css'
const Owner = () => {
  const [productData, setProductData] = useState({
    image: null,
    originalPrice: '',
    discountedPrice: '',
    endTime: '',
  })

  const handleChange = e => {
    const { name, value } = e.target
    setProductData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleImageChange = e => {
    setProductData(prevData => ({
      ...prevData,
      image: e.target.files[0],
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    // 여기에 폼 제출 시 데이터를 처리하는 로직을 추가하세요
    console.log('상품 데이터:', productData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="Owner-conainer">
        <div className="Owner-title">사장님! 마감세일 물품을 등록해주세요!</div>
        <div className="Owner-img">
          <label>이미지 업로드</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <div>
          <label>원가 가격</label>
          <input
            type="number"
            name="originalPrice"
            value={productData.originalPrice}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>할인된 가격</label>
          <input
            type="number"
            name="discountedPrice"
            value={productData.discountedPrice}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>판매 마감 시간</label>
          <input
            type="datetime-local"
            name="endTime"
            value={productData.endTime}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">상품 등록</button>
      </div>
    </form>
  )
}

export default Owner
