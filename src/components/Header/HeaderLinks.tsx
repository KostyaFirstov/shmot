import React from 'react'
import { Link } from 'react-router-dom'

export const links = [
	{ link: '/catalog?gender=men', name: 'Мужское' },
	{ link: '/catalog?gender=women', name: 'Женское' },
	{ link: '/catalog?type=accessories', name: 'Аксессуары' },
	{ link: '/reviews', name: 'Обзоры' },
	{ link: '/drops', name: 'Дропы' }
]

interface HeaderLinksProps {
	setDropdown: (value: boolean) => void
}

const HeaderLinks: React.FC<HeaderLinksProps> = ({ setDropdown }) => {
	const handleOpenDropdown = (event: React.MouseEvent<HTMLLIElement>) => {
		const eventAttribute = event.currentTarget.getAttribute('data-name')
		if (eventAttribute === 'Мужское' || eventAttribute === 'Женское') {
			setDropdown(true)
		}
	}

	const handleCloseDropdown = () => {
		setDropdown(false)
	}

	return (
		<>
			{links.map((link, index) => {
				return (
					<li
						key={index}
						data-name={link.name}
						onMouseEnter={handleOpenDropdown}
						onMouseLeave={handleCloseDropdown}
						onClick={handleCloseDropdown}
						className='header__link'
					>
						<Link to={link.link}>{link.name}</Link>
					</li>
				)
			})}
		</>
	)
}

export default HeaderLinks
