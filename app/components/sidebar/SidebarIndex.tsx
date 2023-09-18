'use client'
import { getData } from '@/app/api/config'
import Calendar from './Calendar'
import { InputField } from './InputField'
import { PayButton } from './PayButton'
import { AdviserData } from './adviserData'
import { useEffect } from 'react'
import { getAppointments } from '@/app/libs/supabase'
import Appointment from '@/app/models/appointment'
export const SidebarIndex = () => {
  useEffect(() => {
    fetch('https://pfback.000webhostapp.com/')
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((error) => console.error(error))
  }, [])

  return (
    <div className="w-full flex flex-col gap-4 bg-white">
      <AdviserData />
      <InputField />
      <Calendar />
      <PayButton />
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/appointment')
  const repo = await res.json()
  console.log(repo)
  return { props: { repo } }
}
