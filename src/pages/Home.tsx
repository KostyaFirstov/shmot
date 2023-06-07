import React from 'react'
import Banner from '../components/Banner'
import ProductsSlider from '../components/ProductsSlider'
import EssentialsCatalog from '../components/EssentialsCatalog'

const Home = () => {
	return (
		<>
			<Banner
				image='/img/main-bg.jpg'
				desc='First Look'
				title='Nike Air Max Pulse'
				text='Extreme comfort. Hyper durable. Max volume. Introducing the Air
							Max Pulse —designed to push you past your limits and help you go
							to the max.'
				buttons={['Notify Me', 'Shop Air Max']}
			/>
			<ProductsSlider title='Популярное' />
			<Banner
				headerDesc='Don`t Miss'
				image='/img/main-bg2.jpg'
				title='FLIGHT ESSENTIALS'
				text='Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.'
				buttons={['Shop']}
			/>
			<EssentialsCatalog />
		</>
	)
}

export default Home
