'use client'
import { Box, Modal } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Success() {
  const style = {
    boxShadow: 24,
    p: 4,
  }

  useEffect(() => {
    setTimeout(() => {
      window.location.href = 'https://pasionporlasfinanzas.com'
    }, 7000)
  }, [])
  return (
    <>
      <main>
        <Modal open={true} className="flex justify-center items-center">
          <Box
            className="bg-[#FAFAFA] p-7 mx-2 rounded-lg flex max-w-sm"
            sx={style}
          >
            <div className="flex flex-col justify-center items-center">
              <div className="w-full gap-4 flex-col flex justify-center items-center text-center">
                <Image
                  src={'/checkpay.gif'}
                  height={350}
                  width={350}
                  alt="check icon"
                  className="-my-12"
                />
                <h2 className="font-bold text-2xl">Pago confirmado</h2>
                <p className="font-normal text-md">
                  Tu asesoría fue agendada, pronto nos comunicaremos contigo
                </p>
                <p className="font-normal text-sm">
                  Serás redirigido a la web de{' '}
                  <Link
                    className="text-[#0090D4]"
                    href="https://pasionporlasfinanzas.com"
                  >
                    Pasión por las Finanzas
                  </Link>
                </p>
              </div>
            </div>
          </Box>
        </Modal>
      </main>
    </>
  )
}
