import { useState } from 'react'

export default function Vrijwilligers() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', interests: '', availability: '', motivation: '' })
  const [status, setStatus] = useState(null)
  const submit = async (e) => {
    e.preventDefault()
    setStatus('busy')
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/applications/volunteers`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form)
      })
      const data = await res.json()
      setStatus(res.ok ? 'ok' : data.detail || 'error')
      if (res.ok) setForm({ name: '', email: '', phone: '', interests: '', availability: '', motivation: '' })
    } catch (e) { setStatus('error') }
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-slate-200">
      <h1 className="text-3xl font-bold text-white mb-6">Vrijwilligers</h1>
      <p className="mb-4">Maak het verschil in een groene en sociale omgeving. We hebben diverse vrijwilligersrollen, van dierenverzorging tot logistieke ondersteuning.</p>

      <div className="grid md:grid-cols-2 gap-10">
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Waarom vrijwilligerswerk bij ons?</h2>
          <ul className="list-disc pl-5 space-y-1 text-slate-300">
            <li>Gezellige en betrokken community</li>
            <li>Leer nieuwe skills en deel je talent</li>
            <li>Flexibele tijden en taken</li>
          </ul>
          <h2 className="text-xl font-semibold text-white mt-8 mb-3">Ervaringen</h2>
          <div className="space-y-3 text-slate-300">
            <blockquote className="p-4 bg-white/5 rounded-lg ring-1 ring-white/10">“Ik ga elke week met plezier, de dieren geven me rust.” — Anja</blockquote>
            <blockquote className="p-4 bg-white/5 rounded-lg ring-1 ring-white/10">“Leuk team en duidelijke begeleiding.” — Pieter</blockquote>
          </div>
        </section>

        <form onSubmit={submit} className="p-6 rounded-xl bg-white/5 ring-1 ring-white/10">
          <h2 className="text-xl font-semibold text-white mb-4">Aanmelden als vrijwilliger</h2>
          <div className="grid grid-cols-2 gap-3">
            <input className="col-span-2 input" placeholder="Naam" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
            <input className="col-span-1 input" placeholder="E-mail" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
            <input className="col-span-1 input" placeholder="Telefoon" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} />
            <input className="col-span-2 input" placeholder="Interesses / rol" value={form.interests} onChange={e=>setForm({...form, interests:e.target.value})} />
            <input className="col-span-2 input" placeholder="Beschikbaarheid" value={form.availability} onChange={e=>setForm({...form, availability:e.target.value})} />
            <textarea className="col-span-2 input min-h-[120px]" placeholder="Motivatie" value={form.motivation} onChange={e=>setForm({...form, motivation:e.target.value})} />
          </div>
          <button className="mt-4 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500">Versturen</button>
          {status === 'busy' && <div className="text-sm text-slate-300 mt-2">Versturen…</div>}
          {status === 'ok' && <div className="text-sm text-emerald-400 mt-2">Bedankt! We nemen contact op.</div>}
          {status && status !== 'ok' && status !== 'busy' && <div className="text-sm text-red-400 mt-2">Er ging iets mis.</div>}
        </form>
      </div>
    </main>
  )
}
