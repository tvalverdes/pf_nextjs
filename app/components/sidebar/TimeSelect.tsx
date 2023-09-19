'use client'
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material'
import { useState } from 'react'

export const TimeSelect = (props: { chosenDate: boolean; hours: any }) => {
  const [time, setTime] = useState('')
  const handleChange = (event: SelectChangeEvent) => {
    setTime(event.target.value as string)
  }
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          {props.chosenDate ? 'Horario' : 'Selecciona un horario'}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={time}
          label="Horario"
          onChange={handleChange}
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
