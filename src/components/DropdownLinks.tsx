import React from 'react'
import { Link } from 'react-router-dom'
import {
	selectBrands,
	selectCategories,
	selectFiltersStatus
} from '../redux/slices/filters'
import { useSelector } from 'react-redux'
import { LoadingProperty } from '../redux/slices/auth'
import FiltersSkeleton from './Filters/FiltersSkeleton'

interface IDropdownLinksProps {
	setDropdown: (value: boolean) => void
	handleCloseDropdown: () => void
}

const DropdownLinks: React.FC<IDropdownLinksProps> = ({
	handleCloseDropdown,
	setDropdown
}) => {
	const categories = useSelector(selectCategories)
	const brands = useSelector(selectBrands)
	const status = useSelector(selectFiltersStatus)

	return (
		<div
			onMouseEnter={() => setDropdown(true)}
			onMouseLeave={handleCloseDropdown}
			className='menu'
		>
			<div className='menu__wrapper wrapper'>
				<div className='menu__columns'>
					<div className='menu__column menu__column-brands'>
						<div className='menu__column-title'>
							<Link to='/brands' onClick={handleCloseDropdown}>
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
												onClick={handleCloseDropdown}
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
							<Link to='/categories' onClick={handleCloseDropdown}>
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
												onClick={handleCloseDropdown}
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

export default DropdownLinks
