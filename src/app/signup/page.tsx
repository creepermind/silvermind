'use client'

import { useState } from 'react'

export default function SignupPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ fullName, email, password })
    // kayıt işlemi buraya
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#1e293b] bg-opacity-90 p-8 rounded-lg w-full max-w-md shadow-lg space-y-6 border border-white/10"
      >
        <h2 className="text-2xl font-bold text-center">Kayıt Ol</h2>

        <div className="flex flex-col">
          <label className="mb-1 text-sm">Ad Soyad</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Adınızı girin"
            className="px-4 py-2 rounded bg-[#0f172a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm">E-posta</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
            className="px-4 py-2 rounded bg-[#0f172a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm">Şifre</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Şifre belirleyin"
            className="px-4 py-2 rounded bg-[#0f172a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-white text-[#0f172a] font-semibold py-2 rounded hover:bg-gray-200 transition"
        >
          Kayıt Ol
        </button>
      </form>
    </div>
  )
}
