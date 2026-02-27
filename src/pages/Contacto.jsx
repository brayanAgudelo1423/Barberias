import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'

export default function Contacto() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="min-h-screen bg-barber-black">
      <section className="py-20 bg-barber-charcoal border-b border-barber-smoke">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-barber-gold font-medium tracking-widest uppercase text-sm mb-2">
            Contacto
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-barber-cream">
            Escríbenos
          </h1>
          <p className="mt-4 text-barber-cream/70 max-w-2xl">
            ¿Dudas, reservas grupales o eventos? Estamos aquí.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-2xl text-barber-gold mb-6">
                Información
              </h2>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-barber-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-barber-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-barber-cream">Dirección</p>
                    <p className="text-barber-cream/70">Av. Principal 123, Local 4</p>
                    <p className="text-barber-cream/60 text-sm">28001 Madrid</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-barber-gold/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-barber-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-barber-cream">Teléfono</p>
                    <a href="tel:+34912345678" className="text-barber-cream/70 hover:text-barber-gold">
                      +34 912 345 678
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-barber-gold/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-barber-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-barber-cream">Email</p>
                    <a href="mailto:hola@labarberiapro.com" className="text-barber-cream/70 hover:text-barber-gold">
                      hola@labarberiapro.com
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-barber-gold/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-barber-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-barber-cream">Horario</p>
                    <p className="text-barber-cream/70">Lunes - Sábado: 9:00 - 21:00</p>
                    <p className="text-barber-cream/60 text-sm">Domingos cerrado</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="card-barber p-8">
              <h2 className="font-display text-2xl text-barber-gold mb-6">
                Enviar mensaje
              </h2>
              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle className="w-16 h-16 text-barber-gold mb-4" />
                  <p className="font-display text-xl text-barber-cream">Mensaje enviado</p>
                  <p className="text-barber-cream/70 mt-2">
                    Te responderemos en las próximas 24 horas.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm text-barber-cream/80 mb-1">Nombre</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-barber-smoke border border-barber-charcoal rounded-lg px-4 py-3 text-barber-cream focus:border-barber-gold focus:outline-none"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-barber-cream/80 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-barber-smoke border border-barber-charcoal rounded-lg px-4 py-3 text-barber-cream focus:border-barber-gold focus:outline-none"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-barber-cream/80 mb-1">Asunto</label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full bg-barber-smoke border border-barber-charcoal rounded-lg px-4 py-3 text-barber-cream focus:border-barber-gold focus:outline-none"
                      placeholder="¿En qué podemos ayudarte?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-barber-cream/80 mb-1">Mensaje</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full bg-barber-smoke border border-barber-charcoal rounded-lg px-4 py-3 text-barber-cream focus:border-barber-gold focus:outline-none resize-none"
                      placeholder="Escribe tu mensaje..."
                    />
                  </div>
                  <button type="submit" className="btn-gold w-full flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" />
                    Enviar
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
