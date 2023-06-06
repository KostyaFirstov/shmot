import React, { ChangeEvent } from 'react'
import Product from '../components/Product'

const Products = () => {
	const [range, setRange] = React.useState([5, 30])

	const handleRangeChange = (event: ChangeEvent) => {
		console.log(event.currentTarget)
		setRange([30, range[1]])
		console.log(range)
	}

	return (
		<div className='catalog'>
			<div className='content__area'>
				<div className='catalog__wrapper wrapper'>
					<div className='catalog__header'>
						<div className='catalog__title'>All (500)</div>
						<div className='catalog__sort'>
							Sort by
							<svg
								width='14'
								height='14'
								viewBox='0 0 14 14'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M1.3744 3.76303C1.77168 3.37938 2.40476 3.39042 2.78841 3.7877L8.34569 9.54243L6.90699 10.9318L1.34971 5.17703C0.966061 4.77975 0.977121 4.14667 1.3744 3.76303Z'
									fill='black'
								/>
								<path
									d='M5.6543 9.54199L11.2116 3.78726C11.5952 3.38998 12.2283 3.37894 12.6256 3.76258C13.0229 4.14623 13.0339 4.77931 12.6503 5.17659L7.09299 10.9313L5.6543 9.54199Z'
									fill='black'
								/>
							</svg>
						</div>
					</div>
					<div className='catalog__main'>
						<div className='catalog__filters'>
							<div className='filters__title'>
								<span>Фильтры</span>
							</div>
							<div className='filters-product'>
								<div className='filters-product__title'>
									<span>Цена</span>
								</div>
								<div className='filter-product__item'>
									<input
										min={range[0]}
										max={range[1]}
										// onChange={handleRangeChange}
										type='range'
									/>
								</div>
							</div>
						</div>
						<div className='catalog__goods'>
							<Product />
							<Product />
							<Product />
							<Product />
							<Product />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Products
