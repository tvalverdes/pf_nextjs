import { NextRequest, NextResponse } from 'next/server'
import connectMongoDB from '@/app/libs/mongodb'
import Appointment from '@/app/models/appointment'

export async function POST(req: NextRequest) {
  const { name, mail, date, time } = await req.json()
  await connectMongoDB()
  await Appointment.create({ name, mail, date, time })
  return NextResponse.json({ message: 'Appointment created' }, { status: 201 })
}

export async function GET() {
  try {
    await connectMongoDB()
    const appointments = await Appointment.find()
    return NextResponse.json({ appointments })
  } catch (error) {
    return NextResponse.json({ error })
  }
}
