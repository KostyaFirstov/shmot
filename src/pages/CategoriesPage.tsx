import React from 'react'
import { FiltersParams } from '../redux/slices/filters'
import { Link, useParams } from 'react-router-dom'
import axios from '../axios'
import ContentLayout from '../layouts/ContentLayout'
import { ProductParams } from '../redux/slices/products'

const CategoriesPage = () => {
	const [isLoading, setIsLoading] = React.useState(true)
	const [category, setCategory] = React.useState<FiltersParams>()
	const [products, setProducts] = React.useState<ProductParams[]>()

	const { title } = useParams()

	React.useEffect(() => {
		const fetchCategory = async () => {
			setIsLoading(true)

			try {
				const { data } = await axios.get(`/api/categories/${title}`)
				setCategory(data[0])
				setIsLoading(false)
			} catch (error) {
				console.log(error)
				setIsLoading(false)
			}
		}

		fetchCategory()
	}, [])

	React.useEffect(() => {
		const fetchProductsCategory = async () => {
			setIsLoading(true)
			try {
				const { data } = await axios.get<ProductParams[]>(
					`/api/products?category=${title}`
				)
				setProducts(data)
				setIsLoading(false)
			} catch (error) {
				setIsLoading(false)
			}
		}

		fetchProductsCategory()
	}, [])

	return (
		<ContentLayout>
			<div className='categories-page'>
				<div className='categories-page__header'>
					<h2 className='categories-page__name'>{category?.name}</h2>
					<div className='categories-page__all'>
						<Link to='/catalog'>Смотреть всё</Link>
					</div>
				</div>
				<div className='categories-page__main'>
					<div className='categories-page__card'></div>
				</div>
			</div>
		</ContentLayout>
	)
}

export default CategoriesPage
