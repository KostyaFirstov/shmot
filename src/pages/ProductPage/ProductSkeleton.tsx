import React from 'react'
import Skeleton from 'react-loading-skeleton'
import styles from './ProductPage.module.scss'
import 'react-loading-skeleton/dist/skeleton.css'

const ProductSkeleton = () => (
	<div className={styles.root}>
		<div className={styles.leftside}>
			<div className={styles.leftside__wrapper}>
				<Skeleton
					containerClassName={styles.leftside__item}
					width={'100%'}
					height={'100%'}
				/>
			</div>
			<div className={styles.leftside__wrapper}>
				<Skeleton
					containerClassName={styles.leftside__item}
					width={'100%'}
					height={'100%'}
				/>
			</div>
			<div className={styles.leftside__wrapper}>
				<Skeleton
					containerClassName={styles.leftside__item}
					width={'100%'}
					height={'100%'}
				/>
			</div>
			<div className={styles.leftside__wrapper}>
				<Skeleton
					containerClassName={styles.leftside__item}
					width={'100%'}
					height={'100%'}
				/>
			</div>
		</div>
		<div className={styles.rightside}>
			<div className={styles.rightside__title}>
				<Skeleton width={'100%'} height={'100%'} />
			</div>
			<div className={styles.rightside__desc}>
				<Skeleton width={'100%'} height={'100%'} />
			</div>
			<div className={styles.rightside__price}>
				<Skeleton width={'100%'} height={'100%'} />
			</div>
			<div className={styles.rightside__sizes}>
				<div className={styles.rightside__size}>
					<Skeleton width={'100%'} height={'100%'} />
				</div>
				<div className={styles.rightside__size}>
					<Skeleton width={'100%'} height={'100%'} />
				</div>
				<div className={styles.rightside__size}>
					<Skeleton width={'100%'} height={'100%'} />
				</div>
				<div className={styles.rightside__size}>
					<Skeleton width={'100%'} height={'100%'} />
				</div>
				<div className={styles.rightside__size}>
					<Skeleton width={'100%'} height={'100%'} />
				</div>
				<div className={styles.rightside__size}>
					<Skeleton width={'100%'} height={'100%'} />
				</div>
				<div className={styles.rightside__size}>
					<Skeleton width={'100%'} height={'100%'} />
				</div>
				<div className={styles.rightside__size}>
					<Skeleton width={'100%'} height={'100%'} />
				</div>
			</div>
			<div className={styles.rightside__button}>
				<Skeleton width={'100%'} height={'100%'} />
			</div>
			<div className={styles.rightside__button}>
				<Skeleton width={'100%'} height={'100%'} />
			</div>
		</div>
	</div>
)

export default ProductSkeleton
