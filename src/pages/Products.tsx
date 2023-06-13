import React from 'react'
import ProductCard from '../components/ProductCard'
import { useAppDispatch } from '../redux/store'
import { useSelector } from 'react-redux'
import {
	fetchProducts,
	selectProducts,
	selectProductsStatus
} from '../redux/slices/products'
import Filters from '../components/Filters'
import {
	fetchCategories,
	selectCategories,
	selectCategoriesStatus
} from '../redux/slices/categories'
import {
	fetchBrands,
	selectBrands,
	selectBrandsStatus
} from '../redux/slices/brands'
import { useLocation } from 'react-router-dom'
import Sort from '../components/Sort'

const Products = () => {
	const [category, setCategory] = React.useState('')
	const [brand, setBrand] = React.useState('')

	const dispatch = useAppDispatch()
	const location = useLocation()

	const products = useSelector(selectProducts)
	const productsStatus = useSelector(selectProductsStatus)

	const categories = useSelector(selectCategories)
	const categoriesStatus = useSelector(selectCategoriesStatus)

	const brands = useSelector(selectBrands)
	const brandsStatus = useSelector(selectBrandsStatus)

	React.useEffect(() => {
		dispatch(fetchCategories())
		dispatch(fetchBrands())
	}, [])

	const handleProducts = () => {
		const categoryValue = category ? `&category=${category}` : ''
		const brandValue = brand ? `&brand=${brand}` : ''
		const gender = location.search.startsWith('?gender')
			? `${location.search.slice(1)}`
			: ''

		dispatch(fetchProducts({ categoryValue, brandValue, gender }))
	}

	React.useEffect(() => {
		handleProducts()
	}, [location, category, brand])

	console.log(category, brand)

	return (
		<div className='catalog'>
			<div className='content__area'>
				<div className='catalog__wrapper wrapper'>
					<div className='catalog__header'>
						<div className='catalog__title'>
							<h2>All ({products.length})</h2>
						</div>
						<Sort />
					</div>
					<div className='catalog__main'>
						<div className='catalog__filters'>
							<Filters
								handleFilter={value => setCategory(value)}
								title='Категории'
								list={categories}
							/>
							<Filters handleFilter={setBrand} title='Бренды' list={brands} />
						</div>
						<div className='catalog__goods'>
							{products.map((item, index) => {
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
