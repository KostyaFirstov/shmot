import React from 'react'
import { Link } from 'react-router-dom'
import { DropParams } from '../redux/slices/drops'

const DropsCard: React.FC<DropParams> = ({ title, desc, img }) => {
	return (
		<Link to={`/drops/${title}`} className='review-card'>
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

export default DropsCard
