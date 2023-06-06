import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import Menu from './Menu'
import Search from './Search'
import Account from './Account'
import Cart from './Cart'

const links = [
	{ link: '/men', name: 'Мужское' },
	{ link: '/women', name: 'Женское' },
	{ link: '/', name: 'Аксессуары' },
	{ link: '/', name: 'Дропы' },
	{ link: '/', name: 'Обзоры' },
	{ link: '/', name: 'Отзывы' },
	{ link: '/about', name: 'О нас' }
]

const Header = () => {
	const [menu, setMenu] = React.useState(false)
	const [search, setSearch] = React.useState(false)
	const [account, setAccount] = React.useState(false)
	const [cart, setCart] = React.useState(false)

	const openAccountRef = React.useRef<HTMLDivElement>(null)
	const accountRef = React.useRef<HTMLDivElement>(null)
	const cartRef = React.useRef<HTMLDivElement>(null)
	const bgRef = React.useRef<HTMLDivElement>(null)

	React.useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const _event = event.composedPath()

			if (bgRef.current && _event.includes(bgRef.current)) {
				setSearch(false)
				document.body.style.overflow = ''
			}

			// if (cartRef.current && openAccountRef.current) {
			// 	if (
			// 		!_event.includes(cartRef.current) &&
			// 		!_event.includes(openAccountRef.current)
			// 	) {
			// 		setCart(false)
			// 		console.log('work!')
			// 	}
			// }
		}

		document.body.addEventListener('click', handleClickOutside)
		return () => document.body.removeEventListener('click', handleClickOutside)
	}, [])

	const handleOpenMenu = (event: React.MouseEvent<HTMLLIElement>) => {
		// if (event.currentTarget.getAttribute('data-name') === 'Мужское') {
		// }

		setMenu(true)
	}

	const handleCloseMenu = () => {
		setMenu(false)
	}

	const handleToggleSearch = () => {
		if (!search) {
			setSearch(true)
			setAccount(false)
			setCart(false)
			document.body.style.overflow = 'hidden'
		} else {
			setSearch(false)
			document.body.style.overflow = ''
		}
	}

	const handleToggleAccount = () => {
		if (!account) {
			setAccount(true)
			setCart(false)
		} else {
			setAccount(false)
		}
	}

	const handleToggleCart = () => {
		if (!cart) {
			setCart(true)
			setAccount(false)
		} else {
			setCart(false)
		}
	}

	return (
		<>
			<div className='header'>
				<div className='header__wrapper wrapper'>
					<Logo />
					{search && <Search handleToggleSearch={handleToggleSearch} />}
					<ul className='header__links'>
						{links.map((link, index) => {
							return (
								<li
									key={index}
									data-name={link.name}
									onMouseEnter={handleOpenMenu}
									onMouseLeave={handleCloseMenu}
									className='header__link'
								>
									<Link to={link.link}>{link.name}</Link>
								</li>
							)
						})}
					</ul>
					<div className='header__options'>
						<div
							onClick={handleToggleSearch}
							className='header__option header__option-search'
						>
							<svg
								width='19'
								height='19'
								viewBox='0 0 19 19'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M11.212 13.546C10.166 14.1724 8.96921 14.5021 7.75001 14.5C6.8634 14.5012 5.9853 14.3272 5.16618 13.9879C4.34707 13.6486 3.60308 13.1508 2.97701 12.523C2.34924 11.8969 1.8514 11.1529 1.51212 10.3338C1.17284 9.51471 0.998797 8.63661 1.00001 7.75001C1.00001 5.88601 1.75501 4.19901 2.97701 2.97701C3.60308 2.34924 4.34707 1.8514 5.16618 1.51212C5.9853 1.17284 6.8634 0.998797 7.75001 1.00001C9.61401 1.00001 11.301 1.75501 12.523 2.97701C13.1508 3.60308 13.6486 4.34707 13.9879 5.16618C14.3272 5.9853 14.5012 6.8634 14.5 7.75001C14.5017 8.94741 14.1838 10.1236 13.579 11.157C13.062 12.039 13.145 13.145 13.868 13.868L17.721 17.721'
									stroke='#111111'
									strokeWidth='1.5'
								/>
							</svg>
						</div>
						<div
							ref={openAccountRef}
							onClick={handleToggleAccount}
							className='header__option header__option-account'
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
						</div>
						<div className='header__option'>
							<svg
								width='22'
								height='19'
								viewBox='0 0 22 19'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M15.794 0.750017C17.118 0.750017 18.362 1.26602 19.298 2.20102C20.2262 3.13093 20.7475 4.39113 20.7475 5.70502C20.7475 7.0189 20.2262 8.2791 19.298 9.20902L11 17.508L2.70096 9.20902C1.77307 8.27914 1.25195 7.01915 1.25195 5.70552C1.25195 4.39188 1.77307 3.13189 2.70096 2.20202C3.15999 1.74032 3.70604 1.37425 4.30751 1.12501C4.90897 0.875777 5.5539 0.748319 6.20496 0.750017C7.52896 0.750017 8.77296 1.26602 9.70896 2.20102L10.469 2.96102L11 3.49202L11.53 2.96102L12.29 2.20102C12.7492 1.73963 13.2953 1.37384 13.8967 1.12478C14.4982 0.87573 15.143 0.748353 15.794 0.750017Z'
									stroke='#111111'
									strokeWidth='1.5'
								/>
							</svg>
						</div>
						<div
							onClick={handleToggleCart}
							className='header__option header__option-cart'
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
						</div>
					</div>

					{account && (
						<Account
							accountRef={accountRef}
							handleToggleAccount={handleToggleAccount}
						/>
					)}

					{cart && (
						<Cart cartRef={cartRef} handleToggleCart={handleToggleCart} />
					)}
					{menu && (
						<Menu setMenu={e => setMenu(e)} handleCloseMenu={handleCloseMenu} />
					)}
				</div>
			</div>
			{search && <div ref={bgRef} className='bg-black'></div>}
		</>
	)
}

export default Header
