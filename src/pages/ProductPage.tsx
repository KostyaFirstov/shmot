import React from 'react'
import ProductsSlider from '../components/ProductsSlider'

const ProductPage = () => {
	return (
		<div className='product-page'>
			<div className='content__area'>
				<div className='product__wrapper wrapper'>
					<div className='product__images'>
						<div className='product__image'>
							<img src='/img/goods/goods15.jpg' alt='' />
						</div>
						<div className='product__image'>
							<img src='/img/goods/goods14.jpg' alt='' />
						</div>
						<div className='product__image'>
							<img src='/img/goods/goods13.jpg' alt='' />
						</div>
						<div className='product__image'>
							<img src='/img/goods/goods12.jpg' alt='' />
						</div>
						<div className='product__image'>
							<img src='/img/goods/goods11.jpg' alt='' />
						</div>
						<div className='product__image'>
							<img src='/img/goods/goods10.jpg' alt='' />
						</div>
						<div className='product__image'>
							<img src='/img/goods/goods09.jpg' alt='' />
						</div>
						<div className='product__image'>
							<img src='/img/goods/goods08.jpg' alt='' />
						</div>
						<div className='product__image'>
							<img src='/img/goods/goods07.jpg' alt='' />
						</div>
						<div className='product__image'>
							<img src='/img/goods/goods06.jpg' alt='' />
						</div>
						<div className='product__image'>
							<img src='/img/goods/goods05.jpg' alt='' />
						</div>
						<div className='product__image'>
							<img src='/img/goods/goods04.jpg' alt='' />
						</div>
					</div>
					<div className='product-info'>
						<div className='product-info__header'>
							<div className='product-info__title'>
								<h1>Nike Air Max 97 SE</h1>
							</div>
							<div className='product-info__desc desc'>
								<span>Men's Shoes</span>
							</div>
							<div className='product-info__price'>
								<span>15.999 ₽</span>
							</div>
						</div>
						<div className='product-info__sizes'>
							<div className='sizes__header'>
								<div className='sizes__title'>
									<span>Размеры:</span>
								</div>
								<div className='sizes__guide'>
									<span>Как выбрать размер?</span>
								</div>
							</div>
							<div className='sizes__list'>
								<div className='sizes__item'>UK 7</div>
								<div className='sizes__item'>UK 7.5</div>
								<div className='sizes__item'>UK 8</div>
								<div className='sizes__item'>UK 8.5</div>
								<div className='sizes__item'>UK 11.5</div>
							</div>
						</div>
						<div className='product-info__options'>
							<div className='product-info__option'>
								<button className='button button-black'>Купить</button>
							</div>
							<div className='product-info__option'>
								<button className='button button-green'>
									Добавить в избранное
								</button>
							</div>
						</div>
						<div className='product-info__text'>
							<p>
								Layer on style with the Air Max 97. The cracked leather and soft
								suede update the iconic design while the original look (inspired
								by Japanese bullet trains and water droplets) still takes centre
								stage. Easy-to-style colours let you hit the streets quickly.
							</p>
						</div>
					</div>
				</div>
			</div>
			<ProductsSlider />
		</div>
	)
}

export default ProductPage
