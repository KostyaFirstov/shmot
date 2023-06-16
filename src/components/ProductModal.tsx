import React from 'react'
import Sizes from './Sizes'
import CopyCode from './CopyCode'
import ProductImageSlider from './ProductImageSlider'
import { Link } from 'react-router-dom'
import axios from '../axios'
import { ProductParams } from '../redux/slices/products'
import { addCartItem, minusItem, selectCartItems } from '../redux/slices/cart'
import { useDispatch, useSelector } from 'react-redux'
import ProductOptions from './ProductOptions'

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

	React.useEffect(() => {
		const fetchProduct = async () => {
			try {
				const { data } = await axios.get(`/api/products/${productTitle}`)
				setProduct(data[0])
			} catch (error) {
				console.log(error)
			}
		}

		fetchProduct()
	}, [])

	if (product) {
		return (
			<div className='product-modal'>
				<div ref={spoilerRef} className='product-modal__wrapper'>
					<div className='product-modal__images'>
						<ProductImageSlider />
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
								stroke-width='1.5'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
						</svg>
					</button>
				</div>
			</div>
		)
	}

	return <>Loading</>
}

export default ProductModal
