import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'
import DropdownLinks from '../DropdownLinks'
import Search from '../Search'
import Account from '../Account'
import Cart from '../CartDrop'
import { useSelector } from 'react-redux'
import {
	fetchBrands,
	fetchCategories,
	selectRequested
} from '../../redux/slices/filters'
import { useAppDispatch } from '../../redux/store'
import Menu from '../Menu'
import HeaderLinks from './HeaderLinks'

const Header = () => {
	const [menu, setMenu] = React.useState(false)
	const [dropdown, setDropdown] = React.useState(false)
	const [search, setSearch] = React.useState(false)

	const menuOpenRef = React.useRef<HTMLButtonElement>(null)
	const cartOpenRef = React.useRef<HTMLButtonElement>(null)
	const searchOpenRef = React.useRef<HTMLButtonElement>(null)
	const searchRef = React.useRef<HTMLDivElement>(null)

	const requested = useSelector(selectRequested)
	const appDispatch = useAppDispatch()

	React.useEffect(() => {
		appDispatch(fetchCategories())
		appDispatch(fetchBrands())
	}, [])

	React.useEffect(() => {
		localStorage.setItem('requested', JSON.stringify(requested))
	}, [requested])

	React.useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const _event = event.composedPath()

			if (
				searchOpenRef.current &&
				!_event.includes(searchOpenRef.current) &&
				searchRef.current &&
				!_event.includes(searchRef.current)
			) {
				setSearch(false)
				document.body.style.overflow = ''
			}
		}

		document.body.addEventListener('click', handleClickOutside)
		return () => document.body.removeEventListener('click', handleClickOutside)
	}, [])

	const handleToggleSearch = () => {
		if (!search) {
			setSearch(true)
			document.body.style.overflow = 'hidden'
		} else {
			setSearch(false)
			document.body.style.overflow = ''
		}
	}

	const handleToggleMenu = () => {
		if (!menu) {
			setMenu(true)
			document.body.style.overflow = 'hidden'
		} else {
			setMenu(false)
			document.body.style.overflow = ''
		}
	}

	return (
		<>
			<div className='header'>
				<div className='header__wrapper wrapper'>
					<div className='header__menu'>
						<button ref={menuOpenRef} onClick={handleToggleMenu}>
							<svg
								width='32'
								height='19'
								viewBox='0 0 32 19'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<rect width='32' height='2.90526' rx='1.45263' fill='#111111' />
								<rect
									y='7.74805'
									width='32'
									height='2.90526'
									rx='1.45263'
									fill='#23CFC9'
								/>
								<rect
									y='15.4941'
									width='32'
									height='2.90526'
									rx='1.45263'
									fill='#111111'
								/>
							</svg>
						</button>
					</div>
					<Logo />
					<ul className='header__links'>
						<HeaderLinks setDropdown={e => setDropdown(e)} />
					</ul>
					<div className='header__options'>
						<div
							onClick={handleToggleSearch}
							className='header__option header__option-search'
						>
							<button ref={searchOpenRef} className='header__option-btn'>
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
							<Cart cartOpenRef={cartOpenRef} />
						</div>
					</div>
					{search && (
						<Search
							searchRef={searchRef}
							handleToggleSearch={handleToggleSearch}
						/>
					)}
					{dropdown && <DropdownLinks setDropdown={e => setDropdown(e)} />}
				</div>
			</div>
			{menu && (
				<Menu
					menuOpenRef={menuOpenRef}
					handleToggleMenu={handleToggleMenu}
					setDropdown={e => setDropdown(e)}
				/>
			)}
			{search && <div className='bg-black'></div>}
		</>
	)
}

export default Header
