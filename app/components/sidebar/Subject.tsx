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

export const Subject = () => {
  const { appointment, updateAppointment } = useAppointmentContext()
  const { validForm, updateValidForm } = useFormContext()
  const [subject, setSubject] = useState(appointment.subject || '')
  const [subjectSelected, setSubjectSelected] = useState(false)

  const handleSubjectChange = (event: SelectChangeEvent<string>) => {
    const newSubject = event.target.value
    updateAppointment({ ...appointment, subject: newSubject })
    setSubject(newSubject)
    if (newSubject == '') {
      setSubjectSelected(false)
      updateValidForm({ ...validForm, validSubject: false })
    } else {
      setSubjectSelected(true)
      updateValidForm({ ...validForm, validSubject: true })
    }
  }
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="select-label">Tema</InputLabel>
        <Select
          labelId="select-label"
          id="demo-simple-select"
          value={subject}
          required
          label="Tema"
          onChange={handleSubjectChange}
          color={subjectSelected ? 'success' : 'error'}
          error={!subjectSelected}
          inputProps={{MenuProps: {disableScrollLock: true}}}
        >
          <MenuItem value={'AFP'}>AFP</MenuItem>
          <MenuItem value={'INVERSIÓN'}>Inversión</MenuItem>
          <MenuItem value={'FINANZAS PERSONALES'}>FINANZAS PERSONALES</MenuItem>
        </Select>
      </FormControl>
    </>
  )
}
