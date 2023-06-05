import React from 'react'
import { Link } from 'react-router-dom'

const HeaderBanner = () => {
	return (
		<div className='header-banner'>
			<div className='header-banner__wrapper wrapper'>
				<div className='header-banner__ask'>
					<Link to='/info'>Задать вопрос</Link>
				</div>
				<div className='header-banner__offer'>
					<Link to='/catalog'>
						<span className='header-banner__offer-sale'>-30%</span> <br /> до
						13.06
					</Link>
				</div>
				<div className='header-banner__options'>
					<div className='header-banner__option'>
						<Link to='/'> Рассчитать стоимость</Link>
					</div>
					<div className='header-banner__option'>
						<Link to='/track-order'>Отследить заказ</Link>
					</div>
					<div className='header-banner__option'>
						<Link to='/info'>FAQ</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeaderBanner
