import { Hero } from './Hero'
import { Product } from './Product'

export function Main () {
  return (
    <main className='grid grid-cols-1 gap-6 lg:flex lg: items-center lg:gap-32 lg:px-56 lg:pt-20 lg:mb-96'>
      <Hero />
      <Product />
    </main>
  )
}
