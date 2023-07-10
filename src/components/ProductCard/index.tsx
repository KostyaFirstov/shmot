import React from 'react'
import { Link } from 'react-router-dom'
import ProductModal from '../ProductModal'
import { ProductParams } from '../../redux/slices/products'

const ProductCard: React.FC<ProductParams> = ({
	_id,
	title,
	desc,
	img,
	price,
	sizes
}) => {
	const [spoiler, setSpoiler] = React.useState(false)
	const spoilerRef = React.useRef<HTMLDivElement>(null)
	const openSpoilerRef = React.useRef<HTMLDivElement>(null)

	React.useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const _event = event.composedPath()

			if (
				openSpoilerRef.current &&
				spoilerRef.current &&
				!_event.includes(spoilerRef.current) &&
				!_event.includes(openSpoilerRef.current)
			) {
				setSpoiler(false)
				document.body.style.overflow = ''
			}
		}

		document.body.addEventListener('click', handleClickOutside)
		return () => document.body.removeEventListener('click', handleClickOutside)
	}, [])

	const hanldeSpoiler = () => {
		if (!spoiler) {
			setSpoiler(true)
			document.body.style.overflow = 'hidden'
		} else {
			setSpoiler(false)
			document.body.style.overflow = ''
		}
	}

	return (
		<>
			<div className='product__item'>
				<Link to={`/product/${title}`}>
					<div className='product__content'>
						<div className='product__image'>
							<img src={`http://localhost:5000${img[0]}`} alt={title} />
						</div>
						<ul className='product__sizes'>
							{sizes.map((item, index) => {
								return (
									<li key={index} className='product__size'>
										{item}
									</li>
								)
							})}
						</ul>
					</div>
					<div className='product__info'>
						<div className='product__leftside'>
							<div className='product__name'>{title}</div>
							<div className='product__desc'>{desc}</div>
						</div>
						<div className='product__rightside'>
							<div className='product__price'>{price} ₽</div>
							<div className='product__link'>
								<Link to={`/product/${title}`} className='button button-black'>
									Подробнее
								</Link>
							</div>
						</div>
					</div>
				</Link>
				<div className='product__options'>
					<div
						ref={openSpoilerRef}
						onClick={hanldeSpoiler}
						className='product__view'
					>
						<svg
							width='27'
							height='19'
							viewBox='0 0 27 19'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M25.0242 7.99026C25.5742 8.65793 25.8491 8.9917 25.8491 9.5C25.8491 10.0083 25.5742 10.3421 25.0242 11.0097C23.0124 13.4524 18.5751 18 13.4245 18C8.27393 18 3.83663 13.4524 1.82484 11.0097C1.27495 10.3421 1 10.0083 1 9.5C1 8.9917 1.27495 8.65793 1.82484 7.99026C3.83663 5.5477 8.27393 1 13.4245 1C18.5751 1 23.0124 5.5477 25.0242 7.99026Z'
								stroke='#111111'
							/>
							<path
								d='M13.4246 14.4577C16.1631 14.4577 18.383 12.2378 18.383 9.49935C18.383 6.76094 16.1631 4.54102 13.4246 4.54102C10.6862 4.54102 8.46631 6.76094 8.46631 9.49935C8.46631 12.2378 10.6862 14.4577 13.4246 14.4577Z'
								stroke='#111111'
							/>
						</svg>
					</div>
				</div>
			</div>
			{spoiler && (
				<ProductModal
					productTitle={title}
					hanldeSpoiler={hanldeSpoiler}
					spoilerRef={spoilerRef}
				/>
			)}
		</>
	)
}

export default ProductCard
