import React from 'react'
import './Category.css'
const CategoryItem = ({ name, icon }) => {
  return (
    <div className="category-item">
      <div className="icon">{icon}</div>
      <div className="name">{name}</div>
    </div>
  )
}

export default CategoryItem
