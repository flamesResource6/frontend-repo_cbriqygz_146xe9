import { useState } from 'react'

export default function AuthModal({ open, onClose }) {
  const [isLogin, setIsLogin] = useState(true)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  if (!open) return null

  const doRegister = async () => {
    setLoading(true)
    const res = await fetch(`${baseUrl}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    })
    const data = await res.json()
    setLoading(false)
    if (!res.ok) return alert(data.detail || 'Erreur')
    alert('Compte créé. Connectez-vous maintenant.')
    setIsLogin(true)
  }

  const doLogin = async () => {
    setLoading(true)
    const form = new URLSearchParams()
    form.append('username', email)
    form.append('password', password)
    const res = await fetch(`${baseUrl}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: form.toString()
    })
    const data = await res.json()
    setLoading(false)
    if (!res.ok) return alert(data.detail || 'Erreur')
    localStorage.setItem('token', data.access_token)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{isLogin ? 'Connexion' : 'Créer un compte'}</h3>
          <button className="text-gray-500" onClick={onClose}>✕</button>
        </div>
        <div className="mt-4 space-y-3">
          {!isLogin && (
            <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Nom" className="w-full border rounded-md px-3 py-2" />
          )}
          <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="w-full border rounded-md px-3 py-2" />
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Mot de passe" className="w-full border rounded-md px-3 py-2" />
          <button disabled={loading} onClick={isLogin ? doLogin : doRegister} className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2">
            {loading ? 'Veuillez patienter...' : (isLogin ? 'Se connecter' : "S'inscrire")}
          </button>
        </div>
        <p className="mt-4 text-sm text-gray-600 text-center">
          {isLogin ? (
            <>Pas de compte ? <button className="text-blue-600" onClick={()=>setIsLogin(false)}>Créer un compte</button></>
          ) : (
            <>Déjà inscrit ? <button className="text-blue-600" onClick={()=>setIsLogin(true)}>Se connecter</button></>
          )}
        </p>
      </div>
    </div>
  )
}
