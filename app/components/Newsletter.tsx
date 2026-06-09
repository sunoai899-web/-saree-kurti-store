// app/components/Newsletter.tsx
'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Thanks for subscribing! You'll receive updates at ${email}`)
    setEmail('')
  }

  return (
    <div className="px-4 py-8">
      <div className="bg-gradient-to-r from-primary/5 to-secondary rounded-2xl p-6 text-center">
        <h3 className="text-2xl font-serif font-semibold text-text mb-2">Join Our Newsletter</h3>
        <p className="text-text/60 mb-4">Get 10% off on your first order & exclusive updates</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-full border border-secondary focus:outline-none focus:border-primary"
            required
          />
          <button
            type="submit"
            className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-700 transition-all"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}
