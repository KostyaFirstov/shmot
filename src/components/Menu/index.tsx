import React from 'react'
import styles from './Menu.module.scss'
import HeaderLinks from '../Header/HeaderLinks'
import { useSelector } from 'react-redux'
import { selectIsAuth } from '../../redux/slices/auth'
import { Link } from 'react-router-dom'

interface MenuProps {
	menuOpenRef: React.RefObject<HTMLButtonElement>
	handleToggleMenu: () => void
	setDropdown: (value: boolean) => void
}

const Menu: React.FC<MenuProps> = ({
	menuOpenRef,
	handleToggleMenu,
	setDropdown
}) => {
	const menuWindowRef = React.useRef<HTMLDivElement>(null)
	const isAuth = useSelector(selectIsAuth)

	React.useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const _event = event.composedPath()

			if (
				menuWindowRef.current &&
				menuOpenRef.current &&
				!_event.includes(menuWindowRef.current) &&
				!_event.includes(menuOpenRef.current)
			) {
				handleToggleMenu()
			}
		}

		document.addEventListener('click', handleClickOutside)
		return () => document.removeEventListener('click', handleClickOutside)
	}, [])

	return (
		<div className={styles.menu__wrapper}>
			<div ref={menuWindowRef} className={styles.menu__window}>
				<div className={styles.menu__header}>
					<h3 className={styles.menu__title}>Каталог</h3>
				</div>
				<div className={styles.menu__main}>
					<div className={styles.menu__links} onClick={handleToggleMenu}>
						<HeaderLinks setDropdown={setDropdown} />
					</div>
				</div>
				<div className={styles.menu__footer}>
					<div className={styles.menu__btns}>
						{isAuth ? (
							<Link
								to='/account'
								onClick={handleToggleMenu}
								className='button button-black'
							>
								Мой аккаунт
							</Link>
						) : (
							<>
								<Link
									to='/login'
									onClick={handleToggleMenu}
									className='button button-black'
								>
									Вход
								</Link>
								<Link
									to='/register'
									onClick={handleToggleMenu}
									className='button button-green'
								>
									Регистрация
								</Link>
							</>
						)}
					</div>
				</div>
				<div className={styles.menu__close}>
					<button onClick={handleToggleMenu}>
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
							></path>
						</svg>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Menu
