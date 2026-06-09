// app/components/CustomerReviews.tsx
import { Star } from 'lucide-react'

const reviews = [
  {
    id: 1,
    name: 'Priya Sharma',
    rating: 5,
    text: 'Absolutely stunning saree! The fabric quality is premium and the color is exactly as shown.',
    product: 'Banarasi Silk Saree',
  },
  {
    id: 2,
    name: 'Anjali Mehta',
    rating: 5,
    text: 'Beautiful kurti set. Perfect for festive occasions. Delivery was quick too!',
    product: 'Cotton Kurti Set',
  },
  {
    id: 3,
    name: 'Neha Gupta',
    rating: 4,
    text: 'Great design and comfortable fabric. Slightly pricey but worth it.',
    product: 'Designer Saree',
  },
]

export default function CustomerReviews() {
  return (
    <div className="px-4 py-6 bg-secondary/20">
      <h2 className="text-2xl font-serif font-semibold text-text text-center mb-6">Customer Reviews</h2>
      <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
        {reviews.map((review) => (
          <div key={review.id} className="min-w-[280px] bg-white rounded-xl p-4 shadow-sm">
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`} />
              ))}
            </div>
            <p className="text-text/80 text-sm mb-3 line-clamp-3">"{review.text}"</p>
            <p className="font-semibold text-text">{review.name}</p>
            <p className="text-xs text-text/50">{review.product}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
