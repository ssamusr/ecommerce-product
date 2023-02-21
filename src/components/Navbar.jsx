import { useState } from 'react'
import { IconCart, IconClose, IconMenu, Logo } from './Icons'
import { Links } from '../data/data'

export function Navbar () {
  const [showMenu, setShowMenu] = useState(false)

  const handleMenu = () => setShowMenu(!showMenu)
  return (
    <header className='flex justify-between items-center p-6 lg:py-8 lg:px-40 bg-white'>
      <div className='flex items-center gap-4'>
        <button
          onClick={handleMenu}
          className='lg:hidden'
        >
          <IconMenu />
        </button>
        <a href='#' className={showMenu ? 'hidden' : 'block'}><Logo /></a>

        <nav
          className={showMenu
            ? 'Navbar'
            : 'hidden lg:flex lg:ml-12'}
        >
          <button
            onClick={handleMenu}
            className='mt-1 lg:hidden'
          >
            <IconClose />
          </button>

          <ul className='flex flex-col gap-4 lg:flex-row lg:gap-8 lg:ml-12'>
            {
              Links.map((link) => (
                <li
                  key={link.id}
                  onClick={showMenu ? handleMenu : undefined}
                  className='text-base text-very-dark-blue font-bold lg:text-grayish-blue lg:font-normal'
                >
                  <a href='#'>{link.link}
                  </a>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>

      <div className='flex items-center gap-5 lg:gap-12'>
        <button><IconCart /></button>
        <button className='w-6 h-6 lg:w-12 lg:h-12'><img src='./public/images/image-avatar.png' alt='' /></button>
      </div>
    </header>
  )
}
