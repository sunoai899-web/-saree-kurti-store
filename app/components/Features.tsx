// app/components/Features.tsx
import { Truck, RefreshCw, Shield, CreditCard } from 'lucide-react'

const features = [
  { icon: Truck, title: 'Free Shipping', desc: 'On orders above ₹999' },
  { icon: RefreshCw, title: 'Easy Returns', desc: '30 days return policy' },
  { icon: Shield, title: 'Secure Payment', desc: '100% secure transactions' },
  { icon: CreditCard, title: 'COD Available', desc: 'Pay at your doorstep' },
]

export default function Features() {
  return (
    <div className="px-4 py-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center p-3 bg-secondary/30 rounded-2xl hover:bg-secondary transition-all"
          >
            <feature.icon className="w-6 h-6 text-primary mb-2" />
            <h3 className="font-semibold text-sm text-text">{feature.title}</h3>
            <p className="text-xs text-text/60 mt-0.5 hidden sm:block">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
