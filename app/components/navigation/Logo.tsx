import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href="https://www.pasionporlasfinanzas.com">
      <Image src="/pflogo.webp" width={200} height={70} alt="Logo" />
    </Link>
  )
}
