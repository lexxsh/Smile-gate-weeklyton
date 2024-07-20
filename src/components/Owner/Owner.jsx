import React, { useState } from 'react'
import './Owner.css'
import api from '../../api'

const Owner = () => {
  const [productData, setProductData] = useState({
    thumbnail: null,
    detail: null,
    title: '',
    price: '',
    salePrice: '',
    sellerId: '',
    content: '1',
  })
  const [preview, setPreview] = useState({
    thumbnailImage: null,
    detailImage: null,
  })

  const handleChange = e => {
    const { name, value } = e.target
    setProductData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleImageChange = e => {
    const { name, files } = e.target
    console.log(`${name} 파일 선택됨:`, files[0]) // 로그 추가

    if (files && files[0]) {
      const fileUrl = URL.createObjectURL(files[0])
      console.log(`${name} 미리보기 URL:`, fileUrl) // 로그 추가

      setProductData(prevData => ({
        ...prevData,
        [name]: files[0],
      }))
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const formData = new FormData()

    console.log('제출 전 productData:', productData)

    formData.append('thumbnail', productData.thumbnail)
    formData.append('detail', productData.detail)
    formData.append('title', productData.title)
    formData.append('price', productData.price)
    formData.append('salePrice', productData.salePrice)
    formData.append('sellerId', productData.sellerId)

    try {
      const response = await api.consumer.addProduct(formData)
      console.log(formData)
      console.log('상품 데이터 전송 성공:', response.data)
      // 여기서 서버 응답을 처리하고 필요하다면 상태를 업데이트합니다.
    } catch (error) {
      console.error('상품 데이터 전송 실패:', error)
      // 에러 처리 로직을 추가합니다.
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="Owner-container">
        <div className="Owner-title">사장님! 마감세일 물품을 등록해주세요!</div>
        <div className="Owner-img">
          <label>썸네일 이미지 업로드</label>
          <input
            type="file"
            accept="image/*"
            name="thumbnail"
            onChange={handleImageChange}
          />
          {preview.thumbnailImage && (
            <img
              src={preview.thumbnailImage}
              alt="썸네일 미리보기"
              style={{ maxWidth: '200px' }}
            />
          )}
        </div>
        <div className="Owner-img">
          <label>상세 이미지 업로드</label>
          <input
            type="file"
            accept="image/*"
            name="detail"
            onChange={handleImageChange}
          />
          {preview.detailImage && (
            <img
              src={preview.detailImage}
              alt="상세 이미지 미리보기"
              style={{ maxWidth: '200px' }}
            />
          )}
        </div>
        <div>
          <label>제목</label>
          <input
            type="text"
            name="title"
            value={productData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>원가 가격</label>
          <input
            type="number"
            name="price"
            value={productData.originalPrice}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>할인된 가격</label>
          <input
            type="number"
            name="salePrice"
            value={productData.discountedPrice}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>사장님 아이디</label>
          <input
            type="text"
            name="sellerId"
            value={productData.sellerId}
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
