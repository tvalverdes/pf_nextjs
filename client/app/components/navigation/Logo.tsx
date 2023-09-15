import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href="https://www.pasionporlasfinanzas.com">
      <Image src="/pf_logo.png" width={110} height={100} alt="Logo" />
    </Link>
  )
}
