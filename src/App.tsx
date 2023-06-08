import React from 'react'
import './scss/app.scss'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import Products from './pages/Products'
import { ScrollToTop } from './utils/ScrollToTop'
import Reviews from './pages/Reviews'
import ReviewPage from './pages/ReviewPage'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
	return (
		<div className='App'>
			<ScrollToTop />
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route path='/' element={<Home />} />
					<Route path='/men' element={<Products />} />
					<Route path='/women' element={<Products />} />
					<Route path='/reviews' element={<Reviews />} />
					<Route path='/review/:title' element={<ReviewPage />} />
					<Route path='/product/:title' element={<ProductPage />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App
