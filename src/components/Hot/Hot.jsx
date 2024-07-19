import React from 'react'
import './Hot.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import HotCard from './HotCard'

const Hot = () => {
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
    {
      id: 4,
      name: '[2개] 꽃보다오징어 130g',
      price: '10,900원',
      rating: 4.8,
      reviews: 999,
    },
    // 필요하다면 더 많은 제품을 추가할 수 있습니다.
  ]

  return (
    <div className="Hot-container">
      <div className="Hot-title">
        지금사면 <span className="highlight">번쩍할인</span>
      </div>
      <Slider {...settings}>
        {products.map(product => (
          <HotCard key={product.id} product={product} />
        ))}
      </Slider>
    </div>
  )
}

export default Hot
