import { Link } from 'react-router-dom'
import { Scissors, Clock, ArrowRight } from 'lucide-react'
import { services } from '../data/services'

export default function Servicios() {
  return (
    <div className="bg-barber-black min-h-screen">
      <section className="py-20 bg-barber-charcoal border-b border-barber-smoke">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-barber-gold font-medium tracking-widest uppercase text-sm mb-2">
            Servicios
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-barber-cream">
            Nuestra carta
          </h1>
          <p className="mt-4 text-barber-cream/70 max-w-2xl">
            Cada servicio incluye asesoramiento personalizado y productos de acabado. Duración aproximada y precio por sesión.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="card-barber flex flex-col">
                <div className="w-16 h-16 rounded-sm bg-barber-gold/10 flex items-center justify-center mb-5">
                  <Scissors className="w-8 h-8 text-barber-gold" />
                </div>
                <h3 className="font-display text-2xl text-barber-cream">
                  {service.name}
                </h3>
                <p className="mt-3 text-barber-cream/60 text-sm flex-1">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4 text-barber-cream/70 text-sm">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-barber-gold" />
                      {service.duration} min
                    </span>
                    <span className="text-barber-gold font-semibold text-lg">
                      {service.price}€
                    </span>
                  </div>
                  <Link
                    to="/agendar"
                    className="text-barber-gold font-medium text-sm hover:underline inline-flex items-center gap-1"
                  >
                    Reservar
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link to="/agendar" className="btn-gold">
              Agendar mi cita
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
