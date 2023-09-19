'use client'
import { useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/es'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import dayjs, { Dayjs } from 'dayjs'
import { TimeSelect } from './TimeSelect'
import { useEffect } from 'react'
import { getSchedule } from '@/app/libs/get-schedule'
import { getMatchingTimes } from '@/app/utils/date-filter'

export default function Calendar() {
  const tomorrow = dayjs().add(1, 'day')
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(
    dayjs(tomorrow)
  )
  const [chosenDate, setChosenDate] = useState(false)
  const lastDayOfMonth = dayjs().endOf('month')
  const arr: any[] = []
  const [schedule, setSchedule] = useState(arr)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const datos = await getSchedule()
        setSchedule(datos)
      } catch (error) {
        console.error('Error al obtener datos:', error)
      }
    }
    fetchData()
  }, [])

  const isWeekend = (date: Dayjs) => {
    const day = date.day()
    return day === 0 || day === 6
  }

  const handleDateChange = (date: Dayjs | null) => {
    setSelectedDate(date)
    setChosenDate(true)
  }
  if (!selectedDate) {
    return 'nada'
  }

  return (
    <div className="flex-col justify-center items-center">
      <div className="w-full flex flex-col items-center">
        <LocalizationProvider adapterLocale="es" dateAdapter={AdapterDayjs}>
          <DateCalendar
            defaultValue={dayjs('2023-09-21')}
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
        <TimeSelect
          chosenDate={chosenDate}
          hours={getMatchingTimes(selectedDate.format('YYYY-MM-DD'), schedule)}
        />
      </div>
    </div>
  )
}
