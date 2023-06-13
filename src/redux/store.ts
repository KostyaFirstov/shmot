import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import auth from './slices/auth'
import products from './slices/products'
import categories from './slices/categories'
import brands from './slices/brands'

const persistConfig = {
	key: 'root',
	version: 1,
	storage
}

const persistedReducer = persistReducer(persistConfig, auth)

export const store = configureStore({
	reducer: {
		auth: persistedReducer,
		products: products,
		categories: categories,
		brands: brands
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		})
})

export let persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch