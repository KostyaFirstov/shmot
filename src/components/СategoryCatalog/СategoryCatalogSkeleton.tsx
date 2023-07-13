import React from 'react'
import Skeleton from 'react-loading-skeleton'
import styles from './СategoryCatalog.module.scss'
import 'react-loading-skeleton/dist/skeleton.css'

const СategoryCatalogSkeleton = () => {
	return (
		<div className={styles.root}>
			<div className={styles.image}>
				<Skeleton />
			</div>
			<div className={styles.info}>
				<div className={styles.name}>
					<Skeleton />
				</div>
				<div className={styles.more}>
					<Skeleton />
				</div>
			</div>
		</div>
	)
}

export default СategoryCatalogSkeleton
