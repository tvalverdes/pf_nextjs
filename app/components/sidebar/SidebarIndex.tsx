'use client'
import { useState } from 'react'
import Calendar from './Calendar'
import { AdviserData } from './adviserData'
import { TextField, Button } from '@mui/material'
import { useForm, Controller, FormProvider } from 'react-hook-form'
import { SidebarContext } from './context'
import { InputField } from './InputField'
import { MailField } from './MailField'
import dayjs, { Dayjs } from 'dayjs'

export interface Appointment {
  client_name: string
  client_mail: string
  date: string
  time: string
}

interface ContextType {
  appointment: Appointment
  updateAppointment: (newAppointment: Appointment) => void
}

export const SidebarIndex = () => {
  const { register, handleSubmit, control } = useForm()
  //const methods = useForm()
  const [appointment, setAppointment] = useState<Appointment>({
    client_name: '',
    client_mail: '',
    date: dayjs().add(1, 'day').format('YYYY-MM-DD'),
    time: '',
  })

  const updateAppointment = (newAppointment: Appointment) => {
    console.log(newAppointment)
    setAppointment(newAppointment)
  }

  const onSubmit = (values: any) => {
    console.log(appointment)
  }

  return (
    <>
      <AdviserData />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-4 bg-white"
      >
        <SidebarContext.Provider value={{ appointment, updateAppointment }}>
          <InputField />
          <MailField />
          <Calendar />
          <Button
            type="submit"
            variant="contained"
            className="main-bg-color w-full mt-5"
          >
            Separar Asesoría
          </Button>
        </SidebarContext.Provider>
      </form>
    </>
  )
}
