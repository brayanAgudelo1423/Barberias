import { Quote } from 'lucide-react'
import { barbers } from '../data/barbers'

export default function Equipo() {
  return (
    <div className="min-h-screen bg-barber-black">
      <section className="py-20 bg-barber-charcoal border-b border-barber-smoke">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-barber-gold font-medium tracking-widest uppercase text-sm mb-2">
            Equipo
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-barber-cream">
            Nuestros barberos
          </h1>
          <p className="mt-4 text-barber-cream/70 max-w-2xl">
            Profesionales con años de experiencia y formación continua. Cada uno con su especialidad.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {barbers.map((barber) => (
              <article key={barber.id} className="group">
                <div className="relative overflow-hidden rounded-lg aspect-[3/4] mb-6">
                  <img
                    src={barber.image}
                    alt={barber.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-barber-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-display text-2xl text-barber-cream">
                  {barber.name}
                </h3>
                <p className="text-barber-gold font-medium mt-1">{barber.role}</p>
                <p className="text-barber-cream/60 text-sm mt-2">{barber.specialty}</p>
                <p className="text-barber-cream/50 text-xs mt-1">{barber.experience} de experiencia</p>
                <blockquote className="mt-4 flex gap-2">
                  <Quote className="w-5 h-5 text-barber-gold/60 flex-shrink-0 mt-0.5" />
                  <p className="text-barber-cream/70 text-sm italic">"{barber.quote}"</p>
                </blockquote>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
