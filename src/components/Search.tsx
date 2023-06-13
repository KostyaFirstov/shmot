import React from 'react'
import { Link } from 'react-router-dom'
import Product from './ProductCard'

interface ISearch {
	handleToggleSearch: () => void
}

const Search: React.FC<ISearch> = ({ handleToggleSearch }) => {
	const [searchValue, setSearchValue] = React.useState('')
	const inputRef = React.useRef<HTMLInputElement>(null)

	const handleSetValue = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value)
	}

	const handleClearValue = () => {
		setSearchValue('')
		if (inputRef) {
			inputRef.current?.focus()
		}
	}

	return (
		<div className='search'>
			<div className='search__wrapper wrapper'>
				<div className='search__header'>
					<div className='search__input'>
						<input
							ref={inputRef}
							onChange={handleSetValue}
							value={searchValue}
							placeholder='Искать'
							type='text'
						/>
						{searchValue && (
							<button onClick={handleClearValue} className='search__clear'>
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
						)}
					</div>
					<button
						onClick={handleToggleSearch}
						className='search__close button button-black'
					>
						Отменить
					</button>
				</div>
				<div className='search__main'>
					<div className='search__requests'>
						<div className='requests__column'>
							<div className='requests__title'>
								<span>ВЫ ИСКАЛИ</span>
							</div>
							<ul className='requests__links'>
								<li className='requests__link'>
									<Link to='/'>бренды</Link>
									<button className='requests__link-remove'>
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
								</li>
								<li className='requests__link'>
									<Link to='/'>adidas</Link>
									<button className='requests__link-remove'>
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
								</li>
								<li className='requests__link'>
									<Link to='/'>nike</Link>
									<button className='requests__link-remove'>
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
								</li>
							</ul>
						</div>
						<div className='requests__column'>
							<div className='requests__title'>
								<span>ТАК ЖЕ ИЩУТ</span>
							</div>
							<ul className='requests__links'>
								<li className='requests__link'>
									<Link to='/'>adidas</Link>
								</li>
								<li className='requests__link'>
									<Link to='/'>nike</Link>
								</li>
								<li className='requests__link'>
									<Link to='/'>кроссовки</Link>
								</li>
								<li className='requests__link'>
									<Link to='/'>stone island</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className='search__goods'>
						{/* <Product />
						<Product />
						<Product /> */}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Search
