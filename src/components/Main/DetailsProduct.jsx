import { useState } from 'react'
import { IconCart, IconMinus, IconPlus } from '../Icons'

export function DetailsProduct () {
  const [count, setCount] = useState(0)

  const handlePlus = () => setCount(count + 1)
  const handleMinus = () => {
    if (count === 0) return
    setCount(count - 1)
  }

  return (
    <section className='px-6 mb-20 lg:max-w-[420px]'>
      <p className='text-sm font-bold uppercase text-orange-500 mb-4'>Sneaker Company</p>
      <h1 className='text-3xl font-bold mb-4'>Fall Limited Edition Sneakers</h1>
      <p className='text-base text-grayish-blue mb-8'>  These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>

      <div className='flex justify-between items-center mb-10'>
        <p className='flex items-center gap-4 text-3xl font-bold'>$125<span className='text-base font-bold px-[0.6rem] py-[0.1rem] rounded-md bg-pale-orange text-orange-500'>50%</span></p>
        <p className='text-base font-bold line-through'>$250</p>
      </div>

      <div className='flex flex-col gap-4 lg:flex-row'>

        <div className='flex justify-between items-center w-full h-14 rounded-lg px-6 py-3 bg-light-grayish-blue lg:grow-0 lg:w-auto'>
          <button
            className='w-20 h-full grid place-content-center lg:w-4'
            onClick={handleMinus}
          >
            <IconMinus />
          </button>
          <p className='text-base font-bold lg:px-6'>{count}</p>
          <button
            className='w-20 h-full grid place-content-center lg:w-4'
            onClick={handlePlus}
          >
            <IconPlus />
          </button>
        </div>

        <button className='flex items-center justify-center gap-4 w-full h-14 rounded-lg bg-orange-500 text-white font-bold lg:grow lg:w-auto'>
          <span className='fill-white'>
            <IconCart />
          </span>
          Add to cart
        </button>
      </div>
    </section>
  )
}
