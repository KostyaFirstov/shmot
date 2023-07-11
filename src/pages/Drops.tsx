import React from 'react'
import { useAppDispatch } from '../redux/store'
import { useSelector } from 'react-redux'
import { LoadingProperty } from '../redux/slices/auth'
import {
	fetchDrops,
	selectDrops,
	selectDropsStatus
} from '../redux/slices/drops'
import ErrorBlock from '../components/ErrorBlock'
import DropsCard from '../components/DropsCard'
import ReviewsCardSkeleton from '../components/ReviewsCard/ReviewsCardSkeleton'

const Drops = () => {
	const drops = useSelector(selectDrops)
	const status = useSelector(selectDropsStatus)
	const appDispatch = useAppDispatch()

	React.useEffect(() => {
		appDispatch(fetchDrops())
	}, [])

	return (
		<div className='drops'>
			<div className='content__area'>
				<div className='reviews__wrapper wrapper'>
					{status === LoadingProperty.STATUS_LOADING
						? [...Array(3)].map((card, index) => (
								<ReviewsCardSkeleton key={index} />
						  ))
						: drops.map(review => {
								return <DropsCard key={review._id} {...review} />
						  })}
				</div>
				{status === LoadingProperty.STATUS_ERROR && (
					<ErrorBlock
						title=' Упс, ошибка :('
						desc='Не удалось загрузить дропы'
					/>
				)}
			</div>
		</div>
	)
}

export default Drops
