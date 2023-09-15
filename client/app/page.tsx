import Image from 'next/image'
import Navbar from './components/navigation/Navbar'
import { Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'], weight: '700' })

export default function Home() {
  return (
    <main className={raleway.className}>
      <Navbar />
    </main>
  )
}
