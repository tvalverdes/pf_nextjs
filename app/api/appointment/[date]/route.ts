import connectMongoDB from '@/app/libs/mongodb'
import Appointment from '@/app/models/appointment'
import { NextRequest, NextResponse } from 'next/server'

interface Schedule {
  time: String
}

export async function GET(req: NextRequest, { params }: any) {
  try {
    const { date } = params
    const dateObject = new Date(date)
    await connectMongoDB()
    const dateExists = await Appointment.find({ date: dateObject }).exec()
    if (dateExists.length == 0) {
      return NextResponse.json({ message: 'Sin reservas' })
    }
    const schedule = dateExists.map((data) => ({
      time: data.time,
    }))
    return NextResponse.json({ schedule })
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 })
  }
}
