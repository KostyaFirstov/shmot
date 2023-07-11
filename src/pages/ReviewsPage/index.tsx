import React from 'react'
import { useParams } from 'react-router-dom'
import { ReviewParams } from '../../redux/slices/reviews'
import TimeAgo from 'react-timeago'
import axios from '../../axios'
import ReviewsPageSkeleton from './ReviewsPageSkeleton'

const ReviewPage = () => {
	const [review, setReview] = React.useState<ReviewParams>()
	const [isLoading, setIsLoading] = React.useState(true)
	const params = useParams()

	React.useEffect(() => {
		const fetchProduct = async () => {
			setIsLoading(true)
			try {
				const { data } = await axios.get(`/api/reviews/${params.title}`)
				setReview(data)
				setIsLoading(false)
			} catch (error) {
				console.log(error)
				setIsLoading(false)
			}
		}

		fetchProduct()
	}, [])

	return (
		<div className='review-page'>
			<div className='content__area'>
				<div className='review-page__wrapper wrapper'>
					{isLoading ? (
						<ReviewsPageSkeleton />
					) : (
						<>
							<div className='review-page__image'>
								<img src={`http://localhost:5000${review?.img[0]}`} alt='' />
							</div>
							<div className='review-page__header'>
								<div className='review-page__heading'>
									<div className='review-page__title'>
										<h2>{review?.title}</h2>
									</div>
									<div className='review-page__desc'>
										<h3>{review?.desc}</h3>
									</div>
								</div>
								<div className='review-page__details'>
									<div className='review-page__date'>
										<TimeAgo date={review ? review.createdAt : ''} />
									</div>
									<div
										className='review-page__viewscount'
										title={`Просмотров ${review?.viewsCount}`}
									>
										<span>{review?.viewsCount}</span>
										<svg
											width='20'
											height='14'
											viewBox='0 0 20 14'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												fill-rule='evenodd'
												clip-rule='evenodd'
												d='M10 4.25C8.48117 4.25 7.25 5.48117 7.25 7C7.25 8.51883 8.48117 9.75 10 9.75C11.5188 9.75 12.75 8.51883 12.75 7C12.75 5.48117 11.5188 4.25 10 4.25ZM9.08333 7C9.08333 6.49373 9.49373 6.08333 10 6.08333C10.5063 6.08333 10.9167 6.49373 10.9167 7C10.9167 7.50628 10.5063 7.91667 10 7.91667C9.49373 7.91667 9.08333 7.50628 9.08333 7Z'
												fill='black'
											/>
											<path
												fill-rule='evenodd'
												clip-rule='evenodd'
												d='M19.0105 6.34062C16.9132 2.55585 13.4942 0.583313 9.99967 0.583313C6.50513 0.583313 3.08614 2.55585 0.988869 6.34062C0.783848 6.71068 0.781318 7.1669 0.979941 7.53861C3.04385 11.4012 6.48224 13.4166 9.99967 13.4166C13.5171 13.4166 16.9555 11.4012 19.0194 7.53861C19.218 7.1669 19.2155 6.71068 19.0105 6.34062ZM9.99967 11.5833C7.30556 11.5833 4.53682 10.0913 2.75043 6.95295C4.56258 3.87977 7.31677 2.41665 9.99967 2.41665C12.6826 2.41665 15.4368 3.87977 17.2489 6.95295C15.4625 10.0913 12.6938 11.5833 9.99967 11.5833Z'
												fill='black'
											/>
										</svg>
									</div>
								</div>
							</div>
							<div className='review-page__main'>
								<div className='review-page__tags'>
									{review?.tags.map(tag => (
										<div className='review-page__tag'>{tag}</div>
									))}
								</div>
								<div className='review-page__text'>
									<p>{review?.text}</p>
								</div>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	)
}

export default ReviewPage
