import React from 'react'
import { CategoriesParams } from '../redux/slices/categories'
import { selectBrand, selectCategory } from '../redux/slices/filter'
import { useSelector } from 'react-redux'

interface FiltersProps {
	title: string
	list: CategoriesParams[]
	handleFilter: (value: string) => void
}

const Filters: React.FC<FiltersProps> = ({ title, list, handleFilter }) => {
	const brand = useSelector(selectBrand)
	const category = useSelector(selectCategory)

	return (
		<div className='filters__row'>
			<div className='filters__title'>{title}</div>
			<ul className='filters__list'>
				{list.map((item, index) => {
					return (
						<li
							key={index}
							onClick={() => handleFilter(item.link)}
							className={`${
								category.toLowerCase() === item.link.toLowerCase()
									? 'active'
									: '' || brand.toLowerCase() === item.link.toLowerCase()
									? 'active'
									: ''
							} filters__item`}
						>
							{item.name}
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Filters
