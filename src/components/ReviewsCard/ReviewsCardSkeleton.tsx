import React from 'react'
import Skeleton from 'react-loading-skeleton'
import styles from './ReviewsCard.module.scss'
import 'react-loading-skeleton/dist/skeleton.css'

const ReviewsCardSkeleton = () => {
	return (
		<div className={styles.root}>
			<div className={styles.poster}>
				<Skeleton width={'100%'} height={'100%'} />
			</div>
			<div className={styles.desc}>
				<Skeleton width={'100%'} height={'100%'} />
			</div>
			<div className={styles.title}>
				<Skeleton width={'100%'} height={'100%'} />
			</div>
		</div>
	)
}

export default ReviewsCardSkeleton
