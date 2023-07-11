import React from 'react'
import { Link } from 'react-router-dom'
import { ReviewParams } from '../../redux/slices/reviews'

const ReviewsCard: React.FC<ReviewParams> = ({ title, desc, img }) => {
	return (
		<Link to={`/reviews/${title}`} className='review-card'>
			<div className='review-card__image'>
				<img src={`http://localhost:5000${img[0]}`} alt='' />
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

export default ReviewsCard
