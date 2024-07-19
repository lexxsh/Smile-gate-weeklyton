import React, { useEffect, useState } from 'react'
import './Recomand.css'
import RecommandCard from './RecommandCard'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import api from '../../api'
const Recommand = () => {
  const [products, setProducts] = useState([])
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

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.consumer.getAllProducts()
        console.log('API에서 받아온 상품 데이터:', response.data)

        // 데이터를 상태에 저장
        setProducts(response.data.result.productList)
      } catch (err) {
        console.error('상품 조회 실패:', err)
      }
    }

    fetchProducts()
  }, [])
  const filteredProducts = products.filter(
    product => product.id === 4 || product.id === 5 || product.id === 3
  )
  return (
    <div className="Recommand-container">
      <div className="Recommand-title">오늘의 타임요정 고객 한정 특가</div>
      <div className="RecommandCard-img">
        {filteredProducts.map(product => (
          <RecommandCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Recommand
