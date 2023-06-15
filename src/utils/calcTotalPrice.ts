import { CartItem } from '../redux/slices/cart'

export const calcTotalPrice = (items: CartItem[]) => {
	return items.reduce((acc, value) => acc + value.count * value.price, 0)
}
