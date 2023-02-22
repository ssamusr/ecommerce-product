export function Product () {
  return (
    <section className='px-6 lg:max-w-[420px]'>
      <p className='text-sm font-bold uppercase text-orange-500 mb-4'>Sneaker Company</p>
      <h1 className='text-3xl font-bold mb-4'>Fall Limited Edition Sneakers</h1>
      <p className='text-base text-grayish-blue mb-8'>  These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
      <div className='flex justify-between items-center mb-10'>
        <p className='flex items-center gap-4 text-3xl font-bold'>$125 <span className='text-base font-bold px-[0.6rem] py-[0.1rem] rounded-md bg-pale-orange text-orange-500'>50%</span></p>
        <p className='text-base font-bold line-through'>$250</p>
      </div>
    </section>
  )
}
