import React from 'react'
import Skeleton from 'react-loading-skeleton'
import styles from './ProductCard.module.scss'
import 'react-loading-skeleton/dist/skeleton.css'

const ModalSkeleton = () => (
	<div className={styles.root}>
		<div className={styles.img}>
			<Skeleton width={'100%'} height={'100%'} />
		</div>
		<div className={styles.info}>
			<div className={styles.info__left}>
				<div className={styles.info__title}>
					<Skeleton width={'100%'} height={'100%'} />
				</div>
				<div className={styles.info__desc}>
					<Skeleton width={'100%'} height={'100%'} />
				</div>
			</div>
			<div className={styles.info__right}>
				<div className={styles.info__price}>
					<Skeleton width={'100%'} height={'100%'} />
				</div>
				<div className={styles.info__more}>
					<Skeleton width={'100%'} height={'100%'} />
				</div>
			</div>
		</div>
	</div>
)

export default ModalSkeleton
