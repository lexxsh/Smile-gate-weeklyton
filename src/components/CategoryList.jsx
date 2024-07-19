import React from 'react'
import CategoryItem from './Category'
import './Category.css'
const CategoryList = () => {
  const categories = [
    { name: '롯데헬퍼트', icon: '🛒' },
    { name: '신선관', icon: '🥬' },
    { name: '주문스탬프', icon: '🍔' },
    { name: '건강·식단관리', icon: '🥗' },
    { name: '빵·떡·잼', icon: '🥐' },
    { name: '음료·카페', icon: '☕' },
    { name: '브랜드위크', icon: '💜' },
    { name: '쿠폰·혜택', icon: '🎟️' },
    { name: '밀키트·간편식', icon: '🍱' },
    { name: '우유·유제품', icon: '🥛' },
    { name: '아이스크림', icon: '🍦' },
    { name: '과자·간식', icon: '🍪' },
  ]

  return (
    <div className="category-list">
      {categories.map((category, index) => (
        <CategoryItem key={index} name={category.name} icon={category.icon} />
      ))}
    </div>
  )
}

export default CategoryList
