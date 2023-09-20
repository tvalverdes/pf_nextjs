'use client'
import Calendar from './Calendar'
import { PayButton } from './PayButton'
import { AdviserData } from './adviserData'
import { TextField } from '@mui/material'
import { useForm } from 'react-hook-form'

export const SidebarIndex = () => {
  const { register } = useForm()
  return (
    <>
      <AdviserData />
      <form className="w-full flex flex-col gap-4 bg-white">
        <TextField
          required
          fullWidth
          id="standard-required"
          label="Nombre"
          placeholder="Ingresa tu nombre"
          variant="outlined"
          {...register('name')}
        />
        <TextField
          required
          fullWidth
          id="standard-required"
          label="Correo"
          placeholder="Ingresa tu correo"
          variant="outlined"
          {...register('mail')}
        />
        <Calendar />
        <PayButton />
      </form>
    </>
  )
}
