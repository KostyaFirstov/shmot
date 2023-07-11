import React from 'react'
import Skeleton from 'react-loading-skeleton'
import styles from './ReviewsPage.module.scss'
import 'react-loading-skeleton/dist/skeleton.css'

const ReviewsPageSkeleton = () => {
	return (
		<div className={styles.root}>
			<div className={styles.poster}>
				<Skeleton width={'100%'} height={'100%'} />
			</div>
			<div className={styles.header}>
				<div className={styles.headline}>
					<div className={styles.title}>
						<Skeleton width={'100%'} height={'100%'} />
					</div>
					<div className={styles.desc}>
						<Skeleton width={'100%'} height={'100%'} />
					</div>
				</div>
				<div className={styles.details}>
					<div className={styles.date}>
						<Skeleton width={'100%'} height={'100%'} />
					</div>
					<div className={styles.viewsCount}>
						<Skeleton width={'100%'} height={'100%'} />
					</div>
				</div>
			</div>
			<div className={styles.main}>
				<Skeleton width={'100%'} height={'100%'} />
			</div>
		</div>
	)
}

export default ReviewsPageSkeleton
