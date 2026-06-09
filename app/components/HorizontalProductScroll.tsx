// app/components/HorizontalProductScroll.tsx
'use client'

import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ProductCard from './ProductCard'

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

export default function HorizontalProductScroll({ products, title }: { products: Product[]; title: string }) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 280
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="px-4 py-6">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-serif font-semibold text-text">{title}</h2>
        <div className="flex gap-2">
          <button onClick={() => scroll('left')} className="p-2 rounded-full bg-secondary hover:bg-primary/10 transition">
            <ChevronLeft className="w-5 h-5 text-text" />
          </button>
          <button onClick={() => scroll('right')} className="p-2 rounded-full bg-secondary hover:bg-primary/10 transition">
            <ChevronRight className="w-5 h-5 text-text" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory"
      >
        {products.map((product) => (
          <div key={product.id} className="min-w-[260px] w-[260px] snap-start">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}
