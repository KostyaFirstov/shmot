import React from 'react'
import { useParams } from 'react-router-dom'
import { FiltersParams } from '../redux/slices/filters'
import axios from '../axios'

const BrandPage = () => {
	const [brand, setBrand] = React.useState<FiltersParams>()
	const [isLoading, setIsLoading] = React.useState(true)

	const params = useParams()

	React.useEffect(() => {
		const fetchProduct = async () => {
			setIsLoading(true)
			try {
				const { data } = await axios.get<FiltersParams[]>(
					`/api/brands/${params.title}`
				)
				setBrand(data[0])
				setIsLoading(false)
			} catch (error) {
				console.log(error)
				setIsLoading(false)
			}
		}

		fetchProduct()
	}, [])

	console.log(brand)

	return <div>BrandPage</div>
}

export default BrandPage
