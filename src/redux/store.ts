import { combineReducers, configureStore } from '@reduxjs/toolkit'
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
import filters from './slices/filters'
import reviews from './slices/reviews'
import cart from './slices/cart'
import drops from './slices/drops'

const persistConfig = {
	key: 'root',
	version: 1,
	storage
}

const rootReducer = combineReducers({ auth: auth, cart: cart })

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: {
		persistedReducer,
		products,
		filters,
		reviews,
		drops
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
