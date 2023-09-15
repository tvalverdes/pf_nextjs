'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Logo } from './Logo'
import { GrMenu, GrClose } from 'react-icons/gr'

const items = [
  { text: 'Blog', href: 'https://pasionporlasfinanzas.com/blog/' },
  { text: 'Apoyo', href: 'https://pasionporlasfinanzas.com/apoyo/' },
  {
    text: 'Sobre nosotros',
    href: 'https://pasionporlasfinanzas.com/nosotros/',
  },
  { text: 'Contacto', href: 'https://pasionporlasfinanzas.com/contacto/' },
]

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false)
  const toggleMenu = () => {
    setIsMobile(!isMobile)
  }
  return (
    <>
      <header className="w-full h-20 bg-white sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div
            className={`flex ${
              isMobile ? 'justify-end' : 'justify-between'
            } items-center h-full`}
          >
            <div className={isMobile ? 'hidden' : ''}>
              <Logo />
            </div>
            <button onClick={toggleMenu}>
              {isMobile ? (
                <GrClose className="md:hidden text-xl" />
              ) : (
                <GrMenu className="md:hidden text-xl" />
              )}
            </button>
            <ul className="hidden md:flex gap-x-8 text-black">
              {items.map((item) => (
                <li className="item" key={item.href}>
                  <Link href={item.href}>
                    <p>{item.text}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`${
              isMobile ? '' : 'hidden'
            } md:hidden flex justify-end mt-5 items-center h-full`}
          >
            <ul className="text-black flex flex-col gap-y-5">
              {items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <p>{item.text}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
