axios.js
import axios from 'axios'

const opentrivia_url = import.meta.env.VITE_OPEN_TRIVIA_URL

export const api = axios.create({
   baseURL:opentrivia_url
})
