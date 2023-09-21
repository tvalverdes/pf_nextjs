'use client'
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { useAppointmentContext } from './context'

export const TimeSelect = (props: { hours: any }) => {
  const { appointment, updateAppointment } = useAppointmentContext()
  const [time, setTime] = useState(appointment.time || '')
  const [timeSelected, setTimeSelected] = useState(false)

  const handleTimeChange = (event: SelectChangeEvent<string>) => {
    const newTime = event.target.value
    updateAppointment({ ...appointment, time: newTime })
    setTime(newTime)
    newTime == '' ? setTimeSelected(false) : setTimeSelected(true)
  }

  useEffect(() => {
    setTime('')
    updateAppointment({ ...appointment, time: '' })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appointment.date])
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Horario</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={time}
          label="Horario"
          onChange={handleTimeChange}
          color={timeSelected ? 'success' : 'error'}
          error={!timeSelected}
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
