// app/components/ProductCard.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Heart, Eye, ShoppingBag, Star } from 'lucide-react'
import { useCart } from '@/context/CartContext'

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

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart()
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [showQuickView, setShowQuickView] = useState(false)

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    })
  }

  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary/30">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />

        {/* Badges */}
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
            New
          </span>
        )}
        {product.discount && (
          <span className="absolute top-3 right-3 bg-amber-500 text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
            {product.discount}% OFF
          </span>
        )}

        {/* Quick Actions */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex gap-2">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-white text-primary py-2 rounded-full text-sm font-semibold flex items-center justify-center gap-1 hover:bg-primary hover:text-white transition-all"
            >
              <ShoppingBag className="w-4 h-4" /> Add to Cart
            </button>
            <button
              onClick={() => setShowQuickView(true)}
              className="bg-white/20 backdrop-blur-md p-2 rounded-full hover:bg-white/40 transition"
            >
              <Eye className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Wishlist Button */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-3 right-12 bg-white/80 backdrop-blur-sm p-1.5 rounded-full hover:bg-white transition"
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-primary text-primary' : 'text-text'}`} />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-3">
        <h3 className="font-semibold text-text text-sm line-clamp-1 mb-1">{product.name}</h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${i < product.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-xs text-text/60">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-primary font-bold text-lg">₹{product.price}</span>
          {product.oldPrice && (
            <>
              <span className="text-text/40 line-through text-sm">₹{product.oldPrice}</span>
              <span className="text-green-600 text-xs font-semibold">{product.discount}% off</span>
            </>
          )}
        </div>
      </div>

      {/* Quick View Modal */}
      {showQuickView && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70" onClick={() => setShowQuickView(false)}>
          <div className="bg-white rounded-2xl max-w-sm w-full p-6" onClick={(e) => e.stopPropagation()}>
            <h3 className="font-serif text-xl font-semibold mb-3">{product.name}</h3>
            <Image src={product.image} alt={product.name} width={300} height={400} className="rounded-lg mb-4" />
            <p className="text-2xl text-primary font-bold mb-4">₹{product.price}</p>
            <button
              onClick={handleAddToCart}
              className="w-full bg-primary text-white py-3 rounded-full font-semibold"
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
