import React from 'react'

interface IBannerProps {
	headerDesc?: string
	image: string
	desc?: string
	title: string
	text: string
	buttons: string[]
}

const Banner: React.FC<IBannerProps> = ({
	headerDesc,
	image,
	desc,
	title,
	text,
	buttons
}) => {
	return (
		<section className='banner'>
			<div className='wrapper'>
				{headerDesc && <div className='desc'>{headerDesc}</div>}
				<div className='banner__image'>
					<img src={image} alt={title} />
				</div>
				<div className='banner__info'>
					{desc && (
						<div className='banner__desc'>
							<span>{desc}</span>
						</div>
					)}
					<div className='banner__title'>
						<h1>{title}</h1>
					</div>
					<div className='banner__text'>
						<p>{text}</p>
					</div>
					<div className='banner__btns'>
						{buttons.map(btn => {
							return (
								<div className='banner__btn'>
									<button className='button button-black'>{btn}</button>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Banner
