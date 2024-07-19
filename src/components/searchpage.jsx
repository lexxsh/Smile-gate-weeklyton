import React from 'react'
import HotCard from './Hot/HotCard'
import { useLocation } from 'react-router-dom'

const Searchpage = () => {
  const location = useLocation()
  // list 배열에 접근
  const productList = location.state?.searchResults?.result || []

  // 디버그 로그로 productList를 출력
  console.log('Product List:', productList)

  return (
    <div className="Hot-container">
      {productList.length > 0 ? (
        productList.map(product => (
          <HotCard key={product.id} product={product} />
        ))
      ) : (
        <div>검색 결과가 없습니다.</div>
      )}
    </div>
  )
}

export default Searchpage
