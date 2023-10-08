import { useEffect, useState } from 'react'
import Image from 'next/image'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}

export const LoadingModal = () => {
  return (
    <>
      <Image src="/spinner.svg" width={25} height={25} alt="cargando" />
    </>
  )
}
