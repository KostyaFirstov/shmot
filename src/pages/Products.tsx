import React from 'react'
import ProductCard from '../components/ProductCard'
import { useAppDispatch } from '../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import {
	fetchProducts,
	selectProducts,
	selectProductsStatus
} from '../redux/slices/products'
import Filters from '../components/Filters'
import {
	fetchCategories,
	selectCategories,
	selectSearch,
	selectSort,
	selectSortValue
} from '../redux/slices/filters'
import { fetchBrands, selectBrands } from '../redux/slices/filters'
import { useLocation } from 'react-router-dom'
import Sort from '../components/Sort'
import {
	selectBrand,
	selectCategory,
	setBrandValue,
	setCategoryValue
} from '../redux/slices/filters'
import ProductCardSkeleton from '../components/ProductCard/ProductCardSkeleton'
import { LoadingProperty } from '../redux/slices/auth'

const Products = () => {
	const products = useSelector(selectProducts)
	const category = useSelector(selectCategory)
	const brand = useSelector(selectBrand)
	const categories = useSelector(selectCategories)
	const brands = useSelector(selectBrands)
	const sortValue = useSelector(selectSort)
	const sortProperty = useSelector(selectSortValue)
	const status = useSelector(selectProductsStatus)

	const location = useLocation()
	const dispatch = useDispatch()
	const appDispatch = useAppDispatch()

	const handleProducts = () => {
		const categoryValue = category ? `&category=${category}` : ''
		const brandValue = brand ? `&brands=${brand}` : ''
		const gender = location.search.startsWith('?gender')
			? `${location.search.slice(1)}`
			: ''
		const sort = sortValue ? `&sort=${sortProperty}` : ''

		appDispatch(fetchProducts({ categoryValue, brandValue, gender, sort }))
	}

	React.useEffect(() => {
		handleProducts()
	}, [location, category, brand, sortValue])

	return (
		<div className='catalog'>
			<div className='content__area'>
				<div className='catalog__wrapper wrapper'>
					<div className='catalog__header'>
						<div className='catalog__title'>
							<h2>
								All (
								{status === LoadingProperty.STATUS_LOADING
									? '?'
									: products.length}
								)
							</h2>
						</div>
						<Sort />
					</div>
					<div className='catalog__main'>
						<div className='catalog__filters'>
							<Filters
								handleFilter={value => dispatch(setCategoryValue(value))}
								title='Категории'
								list={categories}
							/>
							<Filters
								handleFilter={value => dispatch(setBrandValue(value))}
								title='Бренды'
								list={brands}
							/>
						</div>
						<div className='catalog__goods'>
							{status === LoadingProperty.STATUS_LOADING
								? [...new Array(6)].map((item, index) => (
										<ProductCardSkeleton key={index} />
								  ))
								: products.map((item, index) => {
										return <ProductCard key={index} {...item} />
								  })}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Products
