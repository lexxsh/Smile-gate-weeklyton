import React from 'react'
import './Recomand.css'
import RecommandCard from './RecommandCard'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const Recommand = () => {
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

  const products = [
    {
      id: 1,
      name: 'CANADA 미국산 냉동 젠보 ',
      price: '7,990원',
      rating: 4.8,
      reviews: 116,
    },
    {
      id: 2,
      name: '그래놀라하우스 오리지널 300g',
      price: '11,220원',
      rating: 4.8,
      reviews: 1641,
    },
    {
      id: 3,
      name: '곰미옥 쌈떡볶이 440g',
      price: '5,050원',
      rating: 4.7,
      reviews: 3,
    },

    // 필요하다면 더 많은 제품을 추가할 수 있습니다.
  ]
  return (
    <div className="Recommand-container">
      <div className="Recommand-title">오늘의 타임요정 고객 한정 특가</div>
      <div className="RecommandCard-img">
        {products.map(product => (
          <RecommandCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Recommand
