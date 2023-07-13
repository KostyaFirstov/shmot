import React from 'react'
import { useSelector } from 'react-redux'
import { selectCategories, selectFiltersStatus } from '../redux/slices/filters'
import СategoryCatalog from '../components/СategoryCatalog'

const Categories = () => {
	const categories = useSelector(selectCategories)
	const status = useSelector(selectFiltersStatus)

	return (
		<СategoryCatalog items={categories} status={status} link='categories' />
	)
}

export default Categories
