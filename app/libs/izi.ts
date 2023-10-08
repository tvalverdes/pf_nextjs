import { Appointment } from '../components/sidebar/SidebarIndex'

export async function payment(appointment: Appointment) {
  const url = `https://pasionporlasfinanzas.com/apirest/formpayment/?paymentReceiptEmail=${appointment.client_mail}&customerName=${appointment.client_name}`
  const newUrl = 'https://pasionporlasfinanzas.com/apirest/formpayment/'
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('No se pudo obtener la data')
    }
    const data = await response.json()
    return data.answer.formToken
  } catch (error) {
    console.error('Error al obtener datos:', error)
    throw error
  }
}
