import { IZI_URL, TEST_KEY } from '@/app/config'
import { Appointment } from '../components/sidebar/SidebarIndex'

export async function sendToIzi(appointment: Appointment) {
  try {
    interface PaymentResponse {
      answer: {
        paymentURL: string
      }
    }

    const data = {
      amount: 5500,
      currency: 'PEN',
      paymentReceiptEmail: appointment.client_mail,
      customer: {
        email: appointment.client_mail,
      },
      subMerchantDetails: {
        name: appointment.client_name,
      },
      cancelUrl: 'https://pasionporlasfinanzas.com',
      successUrl: 'https://pasionporlasfinanzas.com/blog',
    }
    const response = await fetch(IZI_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: TEST_KEY,
      },

      body: JSON.stringify(data),
    })
    console.log(IZI_URL)
    console.log(TEST_KEY)
    console.log(data)
    if (response.ok) {
      console.log(response.json())
      /* const responseData: PaymentResponse = await response.json()
      const paymentURL = responseData.answer.paymentURL
      window.location.href = paymentURL
      console.log('Peticion POST exitosa') */
      // Realizar acciones adicionales si la petición fue exitosa
    } else {
      console.error('Error en la petición POST response.ok')
      console.log(response)
      // Realizar acciones adicionales en caso de error
    }
  } catch (error) {
    console.error('Error en la petición POST try-catch:', error)
    // Manejar el error de la petición
  }
}
