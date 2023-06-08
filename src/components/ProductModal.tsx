import React from 'react'
import Sizes, { exampleSizes } from './Sizes'
import CopyCode from './CopyCode'
import ProductImageSlider from './ProductImageSlider'
import { Link } from 'react-router-dom'

interface IProductModal {
	hanldeSpoiler: () => void
	spoilerRef: React.RefObject<HTMLDivElement>
}

const ProductModal: React.FC<IProductModal> = ({
	spoilerRef,
	hanldeSpoiler
}) => {
	const [activeSize, setActiveSize] = React.useState(0)

	return (
		<div className='product-modal'>
			<div ref={spoilerRef} className='product-modal__wrapper'>
				<div className='product-modal__images'>
					<ProductImageSlider />
				</div>
				<div className='product-modal__info'>
					<div className='product-modal__header'>
						<div className='product-modal__title'>
							<h2>Nike Air Max 97 SE</h2>
						</div>
						<div className='product-modal__desc desc'>
							<span>Men's Shoes</span>
						</div>
						<div className='product-modal__price'>
							<span>15.999 ₽</span>
						</div>
					</div>
					<Sizes activeSize={activeSize} setActiveSize={setActiveSize} />
					<CopyCode bgcolor='black' code={'QL11147'} />
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
							<button className='button button-green'>Заказ в один клик</button>
						</div>
						<div className='product-modal__link'>
							<Link className='' to=''>
								Перейти на страницу товара
							</Link>
						</div>
					</div>
				</div>
				<button onClick={hanldeSpoiler} className='product-modal__close'>
					<svg
						width='19'
						height='19'
						viewBox='0 0 19 19'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M18 18L9.5 9.5M9.5 9.5L1 1M9.5 9.5L18 1M9.5 9.5L1 18'
							stroke='#111111'
							stroke-width='1.5'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
				</button>
			</div>
		</div>
	)
}

export default ProductModal
