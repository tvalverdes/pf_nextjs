'use client'
import Calendar from './Calendar'
import { InputField } from './InputField'
import { PayButton } from './PayButton'
import { AdviserData } from './adviserData'
export const SidebarIndex = () => {
  return (
    <div className="w-full flex flex-col gap-4 bg-white">
      <AdviserData />
      <InputField />
      <Calendar />
      <PayButton />
    </div>
  )
}
