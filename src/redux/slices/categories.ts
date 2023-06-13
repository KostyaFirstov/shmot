import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from '../../axios'
import { RootState } from '../store'
import { LoadingProperty } from './auth'

export const fetchCategories = createAsyncThunk(
	'auth/fetchCategories',
	async () => {
		const { data } = await axios.get<CategoriesParams[]>('/api/categories')
		return data
	}
)

export type CategoriesParams = {
	name: string
	link: string
}

interface ICategoriesSliceState {
	items: CategoriesParams[]
	status: LoadingProperty
}

const initialState: ICategoriesSliceState = {
	items: [],
	status: LoadingProperty.STATUS_LOADING
}

export const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchCategories.pending, state => {
			state.status = LoadingProperty.STATUS_LOADING
			state.items = []
		})
		builder.addCase(
			fetchCategories.fulfilled,
			(state, action: PayloadAction<CategoriesParams[]>) => {
				state.status = LoadingProperty.STATUS_LOADED
				state.items = action.payload
			}
		)
		builder.addCase(fetchCategories.rejected, state => {
			state.status = LoadingProperty.STATUS_ERROR
			state.items = []
		})
	}
})

export const selectCategories = (state: RootState) => state.categories.items
export const selectCategoriesStatus = (state: RootState) =>
	state.products.status

export const categoriesReducer = categoriesSlice.reducer

export default categoriesSlice.reducer
