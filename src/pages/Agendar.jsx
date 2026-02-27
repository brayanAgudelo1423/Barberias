import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Calendar, User, Mail, Phone, FileText, ChevronRight, Check } from 'lucide-react'
import { services } from '../data/services'
import { barbers } from '../data/barbers'
import { useBooking } from '../context/BookingContext'

const TIME_SLOTS = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30',
  '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
  '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30',
]

function getNextDays(count) {
  const days = []
  for (let i = 0; i < count; i++) {
    const d = new Date()
    d.setDate(d.getDate() + i)
    if (d.getDay() !== 0) days.push(d) // skip Sunday
  }
  return days.slice(0, 14)
}

export default function Agendar() {
  const navigate = useNavigate()
  const { booking, updateBooking } = useBooking()
  const [step, setStep] = useState(1)
  const [errors, setErrors] = useState({})

  const availableDays = getNextDays(21)

  const validateStep = (s) => {
    const e = {}
    if (s === 1) {
      if (!booking.service) e.service = 'Elige un servicio'
    }
    if (s === 2) {
      if (!booking.barber) e.barber = 'Elige un barbero'
    }
    if (s === 3) {
      if (!booking.date) e.date = 'Elige una fecha'
      if (!booking.time) e.time = 'Elige una hora'
    }
    if (s === 4) {
      if (!booking.clientName?.trim()) e.clientName = 'Nombre requerido'
      if (!booking.clientEmail?.trim()) e.clientEmail = 'Email requerido'
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(booking.clientEmail)) e.clientEmail = 'Email no válido'
      if (!booking.clientPhone?.trim()) e.clientPhone = 'Teléfono requerido'
    }
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleNext = () => {
    if (validateStep(step)) {
      if (step < 4) setStep(step + 1)
      else {
        updateBooking({
          clientName: booking.clientName,
          clientEmail: booking.clientEmail,
          clientPhone: booking.clientPhone,
          notes: booking.notes,
        })
        navigate('/confirmacion')
      }
    }
  }

  const selectedService = services.find((s) => s.id === booking.service)
  const selectedBarber = barbers.find((b) => b.id === booking.barber)

  const steps = [
    { n: 1, label: 'Servicio' },
    { n: 2, label: 'Barbero' },
    { n: 3, label: 'Fecha y hora' },
    { n: 4, label: 'Tus datos' },
  ]

  return (
    <div className="min-h-screen bg-barber-black py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-barber-gold font-medium tracking-widest uppercase text-sm mb-2">
            Reservas
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-barber-cream">
            Agendar cita
          </h1>
          <p className="mt-2 text-barber-cream/70">
            Elige servicio, barbero y horario en pocos pasos.
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-12">
          {steps.map(({ n, label }) => (
            <div
              key={n}
              className={`flex items-center gap-1 text-sm ${
                step >= n ? 'text-barber-gold' : 'text-barber-cream/40'
              }`}
            >
              <span
                className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                  step > n ? 'bg-barber-gold text-barber-black' : step === n ? 'bg-barber-gold/20' : 'bg-barber-smoke'
                }`}
              >
                {step > n ? <Check className="w-4 h-4" /> : n}
              </span>
              <span className="hidden sm:inline">{label}</span>
              {n < 4 && <ChevronRight className="w-4 h-4 text-barber-cream/30" />}
            </div>
          ))}
        </div>

        <div className="card-barber border-barber-gold/20 p-8 md:p-10">
          {step === 1 && (
            <div className="animate-fade-in">
              <h2 className="font-display text-xl text-barber-gold mb-6">Elige tu servicio</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {services.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => updateBooking({ service: s.id })}
                    className={`text-left p-4 rounded-lg border-2 transition-all ${
                      booking.service === s.id
                        ? 'border-barber-gold bg-barber-gold/10'
                        : 'border-barber-charcoal hover:border-barber-gold/50'
                    }`}
                  >
                    <p className="font-semibold text-barber-cream">{s.name}</p>
                    <p className="text-sm text-barber-cream/60 mt-1">{s.duration} min · {s.price}€</p>
                  </button>
                ))}
              </div>
              {errors.service && <p className="mt-2 text-red-400 text-sm">{errors.service}</p>}
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-in">
              <h2 className="font-display text-xl text-barber-gold mb-6">Elige tu barbero</h2>
              <div className="grid sm:grid-cols-3 gap-6">
                {barbers.map((b) => (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => updateBooking({ barber: b.id })}
                    className={`rounded-lg overflow-hidden border-2 transition-all ${
                      booking.barber === b.id ? 'border-barber-gold' : 'border-barber-charcoal hover:border-barber-gold/50'
                    }`}
                  >
                    <img src={b.image} alt={b.name} className="w-full aspect-square object-cover" />
                    <div className="p-4 bg-barber-smoke">
                      <p className="font-semibold text-barber-cream">{b.name}</p>
                      <p className="text-sm text-barber-gold">{b.role}</p>
                    </div>
                  </button>
                ))}
              </div>
              {errors.barber && <p className="mt-2 text-red-400 text-sm">{errors.barber}</p>}
            </div>
          )}

          {step === 3 && (
            <div className="animate-fade-in">
              <h2 className="font-display text-xl text-barber-gold mb-6">Fecha y hora</h2>
              <div className="mb-6">
                <p className="text-barber-cream/80 text-sm mb-2">Fecha</p>
                <div className="flex flex-wrap gap-2">
                  {availableDays.map((d) => {
                    const key = d.toISOString().slice(0, 10)
                    const isSelected = booking.date === key
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => updateBooking({ date: key })}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          isSelected
                            ? 'bg-barber-gold text-barber-black'
                            : 'bg-barber-smoke text-barber-cream hover:bg-barber-charcoal'
                        }`}
                      >
                        {d.toLocaleDateString('es-ES', { weekday: 'short', day: 'numeric', month: 'short' })}
                      </button>
                    )
                  })}
                </div>
                {errors.date && <p className="mt-2 text-red-400 text-sm">{errors.date}</p>}
              </div>
              <div>
                <p className="text-barber-cream/80 text-sm mb-2">Hora</p>
                <div className="flex flex-wrap gap-2">
                  {TIME_SLOTS.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => updateBooking({ time: t })}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        booking.time === t
                          ? 'bg-barber-gold text-barber-black'
                          : 'bg-barber-smoke text-barber-cream hover:bg-barber-charcoal'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                {errors.time && <p className="mt-2 text-red-400 text-sm">{errors.time}</p>}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="animate-fade-in">
              <h2 className="font-display text-xl text-barber-gold mb-6">Tus datos</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-barber-cream/80 mb-1">Nombre completo</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-barber-cream/40" />
                    <input
                      type="text"
                      value={booking.clientName}
                      onChange={(e) => updateBooking({ clientName: e.target.value })}
                      className="w-full bg-barber-smoke border border-barber-charcoal rounded-lg pl-10 pr-4 py-3 text-barber-cream focus:border-barber-gold focus:outline-none"
                      placeholder="Tu nombre"
                    />
                  </div>
                  {errors.clientName && <p className="mt-1 text-red-400 text-sm">{errors.clientName}</p>}
                </div>
                <div>
                  <label className="block text-sm text-barber-cream/80 mb-1">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-barber-cream/40" />
                    <input
                      type="email"
                      value={booking.clientEmail}
                      onChange={(e) => updateBooking({ clientEmail: e.target.value })}
                      className="w-full bg-barber-smoke border border-barber-charcoal rounded-lg pl-10 pr-4 py-3 text-barber-cream focus:border-barber-gold focus:outline-none"
                      placeholder="tu@email.com"
                    />
                  </div>
                  {errors.clientEmail && <p className="mt-1 text-red-400 text-sm">{errors.clientEmail}</p>}
                </div>
                <div>
                  <label className="block text-sm text-barber-cream/80 mb-1">Teléfono</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-barber-cream/40" />
                    <input
                      type="tel"
                      value={booking.clientPhone}
                      onChange={(e) => updateBooking({ clientPhone: e.target.value })}
                      className="w-full bg-barber-smoke border border-barber-charcoal rounded-lg pl-10 pr-4 py-3 text-barber-cream focus:border-barber-gold focus:outline-none"
                      placeholder="+34 600 000 000"
                    />
                  </div>
                  {errors.clientPhone && <p className="mt-1 text-red-400 text-sm">{errors.clientPhone}</p>}
                </div>
                <div>
                  <label className="block text-sm text-barber-cream/80 mb-1">Notas (opcional)</label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-3 w-5 h-5 text-barber-cream/40" />
                    <textarea
                      value={booking.notes}
                      onChange={(e) => updateBooking({ notes: e.target.value })}
                      rows={3}
                      className="w-full bg-barber-smoke border border-barber-charcoal rounded-lg pl-10 pr-4 py-3 text-barber-cream focus:border-barber-gold focus:outline-none resize-none"
                      placeholder="Alergias, preferencias..."
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="mt-10 flex justify-between">
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(1, s - 1))}
              className="text-barber-cream/70 hover:text-barber-gold"
              disabled={step === 1}
            >
              Atrás
            </button>
            <button type="button" onClick={handleNext} className="btn-gold">
              {step === 4 ? 'Confirmar reserva' : 'Siguiente'}
            </button>
          </div>
        </div>

        {(selectedService || selectedBarber || booking.date) && (
          <div className="mt-8 p-4 bg-barber-smoke rounded-lg border border-barber-charcoal">
            <p className="text-barber-gold text-sm font-medium mb-2">Resumen</p>
            <ul className="text-barber-cream/80 text-sm space-y-1">
              {selectedService && <li>{selectedService.name} — {selectedService.price}€</li>}
              {selectedBarber && <li>Barbero: {selectedBarber.name}</li>}
              {booking.date && booking.time && (
                <li>{new Date(booking.date).toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' })} a las {booking.time}</li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
