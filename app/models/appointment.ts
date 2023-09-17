import mongoose, { Schema } from 'mongoose'

const appointmentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
})

export const Appointment =
  mongoose.models.Appointment ||
  mongoose.model('Appointment', appointmentSchema)

export default Appointment
