import React from 'react'
import { Link } from 'react-router-dom'
import Product from './ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import {
	fetchGetRequests,
	fetchPostRequests,
	removeRequestedValue,
	selectRequested,
	selectRequests,
	selectSearch,
	setRequestedValue,
	setSearchValue
} from '../redux/slices/filters'
import { useAppDispatch } from '../redux/store'
import {
	fetchProductsSearch,
	selectProductsSearch
} from '../redux/slices/products'

interface ISearch {
	handleToggleSearch: () => void
}

const Search: React.FC<ISearch> = ({ handleToggleSearch }) => {
	const inputRef = React.useRef<HTMLInputElement>(null)
	const searchValue = useSelector(selectSearch)
	const request = useSelector(selectRequests)
	const products = useSelector(selectProductsSearch)
	const requested = useSelector(selectRequested)

	const dispatch = useDispatch()
	const appDispatch = useAppDispatch()

	React.useEffect(() => {
		let search = searchValue.length > 0 ? searchValue : '&new=true'
		appDispatch(fetchProductsSearch({ searchValue: search }))
	}, [searchValue])

	React.useEffect(() => {
		appDispatch(fetchGetRequests())
	}, [])

	const handleSetValue = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setSearchValue(event.target.value))
	}

	const handleClearValue = () => {
		dispatch(setSearchValue(''))
		if (inputRef) {
			inputRef.current?.focus()
		}
	}

	const handleSetRequest = (value: string) => {
		dispatch(setSearchValue(value.toString()))
		dispatch(setRequestedValue(value))
		appDispatch(fetchPostRequests({ text: value }))
	}

	const handleRemoveRequested = (value: string) => {
		dispatch(removeRequestedValue(value))
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
						{searchValue.length > 0 ? (
							<div className='requests__column'>
								<div className='requests__title'>
									<span>Поиск по запросу: {searchValue}</span>
								</div>
								<ul className='requests__links'>
									{products.map((item, index) => {
										return (
											<li
												key={index}
												onClick={() => handleSetRequest(item.title)}
												className='requests__link'
											>
												<Link to={`/search?product=${item.title}`}>
													{item.title}
												</Link>
											</li>
										)
									})}
								</ul>
							</div>
						) : (
							<>
								{requested.length > 0 && (
									<div className='requests__column'>
										<div className='requests__title'>
											<span>ВЫ ИСКАЛИ</span>
										</div>
										<ul className='requests__links'>
											{requested.map((item, index) => {
												if (index < 4)
													return (
														<li key={index} className='requests__link'>
															<Link
																onClick={() => handleSetRequest(item)}
																to={`/search?product=${item}`}
															>
																{item}
															</Link>
															<button
																onClick={() => handleRemoveRequested(item)}
																className='requests__link-remove'
															>
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
													)
											})}
										</ul>
									</div>
								)}
								<div className='requests__column'>
									<div className='requests__title'>
										<span>ТАК ЖЕ ИЩУТ</span>
									</div>
									<ul className='requests__links'>
										{request.map(item => {
											return (
												<li
													key={item._id}
													onClick={() => handleSetRequest(item.text)}
													className='requests__link'
												>
													<Link to={`/search?search=${item.text}`}>
														{item.text}
													</Link>
												</li>
											)
										})}
									</ul>
								</div>
							</>
						)}
					</div>
					<div>
						{searchValue.length === 0 && <div>Новинки</div>}
						<div className='search__goods'>
							{products.map((item, index) => {
								if (index < 3) return <Product {...item} />
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Search
