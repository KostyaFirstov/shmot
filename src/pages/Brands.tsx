import React from 'react'
import СategoryCatalog from '../components/СategoryCatalog'
import { useSelector } from 'react-redux'
import { selectBrands, selectFiltersStatus } from '../redux/slices/filters'

const Brands = () => {
	const categories = useSelector(selectBrands)
	const status = useSelector(selectFiltersStatus)

	return <СategoryCatalog items={categories} status={status} link='brands' />
}

export default Brands
