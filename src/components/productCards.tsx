'use client'

import Image from 'next/image'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'

type ProductCardsProps = {
	id: number
	urlImage: string
}

const invoices = [
	{
		id: 101,
		urlImage: '/sport-01.png',
	},
	{
		id: 102,
		urlImage: '/sport-02.png',
	},
	{
		id: 103,
		urlImage: '/sport-03.png',
	},
	{
		id: 104,
		urlImage: '/sport-04.png',
	},
]

const ProductCards = () => {
	const handleClick = () => {
		// A função de enviar as imagens deverá ser chamada aqui
	}
	return (
		<div className="flex flex-col gap-1">
			{invoices.map((invoice) => (
				<Card key={invoice.id.toString()} className="w-56">
					<CardContent className="w-full flex justify-center py-0">
						<div className="relative min-h-[110px] max-h-[110px] min-w-[110px] max-w-[110px]">
							<Image
								src={invoice.urlImage}
								alt="image"
								fill
								className="object-cover rounded-lg"
							/>
						</div>
					</CardContent>
				</Card>
			))}
			<Button
				onClick={handleClick}
				variant="outline"
				className="w-56 mt-2 rounded-3xl"
			>
				Enviar Imagens
			</Button>
		</div>
	)
}

export default ProductCards
