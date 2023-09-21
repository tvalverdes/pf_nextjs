import { TextField } from '@mui/material'
import { useAppointmentContext, useFormContext } from './context'
import { useState } from 'react'

export const InputField = () => {
  const { appointment, updateAppointment } = useAppointmentContext()
  const { validForm, updateValidForm } = useFormContext()
  const [helper, setHelper] = useState('')
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value
    updateAppointment({ ...appointment, client_name: newName.trim() })
    const regex = /^[A-Za-z\s]*$/

    if (!regex.test(newName)) {
      setHelper('No ingreses caracteres especiales')
      updateValidForm({ ...validForm, validName: false })
    } else if (newName.length <= 3) {
      setHelper('Nombre completo')
      updateValidForm({ ...validForm, validName: false })
    } else {
      setHelper('')
      updateValidForm({ ...validForm, validName: true })
    }
  }

  return (
    <TextField
      required
      type="text"
      fullWidth
      id="standard-required"
      label="Nombre"
      placeholder="Ingresa tu nombre"
      variant="outlined"
      onChange={handleNameChange}
      helperText={helper}
      color={helper ? 'error' : 'success'}
      error={helper ? true : false}
    />
  )
}
