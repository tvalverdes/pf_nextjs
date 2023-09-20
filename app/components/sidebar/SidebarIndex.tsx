'use client'
import Calendar from './Calendar'
import { PayButton } from './PayButton'
import { AdviserData } from './adviserData'
import { TextField } from '@mui/material'

export const SidebarIndex = () => {
  return (
    <div className="w-full flex flex-col gap-4 bg-white">
      <AdviserData />
      <TextField
        required
        fullWidth
        id="standard-required"
        label="Nombre"
        placeholder="Ingresa tu nombre"
        variant="outlined"
      />
      <TextField
        required
        fullWidth
        id="standard-required"
        label="Correo"
        placeholder="Ingresa tu correo"
        variant="outlined"
      />
      <Calendar />
      <PayButton />
    </div>
  )
}
