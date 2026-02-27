import { useState } from 'react'
import { X } from 'lucide-react'
import { galleryImages } from '../data/gallery'

const categories = ['todos', 'cortes', 'barba', 'local', 'productos', 'equipo']

export default function Galeria() {
  const [filter, setFilter] = useState('todos')
  const [lightbox, setLightbox] = useState(null)

  const filtered =
    filter === 'todos'
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter)

  return (
    <div className="min-h-screen bg-barber-black">
      <section className="py-20 bg-barber-charcoal border-b border-barber-smoke">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-barber-gold font-medium tracking-widest uppercase text-sm mb-2">
            Galería
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-barber-cream">
            Nuestro trabajo
          </h1>
          <p className="mt-4 text-barber-cream/70 max-w-2xl">
            Cortes, ambiente y momentos en La Barbería Pro.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all ${
                  filter === cat
                    ? 'bg-barber-gold text-barber-black'
                    : 'bg-barber-smoke text-barber-cream/80 hover:bg-barber-charcoal'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((img) => (
              <button
                key={img.id}
                type="button"
                onClick={() => setLightbox(img)}
                className="aspect-[4/3] rounded-lg overflow-hidden border border-barber-charcoal hover:border-barber-gold/50 transition-colors focus:outline-none focus:ring-2 focus:ring-barber-gold"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-barber-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Ver imagen"
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 p-2 text-barber-cream hover:text-barber-gold"
            aria-label="Cerrar"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightbox.src.replace('600', '1200')}
            alt={lightbox.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}
