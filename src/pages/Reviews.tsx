import React from 'react'
import ReviewCard from '../components/ReviewCard'

const Reviews = () => {
	return (
		<div className='reviews'>
			<div className='content__area'>
				<div className='reviews__wrapper wrapper'>
					<ReviewCard />
					<ReviewCard />
					<ReviewCard />
					<ReviewCard />
					<ReviewCard />
					<ReviewCard />
				</div>
			</div>
		</div>
	)
}

export default Reviews
