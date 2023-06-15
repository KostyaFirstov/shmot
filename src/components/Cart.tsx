import React from 'react'
import { Link } from 'react-router-dom'

interface ICartProps {}

const Cart: React.FC<ICartProps> = () => {
	const [cart, setCart] = React.useState(false)
	const cartRef = React.useRef<HTMLDivElement>(null)

	React.useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const _event = event.composedPath()

			if (cartRef.current && !_event.includes(cartRef.current)) {
				setCart(false)
			}
		}

		document.addEventListener('click', handleClickOutside)
		return () => document.removeEventListener('click', handleClickOutside)
	}, [])

	return (
		<div ref={cartRef}>
			<button className='header__option-btn' onClick={() => setCart(!cart)}>
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
			</button>
			{cart && (
				<div className='cart-dropdown'>
					<div className='cart-dropdown__wrapper'>
						<div className='cart-dropdown__title'>Корзина</div>
						<div className='cart-dropdown__clear'>
							<div className='cart-dropdown__text'>
								<p>Вы пока что еще ничего не добавили в корзину</p>
							</div>
							<div className='cart-dropdown__link'>
								<Link className='button button-black' to='/cart'>
									Перейти в корзину
								</Link>
							</div>
							<div className='cart-dropdown__link'>
								<Link className='button button-black' to='/'>
									Перейти в каталог
								</Link>
							</div>
						</div>
						<div className='cart-dropdown__items'>
							<div className='cart-dropdown__item'>
								{/* <div className='cart-dropdown__img'>
									<img src='/img/swiper-image01.jpg' alt='' />
								</div> */}
							</div>
						</div>
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
				</div>
			)}
		</div>
	)
}

export default Cart
