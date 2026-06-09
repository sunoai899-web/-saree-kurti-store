// app/components/HeroSlider.tsx
'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1583391733956-6c5c1ab4f6d9?w=800&h=600&fit=crop',
    subtitle: 'Premium Ethnic Wear',
    title: 'Premium Ethnic Fashion for Every Woman',
    description: 'Discover timeless elegance with our handcrafted sarees and kurtis',
    ctaLeft: 'Shop Sarees',
    ctaRight: 'Shop Kurtis',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1610030469655-7b0f3e09e4a1?w=800&h=600&fit=crop',
    subtitle: 'Festive Collection',
    title: 'Celebrate in Style with Our Festive Edit',
    description: 'Exclusive designs for every celebration',
    ctaLeft: 'Shop Now',
    ctaRight: 'View Collection',
  },
]

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }

  const slide = slides[currentIndex]

  return (
    <div className="relative px-4 pt-4">
      <div className="relative h-[320px] md:h-[350px] bg-gradient-to-r from-pinkLight/30 to-secondary rounded-xl overflow-hidden">
        <div className="relative h-full flex flex-col md:flex-row">
          {/* Text Content */}
          <div className="flex-1 p-6 md:p-8 flex flex-col justify-center z-10">
            <span className="text-primary text-sm font-semibold tracking-wide uppercase mb-2">
              {slide.subtitle}
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-text leading-tight mb-3">
              {slide.title}
            </h2>
            <p className="text-text/70 text-sm mb-5 line-clamp-2">
              {slide.description}
            </p>
            <div className="flex gap-3">
              <button className="px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-pink-700 transition-all shadow-md">
                {slide.ctaLeft}
              </button>
              <button className="px-5 py-2.5 border-2 border-primary text-primary text-sm font-semibold rounded-full hover:bg-primary/5 transition-all">
                {slide.ctaRight}
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 relative h-40 md:h-full min-h-[140px]">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover rounded-t-xl md:rounded-r-xl md:rounded-l-none"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 shadow-md transition-all"
        >
          <ChevronLeft className="w-5 h-5 text-text" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 shadow-md transition-all"
        >
          <ChevronRight className="w-5 h-5 text-text" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-6 bg-primary' : 'w-1.5 bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
