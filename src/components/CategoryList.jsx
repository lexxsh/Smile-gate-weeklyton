import React from 'react'
import CategoryItem from './Category'
import './Category.css'
const CategoryList = () => {
  const categories = [
    { name: '치킨', icon: '🍗' },
    { name: '족발', icon: '🐖' },
    { name: '보쌈', icon: '🐷' },
    { name: '떡', icon: '🍡' },
    { name: '빵', icon: '🍞' },
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
