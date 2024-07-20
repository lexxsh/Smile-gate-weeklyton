import React, { useEffect, useState } from 'react'
import './First.css'
import FirstCard from './FirstCard'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import api from '../../api'
import { Link } from 'react-router-dom'
const First = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false,
    verticalSwiping: true,
    arrows: false,
  }

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
  const filteredProducts = products.filter(
    product => product.id === 5 || product.id === 3
  )
  return (
    <div className="First-container">
      <div className="First-title">
        <span className="highlight">첫 주문</span> 고객 한정 특가
      </div>
      <Slider {...settings}>
        {filteredProducts.map(product => (
          <div key={product.id}>
            <Link to={`/detail/${product.id}`} className="HotCard-link">
              {/* 상세 페이지로 이동하는 Link */}
              <FirstCard product={product} /> {/* HotCard 컴포넌트 */}
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default First
