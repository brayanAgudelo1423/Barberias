import { Link } from 'react-router-dom'
import { CheckCircle, Calendar, User } from 'lucide-react'
import { useBooking } from '../context/BookingContext'
import { services } from '../data/services'
import { barbers } from '../data/barbers'

export default function Confirmacion() {
  const { booking } = useBooking()
  const service = services.find((s) => s.id === booking.service)
  const barber = barbers.find((b) => b.id === booking.barber)

  if (!booking.date || !booking.service) {
    return (
      <div className="min-h-screen bg-barber-black flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-barber-cream/70 mb-4">No hay reserva en curso.</p>
          <Link to="/agendar" className="btn-gold">
            Agendar cita
          </Link>
        </div>
      </div>
    )
  }

  const dateFormatted = booking.date
    ? new Date(booking.date).toLocaleDateString('es-ES', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : ''

  return (
    <div className="min-h-screen bg-barber-black py-20">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        <div className="card-barber border-barber-gold/30 p-8 md:p-10 text-center">
          <div className="w-20 h-20 rounded-full bg-barber-gold/20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-barber-gold" />
          </div>
          <h1 className="font-display text-3xl text-barber-cream">
            Reserva confirmada
          </h1>
          <p className="mt-2 text-barber-cream/70">
            Te hemos enviado un email a <strong className="text-barber-cream">{booking.clientEmail}</strong> con los detalles.
          </p>

          <div className="mt-10 text-left bg-barber-smoke rounded-lg p-6 border border-barber-charcoal">
            <div className="flex items-center gap-3 mb-4">
              <User className="w-5 h-5 text-barber-gold" />
              <span className="font-semibold text-barber-cream">{booking.clientName}</span>
            </div>
            <ul className="space-y-3 text-barber-cream/80 text-sm">
              <li>
                <span className="text-barber-cream/50">Servicio:</span>{' '}
                {service?.name} — {service?.price}€
              </li>
              <li>
                <span className="text-barber-cream/50">Barbero:</span> {barber?.name}
              </li>
              <li className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-barber-gold" />
                {dateFormatted} a las {booking.time}
              </li>
            </ul>
          </div>

          <p className="mt-6 text-barber-cream/60 text-sm">
            Si necesitas modificar o cancelar, contáctanos por teléfono o email con al menos 24h de antelación.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-outline">
              Volver al inicio
            </Link>
            <Link to="/agendar" className="btn-gold">
              Nueva reserva
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
