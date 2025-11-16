export default function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Tarifs</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-lg">Essentiel</h3>
            <p className="text-3xl font-bold mt-2">$29<span className="text-sm text-gray-500">/mois</span></p>
            <ul className="mt-4 text-sm text-gray-600 space-y-2">
              <li>Accès aux signaux basiques</li>
              <li>eBook d'introduction</li>
              <li>Support par email</li>
            </ul>
            <button className="mt-6 w-full py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">Choisir</button>
          </div>
          <div className="bg-white rounded-xl shadow p-6 border-2 border-blue-600">
            <h3 className="font-semibold text-lg">Pro</h3>
            <p className="text-3xl font-bold mt-2">$59<span className="text-sm text-gray-500">/mois</span></p>
            <ul className="mt-4 text-sm text-gray-600 space-y-2">
              <li>Signaux premium quotidiens</li>
              <li>Formations avancées</li>
              <li>Communauté privée</li>
            </ul>
            <button className="mt-6 w-full py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">Choisir</button>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-lg">Entreprise</h3>
            <p className="text-3xl font-bold mt-2">$199<span className="text-sm text-gray-500">/mois</span></p>
            <ul className="mt-4 text-sm text-gray-600 space-y-2">
              <li>Accès API & bots</li>
              <li>Coaching personnalisé</li>
              <li>SLA & support prioritaire</li>
            </ul>
            <button className="mt-6 w-full py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">Choisir</button>
          </div>
        </div>
      </div>
    </section>
  )
}
