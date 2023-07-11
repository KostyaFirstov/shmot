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
		<div className='catalog'>
			<div className='content__area'>
				<div className='catalog__wrapper wrapper'>
					<div className='catalog__header'>
						<div className='catalog__title'>
							<h2>
								Поиск по запросу:{' '}
								<span>
									{searchValue
										? searchValue
										: decodeURIComponent(location.search.split('=')[1])}
								</span>{' '}
								(
								{status === LoadingProperty.STATUS_LOADING
									? '?'
									: products.length}
								)
							</h2>
						</div>
					</div>
					<div className='catalog__main'>
						<div className='catalog__goods catalog__goods-search'>
							{status === LoadingProperty.STATUS_LOADING ? (
								[...new Array(6)].map((item, index) => (
									<ProductCardSkeleton key={index} />
								))
							) : products.length > 0 ? (
								products.map((item, index) => {
									return <ProductCard key={index} {...item} />
								})
							) : (
								<>По вашему запросу ничего не найдено :(</>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SearchPage
