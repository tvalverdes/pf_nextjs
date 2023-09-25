import Navbar from './components/navigation/Navbar'
import { SidebarIndex } from './components/sidebar/SidebarIndex'
import { LeftSide } from './components/LeftSide'

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <section className="w-full flex">
          <LeftSide />
          <div className="flex flex-col w-full md:w-2/4 px-3 pt-2 bg-white h-full lg:w-2/4 xl:md:w-1/4 md:px-5">
            <p>HORARIOS DE ANDRÉS</p>
            <SidebarIndex />
          </div>
        </section>
      </main>
    </>
  )
}
