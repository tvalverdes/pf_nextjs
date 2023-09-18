import Image from 'next/image'
import Navbar from './components/navigation/Navbar'
import { SidebarIndex } from './components/sidebar/SidebarIndex'

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="w-full flex">
        <div className="hidden md:w-2/3 md:flex">asdsa</div>
        <div className="flex flex-col w-full px-3 bg-white h-full md:w-96 md:px-5">
          <p>HORARIOS DE ANDRÉS</p>
          <SidebarIndex />
        </div>
      </section>
    </main>
  )
}
