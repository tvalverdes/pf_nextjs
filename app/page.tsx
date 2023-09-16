import Image from 'next/image'
import Navbar from './components/navigation/Navbar'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import Calendar from './components/sidebar/Calendar'
import { AdviserData } from './components/sidebar/adviserData'
import { PayButton } from './components/sidebar/PayButton'

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="w-full flex">
        <div className="hidden md:w-2/3 md:flex">asdsa</div>
        <div className="flex flex-col w-full px-3 bg-white h-full md:w-96 md:px-5">
          <p>HORARIOS DE ANDRÉS</p>
          <div className="w-full bg-white">
            <AdviserData />
            <Calendar />
            <PayButton />
          </div>
        </div>
      </section>
    </main>
  )
}
