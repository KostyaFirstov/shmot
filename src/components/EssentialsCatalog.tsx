import React from 'react'

const EssentialsCatalog = () => {
	return (
		<section className='essentials'>
			<div className='content__area'>
				<div className='wrapper'>
					<div className='desc'>The Essentials</div>
					<div className='essentials__wrapper'>
						<div className='essentials__column'>
							<div className='essentials__image'>
								<img src='/img/essentials03.jpg' alt='Mens' />
							</div>
							<div className='essentials__title'>Men`s</div>
						</div>
						<div className='essentials__column'>
							<div className='essentials__image'>
								<img src='/img/essentials02.jpg' alt='Womens' />
							</div>
							<div className='essentials__title'>Women`s</div>
						</div>
						<div className='essentials__column'>
							<div className='essentials__image'>
								<img src='/img/essentials01.jpg' alt='Kids' />
							</div>
							<div className='essentials__title'>Kids`</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default EssentialsCatalog
