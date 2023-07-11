import React from 'react'
import ReviewCard from '../components/ReviewsCard'
import { useAppDispatch } from '../redux/store'
import { useSelector } from 'react-redux'
import {
	fetchReviews,
	selectReviews,
	selectReviewsStatus
} from '../redux/slices/reviews'
import { LoadingProperty } from '../redux/slices/auth'
import ErrorBlock from '../components/ErrorBlock'
import ReviewsCardSkeleton from '../components/ReviewsCard/ReviewsCardSkeleton'

const Reviews = () => {
	const reviews = useSelector(selectReviews)
	const status = useSelector(selectReviewsStatus)
	const appDispatch = useAppDispatch()

	React.useEffect(() => {
		appDispatch(fetchReviews())
	}, [])

	return (
		<div className='reviews'>
			<div className='content__area'>
				<div className='reviews__wrapper wrapper'>
					{status === LoadingProperty.STATUS_LOADING
						? [...Array(3)].map((card, index) => (
								<ReviewsCardSkeleton key={index} />
						  ))
						: reviews.map(review => {
								return <ReviewCard key={review._id} {...review} />
						  })}
				</div>
				{status === LoadingProperty.STATUS_ERROR && (
					<ErrorBlock
						title=' Упс, ошибка :('
						desc='Не удалось загрузить обзоры'
					/>
				)}
			</div>
		</div>
	)
}

export default Reviews
