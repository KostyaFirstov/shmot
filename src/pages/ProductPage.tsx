import React from 'react'
import ProductsSlider from '../components/ProductsSlider'
import Accordion from '../components/Accordion'
import { testAccordionData } from '../utils/testAccordionData'
import Sizes from '../components/Sizes'
import CopyCode from '../components/CopyCode'
import axios from '../axios'
import { useParams } from 'react-router-dom'
import { ProductParams } from '../redux/slices/products'
import ProductOptions from '../components/ProductOptions'
import Tooltip from '../components/Tooltip'

const ProductPage = () => {
	const [product, setProduct] = React.useState<ProductParams>()
	const [tooltip, setTooltip] = React.useState(false)
	const [activeSize, setActiveSize] = React.useState(0)
	const orderRef = React.useRef<HTMLButtonElement>(null)

	const params = useParams()

	React.useEffect(() => {
		const fetchProduct = async () => {
			try {
				const { data } = await axios.get(`/api/products/${params.title}`)
				setProduct(data[0])
			} catch (error) {
				console.log(error)
			}
		}

		fetchProduct()
	}, [])

	React.useEffect(() => {
		const handleScrollBefore = () => {
			const scrollTop = window.pageYOffset
			const buttonPlace = orderRef.current && orderRef.current.offsetTop
			if (buttonPlace && scrollTop > buttonPlace) {
				setTooltip(true)
			} else {
				setTooltip(false)
			}
		}

		window.addEventListener('scroll', handleScrollBefore)
		return () => window.removeEventListener('scroll', handleScrollBefore)
	}, [])

	if (product) {
		console.log(product)
		return (
			<div className='product-page'>
				<div className='content__area'>
					<div className='product__wrapper wrapper'>
						<div className='product__images'>
							<div className='product__image'>
								<img src='/img/goods/goods15.jpg' alt='' />
							</div>
							<div className='product__image'>
								<img src='/img/goods/goods14.jpg' alt='' />
							</div>
							<div className='product__image'>
								<img src='/img/goods/goods13.jpg' alt='' />
							</div>
							<div className='product__image'>
								<img src='/img/goods/goods12.jpg' alt='' />
							</div>
							<div className='product__image'>
								<img src='/img/goods/goods11.jpg' alt='' />
							</div>
							<div className='product__image'>
								<img src='/img/goods/goods10.jpg' alt='' />
							</div>
							<div className='product__image'>
								<img src='/img/goods/goods09.jpg' alt='' />
							</div>
							<div className='product__image'>
								<img src='/img/goods/goods08.jpg' alt='' />
							</div>
							<div className='product__image'>
								<img src='/img/goods/goods07.jpg' alt='' />
							</div>
							<div className='product__image'>
								<img src='/img/goods/goods06.jpg' alt='' />
							</div>
							<div className='product__image'>
								<img src='/img/goods/goods05.jpg' alt='' />
							</div>
							<div className='product__image'>
								<img src='/img/goods/goods04.jpg' alt='' />
							</div>
						</div>
						<div className='product-info'>
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
									<p>
										Layer on style with the Air Max 97. The cracked leather and
										soft suede update the iconic design while the original look
										(inspired by Japanese bullet trains and water droplets)
										still takes centre stage. Easy-to-style colours let you hit
										the streets quickly.Layer on style with the Air Max 97. The
										cracked leather and soft suede update the iconic design
										while the original look (inspired by Japanese bullet trains
										and water droplets) still takes centre stage. Easy-to-style
										colours let you hit the streets quickly.
									</p>
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
									<li className='product-info__parameter'>Кожаная стелька</li>
									<li className='product-info__parameter'>
										Тисненый брендинг на подошве
									</li>
								</ul>
							</div>
							{testAccordionData.map((item, index) => {
								return (
									<Accordion key={index} title={item.title} text={item.text} />
								)
							})}
						</div>
					</div>
					{tooltip && <Tooltip orderRef={orderRef} />}
				</div>
				<ProductsSlider title='Вам также понравится' />
			</div>
		)
	}

	return <>ЗАГРУЗКА</>
}

export default ProductPage
