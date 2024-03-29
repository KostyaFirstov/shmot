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
import ContentLayout from '../layouts/ContentLayout'

const Drops = () => {
	const drops = useSelector(selectDrops)
	const status = useSelector(selectDropsStatus)
	const appDispatch = useAppDispatch()

	React.useEffect(() => {
		appDispatch(fetchDrops())
	}, [])

	return (
		<ContentLayout>
			<div className='reviews__wrapper'>
				{status === LoadingProperty.STATUS_LOADING
					? [...Array(3)].map((card, index) => (
							<ReviewsCardSkeleton key={index} />
					  ))
					: drops.map(review => {
							return <DropsCard key={review._id} {...review} />
					  })}
			</div>
			{status === LoadingProperty.STATUS_ERROR && (
				<ErrorBlock title=' Упс, ошибка :(' desc='Не удалось загрузить дропы' />
			)}
		</ContentLayout>
	)
}

export default Drops
