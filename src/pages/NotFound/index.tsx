import React from 'react'
import ErrorBlock from '../../components/ErrorBlock'

const NotFound = () => {
	return (
		<ErrorBlock
			title='Хм... пусто!'
			desc='По такому запросу ничего не найдено'
		/>
	)
}

export default NotFound
