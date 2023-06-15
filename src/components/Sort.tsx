import React from 'react'
import {
	SortPropertyEnum,
	selectSort,
	setSortValue
} from '../redux/slices/filters'
import { useDispatch, useSelector } from 'react-redux'

const sortList = [
	{ name: 'популярности ↑', sortProperty: SortPropertyEnum.POPULAR_DESC },
	{ name: 'популярности ↓', sortProperty: SortPropertyEnum.POPULAR_ASC },
	{ name: 'цене ↑', sortProperty: SortPropertyEnum.PRICE_DESC },
	{ name: 'цене ↓', sortProperty: SortPropertyEnum.PRICE_ASC },
	{ name: 'новизне ↑', sortProperty: SortPropertyEnum.NEW_DESC },
	{ name: 'новизне ↓', sortProperty: SortPropertyEnum.NEW_ASC }
]

const Sort = () => {
	const [sortModal, setSortModal] = React.useState(false)

	const dispatch = useDispatch()
	const sortValue = useSelector(selectSort)

	const hanldeSortValue = (i: number) => {
		dispatch(setSortValue(sortList[i]))
		setSortModal(false)
	}

	const hanldeSortModal = () => {
		setSortModal(prev => !prev)
	}

	return (
		<div className='sort'>
			<div onClick={hanldeSortModal} className='sort__title'>
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
				Сортировать по <span>{sortValue}</span>
			</div>
			{sortModal && (
				<div className='sort__modal'>
					<ul className='sort__list'>
						{sortList.map((item, index) => {
							return (
								<li
									onClick={() => hanldeSortValue(index)}
									key={index}
									className='sort__item'
								>
									{item.name}
								</li>
							)
						})}
					</ul>
				</div>
			)}
		</div>
	)
}

export default Sort
