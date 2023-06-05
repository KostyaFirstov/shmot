import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation, Pagination } from 'swiper'

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
						<div className='product__item'>
							<div className='product__content'>
								<Link to='/product/nike-dunk' className='product__image'>
									<img src='/img/swiper-image01.jpg' alt='' />
								</Link>
								<ul className='product__sizes'>
									<li className='product__size'>39</li>
									<li className='product__size'>40</li>
									<li className='product__size'>41</li>
									<li className='product__size'>42</li>
								</ul>
							</div>
							<div className='product__info'>
								<div className='product__leftside'>
									<div className='product__name'>Nike Air Max Pulse</div>
									<div className='product__desc'>Women's Shoes</div>
								</div>
								<div className='product__rightside'>
									<div className='product__price'>13 995 ₽</div>
									<div className='product__link'>
										<Link to='/' className='button button-black'>
											Подробнее
										</Link>
									</div>
								</div>
							</div>
							<div className='product__options'>
								<div className='product__favorite'>
									<svg
										width='22'
										height='19'
										viewBox='0 0 22 19'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M15.9183 1.00002C17.2766 1.00002 18.5528 1.51602 19.513 2.45102C20.4652 3.38093 21 4.64113 21 5.95502C21 7.2689 20.4652 8.5291 19.513 9.45902L11.0003 17.758L2.4865 9.45902C1.5346 8.52914 1 7.26915 1 5.95552C1 4.64188 1.5346 3.38189 2.4865 2.45202C2.95741 1.99032 3.5176 1.62425 4.13462 1.37501C4.75165 1.12578 5.41327 0.998319 6.08118 1.00002C7.43944 1.00002 8.71563 1.51602 9.67585 2.45102L10.4555 3.21102L11.0003 3.74202L11.544 3.21102L12.3236 2.45102C12.7947 1.98963 13.355 1.62384 13.972 1.37478C14.589 1.12573 15.2505 0.998353 15.9183 1.00002Z'
											stroke='#111111'
											strokeWidth='1.2'
										/>
									</svg>
								</div>
								<div className='product__view'>
									<svg
										width='27'
										height='19'
										viewBox='0 0 27 19'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M25.0242 7.99026C25.5742 8.65793 25.8491 8.9917 25.8491 9.5C25.8491 10.0083 25.5742 10.3421 25.0242 11.0097C23.0124 13.4524 18.5751 18 13.4245 18C8.27393 18 3.83663 13.4524 1.82484 11.0097C1.27495 10.3421 1 10.0083 1 9.5C1 8.9917 1.27495 8.65793 1.82484 7.99026C3.83663 5.5477 8.27393 1 13.4245 1C18.5751 1 23.0124 5.5477 25.0242 7.99026Z'
											stroke='#111111'
										/>
										<path
											d='M13.4246 14.4577C16.1631 14.4577 18.383 12.2378 18.383 9.49935C18.383 6.76094 16.1631 4.54102 13.4246 4.54102C10.6862 4.54102 8.46631 6.76094 8.46631 9.49935C8.46631 12.2378 10.6862 14.4577 13.4246 14.4577Z'
											stroke='#111111'
										/>
									</svg>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='product__item'>
							<div className='product__image'>
								<img src='/img/swiper-image01.jpg' alt='' />
							</div>
							<div className='product__info'>
								<div className='product__leftside'>
									<div className='product__name'>Nike Air Max Pulse</div>
									<div className='product__desc'>Women's Shoes</div>
								</div>
								<div className='product__rightside'>
									<div className='product__price'>13 995 ₽</div>
									<div className='product__link'>
										<Link to='/' className='button button-green'>
											Подробнее
										</Link>
									</div>
								</div>
							</div>
							<div className='product__options'>
								<div className='product__favorite'>
									<svg
										width='22'
										height='19'
										viewBox='0 0 22 19'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M15.9183 1.00002C17.2766 1.00002 18.5528 1.51602 19.513 2.45102C20.4652 3.38093 21 4.64113 21 5.95502C21 7.2689 20.4652 8.5291 19.513 9.45902L11.0003 17.758L2.4865 9.45902C1.5346 8.52914 1 7.26915 1 5.95552C1 4.64188 1.5346 3.38189 2.4865 2.45202C2.95741 1.99032 3.5176 1.62425 4.13462 1.37501C4.75165 1.12578 5.41327 0.998319 6.08118 1.00002C7.43944 1.00002 8.71563 1.51602 9.67585 2.45102L10.4555 3.21102L11.0003 3.74202L11.544 3.21102L12.3236 2.45102C12.7947 1.98963 13.355 1.62384 13.972 1.37478C14.589 1.12573 15.2505 0.998353 15.9183 1.00002Z'
											stroke='#111111'
											strokeWidth='1.2'
										/>
									</svg>
								</div>
								<div className='product__view'>
									<svg
										width='27'
										height='19'
										viewBox='0 0 27 19'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M25.0242 7.99026C25.5742 8.65793 25.8491 8.9917 25.8491 9.5C25.8491 10.0083 25.5742 10.3421 25.0242 11.0097C23.0124 13.4524 18.5751 18 13.4245 18C8.27393 18 3.83663 13.4524 1.82484 11.0097C1.27495 10.3421 1 10.0083 1 9.5C1 8.9917 1.27495 8.65793 1.82484 7.99026C3.83663 5.5477 8.27393 1 13.4245 1C18.5751 1 23.0124 5.5477 25.0242 7.99026Z'
											stroke='#111111'
										/>
										<path
											d='M13.4246 14.4577C16.1631 14.4577 18.383 12.2378 18.383 9.49935C18.383 6.76094 16.1631 4.54102 13.4246 4.54102C10.6862 4.54102 8.46631 6.76094 8.46631 9.49935C8.46631 12.2378 10.6862 14.4577 13.4246 14.4577Z'
											stroke='#111111'
										/>
									</svg>
								</div>
							</div>
							<div className='product__sizes'></div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='product__item'>
							<div className='product__image'>
								<img src='/img/swiper-image01.jpg' alt='' />
							</div>
							<div className='product__info'>
								<div className='product__leftside'>
									<div className='product__name'>Nike Air Max Pulse</div>
									<div className='product__desc'>Women's Shoes</div>
								</div>
								<div className='product__rightside'>
									<div className='product__price'>13 995 ₽</div>
									<div className='product__link'>
										<Link to='/' className='button button-green'>
											Подробнее
										</Link>
									</div>
								</div>
							</div>
							<div className='product__options'>
								<div className='product__favorite'>
									<svg
										width='22'
										height='19'
										viewBox='0 0 22 19'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M15.9183 1.00002C17.2766 1.00002 18.5528 1.51602 19.513 2.45102C20.4652 3.38093 21 4.64113 21 5.95502C21 7.2689 20.4652 8.5291 19.513 9.45902L11.0003 17.758L2.4865 9.45902C1.5346 8.52914 1 7.26915 1 5.95552C1 4.64188 1.5346 3.38189 2.4865 2.45202C2.95741 1.99032 3.5176 1.62425 4.13462 1.37501C4.75165 1.12578 5.41327 0.998319 6.08118 1.00002C7.43944 1.00002 8.71563 1.51602 9.67585 2.45102L10.4555 3.21102L11.0003 3.74202L11.544 3.21102L12.3236 2.45102C12.7947 1.98963 13.355 1.62384 13.972 1.37478C14.589 1.12573 15.2505 0.998353 15.9183 1.00002Z'
											stroke='#111111'
											strokeWidth='1.2'
										/>
									</svg>
								</div>
								<div className='product__view'>
									<svg
										width='27'
										height='19'
										viewBox='0 0 27 19'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M25.0242 7.99026C25.5742 8.65793 25.8491 8.9917 25.8491 9.5C25.8491 10.0083 25.5742 10.3421 25.0242 11.0097C23.0124 13.4524 18.5751 18 13.4245 18C8.27393 18 3.83663 13.4524 1.82484 11.0097C1.27495 10.3421 1 10.0083 1 9.5C1 8.9917 1.27495 8.65793 1.82484 7.99026C3.83663 5.5477 8.27393 1 13.4245 1C18.5751 1 23.0124 5.5477 25.0242 7.99026Z'
											stroke='#111111'
										/>
										<path
											d='M13.4246 14.4577C16.1631 14.4577 18.383 12.2378 18.383 9.49935C18.383 6.76094 16.1631 4.54102 13.4246 4.54102C10.6862 4.54102 8.46631 6.76094 8.46631 9.49935C8.46631 12.2378 10.6862 14.4577 13.4246 14.4577Z'
											stroke='#111111'
										/>
									</svg>
								</div>
							</div>
							<div className='product__sizes'></div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='product__item'>
							<div className='product__image'>
								<img src='/img/swiper-image01.jpg' alt='' />
							</div>
							<div className='product__info'>
								<div className='product__leftside'>
									<div className='product__name'>Nike Air Max Pulse</div>
									<div className='product__desc'>Women's Shoes</div>
								</div>
								<div className='product__rightside'>
									<div className='product__price'>13 995 ₽</div>
									<div className='product__link'>
										<Link to='/' className='button button-green'>
											Подробнее
										</Link>
									</div>
								</div>
							</div>
							<div className='product__options'>
								<div className='product__favorite'>
									<svg
										width='22'
										height='19'
										viewBox='0 0 22 19'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M15.9183 1.00002C17.2766 1.00002 18.5528 1.51602 19.513 2.45102C20.4652 3.38093 21 4.64113 21 5.95502C21 7.2689 20.4652 8.5291 19.513 9.45902L11.0003 17.758L2.4865 9.45902C1.5346 8.52914 1 7.26915 1 5.95552C1 4.64188 1.5346 3.38189 2.4865 2.45202C2.95741 1.99032 3.5176 1.62425 4.13462 1.37501C4.75165 1.12578 5.41327 0.998319 6.08118 1.00002C7.43944 1.00002 8.71563 1.51602 9.67585 2.45102L10.4555 3.21102L11.0003 3.74202L11.544 3.21102L12.3236 2.45102C12.7947 1.98963 13.355 1.62384 13.972 1.37478C14.589 1.12573 15.2505 0.998353 15.9183 1.00002Z'
											stroke='#111111'
											strokeWidth='1.2'
										/>
									</svg>
								</div>
								<div className='product__view'>
									<svg
										width='27'
										height='19'
										viewBox='0 0 27 19'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M25.0242 7.99026C25.5742 8.65793 25.8491 8.9917 25.8491 9.5C25.8491 10.0083 25.5742 10.3421 25.0242 11.0097C23.0124 13.4524 18.5751 18 13.4245 18C8.27393 18 3.83663 13.4524 1.82484 11.0097C1.27495 10.3421 1 10.0083 1 9.5C1 8.9917 1.27495 8.65793 1.82484 7.99026C3.83663 5.5477 8.27393 1 13.4245 1C18.5751 1 23.0124 5.5477 25.0242 7.99026Z'
											stroke='#111111'
										/>
										<path
											d='M13.4246 14.4577C16.1631 14.4577 18.383 12.2378 18.383 9.49935C18.383 6.76094 16.1631 4.54102 13.4246 4.54102C10.6862 4.54102 8.46631 6.76094 8.46631 9.49935C8.46631 12.2378 10.6862 14.4577 13.4246 14.4577Z'
											stroke='#111111'
										/>
									</svg>
								</div>
							</div>
							<div className='product__sizes'></div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='product__item'>
							<div className='product__image'>
								<img src='/img/swiper-image01.jpg' alt='' />
							</div>
							<div className='product__info'>
								<div className='product__leftside'>
									<div className='product__name'>Nike Air Max Pulse</div>
									<div className='product__desc'>Women's Shoes</div>
								</div>
								<div className='product__rightside'>
									<div className='product__price'>13 995 ₽</div>
									<div className='product__link'>
										<Link to='/' className='button button-green'>
											Подробнее
										</Link>
									</div>
								</div>
							</div>
							<div className='product__options'>
								<div className='product__favorite'>
									<svg
										width='22'
										height='19'
										viewBox='0 0 22 19'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M15.9183 1.00002C17.2766 1.00002 18.5528 1.51602 19.513 2.45102C20.4652 3.38093 21 4.64113 21 5.95502C21 7.2689 20.4652 8.5291 19.513 9.45902L11.0003 17.758L2.4865 9.45902C1.5346 8.52914 1 7.26915 1 5.95552C1 4.64188 1.5346 3.38189 2.4865 2.45202C2.95741 1.99032 3.5176 1.62425 4.13462 1.37501C4.75165 1.12578 5.41327 0.998319 6.08118 1.00002C7.43944 1.00002 8.71563 1.51602 9.67585 2.45102L10.4555 3.21102L11.0003 3.74202L11.544 3.21102L12.3236 2.45102C12.7947 1.98963 13.355 1.62384 13.972 1.37478C14.589 1.12573 15.2505 0.998353 15.9183 1.00002Z'
											stroke='#111111'
											strokeWidth='1.2'
										/>
									</svg>
								</div>
								<div className='product__view'>
									<svg
										width='27'
										height='19'
										viewBox='0 0 27 19'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M25.0242 7.99026C25.5742 8.65793 25.8491 8.9917 25.8491 9.5C25.8491 10.0083 25.5742 10.3421 25.0242 11.0097C23.0124 13.4524 18.5751 18 13.4245 18C8.27393 18 3.83663 13.4524 1.82484 11.0097C1.27495 10.3421 1 10.0083 1 9.5C1 8.9917 1.27495 8.65793 1.82484 7.99026C3.83663 5.5477 8.27393 1 13.4245 1C18.5751 1 23.0124 5.5477 25.0242 7.99026Z'
											stroke='#111111'
										/>
										<path
											d='M13.4246 14.4577C16.1631 14.4577 18.383 12.2378 18.383 9.49935C18.383 6.76094 16.1631 4.54102 13.4246 4.54102C10.6862 4.54102 8.46631 6.76094 8.46631 9.49935C8.46631 12.2378 10.6862 14.4577 13.4246 14.4577Z'
											stroke='#111111'
										/>
									</svg>
								</div>
							</div>
							<div className='product__sizes'></div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='product__item'>
							<div className='product__image'>
								<img src='/img/swiper-image01.jpg' alt='' />
							</div>
							<div className='product__info'>
								<div className='product__leftside'>
									<div className='product__name'>Nike Air Max Pulse</div>
									<div className='product__desc'>Women's Shoes</div>
								</div>
								<div className='product__rightside'>
									<div className='product__price'>13 995 ₽</div>
									<div className='product__link'>
										<Link to='/' className='button button-green'>
											Подробнее
										</Link>
									</div>
								</div>
							</div>
							<div className='product__options'>
								<div className='product__favorite'>
									<svg
										width='22'
										height='19'
										viewBox='0 0 22 19'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M15.9183 1.00002C17.2766 1.00002 18.5528 1.51602 19.513 2.45102C20.4652 3.38093 21 4.64113 21 5.95502C21 7.2689 20.4652 8.5291 19.513 9.45902L11.0003 17.758L2.4865 9.45902C1.5346 8.52914 1 7.26915 1 5.95552C1 4.64188 1.5346 3.38189 2.4865 2.45202C2.95741 1.99032 3.5176 1.62425 4.13462 1.37501C4.75165 1.12578 5.41327 0.998319 6.08118 1.00002C7.43944 1.00002 8.71563 1.51602 9.67585 2.45102L10.4555 3.21102L11.0003 3.74202L11.544 3.21102L12.3236 2.45102C12.7947 1.98963 13.355 1.62384 13.972 1.37478C14.589 1.12573 15.2505 0.998353 15.9183 1.00002Z'
											stroke='#111111'
											strokeWidth='1.2'
										/>
									</svg>
								</div>
								<div className='product__view'>
									<svg
										width='27'
										height='19'
										viewBox='0 0 27 19'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M25.0242 7.99026C25.5742 8.65793 25.8491 8.9917 25.8491 9.5C25.8491 10.0083 25.5742 10.3421 25.0242 11.0097C23.0124 13.4524 18.5751 18 13.4245 18C8.27393 18 3.83663 13.4524 1.82484 11.0097C1.27495 10.3421 1 10.0083 1 9.5C1 8.9917 1.27495 8.65793 1.82484 7.99026C3.83663 5.5477 8.27393 1 13.4245 1C18.5751 1 23.0124 5.5477 25.0242 7.99026Z'
											stroke='#111111'
										/>
										<path
											d='M13.4246 14.4577C16.1631 14.4577 18.383 12.2378 18.383 9.49935C18.383 6.76094 16.1631 4.54102 13.4246 4.54102C10.6862 4.54102 8.46631 6.76094 8.46631 9.49935C8.46631 12.2378 10.6862 14.4577 13.4246 14.4577Z'
											stroke='#111111'
										/>
									</svg>
								</div>
							</div>
							<div className='product__sizes'></div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	)
}

export default ProductsSlider
