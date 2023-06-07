import React from 'react'

interface IAccordionProps {
	title: string
	text: string
}

const Accordion: React.FC<IAccordionProps> = ({ title, text }) => {
	const [isActive, setIsActive] = React.useState(false)

	return (
		<div className='accordion__item'>
			<div onClick={() => setIsActive(!isActive)} className='accordion__title'>
				{title}
				<span>{isActive ? '-' : '+'}</span>
			</div>
			{isActive && <div className='accordion__content'>{text}</div>}
		</div>
	)
}

export default Accordion
