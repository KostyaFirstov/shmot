import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from '../../axios'
import { RootState } from '../store'
import { getTokenFromLS } from '../../utils/getTokenFromLS'

export const fetchAuth = createAsyncThunk(
	'auth/fetchAuth',
	async (params: FetchAuthParams) => {
		const { data } = await axios.post<AccountData>('/api/auth/login', params)
		return data
	}
)

export const fetchAuthRegister = createAsyncThunk(
	'auth/fetchRegister',
	async (params: FetchAuthRegisterParams) => {
		const { data } = await axios.post('/api/auth/register', params)
		return data
	}
)

export type AccountData = {
	_id: number
	username: string
	email: string
	orders: number
	promocodes: number
	createdAt: string
	accessToken: string
	avatar: string
}

type FetchAuthParams = {
	email: string
	password: string
}

type FetchAuthRegisterParams = {
	username: string
	email: string
	password: string
}

export enum LoadingProperty {
	STATUS_LOADING = 'loading',
	STATUS_LOADED = 'loaded',
	STATUS_ERROR = 'error'
}

interface IAuthSliceState {
	data: null | AccountData
	status: LoadingProperty
	error: string
}

const initialState: IAuthSliceState = {
	data: null,
	status: LoadingProperty.STATUS_LOADING,
	error: ''
}

export const token = { value: getTokenFromLS() }

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: state => {
			state.data = null
		},
		updateUser: (state, action) => {
			state.data = action.payload
		}
	},
	extraReducers: builder => {
		// LOGIN

		builder.addCase(fetchAuth.pending, state => {
			state.status = LoadingProperty.STATUS_LOADING
			state.data = null
			state.error = ''
			token.value = ''
		})
		builder.addCase(
			fetchAuth.fulfilled,
			(state, action: PayloadAction<AccountData>) => {
				state.status = LoadingProperty.STATUS_LOADED
				state.data = action.payload
				state.error = ''
				token.value = action.payload.accessToken
			}
		)
		builder.addCase(fetchAuth.rejected, (state, action) => {
			state.status = LoadingProperty.STATUS_ERROR
			state.data = null
			state.error = 'Неправильный логин или пароль'
			token.value = ''
		})

		// REGISTER

		builder.addCase(fetchAuthRegister.pending, state => {
			state.status = LoadingProperty.STATUS_LOADING
			state.data = null
			state.error = ''
			token.value = ''
		})
		builder.addCase(
			fetchAuthRegister.fulfilled,
			(state, action: PayloadAction<AccountData>) => {
				state.status = LoadingProperty.STATUS_LOADED
				state.data = action.payload
				state.error = ''
				token.value = action.payload.accessToken
			}
		)
		builder.addCase(fetchAuthRegister.rejected, state => {
			state.status = LoadingProperty.STATUS_ERROR
			state.data = null
			state.error = 'Не удалось зарегистрироваться'
			token.value = ''
		})
	}
})

export const selectIsAuth = (state: RootState) =>
	Boolean(state.persistedReducer.auth.data)
export const selectAccount = (state: RootState) =>
	state.persistedReducer.auth.data
export const selectErrorAuth = (state: RootState) =>
	state.persistedReducer.auth.error
export const authReducer = authSlice.reducer

export const { logout, updateUser } = authSlice.actions
export default authSlice.reducer
