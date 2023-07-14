import React from 'react'

interface ITooltip {
	title: string
	price: number
	orderRef: React.RefObject<HTMLButtonElement>
}

const Tooltip: React.FC<ITooltip> = ({ title, price, orderRef }) => {
	return (
		<div className='tooltip'>
			<div className='tooltip__info'>
				<div className='tooltip__title'>
					<span>{title}</span>
				</div>
				<div className='tooltip__price'>
					<span>{price} ₽</span>
				</div>
				<button ref={orderRef} className='button button-black'>
					Заказ в один клик
				</button>
			</div>
		</div>
	)
}

export default Tooltip
