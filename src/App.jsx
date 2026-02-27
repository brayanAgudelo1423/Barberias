import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Servicios from './pages/Servicios'
import Agendar from './pages/Agendar'
import Equipo from './pages/Equipo'
import Galeria from './pages/Galeria'
import Contacto from './pages/Contacto'
import Confirmacion from './pages/Confirmacion'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/agendar" element={<Agendar />} />
        <Route path="/equipo" element={<Equipo />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/confirmacion" element={<Confirmacion />} />
      </Routes>
    </Layout>
  )
}

export default App
