const API = process.env.NODE_ENV==="production" ? "https://cwnn-api.herokuapp.com/api" : "http://localhost:8000/api"

const AUTH = `${API}/auth/`
const TRANSACTIONS = `${API}/transactions`
export const LOGIN = `${AUTH}/login`
export const REGISTER = `${AUTH}/register`
export const ADD_TRANSACTION = `${TRANSACTIONS}/`
export const GET_TRANSACTIONS = `${TRANSACTIONS}/all`
export const CREDIT_TRANSACTIONS = `${TRANSACTIONS}/credit`
export const DEBIT_TRANSACTIONS = `${TRANSACTIONS}/debit`
