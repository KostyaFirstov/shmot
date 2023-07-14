import React from 'react'
import { FiltersParams } from '../redux/slices/filters'
import { Link, useParams } from 'react-router-dom'
import axios from '../axios'
import ContentLayout from '../layouts/ContentLayout'
import { ProductParams } from '../redux/slices/products'
import ProductCard from '../components/ProductCard'
import ProductCardSkeleton from '../components/ProductCard/ProductCardSkeleton'
import ErrorBlock from '../components/ErrorBlock'
import FiltersSkeleton from '../components/Filters/FiltersSkeleton'

interface ICategoriesPageProps {
	link: CategoriesPageLink
}

export enum CategoriesPageLink {
	BRAND_LINK = 'brands',
	CATEGORY_LINK = 'categories'
}

const CategoriesPage: React.FC<ICategoriesPageProps> = ({ link }) => {
	const [isLoading, setIsLoading] = React.useState(true)
	const [category, setCategory] = React.useState<FiltersParams>()
	const [products, setProducts] = React.useState<ProductParams[]>()

	const { title } = useParams()

	React.useEffect(() => {
		const fetchCategory = async () => {
			setIsLoading(true)

			try {
				const { data } = await axios.get(`/api/${link}/${title}`)
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
				const reqLink =
					link === CategoriesPageLink.BRAND_LINK ? 'brand' : 'category'
				const { data } = await axios.get<ProductParams[]>(
					`/api/products?${reqLink}=${title}`
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
					<h2 className='categories-page__name'>
						{isLoading ? <FiltersSkeleton /> : category?.name}
					</h2>
					<div className='categories-page__all'>
						<Link to='/catalog'>Смотреть всё</Link>
					</div>
				</div>
				<div className='categories-page__main'>
					{isLoading
						? [...Array(8)].map((item, index) => (
								<ProductCardSkeleton key={index} />
						  ))
						: products?.map((item, index) => {
								return <ProductCard key={index} {...item} />
						  })}
				</div>
				{!isLoading && products?.length === 0 && (
					<ErrorBlock title='Ошибка..' desc='Не удалось загрузить товары :(' />
				)}
			</div>
		</ContentLayout>
	)
}

export default CategoriesPage
