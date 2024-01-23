import axios from 'axios'

export const CARS_PER_PAGE = 12

export const api = axios.create({baseURL: 'https://6580bf4d3dfdd1b11c42098a.mockapi.io/'})