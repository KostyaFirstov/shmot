import React from 'react'

interface ITooltip {
	img: string
	title: string
	desc: string
	price: number
	orderRef: React.RefObject<HTMLButtonElement>
}

const Tooltip: React.FC<ITooltip> = ({ img, title, price, orderRef, desc }) => {
	return (
		<div className='tooltip'>
			<div className='tooltip__info'>
				<div className='tooltip__image'>
					<img src={`http://localhost:5000${img}`} alt={title} />
				</div>
				<div className='tooltip__text'>
					<div className='tooltip__title'>
						<span>{title}</span>
					</div>
					<div className='tooltip__desc'>
						<span>{desc}</span>
					</div>
				</div>
				<button ref={orderRef} className='button button-black'>
					{price} ₽
				</button>
			</div>
		</div>
	)
}

export default Tooltip
