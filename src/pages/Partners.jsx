import { useState } from 'react'

export default function Partners() {
  const [form, setForm] = useState({ organization: '', contact_name: '', email: '', phone: '', referral_process_stage: '', target_group: '', message: '' })
  const [status, setStatus] = useState(null)
  const submit = async (e) => {
    e.preventDefault()
    setStatus('busy')
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/inquiries/partners`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form)
      })
      const data = await res.json()
      setStatus(res.ok ? 'ok' : data.detail || 'error')
      if (res.ok) setForm({ organization: '', contact_name: '', email: '', phone: '', referral_process_stage: '', target_group: '', message: '' })
    } catch (e) { setStatus('error') }
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-slate-200">
      <h1 className="text-3xl font-bold text-white mb-6">Voor Zorgpartners</h1>
      <p className="mb-4">We werken samen met verwijzers, wijkteams en zorginstellingen. Hieronder lichten we het verwijsproces toe en wat onze samenwerking oplevert.</p>

      <div className="grid md:grid-cols-2 gap-10">
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Verwijsproces</h2>
          <ol className="list-decimal pl-5 space-y-1 text-slate-300">
            <li>Oriëntatie en telefonische intake</li>
            <li>Rondleiding en proefdag(en)</li>
            <li>Doelplan opstellen en afspraken</li>
            <li>Start deelname en periodieke evaluatie</li>
          </ol>
          <h2 className="text-xl font-semibold text-white mt-8 mb-3">Doelgroepen</h2>
          <p className="text-slate-300">Volwassenen met een WMO- of WLZ-indicatie die baat hebben bij structuur, buitenwerk en persoonlijke begeleiding.</p>
          <h2 className="text-xl font-semibold text-white mt-8 mb-3">Waarom samenwerken?</h2>
          <ul className="list-disc pl-5 space-y-1 text-slate-300">
            <li>Betrouwbare partner met transparante rapportage</li>
            <li>Resultaatgericht en mensgericht</li>
            <li>Netwerk in de regio Midden-Groningen</li>
          </ul>
        </section>

        <form onSubmit={submit} className="p-6 rounded-xl bg-white/5 ring-1 ring-white/10">
          <h2 className="text-xl font-semibold text-white mb-4">Contact voor verwijzers</h2>
          <div className="grid grid-cols-2 gap-3">
            <input className="col-span-2 input" placeholder="Organisatie" value={form.organization} onChange={e=>setForm({...form, organization:e.target.value})} />
            <input className="col-span-1 input" placeholder="Contactpersoon" value={form.contact_name} onChange={e=>setForm({...form, contact_name:e.target.value})} />
            <input className="col-span-1 input" placeholder="E-mail" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
            <input className="col-span-2 input" placeholder="Telefoon" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} />
            <input className="col-span-2 input" placeholder="Fase in verwijsproces" value={form.referral_process_stage} onChange={e=>setForm({...form, referral_process_stage:e.target.value})} />
            <input className="col-span-2 input" placeholder="Doelgroep / indicatie" value={form.target_group} onChange={e=>setForm({...form, target_group:e.target.value})} />
            <textarea className="col-span-2 input min-h-[120px]" placeholder="Vraag / Opmerking" value={form.message} onChange={e=>setForm({...form, message:e.target.value})} />
          </div>
          <button className="mt-4 px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500">Versturen</button>
          {status === 'busy' && <div className="text-sm text-slate-300 mt-2">Versturen…</div>}
          {status === 'ok' && <div className="text-sm text-emerald-400 mt-2">Bedankt! We nemen contact op.</div>}
          {status && status !== 'ok' && status !== 'busy' && <div className="text-sm text-red-400 mt-2">Er ging iets mis.</div>}
        </form>
      </div>
    </main>
  )
}
