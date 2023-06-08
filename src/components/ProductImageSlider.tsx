import React from 'react'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Thumbs } from 'swiper'

const ProductImageSlider = () => {
	const [activeThumb, setActiveThumb] = React.useState<SwiperClass>()

	return (
		<div className='product-image__wrapper'>
			<Swiper
				className='product-image__slider'
				modules={[Thumbs]}
				spaceBetween={0}
				slidesPerView={1}
				thumbs={{ swiper: activeThumb }}
			>
				<SwiperSlide className='product-image__slide'>
					<img src='/img/goods/goods15.jpg' alt='' />
				</SwiperSlide>
				<SwiperSlide className='product-image__slide'>
					<img src='/img/goods/goods14.jpg' alt='' />
				</SwiperSlide>
				<SwiperSlide className='product-image__slide'>
					<img src='/img/goods/goods13.jpg' alt='' />
				</SwiperSlide>
				<SwiperSlide className='product-image__slide'>
					<img src='/img/goods/goods12.jpg' alt='' />
				</SwiperSlide>
				<SwiperSlide className='product-image__slide'>
					<img src='/img/goods/goods11.jpg' alt='' />
				</SwiperSlide>
			</Swiper>
			<div className='product-image__slider-thumb'>
				<Swiper
					onSwiper={setActiveThumb}
					modules={[Thumbs]}
					spaceBetween={6}
					slidesPerView={6.5}
				>
					<SwiperSlide className='thumb__slide'>
						<img src='/img/goods/goods15.jpg' alt='' />
					</SwiperSlide>
					<SwiperSlide className='thumb__slide'>
						<img src='/img/goods/goods14.jpg' alt='' />
					</SwiperSlide>
					<SwiperSlide className='thumb__slide'>
						<img src='/img/goods/goods13.jpg' alt='' />
					</SwiperSlide>
					<SwiperSlide className='thumb__slide'>
						<img src='/img/goods/goods12.jpg' alt='' />
					</SwiperSlide>
					<SwiperSlide className='thumb__slide'>
						<img src='/img/goods/goods11.jpg' alt='' />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	)
}

export default ProductImageSlider
