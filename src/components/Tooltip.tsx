import React from 'react'

interface ITooltip {
	orderRef: React.RefObject<HTMLButtonElement>
}

const Tooltip: React.FC<ITooltip> = ({ orderRef }) => {
	return (
		<div className='tooltip'>
			<div className='tooltip__info'>
				<div className='tooltip__title'>
					<span>Nike Air Max 97 SE</span>
				</div>
				<div className='tooltip__price'>
					<span>15.999 ₽</span>
				</div>
				<button ref={orderRef} className='button button-green'>
					Заказ в один клик
				</button>
			</div>
		</div>
	)
}

export default Tooltip
