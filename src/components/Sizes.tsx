import React from 'react'

export const exampleSizes = ['UK 7', 'UK 7.5', 'UK 8', 'UK 8.5', 'UK 11.5']

interface ISizesProps {
	activeSize: number
	setActiveSize: (i: number) => void
}

const Sizes: React.FC<ISizesProps> = ({ activeSize, setActiveSize }) => {
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
				{exampleSizes.map((item, index) => {
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
