import React from 'react'
import { Link } from 'react-router-dom'

const ReviewCard = () => {
	return (
		<Link to='/review/Corduroy' className='review-card'>
			<div className='review-card__image'>
				<img src='/img/reviewCard01.jpg' alt='' />
			</div>
			<div className='review-card__info'>
				<div className='review-card__desc'>
					<span>Air Max 1</span>
				</div>
				<div className='review-card__title'>
					<h2>Corduroy</h2>
				</div>
			</div>
		</Link>
	)
}

export default ReviewCard
