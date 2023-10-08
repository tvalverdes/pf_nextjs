'use client'
import { useEffect, useState } from 'react'
import { Calendar } from './Calendar'
import { Subject } from './Subject'
import { AdviserData } from './adviserData'
import { Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import { FormContext, SidebarContext } from './context'
import { InputField } from './InputField'
import { MailField } from './MailField'
import dayjs, { Dayjs } from 'dayjs'
import { addAppointment } from '@/app/libs/schedule'
import { getNextValidDate } from '@/app/utils/date-filter'
import { payment } from '@/app/libs/izi'
import { MoreInfoText } from './MoreInfoText'
import { PaymentModal } from '../payment_modal/PaymentModal'
import { modalState } from '@/app/store/modalState'
import { LoadingModal } from '../loading/LoadingModal'

export interface Appointment {
  client_name: string
  client_mail: string
  subject: string
  date: string
  time: string
  comment: string
}

export interface ValidForm {
  validName: boolean
  validMail: boolean
  validSubject: boolean
  validTime: boolean
}

export const SidebarIndex = () => {
  const { handleSubmit } = useForm()
  const [token, setToken] = useState('')
  const [loading, setLoading] = useState(false)
  const { hide } = modalState()
  const [appointment, setAppointment] = useState<Appointment>({
    client_name: '',
    client_mail: '',
    subject: '',
    date: getNextValidDate(dayjs()).format('YYYY-MM-DD'),
    time: '',
    comment: '',
  })
  const [isValid, setIsValid] = useState<ValidForm>({
    validName: false,
    validMail: false,
    validSubject: false,
    validTime: false,
  })

  const [enableModal, setEnableModal] = useState(false)

  const isAllTrue = Object.values(isValid).every((value) => value === true)

  const updateAppointment = (newAppointment: Appointment) => {
    setAppointment(newAppointment)
  }
  const updateIsValid = (newIsValid: ValidForm) => {
    setIsValid(newIsValid)
  }

  const displayLoading = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  const onSubmit = async () => {
    addAppointment(appointment)
    displayLoading()
    setToken(await payment(appointment))
    setEnableModal(true)
    hide(false)
  }

  return (
    <div>
      <div>
        <AdviserData />
      </div>
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
            <Subject />
            <Calendar />
            <MoreInfoText />
            <Button
              disabled={!isAllTrue}
              type="submit"
              variant="contained"
              className="main-bg-color mb-5 mx-2"
            >
              {loading ? <LoadingModal /> : 'Agendar Asesoría'}
            </Button>
          </FormContext.Provider>
        </SidebarContext.Provider>
      </form>
      {enableModal ? <PaymentModal token={token} /> : null}
    </div>
  )
}
