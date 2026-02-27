import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Scissors } from 'lucide-react'
import WhatsAppFloating from './WhatsAppFloating'

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/agendar', label: 'Agendar Cita' },
  { to: '/equipo', label: 'Nuestro Equipo' },
  { to: '/galeria', label: 'Galería' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 bg-barber-black/95 backdrop-blur-md border-b border-barber-charcoal">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-sm bg-barber-gold flex items-center justify-center group-hover:scale-105 transition-transform">
                <Scissors className="w-5 h-5 text-barber-black" strokeWidth={2.5} />
              </div>
              <span className="font-display text-xl font-semibold text-barber-cream">
                La Barbería <span className="text-barber-gold">Pro</span>
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === to
                      ? 'text-barber-gold'
                      : 'text-barber-cream/80 hover:text-barber-gold'
                  }`}
                >
                  {label}
                </Link>
              ))}
              <Link
                to="/agendar"
                className="btn-gold text-sm py-2 px-4"
              >
                Reservar
              </Link>
            </div>

            <button
              className="md:hidden p-2 text-barber-cream hover:text-barber-gold"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menú"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {menuOpen && (
            <div className="md:hidden py-4 border-t border-barber-charcoal animate-fade-in">
              <div className="flex flex-col gap-4">
                {navLinks.map(({ to, label }) => (
                  <Link
                    key={to}
                    to={to}
                    onClick={() => setMenuOpen(false)}
                    className={`py-2 text-sm font-medium ${
                      location.pathname === to ? 'text-barber-gold' : 'text-barber-cream/80'
                    }`}
                  >
                    {label}
                  </Link>
                ))}
                <Link
                  to="/agendar"
                  onClick={() => setMenuOpen(false)}
                  className="btn-gold text-center py-3 mt-2"
                >
                  Reservar Cita
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className="flex-1 pt-20">
        {children}
      </main>

      <footer className="bg-barber-charcoal border-t border-barber-smoke">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-sm bg-barber-gold flex items-center justify-center">
                  <Scissors className="w-5 h-5 text-barber-black" strokeWidth={2.5} />
                </div>
                <span className="font-display text-xl font-semibold text-barber-cream">
                  La Barbería <span className="text-barber-gold">Pro</span>
                </span>
              </div>
              <p className="text-barber-cream/70 text-sm max-w-md">
                Experiencia premium en cada corte. Tradición y estilo desde hace más de una década.
              </p>
            </div>
            <div>
              <h4 className="font-display text-barber-gold text-sm font-semibold uppercase tracking-wider mb-4">
                Enlaces
              </h4>
              <ul className="space-y-2">
                {navLinks.map(({ to, label }) => (
                  <li key={to}>
                    <Link to={to} className="text-barber-cream/70 hover:text-barber-gold text-sm transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display text-barber-gold text-sm font-semibold uppercase tracking-wider mb-4">
                Contacto
              </h4>
              <ul className="space-y-2 text-barber-cream/70 text-sm">
                <li>Av. Principal 123</li>
                <li>+34 912 345 678</li>
                <li>hola@labarberiapro.com</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-barber-smoke text-center text-barber-cream/50 text-sm">
            © {new Date().getFullYear()} La Barbería Pro. Todos los derechos reservados.
          </div>
        </div>
      </footer>
      <WhatsAppFloating />
    </div>
  )
}
