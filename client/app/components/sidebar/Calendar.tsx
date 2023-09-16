'use client'
import * as React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/es'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import dayjs, { Dayjs } from 'dayjs'

export default function Calendar() {
  const tomorrow = dayjs().add(1, 'day')

  const isWeekend = (date: Dayjs) => {
    const day = date.day()
    return day === 0 || day === 6
  }

  return (
    <LocalizationProvider adapterLocale="es" dateAdapter={AdapterDayjs}>
      <DateCalendar
        views={['day']}
        autoFocus
        minDate={tomorrow}
        shouldDisableDate={isWeekend}
        disablePast
        className="text-blue"
      />
    </LocalizationProvider>
  )
}
