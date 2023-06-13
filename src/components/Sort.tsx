import React from 'react'
import { SortPropertyEnum } from '../redux/slices/sort'

const Sort = () => {
	const sortList = [
		{ name: 'Популярности ↑', sortProperty: SortPropertyEnum.RATING_DESC },
		{ name: 'Популярности ↓', sortProperty: SortPropertyEnum.RATING_ASC },
		{ name: 'Цене ↑', sortProperty: SortPropertyEnum.PRICE_DESC },
		{ name: 'Цене ↓', sortProperty: SortPropertyEnum.PRICE_ASC },
		{ name: 'Новизне ↑', sortProperty: SortPropertyEnum.TITLE_DESC },
		{ name: 'Новизне ↓', sortProperty: SortPropertyEnum.TITLE_ASC }
	]
	const [sortValue, setSortValue] = React.useState(0)

	const hanldeSortValue = () => {
		setSortValue()
	}

	return (
		<div className='sort'>
			<div className='sort__title'>
				<svg
					width='14'
					height='14'
					viewBox='0 0 14 14'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M1.3744 3.76303C1.77168 3.37938 2.40476 3.39042 2.78841 3.7877L8.34569 9.54243L6.90699 10.9318L1.34971 5.17703C0.966061 4.77975 0.977121 4.14667 1.3744 3.76303Z'
						fill='black'
					/>
					<path
						d='M5.6543 9.54199L11.2116 3.78726C11.5952 3.38998 12.2283 3.37894 12.6256 3.76258C13.0229 4.14623 13.0339 4.77931 12.6503 5.17659L7.09299 10.9313L5.6543 9.54199Z'
						fill='black'
					/>
				</svg>
				Сортировать по <span>{sortList[sortValue]}</span>
			</div>
			<div className='sort__modal'>
				<ul className='sort__list'>
					{sortList.map((item, index) => {
						return (
							<li key={index} className='sort__item'>
								{item}
							</li>
						)
					})}
					<li className='sort__item'>Популярности ↑</li>
					<li className='sort__item'>Популярности ↓</li>
					<li className='sort__item'>Цене ↑</li>
					<li className='sort__item'>Цене ↓</li>
					<li className='sort__item'>Новизне ↑</li>
					<li className='sort__item'>Новизне ↓</li>
				</ul>
			</div>
		</div>
	)
}

export default Sort
