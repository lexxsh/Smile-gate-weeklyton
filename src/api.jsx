import axios from 'axios'

const BASE_URL = 'http://165.246.44.237:8000/'

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

const api = {
  getDiary: async date => {
    try {
      // 날짜를 쿼리 파라미터로 전달
      const response = await apiClient.get('/diary/get', {
        params: {
          date: date.toString(), // 쿼리 파라미터로 날짜 전달
        },
      })
      return response.data
    } catch (error) {
      console.error('Error fetching diary:', error)
      throw error
    }
  },
}

export default api
