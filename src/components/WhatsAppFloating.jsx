const PHONE_NUMBER = '34600000000' // Reemplaza por tu número en formato internacional sin +
const DEFAULT_MESSAGE = 'Hola, me gustaría agendar una cita en La Barbería Pro.'

export default function WhatsAppFloating() {
  const encodedMessage = encodeURIComponent(DEFAULT_MESSAGE)
  const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatear por WhatsApp"
      className="fixed z-40 bottom-6 right-4 sm:bottom-8 sm:right-8"
    >
      <div className="relative group">
        <span className="absolute -top-8 right-0 bg-barber-charcoal text-barber-cream text-xs px-3 py-1 rounded-full shadow-lg border border-barber-gold/40 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          ¿Necesitas ayuda? Escríbenos
        </span>
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] shadow-lg shadow-black/40 flex items-center justify-center hover:scale-105 transition-transform">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-8 h-8 text-white"
          >
            <path
              fill="currentColor"
              d="M16 3C9.383 3 4 8.383 4 15c0 2.132.57 4.115 1.563 5.844L4 29l8.406-1.531A11.87 11.87 0 0 0 16 27c6.617 0 12-5.383 12-12S22.617 3 16 3m0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10a9.83 9.83 0 0 1-3.93-.812l-.281-.125-.313.063L7 25l.875-4.438.063-.312-.156-.281A9.78 9.78 0 0 1 6 15c0-5.535 4.465-10 10-10m-3.156 5c-.258 0-.672.094-1.02.469-.25.27-.98.957-.98 2.332c0 1.375 1 2.703 1.156 2.891c.157.187 1.938 3.09 4.781 4.309c2.364.98 2.84.832 3.351.781c.512-.05 1.645-.672 1.875-1.324c.23-.652.23-1.21.164-1.324c-.066-.113-.258-.18-.539-.32c-.282-.145-1.664-.82-1.922-.914c-.258-.094-.446-.145-.633.144c-.188.285-.726.914-.89 1.102c-.16.187-.328.21-.609.07c-.281-.145-1.188-.438-2.262-1.398c-.836-.746-1.398-1.672-1.563-1.953c-.16-.285-.016-.43.121-.57c.125-.125.281-.328.422-.492c.14-.164.187-.285.281-.477c.094-.187.047-.352-.024-.492c-.07-.145-.625-1.52-.86-2.082c-.227-.547-.46-.473-.625-.48"
            />
          </svg>
        </div>
      </div>
    </a>
  )
}

