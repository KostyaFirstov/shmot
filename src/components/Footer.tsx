import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='content__area'>
				<div className='wrapper'>
					<div className='footer__wrapper'>
						<div className='footer__columns'>
							<div className='footer__column'>
								<div className='column__title'>GET HELP</div>
								<ul className='column__links'>
									<li className='column__link'>
										<Link to='/'>Order Status</Link>
									</li>
									<li className='column__link'>
										<Link to='/'>Delivery</Link>
									</li>
									<li className='column__link'>
										<Link to='/'>Returns</Link>
									</li>
									<li className='column__link'>
										<Link to='/'>Payment Options</Link>
									</li>
									<li className='column__link'>
										<Link to='/'>Contact Us On Nike.com Inquiries</Link>
									</li>
								</ul>
							</div>
							<div className='footer__column'>
								<div className='column__title'>Catalog</div>
								<ul className='column__links'>
									<li className='column__link'>
										<Link to='/'>Men`s</Link>
									</li>
									<li className='column__link'>
										<Link to='/'>Women's</Link>
									</li>
									<li className='column__link'>
										<Link to='/'>Kid`s</Link>
									</li>
									<li className='column__link'>
										<Link to='/'>Brands</Link>
									</li>
								</ul>
							</div>
							<div className='footer__column'>
								<div className='column__title'>About Nike</div>
								<ul className='column__links'>
									<li className='column__link'>
										<Link to='/'>News</Link>
									</li>
									<li className='column__link'>
										<Link to='/'>Careers</Link>
									</li>
									<li className='column__link'>
										<Link to='/'>Investors</Link>
									</li>
									<li className='column__link'>
										<Link to='/'>Sustainability</Link>
									</li>
								</ul>
							</div>
						</div>
						<ul className='footer__links'>
							<li className='footer__link'>
								<Link to='/'>
									<img src='/img/icons/appstore.svg' alt='App on IOS' />
								</Link>
							</li>
							<li className='footer__link'>
								<Link to='/'>
									<img src='/img/icons/android.svg' alt='App on Andorid' />
								</Link>
							</li>
							<li className='footer__link'>
								<Link to='/'>
									<img src='/img/icons/vk.svg' alt='VK' />
								</Link>
							</li>
							<li className='footer__link'>
								<Link to='/'>
									<img src='/img/icons/yt.svg' alt='Youtube' />
								</Link>
							</li>
							<li className='footer__link'>
								<Link to='/'>
									<img src='/img/icons/tg.svg' alt='Telegram' />
								</Link>
							</li>
						</ul>
					</div>
					<div className='footer__wrapper footer__wrapper-bottom'>
						<div className='footer__copyright'>
							<span>© 2023 SHMOT.</span> Все права защищены.
						</div>
						<ul className='footer__rules'>
							<li className='footer__rule'>
								<Link to='/'>Guides</Link>
							</li>
							<li className='footer__rule'>
								<Link to='/'>Terms of Sale</Link>
							</li>
							<li className='footer__rule'>
								<Link to='/'>Terms of Use</Link>
							</li>
							<li className='footer__rule'>
								<Link to='/'>Nike Privacy Policy</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
