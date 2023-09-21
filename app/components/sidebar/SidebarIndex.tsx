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
import { addAppointment } from '@/app/libs/schedule'

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
    setAppointment(newAppointment)
  }
  const updateIsValid = (newIsValid: ValidForm) => {
    setIsValid(newIsValid)
  }

  const onSubmit = async (values: any) => {
    addAppointment(appointment)
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
