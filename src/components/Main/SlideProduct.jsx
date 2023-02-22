// TODO: arregla las dimensiones de las imagenes para que sea más responsivo

import { useEffect, useState } from 'react'
import { images } from '../../data/data'
import { IconNext, IconPrevious } from '../Icons'

export function SlideProduct () {
  const [index, setIndex] = useState(0)

  const handlePrevius = () => {
    if (index === 0) {
      return setIndex(images.length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  const handleNext = () => {
    if (index === images.length - 1) {
      return setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  const keyPress = (e) => {
    if (e.key === 'ArrowRight') {
      return handleNext()
    }

    if (e.key === 'ArrowLeft') {
      return handlePrevius()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', keyPress)
    return () => document.removeEventListener('keydown', keyPress)
  }, [keyPress])

  return (
    <section className='w-full h-80 relative lg:h-auto'>
      <button
        onClick={handlePrevius}
        className='w-10 h-10 bg-white rounded-[50%] absolute top-[50%] left-4 grid place-content-center lg:hidden'
      >
        <IconPrevious className='mr-1' />
      </button>

      <div className='flex flex-col gap-8'>

        <div className='lg:w-[445px] lg:h-[445px]'>
          <img
            src={images[index].image}
            alt={images[index].alt}
            className='w-full h-80 object-cover lg:rounded-2xl lg:h-auto'
          />
        </div>
        <div className='hidden lg:flex lg:gap-8 lg:w-full lg:h-24'>
          {
            images.map((image) => (
              <button
                key={image.id}
                className='list-none'
                onClick={() => {
                  setIndex(image.id - 1)
                }}
              >
                <img
                  src={image.image}
                  alt={image.alt}
                  className={index === image.id - 1
                    ? 'h-full object-cover rounded-xl opacity-50'
                    : 'h-full object-cover rounded-xl hover:opacity-25'}
                />
              </button>
            ))
          }
        </div>

      </div>

      <button
        onClick={handleNext}
        className='w-10 h-10 bg-white rounded-[50%] absolute top-[50%] right-4 grid place-content-center lg:hidden'
      >
        <IconNext />
      </button>
    </section>
  )
}
