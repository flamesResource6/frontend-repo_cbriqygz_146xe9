import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import Pricing from './components/Pricing'
import AuthModal from './components/AuthModal'

function App() {
  const [authOpen, setAuthOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Navbar onOpenAuth={() => setAuthOpen(true)} />
      <Hero />
      <ProductGrid />
      <Pricing />
      <footer id="faq" className="py-12 text-center text-sm text-gray-600">© {new Date().getFullYear()} TradeHub — Tous droits réservés.</footer>
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </div>
  )
}

export default App
