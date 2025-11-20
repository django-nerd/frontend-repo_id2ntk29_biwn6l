import { useState } from 'react'

export default function Dagbesteding() {
  const [form, setForm] = useState({ first_name: '', last_name: '', email: '', phone: '', preferred_days: '', message: '' })
  const [status, setStatus] = useState(null)
  const submit = async (e) => {
    e.preventDefault()
    setStatus('busy')
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/applications/clients`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form)
      })
      const data = await res.json()
      setStatus(res.ok ? 'ok' : data.detail || 'error')
      if (res.ok) setForm({ first_name: '', last_name: '', email: '', phone: '', preferred_days: '', message: '' })
    } catch (e) { setStatus('error') }
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-slate-200">
      <h1 className="text-3xl font-bold text-white mb-6">Dagbesteding</h1>
      <p className="mb-6">Bij ons werken deelnemers in het groen: zaaien, verzorgen, oogsten, dierenverzorging en ondersteunende taken. We bieden structuur, begeleiding en ruimte voor groei.</p>

      <div className="grid md:grid-cols-2 gap-10">
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Dagprogramma</h2>
          <ul className="space-y-2 text-slate-300">
            <li>09:00 – Ontvangst en koffie</li>
            <li>09:30 – Werkblok (kwekerij/dieren/facilitair)</li>
            <li>12:00 – Lunch</li>
            <li>12:45 – Werkblok en leeractiviteiten</li>
            <li>15:00 – Nabespreking en afsluiting</li>
          </ul>

          <h2 className="text-xl font-semibold text-white mt-8 mb-3">Voordelen</h2>
          <ul className="list-disc pl-5 text-slate-300 space-y-1">
            <li>Activerend en betekenisvol werk</li>
            <li>Persoonlijke begeleiding</li>
            <li>Sociale contacten in een veilige omgeving</li>
            <li>Gezonde buitenlucht en beweging</li>
          </ul>
        </section>

        <form onSubmit={submit} className="p-6 rounded-xl bg-white/5 ring-1 ring-white/10">
          <h2 className="text-xl font-semibold text-white mb-4">Aanmelden als cliënt</h2>
          <div className="grid grid-cols-2 gap-3">
            <input className="col-span-1 input" placeholder="Voornaam" value={form.first_name} onChange={e=>setForm({...form, first_name:e.target.value})} />
            <input className="col-span-1 input" placeholder="Achternaam" value={form.last_name} onChange={e=>setForm({...form, last_name:e.target.value})} />
            <input className="col-span-2 input" placeholder="E-mail" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
            <input className="col-span-2 input" placeholder="Telefoon" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} />
            <input className="col-span-2 input" placeholder="Voorkeursdagen" value={form.preferred_days} onChange={e=>setForm({...form, preferred_days:e.target.value})} />
            <textarea className="col-span-2 input min-h-[120px]" placeholder="Toelichting" value={form.message} onChange={e=>setForm({...form, message:e.target.value})} />
          </div>
          <button className="mt-4 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500">Versturen</button>
          {status === 'busy' && <div className="text-sm text-slate-300 mt-2">Versturen…</div>}
          {status === 'ok' && <div className="text-sm text-emerald-400 mt-2">Bedankt! We nemen contact op.</div>}
          {status && status !== 'ok' && status !== 'busy' && <div className="text-sm text-red-400 mt-2">Er ging iets mis.</div>}
          <div className="text-slate-400 text-sm mt-3">Contact: 050-123 45 67 • info@zorgkwekerij-noordbroek.nl</div>
        </form>
      </div>
    </main>
  )
}
