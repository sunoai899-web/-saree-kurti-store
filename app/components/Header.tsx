// app/components/Header.tsx
'use client'

import { useState } from 'react'
import { Menu, Search, User, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cartCount } = useCart()

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-secondary">
        <div className="px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 -ml-2 hover:bg-secondary rounded-full transition-colors"
            aria-label="Menu"
          >
            <Menu className="w-5 h-5 text-text" />
          </button>

          <h1 className="text-2xl font-serif font-bold text-primary tracking-wide">
            SareeStore
          </h1>

          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-secondary rounded-full transition-colors" aria-label="Search">
              <Search className="w-5 h-5 text-text" />
            </button>
            <button className="p-2 hover:bg-secondary rounded-full transition-colors" aria-label="Profile">
              <User className="w-5 h-5 text-text" />
            </button>
            <button className="p-2 hover:bg-secondary rounded-full transition-colors relative" aria-label="Cart">
              <ShoppingBag className="w-5 h-5 text-text" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Side Menu */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          isMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />
        <div
          className={`absolute left-0 top-0 bottom-0 w-80 bg-white shadow-xl transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="font-serif text-xl font-semibold text-primary">Menu</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:bg-secondary rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="p-4">
            <ul className="space-y-4">
              <li><a href="#" className="block py-2 text-lg hover:text-primary transition-colors">New Arrivals</a></li>
              <li><a href="#" className="block py-2 text-lg hover:text-primary transition-colors">Sarees</a></li>
              <li><a href="#" className="block py-2 text-lg hover:text-primary transition-colors">Kurtis</a></li>
              <li><a href="#" className="block py-2 text-lg hover:text-primary transition-colors">Dress Materials</a></li>
              <li><a href="#" className="block py-2 text-lg hover:text-primary transition-colors">Accessories</a></li>
              <li><a href="#" className="block py-2 text-lg hover:text-primary transition-colors">Offers</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}
