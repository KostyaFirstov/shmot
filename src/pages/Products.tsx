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
	selectCategories,
	selectSort,
	selectSortValue
} from '../redux/slices/filters'
import { selectBrands } from '../redux/slices/filters'
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
import ErrorBlock from '../components/ErrorBlock'
import ContentLayout from '../layouts/ContentLayout'

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

	const isGender = location.search.startsWith('?gender')
	const currentGender = isGender
		? location.search.split('=').pop()
		: 'Аксессуары'

	const handleProducts = () => {
		const categoryValue = category ? `&category=${category}` : ''
		const brandValue = brand ? `&brand=${brand}` : ''
		const gender = isGender ? `${location.search.slice(1)}` : ''
		const sort = sortValue ? `&sort=${sortProperty}` : ''

		appDispatch(fetchProducts({ categoryValue, brandValue, gender, sort }))
	}

	React.useEffect(() => {
		handleProducts()
	}, [location, category, brand, sortValue])

	return (
		<ContentLayout>
			{status !== LoadingProperty.STATUS_ERROR ? (
				<>
					<div className='catalog__header'>
						<div className='catalog__title'>
							<h2>
								{currentGender === 'Аксессуары'
									? 'Аксессуары'
									: currentGender === 'women'
									? 'Женское'
									: 'Мужское'}{' '}
								(
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
				</>
			) : (
				<ErrorBlock
					title=' Упс, ошибка :('
					desc='Не удалось загрузить товары'
				/>
			)}
		</ContentLayout>
	)
}

export default Products
