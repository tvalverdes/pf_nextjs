import { createContext, useContext } from 'react'
import { Appointment, ValidForm } from './SidebarIndex'

interface ContextType {
  appointment: Appointment
  updateAppointment: (newAppointment: Appointment) => void
}

interface ValidationType {
  validForm: ValidForm
  updateValidForm: (newValidFomr: ValidForm) => void
}
export const SidebarContext = createContext<ContextType | undefined>(undefined)
export const FormContext = createContext<ValidationType | undefined>(undefined)

export function useAppointmentContext() {
  const context = useContext(SidebarContext)
  if (context === undefined) {
    throw new Error('useSidebarContext debe usarse con un SidebarContext')
  }
  return context
}
export function useFormContext() {
  const context = useContext(FormContext)
  if (context === undefined) {
    throw new Error('useFormContext debe usarse con un FormContext')
  }
  return context
}