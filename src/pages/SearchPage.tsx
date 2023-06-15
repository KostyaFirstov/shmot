import React from 'react'
import {
	fetchProductsSearch,
	selectProductsSearch
} from '../redux/slices/products'
import { useSelector } from 'react-redux'
import { selectSearch } from '../redux/slices/filters'
import Sort from '../components/Sort'
import ProductCard from '../components/ProductCard'
import { useAppDispatch } from '../redux/store'

const SearchPage = () => {
	const products = useSelector(selectProductsSearch)
	const searchValue = useSelector(selectSearch)

	const appDispatch = useAppDispatch()

	React.useEffect(() => {
		appDispatch(fetchProductsSearch({ searchValue: searchValue }))
	}, [searchValue])

	return (
		<div className='catalog'>
			<div className='content__area'>
				<div className='catalog__wrapper wrapper'>
					<div className='catalog__header'>
						<div className='catalog__title'>
							<h2>
								Поиск по запросу: <span>{searchValue}</span> ({products.length})
							</h2>
						</div>
						<Sort />
					</div>
					<div className='catalog__main'>
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

export default SearchPage
