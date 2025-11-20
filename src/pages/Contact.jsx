import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)
  const submit = async (e) => {
    e.preventDefault()
    setStatus('busy')
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contact`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form)
      })
      const data = await res.json()
      setStatus(res.ok ? 'ok' : data.detail || 'error')
      if (res.ok) setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch (e) { setStatus('error') }
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-slate-200">
      <h1 className="text-3xl font-bold text-white mb-6">Contact</h1>
      <div className="grid md:grid-cols-2 gap-10">
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Contactgegevens</h2>
          <p className="text-slate-300">Telefoon: 050-123 45 67<br/>E-mail: info@zorgkwekerij-noordbroek.nl<br/>Adres: Hoofdstraat 1, 9635 AA Noordbroek</p>
          <h2 className="text-xl font-semibold text-white mt-8 mb-3">Veelgestelde vragen</h2>
          <details className="mb-2 p-3 rounded-lg bg-white/5 ring-1 ring-white/10"><summary className="cursor-pointer text-white">Is er een wachtlijst?</summary><p className="text-slate-300 mt-2">We proberen snel te starten; soms is er een korte wachttijd.</p></details>
          <details className="mb-2 p-3 rounded-lg bg-white/5 ring-1 ring-white/10"><summary className="cursor-pointer text-white">Hoe kom ik er?</summary><p className="text-slate-300 mt-2">We zijn goed bereikbaar met auto en fiets. Parkeren kan op eigen terrein.</p></details>
          <h2 className="text-xl font-semibold text-white mt-8 mb-3">Openingstijden</h2>
          <p className="text-slate-300">Ma–Vr: 09:00–16:00 • Za–Zo: Gesloten</p>
          <h2 className="text-xl font-semibold text-white mt-8 mb-3">Locatie</h2>
          <iframe title="map" className="w-full h-64 rounded-xl ring-1 ring-white/10" src="https://www.openstreetmap.org/export/embed.html?bbox=6.856%2C53.17%2C6.89%2C53.19&layer=mapnik" />
        </section>

        <form onSubmit={submit} className="p-6 rounded-xl bg-white/5 ring-1 ring-white/10">
          <h2 className="text-xl font-semibold text-white mb-4">Stel je vraag</h2>
          <div className="grid grid-cols-2 gap-3">
            <input className="col-span-1 input" placeholder="Naam" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
            <input className="col-span-1 input" placeholder="E-mail" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
            <input className="col-span-2 input" placeholder="Telefoon" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} />
            <input className="col-span-2 input" placeholder="Onderwerp" value={form.subject} onChange={e=>setForm({...form, subject:e.target.value})} />
            <textarea className="col-span-2 input min-h-[120px]" placeholder="Bericht" value={form.message} onChange={e=>setForm({...form, message:e.target.value})} />
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
