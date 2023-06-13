import React from 'react'

interface ISizesProps {
	sizes: number[]
	activeSize: number
	setActiveSize: (i: number) => void
}

const Sizes: React.FC<ISizesProps> = ({ sizes, activeSize, setActiveSize }) => {
	return (
		<div className='product-info__sizes'>
			<div className='sizes__header'>
				<div className='sizes__title'>
					<span>Размеры:</span>
				</div>
				<div className='sizes__guide'>
					<span>Таблица рамеров</span>
				</div>
			</div>
			<div className='sizes__list'>
				{sizes.map((item, index) => {
					return (
						<div
							key={index}
							onClick={() => setActiveSize(index)}
							className={`${activeSize === index ? 'active' : ''} sizes__item`}
						>
							{item}
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Sizes
