import React from 'react'
import { Link } from 'react-router-dom'
import {
	addCartItem,
	minusItem,
	selectCartItems,
	selectCartTotal
} from '../redux/slices/cart'
import { useDispatch, useSelector } from 'react-redux'
import { useAppDispatch } from '../redux/store'
import { selectAccount, selectIsAuth } from '../redux/slices/auth'

interface ICartProps {
	cartOpenRef: React.RefObject<HTMLButtonElement>
}

const Cart: React.FC<ICartProps> = ({ cartOpenRef }) => {
	const [cart, setCart] = React.useState(false)
	const cartRef = React.useRef<HTMLDivElement>(null)

	const cartItems = useSelector(selectCartItems)
	const totalPrice = useSelector(selectCartTotal)
	const isAuth = useSelector(selectIsAuth)
	const account = useSelector(selectAccount)

	const dispatch = useDispatch()
	const appDispatch = useAppDispatch()

	React.useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const _event = event.composedPath()

			if (
				cartRef.current &&
				cartOpenRef.current &&
				!_event.includes(cartRef.current) &&
				!_event.includes(cartOpenRef.current)
			) {
				setCart(false)
			}
		}

		document.addEventListener('click', handleClickOutside)
		return () => document.removeEventListener('click', handleClickOutside)
	}, [])

	// React.useEffect(() => {
	// 	if (isAuth && account) {
	// 		const userId = account._id
	// 		const products = cartItems.map(product => {
	// 			const objProducts = { productId: product._id, quantity: product.count }
	// 			return objProducts
	// 		})

	// 		const resData = {
	// 			products: products
	// 		}

	// 		appDispatch(fetchPostCart({ userId, resData }))
	// 	}
	// }, [cartItems])

	return (
		<div>
			<button
				ref={cartOpenRef}
				className='header__option-btn header__option-btn-cart'
				onClick={() => setCart(!cart)}
			>
				<svg
					width='18'
					height='18'
					viewBox='0 0 18 18'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M5.25 5.25V3C5.25 2.40326 5.48705 1.83097 5.90901 1.40901C6.33097 0.987053 6.90326 0.75 7.5 0.75H10.5C11.0967 0.75 11.669 0.987053 12.091 1.40901C12.5129 1.83097 12.75 2.40326 12.75 3C12.75 3.59674 12.5129 4.16903 12.091 4.59099C11.669 5.01295 11.0967 5.25 10.5 5.25H0.75V13.5C0.75 14.4946 1.14509 15.4484 1.84835 16.1517C2.55161 16.8549 3.50544 17.25 4.5 17.25H13.5C14.4946 17.25 15.4484 16.8549 16.1517 16.1517C16.8549 15.4484 17.25 14.4946 17.25 13.5V5.25H14.5'
						stroke='#111111'
						strokeWidth='1.5'
					/>
				</svg>
				{cartItems.length > 0 && <span>{cartItems.length}</span>}
			</button>
			{cart && (
				<div
					className={`cart-dropdown ${cartItems.length > 0 ? 'active' : ''}`}
				>
					<div ref={cartRef} className='cart-dropdown__wrapper'>
						<div className='cart-dropdown__title'>Корзина</div>
						{cartItems.length === 0 ? (
							<div className='cart-dropdown__clear'>
								<div className='cart-dropdown__text'>
									<p>Вы пока что еще ничего не добавили в корзину</p>
								</div>
								<div className='cart-dropdown__link'>
									<Link
										onClick={() => setCart(false)}
										className='button button-black'
										to='/'
									>
										Перейти в каталог
									</Link>
								</div>
							</div>
						) : (
							<div className='cart-dropdown__full'>
								<div className='cart-dropdown__items'>
									{cartItems.map((item, index) => {
										return (
											<div key={index} className='cart-dropdown__item'>
												<div className='cart-dropdown__left'>
													<div className='cart-dropdown__img'>
														<img
															src={`http://localhost:5000${item.img[0]}`}
															alt={`${item.title}`}
														/>
													</div>
												</div>
												<div className='cart-dropdown__right'>
													<div className='cart-dropdown__info'>
														<div className='cart-dropdown__title'>
															<span>{item.title}</span>
														</div>
														<div className='cart-dropdown__desc'>
															<p>
																{item.desc} / {item.size}
															</p>
														</div>
														<div className='cart-dropdown__options'>
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
																<span className='cart-dropdown__options-count'>
																	{item.count}
																</span>
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
														</div>
													</div>
													<div className='cart-dropdown__price'>
														<span>{item.price} ₽</span>
													</div>
												</div>
											</div>
										)
									})}
								</div>
								<div className='cart-dropdown__footer'>
									<div className='cart-dropdown__footer-item'>
										<button
											onClick={() => setCart(false)}
											className='button button-black'
										>
											Оформить заказ на {totalPrice} ₽
										</button>
									</div>
									<div className='cart-dropdown__footer-item'>
										<Link
											onClick={() => setCart(false)}
											to='/cart'
											className='button button-green'
										>
											Перейти на страницу корзины
										</Link>
									</div>
								</div>
							</div>
						)}
						<button
							onClick={() => setCart(false)}
							className='cart-dropdown__close'
						>
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
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</button>
					</div>
					<div className='cart-dropdown__bg'></div>
				</div>
			)}
		</div>
	)
}

export default Cart
