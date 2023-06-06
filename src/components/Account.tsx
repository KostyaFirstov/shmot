import React from 'react'
import { Link } from 'react-router-dom'

interface IAccountProps {
	handleToggleAccount: () => void
	accountRef: React.RefObject<HTMLDivElement>
}

const Account: React.FC<IAccountProps> = ({ handleToggleAccount }) => {
	return (
		<div className='account-dropdown'>
			<div className='account-dropdown__wrapper'>
				<div className='account-dropdown__title'>Аккаунт</div>
				<div className='account-dropdown__image'>
					<img src='/img/account-img.png' alt='' />
				</div>
				<div className='account-dropdown__rows'>
					<div className='account-dropdown__row'>
						<button className='button button-black'>Войти</button>
					</div>
					<div className='account-dropdown__row'>
						<button className='button button button-green'>
							Зарегистрироваться
						</button>
					</div>
					<div className='account-dropdown__row'>
						<p>
							Забыли пароль? <Link to='/'>Восстановить</Link>
						</p>
					</div>
				</div>
				<button onClick={handleToggleAccount} className='cart-dropdown__close'>
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

export default Account
