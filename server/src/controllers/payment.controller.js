import mercadopago from 'mercadopago'
import { HOST, KEY } from '../config.js'

export const createOrder = async (req, res) => {
  mercadopago.configure({
    access_token: KEY,
  })

  const result = await mercadopago.preferences.create({
    items: [
      {
        title: 'Asesoría Financiera',
        unit_price: 60,
        currency_id: 'PEN',
        quantity: 1,
      },
    ],
    back_urls: {
      success: `${HOST}/success`,
      failure: `${HOST}/failure`,
      pending: `${HOST}/pending`,
    },
    notification_url: 'https://45d9-190-43-38-221.ngrok.io/webhook',
  })

  console.log(result)

  res.send(result.body)
}

export const success = (req, res) => {
  console.log(process.env.HOST)
  res.send('hola')
}

export const receiveWebhook = (req, res) => {
  console.log(req.query)
  res.send('Webhook')
}
