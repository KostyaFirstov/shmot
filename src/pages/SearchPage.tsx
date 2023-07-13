import React from 'react'
import {
	fetchProductsSearch,
	selectProductsSearch,
	selectProductsStatus
} from '../redux/slices/products'
import { useSelector } from 'react-redux'
import { selectSearch } from '../redux/slices/filters'
import ProductCard from '../components/ProductCard'
import { useAppDispatch } from '../redux/store'
import { LoadingProperty } from '../redux/slices/auth'
import ProductCardSkeleton from '../components/ProductCard/ProductCardSkeleton'
import { useLocation } from 'react-router-dom'
import NotFound from './NotFound'
import ContentLayout from '../layouts/ContentLayout'

const SearchPage = () => {
	const products = useSelector(selectProductsSearch)
	const searchValue = useSelector(selectSearch)
	const status = useSelector(selectProductsStatus)

	const location = useLocation()
	const appDispatch = useAppDispatch()

	React.useEffect(() => {
		appDispatch(
			fetchProductsSearch({
				searchValue: decodeURIComponent(location.search.split('=')[1])
			})
		)
	}, [searchValue])

	return (
		<ContentLayout>
			<div className='catalog__header'>
				<div className='catalog__title'>
					<h2>
						Поиск по запросу:{' '}
						<span>
							{searchValue
								? searchValue
								: decodeURIComponent(location.search.split('=')[1])}
						</span>{' '}
						({status === LoadingProperty.STATUS_LOADING ? '?' : products.length}
						)
					</h2>
				</div>
			</div>
			<div className='catalog__main'>
				<div className='catalog__goods catalog__goods-search'>
					{status === LoadingProperty.STATUS_LOADING
						? [...new Array(6)].map((item, index) => (
								<ProductCardSkeleton key={index} />
						  ))
						: products.map((item, index) => {
								return <ProductCard key={index} {...item} />
						  })}
				</div>
			</div>
			{status !== LoadingProperty.STATUS_LOADING && products.length === 0 && (
				<NotFound />
			)}
		</ContentLayout>
	)
}

export default SearchPage
