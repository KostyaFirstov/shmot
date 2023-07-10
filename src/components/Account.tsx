import React from 'react'
import { Link } from 'react-router-dom'
import { logout, selectIsAuth } from '../redux/slices/auth'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../redux/store'

interface IAccountProps {}

const Account: React.FC<IAccountProps> = () => {
	const dispatch = useAppDispatch()
	const isAuth = useSelector(selectIsAuth)
	const [account, setAccount] = React.useState(false)
	const accountRef = React.useRef<HTMLDivElement>(null)

	React.useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const _event = event.composedPath()

			if (accountRef.current && !_event.includes(accountRef.current)) {
				setAccount(false)
			}
		}

		document.addEventListener('click', handleClickOutside)
		return () => document.removeEventListener('click', handleClickOutside)
	}, [])

	return (
		<div ref={accountRef}>
			<button
				className='header__option-btn'
				onClick={() => setAccount(!account)}
			>
				<svg
					width='18'
					height='20'
					viewBox='0 0 18 20'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M17 19C17 16.2386 13.4183 14 9 14C4.58172 14 1 16.2386 1 19M9 11C6.23858 11 4 8.7614 4 6C4 3.23858 6.23858 1 9 1C11.7614 1 14 3.23858 14 6C14 8.7614 11.7614 11 9 11Z'
						stroke='#111111'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			</button>
			{account && (
				<div className='account-dropdown'>
					<div className='account-dropdown__wrapper'>
						<div className='account-dropdown__title'>Аккаунт</div>
						<div className='account-dropdown__image'>
							<img src='/img/account-img.png' alt='' />
						</div>
						{isAuth ? (
							<div className='account-dropdown__rows account-dropdown-login'>
								<div className='account-dropdown__row'>
									<Link
										onClick={() => setAccount(false)}
										to='/account'
										className='button button-black'
									>
										Мой Аккаунт
									</Link>
								</div>
								<div className='account-dropdown__row'>
									<button
										onClick={() => dispatch(logout())}
										className='button button button-green'
									>
										Выйти
									</button>
								</div>
							</div>
						) : (
							<div className='account-dropdown__rows account-dropdown-unlogin'>
								<div className='account-dropdown__row'>
									<Link
										onClick={() => setAccount(false)}
										to='/login'
										className='button button-black'
									>
										Войти
									</Link>
								</div>
								<div className='account-dropdown__row'>
									<Link
										onClick={() => setAccount(false)}
										to='/register'
										className='button button button-green'
									>
										Зарегистрироваться
									</Link>
								</div>
							</div>
						)}
						<button
							onClick={() => setAccount(false)}
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

export default Account
