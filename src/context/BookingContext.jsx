import { createContext, useContext, useState } from 'react'

const BookingContext = createContext(null)

export function BookingProvider({ children }) {
  const [booking, setBooking] = useState({
    service: null,
    barber: null,
    date: null,
    time: null,
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    notes: '',
  })

  const updateBooking = (data) => {
    setBooking((prev) => ({ ...prev, ...data }))
  }

  const resetBooking = () => {
    setBooking({
      service: null,
      barber: null,
      date: null,
      time: null,
      clientName: '',
      clientEmail: '',
      clientPhone: '',
      notes: '',
    })
  }

  return (
    <BookingContext.Provider value={{ booking, updateBooking, resetBooking }}>
      {children}
    </BookingContext.Provider>
  )
}

export function useBooking() {
  const ctx = useContext(BookingContext)
  if (!ctx) throw new Error('useBooking must be used within BookingProvider')
  return ctx
}
