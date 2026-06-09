// app/page.tsx
'use client'

import Header from './components/Header'
import HeroSlider from './components/HeroSlider'
import Features from './components/Features'
import CategorySection from './components/CategorySection'
import ProductSection from './components/ProductSection'
import OfferBanner from './components/OfferBanner'
import HorizontalProductScroll from './components/HorizontalProductScroll'
import CustomerReviews from './components/CustomerReviews'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

// Sample Product Data
const newArrivals = [
  {
    id: 1,
    name: 'Banarasi Silk Saree',
    price: 5499,
    oldPrice: 8999,
    discount: 39,
    rating: 4.8,
    reviewCount: 128,
    image: 'https://images.unsplash.com/photo-1583391733956-6c5c1ab4f6d9?w=400&h=500&fit=crop',
    isNew: true,
  },
  {
    id: 2,
    name: 'Cotton Printed Kurti',
    price: 1299,
    oldPrice: 2499,
    discount: 48,
    rating: 4.5,
    reviewCount: 342,
    image: 'https://images.unsplash.com/photo-1610030469655-7b0f3e09e4a1?w=400&h=500&fit=crop',
    isNew: true,
  },
  {
    id: 3,
    name: 'Designer Party Wear Saree',
    price: 6999,
    oldPrice: 12999,
    discount: 46,
    rating: 4.9,
    reviewCount: 89,
    image: 'https://images.unsplash.com/photo-1583391733956-6c5c1ab4f6d9?w=400&h=500&fit=crop',
  },
  {
    id: 4,
    name: 'Georgette Anarkali Kurti',
    price: 2499,
    oldPrice: 3999,
    discount: 38,
    rating: 4.6,
    reviewCount: 215,
    image: 'https://images.unsplash.com/photo-1610030469655-7b0f3e09e4a1?w=400&h=500&fit=crop',
  },
]

const bestSellers = [
  {
    id: 5,
    name: 'Red Banarasi Saree',
    price: 7999,
    oldPrice: 14999,
    discount: 47,
    rating: 4.9,
    reviewCount: 456,
    image: 'https://images.unsplash.com/photo-1583391733956-6c5c1ab4f6d9?w=400&h=500&fit=crop',
  },
  {
    id: 6,
    name: 'Chikankari Kurti Set',
    price: 1899,
    oldPrice: 3499,
    discount: 46,
    rating: 4.7,
    reviewCount: 278,
    image: 'https://images.unsplash.com/photo-1610030469655-7b0f3e09e4a1?w=400&h=500&fit=crop',
  },
  {
    id: 7,
    name: 'Silk Blend Saree',
    price: 4599,
    oldPrice: 6999,
    discount: 34,
    rating: 4.5,
    reviewCount: 189,
    image: 'https://images.unsplash.com/photo-1583391733956-6c5c1ab4f6d9?w=400&h=500&fit=crop',
  },
  {
    id: 8,
    name: 'Linen Straight Kurti',
    price: 1599,
    oldPrice: 2999,
    discount: 47,
    rating: 4.4,
    reviewCount: 167,
    image: 'https://images.unsplash.com/photo-1610030469655-7b0f3e09e4a1?w=400&h=500&fit=crop',
  },
]

const trendingProducts = [
  {
    id: 9,
    name: 'Party Wear Saree',
    price: 5999,
    oldPrice: 10999,
    discount: 45,
    rating: 4.8,
    reviewCount: 234,
    image: 'https://images.unsplash.com/photo-1583391733956-6c5c1ab4f6d9?w=400&h=500&fit=crop',
  },
  {
    id: 10,
    name: 'A-line Kurti',
    price: 999,
    oldPrice: 1999,
    discount: 50,
    rating: 4.6,
    reviewCount: 423,
    image: 'https://images.unsplash.com/photo-1610030469655-7b0f3e09e4a1?w=400&h=500&fit=crop',
  },
  {
    id: 11,
    name: 'Wedding Silk Saree',
    price: 8999,
    oldPrice: 15999,
    discount: 44,
    rating: 4.9,
    reviewCount: 167,
    image: 'https://images.unsplash.com/photo-1583391733956-6c5c1ab4f6d9?w=400&h=500&fit=crop',
  },
  {
    id: 12,
    name: 'Palazzo Kurti Set',
    price: 2199,
    oldPrice: 3999,
    discount: 45,
    rating: 4.7,
    reviewCount: 312,
    image: 'https://images.unsplash.com/photo-1610030469655-7b0f3e09e4a1?w=400&h=500&fit=crop',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSlider />
      <Features />
      <CategorySection />
      <ProductSection title="New Arrivals" products={newArrivals} />
      <OfferBanner />
      <HorizontalProductScroll title="Best Sellers" products={bestSellers} />
      <ProductSection title="Trending Products" products={trendingProducts} />
      <CustomerReviews />
      <Newsletter />
      <Footer />
    </main>
  )
}
