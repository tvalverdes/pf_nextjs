import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href="https://www.pasionporlasfinanzas.com">
      <Image src="/nuevologopf.png" width={140} height={70} alt="Logo" />
    </Link>
  )
}
