import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation, Pagination } from 'swiper'
import Product from './Product'

const ProductsSlider = () => {
	return (
		<div className='products'>
			<div className='products__area content__area'>
				<div className='wrapper products__desc desc'>
					<span>Best of Air Max</span>
				</div>
				<Swiper
					className='slider__wrapper'
					modules={[Navigation, Pagination]}
					spaceBetween={22}
					slidesPerView={3.06}
					navigation
					breakpoints={{
						300: {
							slidesPerView: 1.6,
							spaceBetween: 5
						},
						1100: {
							slidesPerView: 3.1,
							spaceBetween: 22
						}
					}}
				>
					<SwiperSlide>
						<Product />
					</SwiperSlide>
					<SwiperSlide>
						<Product />
					</SwiperSlide>
					<SwiperSlide>
						<Product />
					</SwiperSlide>
					<SwiperSlide>
						<Product />
					</SwiperSlide>
					<SwiperSlide>
						<Product />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	)
}

export default ProductsSlider
