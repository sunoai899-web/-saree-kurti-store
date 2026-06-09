// app/components/CategorySection.tsx
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

const categories = [
  { name: 'Sarees', image: 'https://images.unsplash.com/photo-1583391733956-6c5c1ab4f6d9?w=200&h=200&fit=crop' },
  { name: 'Kurtis', image: 'https://images.unsplash.com/photo-1610030469655-7b0f3e09e4a1?w=200&h=200&fit=crop' },
  { name: 'Dress Materials', image: 'https://images.unsplash.com/photo-1583391733956-6c5c1ab4f6d9?w=200&h=200&fit=crop' },
  { name: 'Dupatta', image: 'https://images.unsplash.com/photo-1610030469655-7b0f3e09e4a1?w=200&h=200&fit=crop' },
  { name: 'Accessories', image: 'https://images.unsplash.com/photo-1583391733956-6c5c1ab4f6d9?w=200&h=200&fit=crop' },
]

export default function CategorySection() {
  return (
    <div className="px-4 py-6">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-serif font-semibold text-text">Shop by Categories</h2>
        <button className="text-primary text-sm font-semibold flex items-center gap-1">
          View All <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
        {categories.map((cat, idx) => (
          <div key={idx} className="flex flex-col items-center min-w-[80px]">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/20 hover:border-primary transition-all">
              <Image
                src={cat.image}
                alt={cat.name}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="mt-2 text-sm font-medium text-text">{cat.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
