'use client'
import { useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/es'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import dayjs, { Dayjs } from 'dayjs'
import { TimeSelect } from './TimeSelect'
import { useEffect } from 'react'
import { API_URL } from '@/app/config'

export default function Calendar() {
  const tomorrow = dayjs().add(1, 'day')
  const lastDayOfMonth = dayjs().endOf('month')

  useEffect(() => {
    const month = dayjs().month() + 1
    console.log(`${API_URL}?month=${month}`)
    fetch(`${API_URL}?month=${month}`)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error))
  }, [])

  const isWeekend = (date: Dayjs) => {
    const day = date.day()
    return day === 0 || day === 6
  }
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null)
  const [chosenDate, setChosenDate] = useState(false)

  const handleDateChange = (date: Dayjs | null) => {
    setSelectedDate(date)
    setChosenDate(true)
  }

  return (
    <div className="flex-col justify-center items-center">
      <div className="w-full flex flex-col items-center">
        <LocalizationProvider adapterLocale="es" dateAdapter={AdapterDayjs}>
          <DateCalendar
            views={['day']}
            autoFocus
            minDate={tomorrow}
            shouldDisableDate={isWeekend}
            disablePast
            className="calendar"
            maxDate={lastDayOfMonth}
            value={selectedDate}
            onChange={handleDateChange}
          />
        </LocalizationProvider>
        <TimeSelect chosenDate={chosenDate} />
      </div>
    </div>
  )
}
