import React from 'react'
import HeaderBanner from '../components/HeaderBanner'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
	return (
		<>
			<HeaderBanner />
			<Header />
			<Outlet />
			<Footer />
		</>
	)
}

export default MainLayout
