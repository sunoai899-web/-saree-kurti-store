// app/components/ProductSection.tsx
import ProductCard from './ProductCard'
import { ChevronRight } from 'lucide-react'

interface Product {
  id: number
  name: string
  price: number
  oldPrice?: number
  discount?: number
  rating: number
  reviewCount: number
  image: string
  isNew?: boolean
}

interface ProductSectionProps {
  title: string
  products: Product[]
  viewAllLink?: string
}

export default function ProductSection({ title, products, viewAllLink = '#' }: ProductSectionProps) {
  return (
    <div className="px-4 py-6">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-serif font-semibold text-text">{title}</h2>
        <a href={viewAllLink} className="text-primary text-sm font-semibold flex items-center gap-1">
          View All <ChevronRight className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
