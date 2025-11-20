import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Dagbesteding from './pages/Dagbesteding'
import Partners from './pages/Partners'
import Vrijwilligers from './pages/Vrijwilligers'
import OverOns from './pages/OverOns'
import Contact from './pages/Contact'
import SEO from './components/SEO'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      <SEO />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dagbesteding" element={<Dagbesteding />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/vrijwilligers" element={<Vrijwilligers />} />
        <Route path="/over-ons" element={<OverOns />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App