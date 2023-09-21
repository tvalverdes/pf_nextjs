'use client'
import { useState } from 'react'
import Calendar from './Calendar'
import { AdviserData } from './adviserData'
import { TextField, Button } from '@mui/material'
import { useForm, Controller, FormProvider } from 'react-hook-form'
import { FormContext, SidebarContext } from './context'
import { InputField } from './InputField'
import { MailField } from './MailField'
import dayjs, { Dayjs } from 'dayjs'

export interface Appointment {
  client_name: string
  client_mail: string
  date: string
  time: string
}

export interface ValidForm {
  validName: boolean
  validMail: boolean
  validTime: boolean
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
  const [isValid, setIsValid] = useState<ValidForm>({
    validName: false,
    validMail: false,
    validTime: false,
  })

  const isAllTrue = Object.values(isValid).every((value) => value === true)

  const updateAppointment = (newAppointment: Appointment) => {
    console.log(newAppointment)
    setAppointment(newAppointment)
  }
  const updateIsValid = (newIsValid: ValidForm) => {
    console.log(newIsValid)
    setIsValid(newIsValid)
  }

  const onSubmit = async (values: any) => {
    // Hacer la petición POST al servidor
    try {
      console.log(JSON.stringify(appointment))
      const response = await fetch(
        'https://pasionporlasfinanzas.com/apirest/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(appointment), // Convierte el objeto a formato JSON
        }
      )
      if (response.ok) {
        console.log('Peticion POST exitosa')
        // Realizar acciones adicionales si la petición fue exitosa
      } else {
        console.error('Error en la petición POST response.ok')
        // Realizar acciones adicionales en caso de error
      }
    } catch (error) {
      console.error('Error en la petición POST try-catch:', error)
      // Manejar el error de la petición
    }
  }

  return (
    <>
      <AdviserData />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-4 bg-white"
      >
        <SidebarContext.Provider value={{ appointment, updateAppointment }}>
          <FormContext.Provider
            value={{
              validForm: isValid,
              updateValidForm: updateIsValid,
            }}
          >
            <InputField />
            <MailField />
            <Calendar />
            <Button
              disabled={!isAllTrue}
              type="submit"
              variant="contained"
              className="main-bg-color w-full mt-5"
            >
              Separar Asesoría
            </Button>
          </FormContext.Provider>
        </SidebarContext.Provider>
      </form>
    </>
  )
}
