import { TextField } from '@mui/material'
import { useAppointmentContext } from './context'

export const MailField = () => {
  const { appointment, updateAppointment } = useAppointmentContext()
  const handleMailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMail = event.target.value
    updateAppointment({ ...appointment, client_mail: newMail })
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
    />
  )
}
