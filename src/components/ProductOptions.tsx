import React from 'react'
import { ProductParams } from '../redux/slices/products'
import { useDispatch, useSelector } from 'react-redux'
import { addCartItem, minusItem, selectCartItems } from '../redux/slices/cart'

interface IProductOptions {
	activeSize: number
	product: ProductParams
}

const ProductOptions: React.FC<IProductOptions> = ({ activeSize, product }) => {
	const dispatch = useDispatch()

	const isAdded = useSelector(selectCartItems).find(
		item => item._id === product?._id && item.size === product.sizes[activeSize]
	)

	return (
		<div className='product-info__options'>
			<div className='product-info__option'>
				{isAdded ? (
					<div className='product-info__option-added'>
						<button
							onClick={() =>
								dispatch(
									addCartItem({
										...product,
										count: 1,
										size: product.sizes[activeSize]
									})
								)
							}
							className='button button-black product-info__cart'
						>
							{isAdded.count} в корзине <br />
						</button>
						<div className='product-info__counter cart__item-count'>
							<button
								onClick={() => dispatch(minusItem(isAdded))}
								className='button product-info__counter-button button-black'
							>
								<svg
									width='10'
									height='10'
									viewBox='0 0 10 10'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M5.76 5.92001H3.84H0.96C0.42984 5.92001 -2.32e-08 5.49017 0 4.96001C2.31e-08 4.42985 0.42984 4.00001 0.96 4.00001L3.84 4L5.76 4.00001H8.64C9.17016 4.00001 9.6 4.42985 9.6 4.96001C9.6 5.49017 9.17016 5.92001 8.64 5.92001H5.76Z'
										fill='white'
									/>
								</svg>
							</button>
							<button
								onClick={() => dispatch(addCartItem(isAdded))}
								className='button product-info__counter-button button-black'
							>
								<svg
									width='10'
									height='10'
									viewBox='0 0 10 10'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z'
										fill='white'
									/>
									<path
										d='M5.76 5.92001H3.84H0.96C0.42984 5.92001 -2.32e-08 5.49017 0 4.96001C2.31e-08 4.42985 0.42984 4.00001 0.96 4.00001L3.84 4L5.76 4.00001H8.64C9.17016 4.00001 9.6 4.42985 9.6 4.96001C9.6 5.49017 9.17016 5.92001 8.64 5.92001H5.76Z'
										fill='white'
									/>
								</svg>
							</button>
						</div>
					</div>
				) : (
					<button
						onClick={() =>
							dispatch(
								addCartItem({
									...product,
									count: 1,
									size: product.sizes[activeSize]
								})
							)
						}
						className='button button-black product-info__cart'
					>
						Добавить в корзину <br /> {product.sizes[activeSize]}
					</button>
				)}
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
		</div>
	)
}

export default ProductOptions
