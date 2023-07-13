import React from 'react'

interface IContentLayoutProps {
	children: React.ReactNode
}

const ContentLayout: React.FC<IContentLayoutProps> = ({ children }) => {
	return (
		<div className='content__area'>
			<div className='wrapper'>{children}</div>
		</div>
	)
}

export default ContentLayout
