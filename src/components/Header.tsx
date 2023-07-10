import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import Menu from './Menu'
import Search from './Search'
import Account from './Account'
import Cart from './Cart'
import { useSelector } from 'react-redux'
import {
	fetchBrands,
	fetchCategories,
	selectRequested
} from '../redux/slices/filters'
import { useAppDispatch } from '../redux/store'

const links = [
	{ link: '/catalog?gender=men', name: 'Мужское' },
	{ link: '/catalog?gender=women', name: 'Женское' },
	{ link: '/', name: 'Аксессуары' },
	{ link: '/reviews', name: 'Обзоры' },
	{ link: '/', name: 'Дропы' },
	{ link: '/about', name: 'О нас' }
]

const Header = () => {
	const [menu, setMenu] = React.useState(false)
	const [search, setSearch] = React.useState(false)
	const bgRef = React.useRef<HTMLDivElement>(null)
	const requested = useSelector(selectRequested)
	const appDispatch = useAppDispatch()

	React.useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const _event = event.composedPath()

			if (bgRef.current && _event.includes(bgRef.current)) {
				setSearch(false)
				document.body.style.overflow = ''
			}
		}

		document.body.addEventListener('click', handleClickOutside)
		return () => document.body.removeEventListener('click', handleClickOutside)
	}, [])

	React.useEffect(() => {
		appDispatch(fetchCategories())
		appDispatch(fetchBrands())
	}, [])

	React.useEffect(() => {
		localStorage.setItem('requested', JSON.stringify(requested))
	}, [requested])

	const handleToggleSearch = () => {
		if (!search) {
			setSearch(true)
			document.body.style.overflow = 'hidden'
		} else {
			setSearch(false)
			document.body.style.overflow = ''
		}
	}

	const handleOpenMenu = (event: React.MouseEvent<HTMLLIElement>) => {
		const eventAttribute = event.currentTarget.getAttribute('data-name')
		if (
			eventAttribute === 'Мужское' ||
			eventAttribute === 'Женское' ||
			eventAttribute === 'Аксессуары'
		) {
			setMenu(true)
		}
	}

	const handleCloseMenu = () => {
		setMenu(false)
	}

	return (
		<>
			<div className='header'>
				<div className='header__wrapper wrapper'>
					<Logo />
					<ul className='header__links'>
						{links.map((link, index) => {
							return (
								<li
									key={index}
									data-name={link.name}
									onMouseEnter={handleOpenMenu}
									onMouseLeave={handleCloseMenu}
									onClick={handleCloseMenu}
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
							<button className='header__option-btn'>
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
							</button>
						</div>
						<div className='header__option header__option-account'>
							<Account />
						</div>
						<div className='header__option header__option-cart'>
							<Cart />
						</div>
					</div>
					{search && <Search handleToggleSearch={handleToggleSearch} />}
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
