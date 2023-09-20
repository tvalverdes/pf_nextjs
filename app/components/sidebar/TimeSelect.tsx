'use client'
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material'
import { useState } from 'react'

export const TimeSelect = (props: { hours: any }) => {
  const [time, setTime] = useState('')
  console.log(props.hours)
  const handleChange = (event: SelectChangeEvent) => {
    setTime(event.target.value as string)
  }
  //CUANDO HAY UN VALOR SELECCIONADOEN EL INPUT TIME
  //Y SE SELECCIONA OTRA FECHA, ESTE VALOR SE MANTIENE, CAMBIAR ESO
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Horario</InputLabel>
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
