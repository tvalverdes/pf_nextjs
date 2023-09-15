import express from 'express'
import paymentRoutes from './routes/payment.routes.js'
import { PORT } from './config.js'
import morgan from 'morgan'
import 'dotenv/config'
import path from 'path'

const app = express()

app.use(morgan('dev'))
app.use(paymentRoutes)
app.use(express.static(path.resolve('src/public')))

const port = PORT

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
