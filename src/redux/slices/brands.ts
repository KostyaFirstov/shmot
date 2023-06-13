import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from '../../axios'
import { RootState } from '../store'
import { LoadingProperty } from './auth'

export const fetchBrands = createAsyncThunk('auth/fetchBrands', async () => {
	const { data } = await axios.get<BrandsParams[]>('/api/brands')
	return data
})

export type BrandsParams = {
	name: string
	link: string
}

interface IBrandsSliceState {
	items: BrandsParams[]
	status: LoadingProperty
}

const initialState: IBrandsSliceState = {
	items: [],
	status: LoadingProperty.STATUS_LOADING
}

export const BrandsSlice = createSlice({
	name: 'Brands',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchBrands.pending, state => {
			state.status = LoadingProperty.STATUS_LOADING
			state.items = []
		})
		builder.addCase(
			fetchBrands.fulfilled,
			(state, action: PayloadAction<BrandsParams[]>) => {
				state.status = LoadingProperty.STATUS_LOADED
				state.items = action.payload
			}
		)
		builder.addCase(fetchBrands.rejected, state => {
			state.status = LoadingProperty.STATUS_ERROR
			state.items = []
		})
	}
})

export const selectBrands = (state: RootState) => state.brands.items
export const selectBrandsStatus = (state: RootState) => state.products.status

export const brandsReducer = BrandsSlice.reducer

export default BrandsSlice.reducer
