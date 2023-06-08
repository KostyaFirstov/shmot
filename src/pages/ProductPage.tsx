import React from 'react'
import ProductsSlider from '../components/ProductsSlider'
import Accordion from '../components/Accordion'
import { testAccordionData } from '../utils/testAccordionData'
import Sizes, { exampleSizes } from '../components/Sizes'
import CopyCode from '../components/CopyCode'

const ProductPage = () => {
	const [tooltip, setTooltip] = React.useState(false)
	const [activeSize, setActiveSize] = React.useState(0)
	const orderRef = React.useRef<HTMLButtonElement>(null)

	React.useEffect(() => {
		const handleScrollBefore = () => {
			const scrollTop = window.pageYOffset
			const buttonPlace = orderRef.current && orderRef.current.offsetTop
			if (buttonPlace && scrollTop > buttonPlace) {
				setTooltip(true)
			} else {
				setTooltip(false)
			}
		}

		window.addEventListener('scroll', handleScrollBefore)
		return () => window.removeEventListener('scroll', handleScrollBefore)
	}, [])

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
						<Sizes activeSize={activeSize} setActiveSize={setActiveSize} />
						<div className='product-info__options'>
							<div className='product-info__option'>
								<button className='button button-black product-info__cart'>
									Добавить в корзину <br /> {exampleSizes[activeSize]}
								</button>
								<button className='button button-black product-info__favorite'>
									<svg
										width='29'
										height='26'
										viewBox='0 0 29 26'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M21.1397 1.00002C22.9734 1.00002 24.6962 1.70822 25.9925 2.99149C27.278 4.26778 28 5.99737 28 7.80065C28 9.60392 27.278 11.3335 25.9925 12.6098L14.5003 24L3.00678 12.6098C1.72171 11.3336 1 9.60427 1 7.80133C1 5.9984 1.72171 4.26909 3.00678 2.99286C3.64251 2.35919 4.39875 1.85677 5.23174 1.5147C6.06473 1.17263 6.95792 0.997693 7.85959 1.00002C9.69324 1.00002 11.4161 1.70822 12.7124 2.99149L13.7649 4.03457L14.5003 4.76336L15.2344 4.03457L16.2869 2.99149C16.9229 2.35825 17.6792 1.8562 18.5122 1.51438C19.3451 1.17256 20.2382 0.99774 21.1397 1.00002Z'
											stroke='white'
											strokeWidth='1.5'
										/>
									</svg>
								</button>
							</div>
							<div className='product-info__option'>
								<button ref={orderRef} className='button button-green'>
									Заказ в один клик
								</button>
							</div>
						</div>
						<div className='product-info__details'>
							<CopyCode bgcolor='white' code={'QL11147'} />
							<div className='product-info__text'>
								<p>
									Layer on style with the Air Max 97. The cracked leather and
									soft suede update the iconic design while the original look
									(inspired by Japanese bullet trains and water droplets) still
									takes centre stage. Easy-to-style colours let you hit the
									streets quickly.Layer on style with the Air Max 97. The
									cracked leather and soft suede update the iconic design while
									the original look (inspired by Japanese bullet trains and
									water droplets) still takes centre stage. Easy-to-style
									colours let you hit the streets quickly.
								</p>
							</div>
							<ul className='product-info__parameters'>
								<li className='product-info__parameter'>
									Материал: Верх - кожа; Подкладка - кожа, текстиль; Низ -
									резина
								</li>
								<li className='product-info__parameter'>
									Страна-производитель: Франция
								</li>
								<li className='product-info__parameter'>Классическая модель</li>
								<li className='product-info__parameter'>
									Минималистичный дизайн
								</li>
								<li className='product-info__parameter'>
									Подкладка из кожи и текстиля
								</li>
								<li className='product-info__parameter'>Кожаная стелька</li>
								<li className='product-info__parameter'>
									Тисненый брендинг на подошве
								</li>
							</ul>
						</div>
						{testAccordionData.map((item, index) => {
							return (
								<Accordion key={index} title={item.title} text={item.text} />
							)
						})}
					</div>
				</div>
				{tooltip && (
					<div className='tooltip'>
						<div className='tooltip__info'>
							<div className='tooltip__title'>
								<span>Nike Air Max 97 SE</span>
							</div>
							<div className='tooltip__price'>
								<span>15.999 ₽</span>
							</div>
							<button ref={orderRef} className='button button-green'>
								Заказ в один клик
							</button>
						</div>
					</div>
				)}
			</div>
			<ProductsSlider title='Вам также понравится' />
		</div>
	)
}

export default ProductPage
