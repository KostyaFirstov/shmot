import React from 'react'
import './scss/app.scss'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import Products from './pages/Products'
import { ScrollToTop } from './utils/ScrollToTop'
import Reviews from './pages/Reviews'
import ReviewPage from './pages/ReviewsPage'
import Login from './pages/Login'
import Register from './pages/Register'
import SearchPage from './pages/SearchPage'
import CartPage from './pages/CartPage'
import AccountPage from './pages/AccountPage'
import Drops from './pages/Drops'
import DropPage from './pages/DropPage'
import NotFound from './pages/NotFound'
import Categories from './pages/Categories'
import Brands from './pages/Brands'
import BrandPage from './pages/BrandPage'
import CategoriesPage from './pages/CategoriesPage'

function App() {
	return (
		<div className='App'>
			<ScrollToTop />
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route path='/' element={<Home />} />
					<Route path='/catalog' element={<Products />} />
					<Route path='/reviews' element={<Reviews />} />
					<Route path='/drops' element={<Drops />} />
					<Route path='/brands' element={<Brands />} />
					<Route path='/brands/:title' element={<BrandPage />} />
					<Route path='/categories' element={<Categories />} />
					<Route path='/categories/:title' element={<CategoriesPage />} />
					<Route path='/drops' element={<Drops />} />
					<Route path='/search' element={<SearchPage />} />
					<Route path='/reviews/:title' element={<ReviewPage />} />
					<Route path='/drops/:title' element={<DropPage />} />
					<Route path='/product/:title' element={<ProductPage />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/cart' element={<CartPage />} />
					<Route path='/account/*' element={<AccountPage />} />
					<Route path='/*' element={<NotFound />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App
