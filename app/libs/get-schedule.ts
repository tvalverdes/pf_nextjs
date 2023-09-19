import dayjs from 'dayjs'
import { API_URL } from '@/app/config'

export async function getSchedule() {
  const month = dayjs().month() + 1
  try {
    const response = await fetch(`${API_URL}?month=${month}`)
    if (!response.ok) {
      throw new Error('No se pudo obtener la data')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error al obtener datos:', error)
    throw error
  }
}
