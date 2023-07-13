import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	addCartItem,
	clearItems,
	minusItem,
	removeCartItem,
	selectCartItems,
	selectCartTotal
} from '../redux/slices/cart'
import ContentLayout from '../layouts/ContentLayout'

const CartPage = () => {
	const cartItems = useSelector(selectCartItems)
	const totalPrice = useSelector(selectCartTotal)

	const dispatch = useDispatch()

	return (
		<ContentLayout>
			<div className='cart__header'>
				<div className='cart__header-title'>
					<h2>Корзина ({cartItems.length})</h2>
				</div>
				<div className='cart__header-clear'>
					<button
						onClick={() => dispatch(clearItems())}
						className='button button-black'
					>
						<span>Очистить корзину</span> <br />
						<svg
							width='10'
							height='10'
							viewBox='0 0 10 10'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M6.35558 4.57588L4.83028 6.10118L2.54234 8.38912C2.12117 8.81029 1.43822 8.81029 1.01705 8.38912C0.59588 7.96794 0.59588 7.28499 1.01705 6.86382L3.30498 4.57588L4.83028 3.05059L7.11822 0.762654C7.53939 0.341483 8.22234 0.341483 8.64351 0.762654C9.06468 1.18383 9.06469 1.86678 8.64351 2.28795L6.35558 4.57588Z'
								fill='white'
							/>
							<path
								d='M4.57597 6.10118L3.05068 4.57589L0.762736 2.28795C0.341565 1.86678 0.341565 1.18383 0.762736 0.762654C1.18391 0.341483 1.86686 0.341483 2.28803 0.762654L4.57598 3.05059L6.10126 4.57589L8.3892 6.86383C8.81037 7.285 8.81037 7.96795 8.3892 8.38912C7.96803 8.81029 7.28508 8.81029 6.86391 8.38912L4.57597 6.10118Z'
								fill='white'
							/>
						</svg>
					</button>
				</div>
			</div>
			<div className='cart__container'>
				{cartItems.map((item, index) => {
					return (
						<div key={index} className='cart__item'>
							<div className='cart__item-image'>
								<img
									src={`http://localhost:5000${item.img[0]}`}
									alt={`${item.title}`}
								/>
							</div>
							<div className='cart__item-info'>
								<div className='cart__title'>
									<h2>{item.title}</h2>
								</div>
								<div className='cart__desc'>{item.desc}</div>
								<div className='cart__size'>{item.size}</div>
							</div>
							<div className='cart__item-count'>
								<button
									onClick={() => dispatch(minusItem(item))}
									className='button button-black'
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
								<strong>{item.count}</strong>
								<button
									onClick={() => dispatch(addCartItem(item))}
									className='button button-black'
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
							<div className='cart__item-price'>
								<strong>{item.price} ₽</strong>
							</div>
							<div
								onClick={() => dispatch(removeCartItem(item))}
								className='cart__item-remove'
							>
								<button className='button button-black'>
									<svg
										width='10'
										height='10'
										viewBox='0 0 10 10'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M6.35558 4.57588L4.83028 6.10118L2.54234 8.38912C2.12117 8.81029 1.43822 8.81029 1.01705 8.38912C0.59588 7.96794 0.59588 7.28499 1.01705 6.86382L3.30498 4.57588L4.83028 3.05059L7.11822 0.762654C7.53939 0.341483 8.22234 0.341483 8.64351 0.762654C9.06468 1.18383 9.06469 1.86678 8.64351 2.28795L6.35558 4.57588Z'
											fill='white'
										/>
										<path
											d='M4.57597 6.10118L3.05068 4.57589L0.762736 2.28795C0.341565 1.86678 0.341565 1.18383 0.762736 0.762654C1.18391 0.341483 1.86686 0.341483 2.28803 0.762654L4.57598 3.05059L6.10126 4.57589L8.3892 6.86383C8.81037 7.285 8.81037 7.96795 8.3892 8.38912C7.96803 8.81029 7.28508 8.81029 6.86391 8.38912L4.57597 6.10118Z'
											fill='white'
										/>
									</svg>
								</button>
							</div>
						</div>
					)
				})}
			</div>
			<div className='cart__footer'>
				<div className='cart__footer-totalprice'>{totalPrice} ₽</div>
			</div>
		</ContentLayout>
	)
}

export default CartPage
