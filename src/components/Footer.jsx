export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-slate-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-slate-300 text-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="font-semibold text-white">Zorgkwekerij Plant en Tuin Noordbroek</div>
            <div>Hoofdstraat 1, 9635 AA Noordbroek</div>
            <div>T: 050-123 45 67 • E: info@zorgkwekerij-noordbroek.nl</div>
          </div>
          <div className="opacity-70">© {new Date().getFullYear()} Zorgkwekerij • Alle rechten voorbehouden</div>
        </div>
      </div>
    </footer>
  )
}
