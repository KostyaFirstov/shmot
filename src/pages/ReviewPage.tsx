import React from 'react'
import { useParams } from 'react-router-dom'
import { ReviewParams } from '../redux/slices/reviews'
import axios from '../axios'

const ReviewPage = () => {
	const [review, setReview] = React.useState<ReviewParams>()
	const params = useParams()

	React.useEffect(() => {
		const fetchProduct = async () => {
			try {
				const { data } = await axios.get(`/api/reviews/${params.title}`)
				setReview(data)
			} catch (error) {
				console.log(error)
			}
		}

		fetchProduct()
	}, [])

	return (
		<div className='review-page'>
			<div className='content__area'>
				<div className='review-page__wrapper wrapper'>
					<div className='review-page__image'>
						<img src='/img/reviewCard01.jpg' alt='' />
					</div>
					<div className='review-page__info'>
						<div className='review-page__text'>{review?.text}</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ReviewPage
