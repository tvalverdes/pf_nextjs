import dayjs, { Dayjs } from 'dayjs'

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

export const isWeekend = (date: Dayjs) => {
  const day = date.day()
  return day === 0 || day === 6
}

export const getNextValidDate = (date: Dayjs) => {
  let nextDate = date.add(1, 'day');
  while (isWeekend(nextDate)) {
    nextDate = nextDate.add(1, 'day');
  }
  return nextDate;
};