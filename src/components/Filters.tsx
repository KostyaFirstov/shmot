import React from 'react'
import { CategoriesParams } from '../redux/slices/categories'

interface FiltersProps {
	title: string
	list: CategoriesParams[]
	handleFilter: (value: string) => void
}

const Filters: React.FC<FiltersProps> = ({ title, list, handleFilter }) => {
	return (
		<div className='filters__row'>
			<div className='filters__title'>{title}</div>
			<ul className='filters__list'>
				{list.map((item, index) => {
					return (
						<li
							key={index}
							onClick={() => handleFilter(item.link)}
							className='filters__item'
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
