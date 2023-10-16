'use client'
import { useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/es'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import dayjs, { Dayjs } from 'dayjs'
import { TimeSelect } from './TimeSelect'
import { useEffect } from 'react'
import { getSchedule } from '@/app/libs/schedule'
import {
  getMatchingTimes,
  getNextValidDate,
  isWeekend,
} from '@/app/utils/date-filter'
import { useAppointmentContext } from './context'

export function Calendar() {
  const tomorrow = dayjs().add(1, 'day')
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(() => {
    const date = getNextValidDate(dayjs())
    return date
  })
  const lastDayOfDecember = dayjs().endOf('year').endOf('month')
  const arr: any[] = []
  const [schedule, setSchedule] = useState(arr)

  const { appointment, updateAppointment } = useAppointmentContext()
  const handleDateChange = (value: Dayjs | null) => {
    if (value && selectedDate) {
      if (value.format('YYYY-MM-DD') != selectedDate.format('YYYY-MM-DD')) {
        setSelectedDate(value)
        updateAppointment({ ...appointment, date: value.format('YYYY-MM-DD') })
      }
    }
  }

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

  if (!selectedDate) {
    return 'nada'
  }

  let minDate = tomorrow

  if (isWeekend(minDate)) {
    // Si el día siguiente es fin de semana, obtenemos el próximo lunes
    minDate = getNextValidDate(minDate)
  }

  let freeHoursOfDate = getMatchingTimes(
    selectedDate.format('YYYY-MM-DD'),
    schedule
  )

  return (
    <div className="flex-col justify-center items-center">
      <div className="w-full flex flex-col items-center">
        <LocalizationProvider adapterLocale="es" dateAdapter={AdapterDayjs}>
          <DateCalendar
            views={['day']}
            autoFocus
            minDate={minDate}
            shouldDisableDate={isWeekend}
            disablePast
            className="calendar flex justify-around place-content-around content-around"
            maxDate={lastDayOfDecember}
            value={selectedDate}
            onChange={handleDateChange}
          />
        </LocalizationProvider>
        <TimeSelect hours={freeHoursOfDate} />
      </div>
    </div>
  )
}
