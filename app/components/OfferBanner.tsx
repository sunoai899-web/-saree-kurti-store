// app/components/OfferBanner.tsx
export default function OfferBanner() {
  return (
    <div className="px-4 py-4">
      <div className="bg-gradient-to-r from-pinkLight to-secondary rounded-2xl p-6 text-center">
        <h3 className="text-2xl font-serif font-bold text-primary mb-2">Flat 20% Off</h3>
        <p className="text-text/80 mb-4">On Minimum Purchase of ₹1999</p>
        <button className="bg-primary text-white px-8 py-2.5 rounded-full font-semibold hover:bg-pink-700 transition-all shadow-md">
          Shop Now
        </button>
      </div>
    </div>
  )
}
