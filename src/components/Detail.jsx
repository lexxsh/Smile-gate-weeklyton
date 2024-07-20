import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import api from '../api'

const Detail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const consumerId = '1' // 사용자의 실제 아이디를 적용해야 함.

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await api.consumer.getAllProducts()
        const productDetails = response.data.result.productDtoList
        const specificProduct = productDetails.find(
          product => product.id.toString() === id
        )
        setProduct(specificProduct)
      } catch (err) {
        console.error('상품 상세 조회 실패:', err)
      }
    }

    fetchProductDetail()
  }, [id])

  if (!product) {
    return <div>Loading...</div>
  }

  const handleOrder = async () => {
    try {
      const purchaseData = {
        productId: product.id,
        consumerId: consumerId,
      }

      const purchaseRequestList = [purchaseData] // purchaseData를 포함하는 배열 생성

      const payload = {
        purchaseRequestList: purchaseRequestList,
      } // 최종 데이터를 포함하는 객체 생성

      await api.consumer.purchase(payload) // 구매 API 호출
      toast.success('장바구니에 들어갔어요!', {
        autoClose: 3000, // 3초 후 자동으로 닫힘. 밀리초 단위입니다.
        position: 'top-center', // 화면의 30% 아래로 조정
      })
    } catch (error) {
      console.error('주문 처리 중 오류가 발생했습니다.', error)
      toast.error('오류가 발생했습니다. 다시 시도해주세요!', {
        autoClose: 3000, // 3초 후 자동으로 닫힘. 밀리초 단위입니다.
        position: 'top-center', // 화면의 30% 아래로 조정
      })
    }
  }

  return (
    <div style={{ width: '100%', paddingBottom: '80px' }}>
      <ToastContainer />{' '}
      {/* 자동으로 위치를 설정하는 대신 개별 토스트에 위치를 설정합니다. */}
      <img
        src={product.imageUrl}
        alt={product.name}
        style={{ width: '100%', height: 'auto' }}
      />
      <img
        src={product.detailImageUrl}
        alt={product.name}
        style={{ width: '100%', height: 'auto' }}
      />
      <button
        onClick={handleOrder}
        style={{
          position: 'fixed',
          bottom: '50px',
          left: '50%',
          transform: 'translateX(-50%)',
          padding: '15px 30px',
          backgroundColor: 'orange',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          zIndex: 1000,
        }}
      >
        장바구니 넣기
      </button>
    </div>
  )
}

export default Detail
