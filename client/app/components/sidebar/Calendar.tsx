'use client'
import { useState } from 'react'
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
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null)

  const handleDateChange = (date: Dayjs | null) => {
    setSelectedDate(date)
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
        value={selectedDate}
        onChange={handleDateChange}
      />
      {selectedDate && (
        <div>Fecha seleccionada: {selectedDate.format('DD/MM/YYYY')}</div>
      )}
    </LocalizationProvider>
  )
}
