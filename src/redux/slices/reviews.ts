import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from '../../axios'
import { RootState } from '../store'
import { LoadingProperty } from './auth'

export const fetchReviews = createAsyncThunk('auth/fetchReviews', async () => {
	const { data } = await axios.get<ReviewParams[]>('/api/reviews')
	return data
})

export type FetchReviewsSearchParams = {
	searchValue: string
}

export type ReviewParams = {
	_id: number
	title: string
	desc: string
	text: string
	img: string[]
	tags: string[]
	viewsCount: number
	createdAt: string
}

interface IReviewsSliceState {
	items: ReviewParams[]
	status: LoadingProperty
}

const initialState: IReviewsSliceState = {
	items: [],
	status: LoadingProperty.STATUS_LOADING
}

export const reviewsSlice = createSlice({
	name: 'reviews',
	initialState,
	reducers: {},
	extraReducers: builder => {
		// Reviews

		builder.addCase(fetchReviews.pending, state => {
			state.status = LoadingProperty.STATUS_LOADING
			state.items = []
		})
		builder.addCase(
			fetchReviews.fulfilled,
			(state, action: PayloadAction<ReviewParams[]>) => {
				state.status = LoadingProperty.STATUS_LOADED
				state.items = action.payload
			}
		)
		builder.addCase(fetchReviews.rejected, state => {
			state.status = LoadingProperty.STATUS_ERROR
			state.items = []
		})
	}
})

export const selectReviews = (state: RootState) => state.reviews.items
export const selectReviewsStatus = (state: RootState) => state.reviews.status

export const productsReducer = reviewsSlice.reducer

export default reviewsSlice.reducer
