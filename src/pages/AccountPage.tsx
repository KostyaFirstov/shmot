import React from 'react'
import { useSelector } from 'react-redux'
import { selectAccount } from '../redux/slices/auth'
import { Link } from 'react-router-dom'

const AccountPage = () => {
	const account = useSelector(selectAccount)

	return (
		<div className='account-page'>
			<div className='content__area'>
				<div className='wrapper'>
					<div className='account-page__wrapper'>
						<div className='account-page__header'>
							<div className='account-page__avatar'>
								<img src='/img/goods/goods15.jpg' alt='' />
								<input type='file' id='file' />
								<label htmlFor='file'></label>
							</div>
							<div className='account-page__info'>
								<div className='account-page__name'>
									<span>{account?.username}</span>
								</div>
								<ul className='account-page__stats'>
									<li className='account-page__stats-item'>
										<Link className='active' to='/account/orders'>
											Заказов: <span>{account?.orders} 0</span>
										</Link>
									</li>
									<li className='account-page__stats-item'>
										<Link to='/account/promo'>
											Промокодов: <span>{account?.promocodes} 0</span>
										</Link>
									</li>
									<li className='account-page__stats-item'>
										<Link to='/account'>
											Дата создания:{' '}
											<span>{account?.createdAt.slice(0, 10)}</span>
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className='account-page__main'>
							<div className='account-page__title'>
								<h1>Заказы</h1>
							</div>
							<div className='account-page__content'>
								{!account?.orders ? (
									<div className='account-page__orders'>
										<div className='account-page__order'>
											<div className='order__product'>
												<div className='order__image'>
													<img src='/img/goods/goods15.jpg' alt='' />
												</div>
												<div className='order__info'>
													<div className='order__title'>
														<h2>Nike dunk Low</h2>
													</div>
													<div className='order__desc'>
														<p>Bla bla bla bla</p>
													</div>
													<div className='order__size'>
														<span>43 EU</span>
													</div>
													<div className='order__count'>
														<span>Количество: 1</span>
													</div>
												</div>
											</div>
											<div className='order__details'>
												<div className='order__date'>
													<span>02.06.2023</span>
												</div>
												<div className='order__status'>
													<span>В обработке</span>
												</div>
											</div>
										</div>
									</div>
								) : (
									<div>Заказов не найдено :(</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AccountPage
