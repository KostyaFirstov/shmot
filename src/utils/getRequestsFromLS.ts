export const getRequestFromLS = () => {
	const data = localStorage.getItem('requested')
	const items = data ? JSON.parse(data) : []

	return items
}
