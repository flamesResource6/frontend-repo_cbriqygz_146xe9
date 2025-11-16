export default function Hero() {
  return (
    <section className="pt-28 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Boutique digitale pour traders Forex & Crypto
          </h1>
          <p className="mt-4 text-gray-600 leading-relaxed">
            eBooks, signaux premium, formations vidéo et bots de trading. Tout ce qu'il vous faut pour passer au niveau supérieur.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#products" className="px-5 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700">Découvrir</a>
            <a href="#pricing" className="px-5 py-3 rounded-md bg-gray-900 text-white hover:bg-black">Voir les tarifs</a>
          </div>
        </div>
        <div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1553729459-efe14ef6055d" alt="Trading" className="rounded-xl shadow-2xl" />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow p-4">
              <p className="text-sm text-gray-600">Plus de 10k membres</p>
              <p className="text-lg font-semibold">Note moyenne 4.8/5</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
