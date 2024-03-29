'use client'

import { ArrowRight, Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const MobileNav = ({ isAuth }: { isAuth: boolean }) => {
  const [isOpen, setOpen] = useState<boolean>(false)

  const toggleOpen = () => setOpen((prev) => !prev)

  const pathname = usePathname()

  useEffect(() => {
    if (isOpen) toggleOpen()
  }, [isOpen, pathname])

  const closeOnCurrent = (href: string) => {
    if (pathname === href) {
      toggleOpen()
    }
  }

  return (
    <div className='sm:hidden'>
      <Menu
        onClick={toggleOpen}
        className='relative z-50 h-5 w-5 text-zinc-700'
      />

      {isOpen ? (
        <div className='fixed animate-in slide-in-from-top-5 fade-in-20 inset-0 z-0 w-full'>
          <ul className='absolute bg-white border-b border-zinc-200 shadow-xl grid w-full gap-3 px-10 pt-20 pb-8'>
            {!isAuth ? (
              <>
                <li>
                  <Link
                    onClick={() =>
                      closeOnCurrent('/sign-up')
                    }
                    className='flex items-center w-full font-semibold text-green-600'
                    href='/sign-up'>
                    Empezar
                  </Link>
                </li>
                <li className='my-3 h-px w-full bg-gray-300' />
                <li className='my-3 h-px w-full bg-gray-300' />
                <li>
                <Link
                    onClick={() =>
                      closeOnCurrent('/inicio')
                    }
                    className='flex items-center w-full font-semibold'
                    href='/inicio'>
                    Inicio
                  </Link>
                </li>
                <li>
                <Link
                    onClick={() =>
                      closeOnCurrent('/company')
                    }
                    className='flex items-center w-full font-semibold'
                    href='/company'>
                    Compañia
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() =>
                      closeOnCurrent('/inmuebles')
                    }
                    className='flex items-center w-full font-semibold'
                    href='/inmuebles'>
                    Inmuebles
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() =>
                      closeOnCurrent('/ayuda')
                    }
                    className='flex items-center w-full font-semibold'
                    href='/ayuda'>
                    Ayuda
                  </Link>
                </li>

              </>
            ) : (
              <>
                <li>
                  <Link
                    onClick={() =>
                      closeOnCurrent('/dashboard')
                    }
                    className='flex items-center w-full font-semibold'
                    href='/dashboard'>
                    Dashboard
                  </Link>
                </li>
                <li className='my-3 h-px w-full bg-gray-300' />
                <li>
                  <Link
                    className='flex items-center w-full font-semibold'
                    href='/sign-out'>
                    Sign out
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      ) : null}
    </div>
  )
}

export default MobileNav
