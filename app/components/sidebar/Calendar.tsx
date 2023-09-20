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
import { getMatchingTimes, isWeekend } from '@/app/utils/date-filter'

export default function Calendar() {
  const tomorrow = dayjs().add(1, 'day')
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(
    dayjs(tomorrow)
  )
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

  const handleDateChange = (date: Dayjs | null) => {
    if (date && selectedDate) {
      if (date.format('YYYY-MM-DD') != selectedDate.format('YYYY-MM-DD')) {
        setSelectedDate(date)
      }
    }
  }
  if (!selectedDate) {
    return 'nada'
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
        <TimeSelect hours={freeHoursOfDate} />
      </div>
    </div>
  )
}
