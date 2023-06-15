import React from 'react'
import { Link } from 'react-router-dom'
import {
	FetchFiltersParams,
	selectBrands,
	selectCategories
} from '../redux/slices/filters'
import { useSelector } from 'react-redux'

interface IMenuProps {
	handleCloseMenu: () => void
	setMenu: (value: boolean) => void
}

const Menu: React.FC<IMenuProps> = ({ handleCloseMenu, setMenu }) => {
	const categories = useSelector(selectCategories)
	const brands = useSelector(selectBrands)

	return (
		<div
			onMouseEnter={() => setMenu(true)}
			onMouseLeave={handleCloseMenu}
			className='menu'
		>
			<div className='menu__wrapper wrapper'>
				<div className='menu__columns'>
					<div className='menu__column menu__column-brands'>
						<div className='menu__column-title'>
							<Link to='/'>ВСЕ БРЕНДЫ</Link>
						</div>
						<ul className='menu__column-links'>
							{brands.map((item, index) => {
								return (
									<li key={index} className='menu__column-link'>
										<Link to={`/${item.link}`}>{item.name}</Link>
									</li>
								)
							})}
						</ul>
					</div>
					<div className='menu__column menu__column-categories'>
						<div className='menu__column-title'>
							<Link to='/'>ВСЕ КАТЕГОРИИ</Link>
						</div>
						<ul className='menu__column-links'>
							{categories.map((item, index) => {
								return (
									<li key={index} className='menu__column-link'>
										<Link to={`/${item.link}`}>{item.name}</Link>
									</li>
								)
							})}
						</ul>
					</div>
					<div className='menu__column menu__column-clothes'>
						<img src='/img/womens.jpg' alt='womens' />
					</div>
					<div className='menu__column menu__column-shoes'>
						<img src='/img/womens_footwear.jpg' alt='womens' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Menu
