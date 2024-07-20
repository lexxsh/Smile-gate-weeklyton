import axios from 'axios'

const BASE_URL = 'http://3.37.166.112/'

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})
const consumerAPI = {
  search: keyword => apiClient.post('/api/v1/consumer/search', { keyword }),
  purchase: purchaseData =>
    apiClient.post('/api/v1/consumer/purchase', purchaseData),
  addToCart: productData => apiClient.post('/api/v1/consumer/add', productData),
  getAllProducts: () => apiClient.get('/api/v1/consumer/product/all'),
  purchaseInfo: purchaseInfoData =>
    apiClient.post('/api/v1/consumer/purchase/info', purchaseInfoData),
  addProduct: productData => apiClient.post('/api/v1/products', productData),
}

const api = {
  consumer: consumerAPI,
}

export default api
