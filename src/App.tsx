import React from 'react'
import './scss/app.scss'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route path='/' element={<Home />} />
					<Route path='/product/:title' element={<ProductPage />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App
