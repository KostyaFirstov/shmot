import React from 'react'
import ReviewCard from '../components/ReviewCard'
import { useAppDispatch } from '../redux/store'
import { useSelector } from 'react-redux'
import { fetchReviews, selectReviews } from '../redux/slices/reviews'

const Reviews = () => {
	const reviews = useSelector(selectReviews)
	const appDispatch = useAppDispatch()

	React.useEffect(() => {
		appDispatch(fetchReviews())
	}, [])

	return (
		<div className='reviews'>
			<div className='content__area'>
				<div className='reviews__wrapper wrapper'>
					{reviews.map(review => {
						return <ReviewCard key={review._id} {...review} />
					})}
				</div>
			</div>
		</div>
	)
}

export default Reviews
