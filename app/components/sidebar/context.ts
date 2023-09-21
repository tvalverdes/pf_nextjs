import { createContext, useContext } from 'react'
import { Appointment } from './SidebarIndex'

interface ContextType {
  appointment: Appointment
  updateAppointment: (newAppointment: Appointment) => void
}
export const SidebarContext = createContext<ContextType | undefined>(undefined)

export function useAppointmentContext() {
  const context = useContext(SidebarContext)
  if (context === undefined) {
    throw new Error('useUserContext debe usarse con un SidebarContext')
  }
  return context
}

/* import { createContext, useContext } from 'react'
import { Appointment } from './SidebarIndex'

export const SidebarContext = createContext<Appointment | undefined>(undefined)

export function useAppointmentContext() {
  const appointment = useContext(SidebarContext)
  if (appointment === undefined) {
    throw new Error('useUserContext debe usarse con un SidebarContext')
  }
  return appointment
}
 */
