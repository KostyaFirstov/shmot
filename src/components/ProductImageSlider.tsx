import React from 'react'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Thumbs } from 'swiper'

interface IProductImageSliderProps {
	img: string[]
}

const ProductImageSlider: React.FC<IProductImageSliderProps> = ({ img }) => {
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
				{img.map((item, index) => {
					return (
						<SwiperSlide key={index} className='product-image__slide'>
							<img src={`http://localhost:5000${item}`} alt='' />
						</SwiperSlide>
					)
				})}
			</Swiper>
			<div className='product-image__slider-thumb'>
				<Swiper
					onSwiper={setActiveThumb}
					modules={[Thumbs]}
					spaceBetween={6}
					slidesPerView={6.5}
				>
					{img.map((item, index) => {
						return (
							<SwiperSlide key={index} className='thumb__slide'>
								<img src={`http://localhost:5000${item}`} alt='' />
							</SwiperSlide>
						)
					})}
				</Swiper>
			</div>
		</div>
	)
}

export default ProductImageSlider
