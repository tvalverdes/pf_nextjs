import Image from 'next/image'
import Navbar from './components/navigation/Navbar'
import styles from './page.module.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { Raleway } from 'next/font/google'
import Calendar from './components/sidebar/Calendar'
import { Container } from '@mui/material'
import { AdviserData } from './components/sidebar/adviserData'
import { TimeSelect } from './components/sidebar/Time-Select'

const raleway = Raleway({ subsets: ['latin'], weight: '700' })

export default function Home() {
  return (
    <main className={raleway.className}>
      <Navbar />
      <section className="w-full flex">
        <div className="hidden md:w-2/3 md:flex">asdsa</div>
        <div className="flex w-full p-11 flex-col bg-white border-2 h-full md:w-fit">
          <div>
            <p>HORARIOS DE ANDRÉS</p>
          </div>
          <div className="w-auto bg-white border-2">
            <AdviserData />
            <Calendar />
            <TimeSelect />
          </div>
        </div>
      </section>
    </main>
  )
}
