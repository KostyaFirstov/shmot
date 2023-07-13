import React from 'react'
import { FiltersParams } from '../../redux/slices/filters'
import { LoadingProperty } from '../../redux/slices/auth'
import { Link } from 'react-router-dom'
import СategoryCatalogSkeleton from './СategoryCatalogSkeleton'
import ErrorBlock from '../ErrorBlock'
import ContentLayout from '../../layouts/ContentLayout'

interface ICategoryCatalogProps {
	items: FiltersParams[]
	status: LoadingProperty
	link: string
}

const СategoryCatalog: React.FC<ICategoryCatalogProps> = ({
	items,
	status,
	link
}) => {
	return (
		<div className='categories'>
			<ContentLayout>
				<div className='categories__wrapper'>
					{status === LoadingProperty.STATUS_LOADING
						? [...Array(4)].map((item, index) => (
								<СategoryCatalogSkeleton key={index} />
						  ))
						: items.map((item, index) => (
								<Link
									key={index}
									to={`/${link}/${item.link}`}
									className='categories-item'
								>
									<div className='categories-item__image'>
										<img
											src={`http://localhost:5000${item.image}`}
											alt={item.name}
										/>
									</div>
									<div className='categories-item__name'>{item.name}</div>
								</Link>
						  ))}
				</div>
				{status === LoadingProperty.STATUS_ERROR && (
					<ErrorBlock
						title='Ошибка..'
						desc={`Не удалось загрузить ${
							link === 'brands' ? 'бренды' : 'категории'
						}`}
					/>
				)}
			</ContentLayout>
		</div>
	)
}

export default СategoryCatalog
