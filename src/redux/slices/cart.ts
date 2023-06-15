import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from '../../axios'
import { RootState } from '../store'
import { LoadingProperty } from './auth'
import { calcTotalPrice } from '../../utils/calcTotalPrice'

export const fetchCart = createAsyncThunk('auth/fetchCart', async () => {
	const { data } = await axios.get<CartItem[]>('/api/cart')
	return data
})

export type CartItem = {
	_id: number
	title: string
	desc: string
	img: string[]
	categories: string[]
	size: number
	color: string
	price: number
	count: number
}

interface ICartSliceState {
	items: CartItem[]
	totalPrice: number
	status: LoadingProperty
}

const initialState: ICartSliceState = {
	items: [],
	totalPrice: 0,
	status: LoadingProperty.STATUS_LOADING
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addCartItem: (state, action: PayloadAction<CartItem>) => {
			const findItem = state.items.find(
				obj =>
					obj._id === action.payload._id && obj.size === action.payload.size
			)
			if (findItem) {
				findItem.count++
			} else {
				state.items.push(action.payload)
			}

			state.totalPrice = calcTotalPrice(state.items)
		},
		removeCartItem: (state, action: PayloadAction<CartItem>) => {
			state.items = state.items.filter(item => item._id !== action.payload._id)
			state.totalPrice = calcTotalPrice(state.items)
		},
		minusItem: (state, action: PayloadAction<number>) => {
			const findItem = state.items.find(obj => obj._id === action.payload)

			if (findItem) {
				findItem.count--

				if (findItem?.count < 1) {
					state.items = state.items.filter(obj => obj._id !== action.payload)
				}

				state.totalPrice = calcTotalPrice(state.items)
			}
		},
		clearItems: state => {
			state.items = []
			state.totalPrice = 0
		}
	}
})

export const selectCartItems = (state: RootState) => state.cart.items
export const selectCartTotal = (state: RootState) => state.cart.totalPrice
export const selectCartLoading = (state: RootState) => state.cart.status

export const { addCartItem, removeCartItem, minusItem, clearItems } =
	cartSlice.actions

export const productsReducer = cartSlice.reducer

export default cartSlice.reducer
