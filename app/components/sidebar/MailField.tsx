import { TextField } from '@mui/material'
import { useAppointmentContext, useFormContext } from './context'
import { useState } from 'react'
import { ValidForm } from './SidebarIndex'

export const MailField = () => {
  const { appointment, updateAppointment } = useAppointmentContext()
  const { validForm, updateValidForm } = useFormContext()
  const [helper, setHelper] = useState('')
  const handleMailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMail = event.target.value
    updateAppointment({ ...appointment, client_mail: newMail.trim() })
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,3}$/i
    if (!emailRegex.test(newMail)) {
      setHelper('Error de caracteres')
      updateValidForm({ ...validForm, validMail: false })
    } else {
      setHelper('')
      updateValidForm({ ...validForm, validMail: true })
    }
  }

  return (
    <TextField
      required
      type="email"
      fullWidth
      id="standard-required"
      label="Correo"
      placeholder="Ingresa tu correo"
      variant="outlined"
      onChange={handleMailChange}
      helperText={helper}
      color={helper ? 'error' : 'success'}
      error={helper ? true : false}
    />
  )
}
