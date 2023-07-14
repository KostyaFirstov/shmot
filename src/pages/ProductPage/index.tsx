import React from 'react'
import ProductsSlider from '../../components/ProductsSlider'
import Accordion from '../../components/Accordion'
import { testAccordionData } from '../../utils/testAccordionData'
import Sizes from '../../components/Sizes'
import CopyCode from '../../components/CopyCode'
import axios from '../../axios'
import { useParams } from 'react-router-dom'
import { ProductParams } from '../../redux/slices/products'
import ProductOptions from '../../components/ProductOptions'
import Tooltip from '../../components/Tooltip'
import ProductSkeleton from './ProductSkeleton'
import ContentLayout from '../../layouts/ContentLayout'

const ProductPage = () => {
	const [product, setProduct] = React.useState<ProductParams>()
	const [tooltip, setTooltip] = React.useState(false)
	const [activeSize, setActiveSize] = React.useState(0)
	const [isLoading, setIsLoading] = React.useState(true)
	const params = useParams()

	const productInfoRef = React.useRef<HTMLDivElement>(null)
	const orderRef = React.useRef<HTMLButtonElement>(null)

	React.useEffect(() => {
		const fetchProduct = async () => {
			setIsLoading(true)
			try {
				const { data } = await axios.get(`/api/products/${params.title}`)
				setProduct(data[0])
				setIsLoading(false)
			} catch (error) {
				console.log(error)
				setIsLoading(false)
			}
		}

		fetchProduct()
	}, [])

	React.useEffect(() => {
		const handleScrollBefore = () => {
			const scrollTop = window.scrollY
			const neededHeight = productInfoRef.current

			if (neededHeight) {
				if (
					Math.ceil(scrollTop) >
					Math.ceil(neededHeight.offsetTop + neededHeight.offsetHeight)
				) {
					setTooltip(true)
				} else {
					setTooltip(false)
				}
			}
		}

		document.addEventListener('scroll', handleScrollBefore)
		return () => document.removeEventListener('scroll', handleScrollBefore)
	}, [])

	return (
		<>
			{isLoading ? (
				<ProductSkeleton />
			) : (
				product && (
					<div className='product-page'>
						<ContentLayout>
							<div className='product__wrapper'>
								<div className='product__images'>
									{product.img.map((item, index) => (
										<div key={index} className='product__image'>
											<img
												src={`http://localhost:5000${item}`}
												alt={product.title}
											/>
										</div>
									))}
								</div>
								<div ref={productInfoRef} className='product-info'>
									<div className='product-info__header'>
										<div className='product-info__title'>
											<h1>{product.title}</h1>
										</div>
										<div className='product-info__desc desc'>
											<span>{product.desc}</span>
										</div>
										<div className='product-info__price'>
											<span>{product.price} ₽</span>
										</div>
									</div>
									<Sizes
										sizes={product.sizes}
										activeSize={activeSize}
										setActiveSize={setActiveSize}
									/>
									<ProductOptions product={product} activeSize={activeSize} />
									<div className='product-info__details'>
										<CopyCode bgcolor='white' code={'QL11147'} />
										<div className='product-info__text'>
											<p>{product.text}</p>
										</div>
										<ul className='product-info__parameters'>
											{/* {product.categories.map((item, index) => {
								return <li className='product-info__parameter'>{item}</li>
							})} */}
											<li className='product-info__parameter'>
												Материал: Верх - кожа; Подкладка - кожа, текстиль; Низ -
												резина
											</li>
											<li className='product-info__parameter'>
												Страна-производитель: Франция
											</li>
											<li className='product-info__parameter'>
												Классическая модель
											</li>
											<li className='product-info__parameter'>
												Минималистичный дизайн
											</li>
											<li className='product-info__parameter'>
												Подкладка из кожи и текстиля
											</li>
											<li className='product-info__parameter'>
												Кожаная стелька
											</li>
											<li className='product-info__parameter'>
												Тисненый брендинг на подошве
											</li>
										</ul>
									</div>
									{testAccordionData.map((item, index) => {
										return (
											<Accordion
												key={index}
												title={item.title}
												text={item.text}
											/>
										)
									})}
								</div>
							</div>
							{tooltip && (
								<Tooltip
									title={product.title}
									price={product.price}
									orderRef={orderRef}
								/>
							)}
						</ContentLayout>
						<ProductsSlider title='Вам также понравится' />
					</div>
				)
			)}
			{!product && !isLoading && <>Товар не найден :(</>}
		</>
	)
}

export default ProductPage
