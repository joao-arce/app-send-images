import ProductCards from './productCards'
import { Card, CardContent, CardHeader } from './ui/card'

const List = () => {
	return (
		<Card>
			<CardHeader>Lista de Produtos</CardHeader>
			<CardContent>
				<ProductCards />
			</CardContent>
		</Card>
	)
}

export default List
