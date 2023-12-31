'use client'
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { useAppointmentContext, useFormContext } from './context'

export const TimeSelect = (props: { hours: any }) => {
  const { appointment, updateAppointment } = useAppointmentContext()
  const { validForm, updateValidForm } = useFormContext()
  const [time, setTime] = useState(appointment.time || '')
  const [timeSelected, setTimeSelected] = useState(false)

  const handleTimeChange = (event: SelectChangeEvent<string>) => {
    const newTime = event.target.value
    updateAppointment({ ...appointment, time: newTime })
    setTime(newTime)
    if (newTime == '') {
      setTimeSelected(false)
      updateValidForm({ ...validForm, validTime: false })
    } else {
      setTimeSelected(true)
      updateValidForm({ ...validForm, validTime: true })
    }
  }
  useEffect(() => {
    setTime('')
    updateAppointment({ ...appointment, time: '' })
    updateValidForm({ ...validForm, validTime: false })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appointment.date])
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="select-label">Horario</InputLabel>
        <Select
          labelId="select-label"
          id="demo-simple-select"
          value={time}
          required
          label="Horario"
          onChange={handleTimeChange}
          color={timeSelected ? 'success' : 'error'}
          error={!timeSelected}
          inputProps={{MenuProps: {disableScrollLock: true}}}
          
        >
          {props.hours.map((hour: any, index: number) => {
            return (
              <MenuItem key={index} value={hour}>
                {hour}
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>
      <p className="timezone">
        Sesiones libres sujetas a stock. Zona horaria de Lima/Perú GTM5
      </p>
    </>
  )
}
