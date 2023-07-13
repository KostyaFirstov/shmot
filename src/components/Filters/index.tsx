import React from 'react'
import { FiltersParams, selectFiltersStatus } from '../../redux/slices/filters'
import { selectBrand, selectCategory } from '../../redux/slices/filters'
import { useSelector } from 'react-redux'
import { LoadingProperty } from '../../redux/slices/auth'
import FiltersSkeleton from './FiltersSkeleton'

interface FiltersProps {
	title: string
	list: FiltersParams[]
	handleFilter: (value: string) => void
}

const Filters: React.FC<FiltersProps> = ({ title, list, handleFilter }) => {
	const brand = useSelector(selectBrand)
	const category = useSelector(selectCategory)
	const status = useSelector(selectFiltersStatus)

	return (
		<div className='filters__row'>
			<div className='filters__title'>{title}</div>
			<ul className='filters__list'>
				{status === LoadingProperty.STATUS_LOADING
					? [...new Array(6)].map((item, index) => (
							<FiltersSkeleton key={index} />
					  ))
					: list.map((item, index) => {
							return (
								<li
									key={index}
									onClick={() => handleFilter(item.name)}
									className={`${
										category.toLowerCase() === item.name.toLowerCase()
											? 'active'
											: '' || brand.toLowerCase() === item.name.toLowerCase()
											? 'active'
											: ''
									} filters__item`}
								>
									{item.name}
								</li>
							)
					  })}
				{status === LoadingProperty.STATUS_ERROR && (
					<>Ошибка при загрузке параметров!</>
				)}
			</ul>
		</div>
	)
}

export default Filters
