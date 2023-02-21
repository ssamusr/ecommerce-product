import { useState } from 'react'
import { images } from '../../data/data'
import { IconNext, IconPrevious } from '../Icons'

export function Hero () {
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
  return (
    <section className='w-full h-80 relative'>
      <button
        onClick={handlePrevius}
        className='w-10 h-10 bg-white rounded-[50%] absolute top-[50%] left-4 grid place-content-center'
      >
        <IconPrevious className='mr-1' />
      </button>

      <img
        src={images[index].image}
        alt={images[index].alt}
        className='w-full h-80 object-cover'
      />

      <button
        onClick={handleNext}
        className='w-10 h-10 bg-white rounded-[50%] absolute top-[50%] right-4 grid place-content-center'
      >
        <IconNext />
      </button>
    </section>
  )
}
