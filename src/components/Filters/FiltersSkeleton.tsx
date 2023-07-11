import React from 'react'
import Skeleton from 'react-loading-skeleton'
import styles from './Filters.module.scss'
import 'react-loading-skeleton/dist/skeleton.css'

const FiltersSkeleton = () => {
	return (
		<div className={styles.filter}>
			<Skeleton width={'100%'} height={'100%'} />
		</div>
	)
}

export default FiltersSkeleton
