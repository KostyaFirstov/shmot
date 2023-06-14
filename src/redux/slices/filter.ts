import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export enum SortPropertyEnum {
	RATING_DESC = 'rating',
	RATING_ASC = '-rating',
	PRICE_DESC = 'price',
	PRICE_ASC = '-price',
	TITLE_DESC = 'title',
	TITLE_ASC = '-title'
}

export type Sort = {
	name: string
	sortProperty: SortPropertyEnum
}

interface IFilterSliceState {
	search: string
	category: string
	brand: string
	sort: Sort
}

const initialState: IFilterSliceState = {
	search: '',
	category: '',
	brand: '',
	sort: {
		name: 'популярности ↑',
		sortProperty: SortPropertyEnum.RATING_DESC
	}
}

export const filterSlice = createSlice({
	name: 'filter',
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
		clearSearchValue: state => {
			state.search = ''
		},
		clearCategoryValue: state => {
			state.category = ''
		},
		clearBrandValue: state => {
			state.brand = ''
		}
	}
})

export const selectSearch = (state: RootState) => state.filter.search
export const selectSort = (state: RootState) => state.filter.sort.name
export const selectBrand = (state: RootState) => state.filter.brand
export const selectCategory = (state: RootState) => state.filter.category

export const { setSortValue, setSearchValue, setCategoryValue, setBrandValue } =
	filterSlice.actions

export const filterReducer = filterSlice.reducer
export default filterSlice.reducer
