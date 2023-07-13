import React from 'react'
import { Link } from 'react-router-dom'
import {
	FiltersParams,
	selectBrands,
	selectCategories,
	selectFiltersStatus
} from '../redux/slices/filters'
import { useSelector } from 'react-redux'
import { LoadingProperty } from '../redux/slices/auth'
import { stat } from 'fs'
import FiltersSkeleton from './Filters/FiltersSkeleton'

interface IMenuProps {
	handleCloseMenu: () => void
	setMenu: (value: boolean) => void
}

const Menu: React.FC<IMenuProps> = ({ handleCloseMenu, setMenu }) => {
	const categories = useSelector(selectCategories)
	const brands = useSelector(selectBrands)
	const status = useSelector(selectFiltersStatus)

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
							<Link to='/brands' onClick={handleCloseMenu}>
								ВСЕ БРЕНДЫ
							</Link>
						</div>
						<ul className='menu__column-links'>
							{status === LoadingProperty.STATUS_LOADING
								? [...new Array(6)].map((item, index) => (
										<FiltersSkeleton key={index} />
								  ))
								: brands.map((item, index) => {
										return (
											<li
												key={index}
												onClick={handleCloseMenu}
												className='menu__column-link'
											>
												<Link to={`/catalog?brands=${item.link}`}>
													{item.name}
												</Link>
											</li>
										)
								  })}
							{status === LoadingProperty.STATUS_ERROR && (
								<>Ошибка при загрузке брендов</>
							)}
						</ul>
					</div>
					<div className='menu__column menu__column-categories'>
						<div className='menu__column-title'>
							<Link to='/categories' onClick={handleCloseMenu}>
								ВСЕ КАТЕГОРИИ
							</Link>
						</div>
						<ul className='menu__column-links'>
							{status === LoadingProperty.STATUS_LOADING
								? [...new Array(6)].map((item, index) => (
										<FiltersSkeleton key={index} />
								  ))
								: categories.map((item, index) => {
										return (
											<li
												key={index}
												onClick={handleCloseMenu}
												className='menu__column-link'
											>
												<Link to={`/catalog?categories=${item.link}`}>
													{item.name}
												</Link>
											</li>
										)
								  })}
							{status === LoadingProperty.STATUS_ERROR && (
								<>Ошибка при загрузке категорий</>
							)}
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
