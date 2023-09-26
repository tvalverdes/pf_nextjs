import dayjs from 'dayjs'
import { API_URL } from '@/app/config'
import { Appointment } from '../components/sidebar/SidebarIndex'

export async function getSchedule() {
  try {
    const response = await fetch(API_URL)
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

export async function addAppointment(appointment: Appointment) {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(appointment),
    })
    if (!response.ok) {
      console.error('Error en la petición POST response.ok')
    }
  } catch (error) {
    console.error('Error en la petición POST try-catch:', error)
    // Manejar el error de la petición
  }
}
