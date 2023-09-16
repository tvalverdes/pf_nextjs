'use client'
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material'
import { useState } from 'react'

export const TimeSelect = () => {
  const [time, setTime] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    console.log(event.target.value as string)
    setTime(event.target.value as string)
  }
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Hora</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={time}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={'8:00 PM'}>8:00 PM</MenuItem>
        <MenuItem value={'9:00 PM'}>9:00 PM</MenuItem>
      </Select>
    </FormControl>
  )
}
