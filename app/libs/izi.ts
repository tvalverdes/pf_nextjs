import { Appointment } from '../components/sidebar/SidebarIndex'

export async function payment(appointment: Appointment) {
  try {
    const response = await fetch(
      `https://pasionporlasfinanzas.com/apirest/payment/?paymentReceiptEmail=${appointment.client_mail}&customerName=${appointment.client_name}`
    )
    if (!response.ok) {
      throw new Error('No se pudo obtener la data')
    }
    const data = await response.json()
    window.location.href = data.answer.paymentURL
  } catch (error) {
    console.error('Error al obtener datos:', error)
    throw error
  }
}
