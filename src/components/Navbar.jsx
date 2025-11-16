import { useEffect, useState } from 'react'

export default function Navbar({ onOpenAuth }) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all ${scrolled ? 'backdrop-blur bg-white/70 shadow' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-bold"><span className="text-blue-600">Trade</span>Hub</a>
        <nav className="hidden md:flex gap-6 text-sm text-gray-700">
          <a href="#products" className="hover:text-blue-600">Produits</a>
          <a href="#pricing" className="hover:text-blue-600">Tarifs</a>
          <a href="#faq" className="hover:text-blue-600">FAQ</a>
          <a href="/test" className="hover:text-blue-600">Test</a>
        </nav>
        <div className="flex gap-3">
          <button onClick={onOpenAuth} className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">Se connecter</button>
        </div>
      </div>
    </header>
  )
}
