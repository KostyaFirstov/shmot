import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from '../../axios'
import { RootState } from '../store'
import { LoadingProperty } from './auth'

export const fetchProducts = createAsyncThunk(
	'auth/fetchProducts',
	async (params: FetchProductsParams) => {
		const { gender, categoryValue, brandValue } = params

		const { data } = await axios.get<ProductParams[]>(
			`/api/products?${gender}${categoryValue}${brandValue}`
		)
		return data
	}
)

export const fetchProductsSearch = createAsyncThunk(
	'auth/fetchProductsSearch',
	async (params: FetchProductsSearchParams) => {
		const { searchValue } = params

		const { data } = await axios.get<ProductParams[]>(
			`/api/products?search=${searchValue}`
		)
		return data
	}
)

export type FetchProductsParams = {
	gender: string
	categoryValue: string
	brandValue: string
}

export type FetchProductsSearchParams = {
	searchValue: string
}

export type ProductParams = {
	_id: number
	title: string
	desc: string
	img: string[]
	categories: string[]
	sizes: number[]
	color: string
	brand: string
	gender: string
	price: number
}

interface IProductsSliceState {
	items: ProductParams[]
	searchItems: ProductParams[]
	status: LoadingProperty
}

const initialState: IProductsSliceState = {
	items: [],
	searchItems: [],
	status: LoadingProperty.STATUS_LOADING
}

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: builder => {
		// PRODUCTS

		builder.addCase(fetchProducts.pending, state => {
			state.status = LoadingProperty.STATUS_LOADING
			state.items = []
		})
		builder.addCase(
			fetchProducts.fulfilled,
			(state, action: PayloadAction<ProductParams[]>) => {
				state.status = LoadingProperty.STATUS_LOADED
				state.items = action.payload
			}
		)
		builder.addCase(fetchProducts.rejected, state => {
			state.status = LoadingProperty.STATUS_ERROR
			state.items = []
		})

		// PRODUCTS SEARCH

		builder.addCase(fetchProductsSearch.pending, state => {
			state.status = LoadingProperty.STATUS_LOADING
			state.searchItems = []
		})
		builder.addCase(
			fetchProductsSearch.fulfilled,
			(state, action: PayloadAction<ProductParams[]>) => {
				state.status = LoadingProperty.STATUS_LOADED
				state.searchItems = action.payload
			}
		)
		builder.addCase(fetchProductsSearch.rejected, state => {
			state.status = LoadingProperty.STATUS_ERROR
			state.searchItems = []
		})
	}
})

export const selectProducts = (state: RootState) => state.products.items
export const selectProductsSearch = (state: RootState) =>
	state.products.searchItems
export const selectProductsStatus = (state: RootState) => state.products.status

export const productsReducer = productsSlice.reducer

export default productsSlice.reducer
