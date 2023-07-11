import React from 'react'
import { useSelector } from 'react-redux'
import { selectCategories, selectFiltersStatus } from '../redux/slices/filters'
import { Link } from 'react-router-dom'

const Categories = () => {
	const categories = useSelector(selectCategories)
	const status = useSelector(selectFiltersStatus)

	return (
		<div className='categories'>
			<div className='content__area'>
				<div className='categories__wrapper wrapper'>
					{categories.map((category, index) => (
						<Link
							key={index}
							to={`/categories/${category.link}`}
							className='categories__item'
						>
							<div className='categories__image'>
								<img src={`http://localhost:5000${category.image}`} alt='' />
							</div>
							<div className='categories__name'>{category.name}</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}

export default Categories
