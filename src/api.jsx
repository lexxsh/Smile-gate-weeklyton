import axios from 'axios'

const BASE_URL = 'http://3.37.166.112/'

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

const api = {}

export default api
