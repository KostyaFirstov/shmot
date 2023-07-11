import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from '../../axios'
import { RootState } from '../store'
import { LoadingProperty } from './auth'

export const fetchDrops = createAsyncThunk('auth/fetchDrops', async () => {
	const { data } = await axios.get<DropParams[]>('/api/drops')
	return data
})

export type FetchDropsSearchParams = {
	searchValue: string
}

export type DropParams = {
	_id: number
	title: string
	desc: string
	text: string
	img: string[]
	date: string
	viewsCount: number
	createdAt: string
}

interface IdropsSliceState {
	items: DropParams[]
	status: LoadingProperty
}

const initialState: IdropsSliceState = {
	items: [],
	status: LoadingProperty.STATUS_LOADING
}

export const dropsSlice = createSlice({
	name: 'drops',
	initialState,
	reducers: {},
	extraReducers: builder => {
		// drops

		builder.addCase(fetchDrops.pending, state => {
			state.status = LoadingProperty.STATUS_LOADING
			state.items = []
		})
		builder.addCase(
			fetchDrops.fulfilled,
			(state, action: PayloadAction<DropParams[]>) => {
				state.status = LoadingProperty.STATUS_LOADED
				state.items = action.payload
			}
		)
		builder.addCase(fetchDrops.rejected, state => {
			state.status = LoadingProperty.STATUS_ERROR
			state.items = []
		})
	}
})

export const selectDrops = (state: RootState) => state.drops.items
export const selectDropsStatus = (state: RootState) => state.drops.status

export const dropsReducer = dropsSlice.reducer

export default dropsSlice.reducer
