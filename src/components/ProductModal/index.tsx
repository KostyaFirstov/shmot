import React from 'react'
import Sizes from '../Sizes'
import CopyCode from '../CopyCode'
import ProductImageSlider from '../ProductImageSlider'
import { Link } from 'react-router-dom'
import axios from '../../axios'
import { ProductParams } from '../../redux/slices/products'
import ProductOptions from '../ProductOptions'
import ModalSkeleton from './ModalSkeleton'

interface IProductModal {
	productTitle: string
	hanldeSpoiler: () => void
	spoilerRef: React.RefObject<HTMLDivElement>
}

const ProductModal: React.FC<IProductModal> = ({
	productTitle,
	spoilerRef,
	hanldeSpoiler
}) => {
	const [product, setProduct] = React.useState<ProductParams>()
	const [activeSize, setActiveSize] = React.useState(0)
	const [isLoading, setIsLoading] = React.useState(true)

	React.useEffect(() => {
		const fetchProduct = async () => {
			setIsLoading(true)
			try {
				const { data } = await axios.get(`/api/products/${productTitle}`)
				setProduct(data[0])
				setIsLoading(false)
			} catch (error) {
				setIsLoading(false)
				console.log(error)
			}
		}

		fetchProduct()
	}, [])

	return (
		<div className='product-modal'>
			<div ref={spoilerRef} className='product-modal__wrapper'>
				{isLoading ? (
					<ModalSkeleton />
				) : product ? (
					<>
						<div className='product-modal__images'>
							<ProductImageSlider img={product.img} />
						</div>
						<div className='product-modal__info'>
							<div className='product-modal__header'>
								<div className='product-modal__title'>
									<h2>{product.title}</h2>
								</div>
								<div className='product-modal__desc desc'>
									<span>{product.desc}</span>
								</div>
								<div className='product-modal__price'>
									<span>{product.price} ₽</span>
								</div>
							</div>
							<Sizes
								sizes={product.sizes}
								activeSize={activeSize}
								setActiveSize={setActiveSize}
							/>
							<CopyCode bgcolor='black' code={'QL11147'} />
							<ProductOptions product={product} activeSize={activeSize} />
							<div className='product-modal__link'>
								<Link
									onClick={hanldeSpoiler}
									className=''
									to={`/product/${product.title}`}
								>
									Перейти на страницу товара
								</Link>
							</div>
						</div>
						<button onClick={hanldeSpoiler} className='product-modal__close'>
							<svg
								width='19'
								height='19'
								viewBox='0 0 19 19'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M18 18L9.5 9.5M9.5 9.5L1 1M9.5 9.5L18 1M9.5 9.5L1 18'
									stroke='#111111'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</button>
					</>
				) : (
					<>Товар не найден :(</>
				)}
			</div>
		</div>
	)
}

export default ProductModal
