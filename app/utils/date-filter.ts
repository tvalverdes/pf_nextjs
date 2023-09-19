import dayjs from 'dayjs'

export function getMatchingTimes(selectedDate: string, schedule: any[] = []) {
  if (!selectedDate) {
    return []
  }

  const matchingTimes = schedule.filter((item) => {
    const itemDate = dayjs(item.date)
    return itemDate.isSame(selectedDate, 'day')
  })
  const times = matchingTimes.map((item) => item.time)
  return times
}
