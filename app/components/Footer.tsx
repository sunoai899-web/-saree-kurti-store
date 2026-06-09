// app/components/Footer.tsx
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-text text-white mt-8">
      <div className="px-4 py-8">
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="font-serif text-lg font-semibold mb-3 text-primary">Shop</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition">Sarees</a></li>
              <li><a href="#" className="hover:text-white transition">Kurtis</a></li>
              <li><a href="#" className="hover:text-white transition">Dress Materials</a></li>
              <li><a href="#" className="hover:text-white transition">Accessories</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg font-semibold mb-3 text-primary">Support</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition">Returns Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white transition">FAQs</a></li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center gap-6 mb-6">
          <a href="#" className="hover:text-primary transition"><Facebook className="w-5 h-5" /></a>
          <a href="#" className="hover:text-primary transition"><Instagram className="w-5 h-5" /></a>
          <a href="#" className="hover:text-primary transition"><Twitter className="w-5 h-5" /></a>
          <a href="#" className="hover:text-primary transition"><Youtube className="w-5 h-5" /></a>
        </div>

        <div className="text-center text-white/50 text-xs">
          <p>&copy; 2024 SareeStore. All rights reserved.</p>
          <p className="mt-1">Premium Ethnic Wear for Every Woman</p>
        </div>
      </div>
    </footer>
  )
}
