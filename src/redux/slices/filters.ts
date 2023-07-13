import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from '../../axios'
import { RootState } from '../store'
import { LoadingProperty } from './auth'
import { getRequestFromLS } from '../../utils/getRequestsFromLS'

export const fetchBrands = createAsyncThunk('auth/fetchBrands', async () => {
	const { data } = await axios.get<FiltersParams[]>('/api/brands')
	return data
})

export const fetchCategories = createAsyncThunk(
	'auth/fetchCategories',
	async () => {
		const { data } = await axios.get<FiltersParams[]>('/api/categories')
		return data
	}
)

export const fetchGetRequests = createAsyncThunk(
	'auth/fetchGetRequests',
	async () => {
		const { data } = await axios.get<FetchRequestsParams[]>('/api/requests')
		return data
	}
)

export const fetchPostRequests = createAsyncThunk(
	'auth/fetchPostRequests',
	async (text: FetchRequestPostParams) => {
		const { data } = await axios.post('/api/requests', text)
		return data
	}
)

export type FiltersParams = {
	name: string
	image: string
	link: string
}

export type FetchRequestsParams = {
	_id?: number
	text: string
}

export type FetchRequestPostParams = {
	text: string
}

export type FetchRequested = string

export enum SortPropertyEnum {
	POPULAR_DESC = 'popular',
	POPULAR_ASC = '-popular',
	PRICE_DESC = 'price',
	PRICE_ASC = '-price',
	NEW_DESC = 'new',
	NEW_ASC = '-new'
}

export type Sort = {
	name: string
	sortProperty: SortPropertyEnum
}

interface IFiltersSliceState {
	brands: FiltersParams[]
	categories: FiltersParams[]
	requests: FetchRequestsParams[]
	requested: FetchRequested[]
	search: string
	category: string
	brand: string
	sort: Sort
	status: LoadingProperty
}

const initialState: IFiltersSliceState = {
	brands: [],
	categories: [],
	requests: [],
	requested: getRequestFromLS(),
	search: '',
	category: '',
	brand: '',
	sort: {
		name: 'популярности ↑',
		sortProperty: SortPropertyEnum.POPULAR_DESC
	},
	status: LoadingProperty.STATUS_LOADING
}

export const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setSortValue: (state, action: PayloadAction<Sort>) => {
			state.sort = action.payload
		},
		setSearchValue: (state, action) => {
			state.search = action.payload
		},
		setCategoryValue: (state, action) => {
			if (state.category === action.payload) {
				state.category = ''
			} else {
				state.category = action.payload
			}
		},
		setBrandValue: (state, action) => {
			if (state.brand === action.payload) {
				state.brand = ''
			} else {
				state.brand = action.payload
			}
		},
		setRequestedValue: (state, action) => {
			if (!state.requested.some(request => request === action.payload)) {
				state.requested.push(action.payload)
			}
		},
		removeRequestedValue: (state, action) => {
			state.requested = state.requested.filter(
				request => request !== action.payload
			)
		},
		clearSearchValue: state => {
			state.search = ''
		},
		clearCategoryValue: state => {
			state.category = ''
		},
		clearBrandValue: state => {
			state.brand = ''
		}
	},
	extraReducers: builder => {
		// BRANDS

		builder.addCase(fetchBrands.pending, state => {
			state.status = LoadingProperty.STATUS_LOADING
			state.brands = []
		})
		builder.addCase(
			fetchBrands.fulfilled,
			(state, action: PayloadAction<FiltersParams[]>) => {
				state.status = LoadingProperty.STATUS_LOADED
				state.brands = action.payload
			}
		)
		builder.addCase(fetchBrands.rejected, state => {
			state.status = LoadingProperty.STATUS_ERROR
			state.brands = []
		})

		// CATEGORIES

		builder.addCase(fetchCategories.pending, state => {
			state.status = LoadingProperty.STATUS_LOADING
			state.categories = []
		})
		builder.addCase(
			fetchCategories.fulfilled,
			(state, action: PayloadAction<FiltersParams[]>) => {
				state.status = LoadingProperty.STATUS_LOADED
				state.categories = action.payload
			}
		)
		builder.addCase(fetchCategories.rejected, state => {
			state.status = LoadingProperty.STATUS_ERROR
			state.categories = []
		})

		// REQUESTS

		builder.addCase(fetchGetRequests.pending, state => {
			state.status = LoadingProperty.STATUS_LOADING
			state.requests = []
		})
		builder.addCase(
			fetchGetRequests.fulfilled,
			(state, action: PayloadAction<FetchRequestsParams[]>) => {
				state.status = LoadingProperty.STATUS_LOADED
				state.requests = action.payload
			}
		)
		builder.addCase(fetchGetRequests.rejected, state => {
			state.status = LoadingProperty.STATUS_ERROR
			state.requests = []
		})
	}
})

export const selectSearch = (state: RootState) => state.filters.search
export const selectSort = (state: RootState) => state.filters.sort.name
export const selectSortValue = (state: RootState) =>
	state.filters.sort.sortProperty
export const selectBrand = (state: RootState) => state.filters.brand
export const selectCategory = (state: RootState) => state.filters.category
export const selectCategories = (state: RootState) => state.filters.categories
export const selectBrands = (state: RootState) => state.filters.brands
export const selectRequests = (state: RootState) => state.filters.requests
export const selectFiltersStatus = (state: RootState) => state.filters.status
export const selectRequested = (state: RootState) => state.filters.requested

export const {
	setSortValue,
	setSearchValue,
	setCategoryValue,
	setBrandValue,
	setRequestedValue,
	removeRequestedValue
} = filtersSlice.actions

export const filterReducer = filtersSlice.reducer
export default filtersSlice.reducer
