import { Link } from 'react-router-dom'
import { Scissors, Clock, Star, ArrowRight } from 'lucide-react'
import { services } from '../data/services'

export default function Home() {
  const featuredServices = services.filter(s => s.featured)

  return (
    <>
      <section className="relative min-h-[90vh] flex items-center bg-barber-black overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-barber-black/80 via-transparent to-barber-black" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <p className="text-barber-gold font-medium tracking-widest uppercase text-sm mb-4 animate-fade-in">
              Barbería de lujo desde 2010
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-barber-cream leading-tight animate-slide-up">
              Donde el estilo
              <br />
              <span className="text-barber-gold italic">encuentra tradición</span>
            </h1>
            <p className="mt-6 text-barber-cream/80 text-lg max-w-xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Cortes clásicos y modernos, barbas impecables y una experiencia que va más allá del espejo.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Link to="/agendar" className="btn-gold inline-flex items-center gap-2">
                Reservar cita
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/servicios" className="btn-outline inline-flex items-center gap-2">
                Ver servicios
              </Link>
            </div>
            <div className="mt-16 flex flex-wrap gap-10 text-barber-cream/70">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-barber-smoke flex items-center justify-center">
                  <Clock className="w-5 h-5 text-barber-gold" />
                </div>
                <div>
                  <p className="font-semibold text-barber-cream">Lun - Sáb</p>
                  <p className="text-sm">9:00 - 21:00</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-barber-smoke flex items-center justify-center">
                  <Star className="w-5 h-5 text-barber-gold" />
                </div>
                <div>
                  <p className="font-semibold text-barber-cream">+2000 clientes</p>
                  <p className="text-sm">Opinión 4.9/5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-barber-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-barber-gold font-medium tracking-widest uppercase text-sm mb-2">
              Servicios
            </p>
            <h2 className="section-title">Lo que ofrecemos</h2>
            <p className="mt-4 text-barber-cream/70 max-w-2xl mx-auto">
              Desde el corte más clásico hasta tendencias actuales. Cada servicio con productos premium.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service) => (
              <Link
                key={service.id}
                to="/servicios"
                className="card-barber group block"
              >
                <div className="w-14 h-14 rounded-sm bg-barber-gold/10 flex items-center justify-center mb-4 group-hover:bg-barber-gold/20 transition-colors">
                  <Scissors className="w-7 h-7 text-barber-gold" />
                </div>
                <h3 className="font-display text-xl text-barber-cream group-hover:text-barber-gold transition-colors">
                  {service.name}
                </h3>
                <p className="mt-2 text-barber-cream/60 text-sm line-clamp-2">
                  {service.description}
                </p>
                <p className="mt-4 text-barber-gold font-semibold">
                  {service.price}€ · {service.duration} min
                </p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/servicios" className="btn-outline inline-flex items-center gap-2">
              Ver todos los servicios
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-barber-black relative">
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-barber-gold font-medium tracking-widest uppercase text-sm mb-2">
                La experiencia
              </p>
              <h2 className="section-title">Más que un corte</h2>
              <p className="mt-6 text-barber-cream/70 leading-relaxed">
                En La Barbería Pro cada visita es un momento para desconectar. Sillones de cuero,
                música ambiente, café o whisky. Nuestros barberos dominan técnicas clásicas y las
                últimas tendencias para que salgas sintiéndote único.
              </p>
              <ul className="mt-8 space-y-4">
                {['Productos de primera calidad', 'Atención personalizada', 'Reserva online 24/7', 'Ambiente exclusivo'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-barber-cream/80">
                    <span className="w-2 h-2 rounded-full bg-barber-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/agendar" className="btn-gold inline-flex mt-10">
                Agendar mi cita
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden border border-barber-charcoal">
                <img
                  src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&h=600&fit=crop"
                  alt="Interior barbería"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-barber-gold rounded-lg" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-barber-charcoal border-t border-barber-smoke">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title">¿Listo para tu próxima cita?</h2>
          <p className="mt-4 text-barber-cream/70 max-w-xl mx-auto">
            Reserva en segundos. Elige servicio, barbero y horario. Te esperamos.
          </p>
          <Link to="/agendar" className="btn-gold inline-flex mt-8">
            Reservar ahora
          </Link>
        </div>
      </section>
    </>
  )
}
