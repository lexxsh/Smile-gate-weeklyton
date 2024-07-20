import React, { useEffect, useState } from 'react'
import './Hot.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import HotCard from './HotCard'
import api from '../../api'
import { Link } from 'react-router-dom'
const Hot = () => {
  // 상태 정의
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.consumer.getAllProducts()
        console.log('API에서 받아온 상품 데이터:', response.data)

        // 데이터를 상태에 저장
        setProducts(response.data.result.productDtoList)
      } catch (err) {
        console.error('상품 조회 실패:', err)
      }
    }

    fetchProducts()
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    vertical: false,
    verticalSwiping: true,
    arrows: false,
  }

  return (
    <div className="Hot-container">
      <div className="Hot-title">
        지금사면 <span className="highlight">번쩍할인</span>
      </div>
      <Slider {...settings}>
        {products
          .filter(product => product.id <= 3)
          .map(product => (
            <Link
              to={`/detail/${product.id}`}
              key={product.id}
              className="HotCard-link"
            >
              {' '}
              {/* 상세 페이지로 이동하는 Link */}
              <HotCard product={product} />
            </Link>
          ))}
      </Slider>
    </div>
  )
}

export default Hot
