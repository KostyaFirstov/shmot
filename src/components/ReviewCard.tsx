import React from 'react'
import { Link } from 'react-router-dom'
import { ReviewParams } from '../redux/slices/reviews'

const ReviewCard: React.FC<ReviewParams> = ({
	title,
	desc,
	text,
	tags,
	img,
	createdAt,
	viewsCount
}) => {
	return (
		<Link to={`/review/${title}`} className='review-card'>
			<div className='review-card__image'>
				<img src='/img/reviewCard01.jpg' alt='' />
			</div>
			<div className='review-card__info'>
				<div className='review-card__desc'>
					<span>{desc}</span>
				</div>
				<div className='review-card__title'>
					<h2>{title}</h2>
				</div>
			</div>
		</Link>
	)
}

export default ReviewCard
