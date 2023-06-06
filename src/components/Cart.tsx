import React from 'react'
import { Link } from 'react-router-dom'

interface ICartProps {
	handleToggleCart: () => void
	cartRef: React.RefObject<HTMLDivElement>
}

const Cart: React.FC<ICartProps> = ({ cartRef, handleToggleCart }) => {
	return (
		<div ref={cartRef} className='cart-dropdown'>
			<div className='cart-dropdown__wrapper'>
				<div className='cart-dropdown__title'>Корзина</div>
				<div className='cart-dropdown__clear'>
					<div className='cart-dropdown__text'>
						<p>Вы пока что еще ничего не добавили в корзину</p>
					</div>
					<div className='cart-dropdown__link'>
						<Link className='button button-black' to='/'>
							Перейти в каталог
						</Link>
					</div>
				</div>
				<button onClick={handleToggleCart} className='cart-dropdown__close'>
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
	)
}

export default Cart
