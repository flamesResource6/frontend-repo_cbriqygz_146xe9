import { useEffect, useState } from 'react'

function ProductCard({ p, onBuy, onSubscribe }) {
  return (
    <div className="border rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition">
      <img src={p.thumbnail_url || 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f'} alt={p.title} className="h-40 w-full object-cover rounded-lg" />
      <h3 className="mt-3 font-semibold text-lg">{p.title}</h3>
      <p className="text-sm text-gray-600 line-clamp-3">{p.description}</p>
      <div className="mt-3 flex items-center justify-between">
        <div>
          {p.is_subscription ? (
            <span className="text-blue-600 font-semibold">{p.interval === 'month' ? 'Mensuel' : p.interval}</span>
          ) : (
            <>
              {p.sale_price ? (
                <div className="space-x-2">
                  <span className="text-gray-400 line-through">${p.price}</span>
                  <span className="text-green-600 font-semibold">${p.sale_price}</span>
                </div>
              ) : (
                <span className="text-gray-900 font-semibold">${p.price}</span>
              )}
            </>
          )}
        </div>
        {p.is_subscription ? (
          <button onClick={() => onSubscribe(p)} className="px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">S'abonner</button>
        ) : (
          <button onClick={() => onBuy(p)} className="px-3 py-2 rounded-md bg-gray-900 text-white hover:bg-black">Acheter</button>
        )}
      </div>
      <div className="mt-2 text-xs text-gray-500">Type: {p.kind}</div>
    </div>
  )
}

export default function ProductGrid() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const fetchProducts = async () => {
    setLoading(true)
    const res = await fetch(`${baseUrl}/products`)
    const data = await res.json()
    setItems(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const ensureAuthToken = () => localStorage.getItem('token')

  const onBuy = async (p) => {
    const token = ensureAuthToken()
    if (!token) {
      alert('Veuillez vous connecter pour acheter.')
      return
    }
    const res = await fetch(`${baseUrl}/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ product_id: p.id })
    })
    const data = await res.json()
    if (res.ok) alert('Achat confirmé!')
    else alert(data.detail || 'Erreur')
  }

  const onSubscribe = async (p) => {
    const token = ensureAuthToken()
    if (!token) {
      alert('Veuillez vous connecter pour vous abonner.')
      return
    }
    const res = await fetch(`${baseUrl}/subscriptions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ product_id: p.id })
    })
    const data = await res.json()
    if (res.ok) alert('Abonnement actif!')
    else alert(data.detail || 'Erreur')
  }

  return (
    <section id="products" className="py-14 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-bold">Produits populaires</h2>
          <button onClick={fetchProducts} className="text-sm text-blue-600 hover:underline">Rafraîchir</button>
        </div>
        {loading ? (
          <p className="text-gray-500">Chargement...</p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {items.map((p) => (
              <ProductCard key={p.id} p={p} onBuy={onBuy} onSubscribe={onSubscribe} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
