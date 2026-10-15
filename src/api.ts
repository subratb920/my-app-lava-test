import axios from 'axios'

// The API's address comes from VITE_API_URL (see .env.example)
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})
