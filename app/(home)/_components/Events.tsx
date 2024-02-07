import { Star } from 'lucide-react'
import React from 'react'

const Events = () => {
  return (
    <section className='py-20 px-6'>
        <div className='text-center w-full space-y-7'>
            <div className='flex justify-center gap-x-2'>
                <Star size={15} fill='black' color='white'/>
                <Star  size={15} fill='black' color='white'/>
                <Star  size={15} fill='black' color='white'/>
                <h4 className='text-xl font-bold'>Recents and Upcoming Events</h4>
                <Star  size={15} fill='black' color='white'/>
                <Star  size={15} fill='black' color='white'/>
                <Star  size={15} fill='black' color='white'/>
            </div>
            <h4 className='font-bold text-3xl'>Visit Our Recent Events</h4>
            <p className='md:w-[500px] mx-auto'>Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia deser unt mollit anim.</p>
        </div>
        <div className='flex flex-wrap md:flex-nowrap  space-y-5 gap-x-5 py-10'>
            <div className='bg-cover bg-center w-full h-96 md:h-[100vh]  rounded-full md:basis-1/2' style={{backgroundImage: `url(/event.jpg)`}}>
                <div className='bg-black/50 rounded-md relative w-full h-full'>
                    <div className='absolute bottom-10 flex justify-center items-center mx-auto w-full gap-x-4'>
                        <div className='border-2 border-white rounded-md '>
                            <h2 className='text-4xl md:px-7 px-3 text-white py-4'>00</h2>
                            <p className='bg-white text-black text-center md:py-2 py-1 font-bold '>Days</p>
                        </div>
                        <div className='border-2 border-white rounded-md '>
                            <h2 className='text-4xl md:px-7 px-3 text-white py-4'>00</h2>
                            <p className='bg-white text-black text-center md:py-2 py-1 font-bold '>Hours</p>
                        </div>
                        <div className='border-2 border-white rounded-md '>
                            <h2 className='text-4xl md:px-7 px-3 text-white py-4'>00</h2>
                            <p className='bg-white text-black text-center md:py-2 py-1 font-bold '>Minutes</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className='md:basis-1/2 border-dashed rounded-md border-black border-2 md:px-6 px-3 py-7 space-y-6'>
                <div className='space-y-5 px-6'>
                    <div className='space-x-4'>
                        <span className='bg-amber-500 px-3 py-1 rounded-md text-white'>Event</span>
                        <span className='text-xs'> 29 May 2021</span>
                    </div>
                    <h3 className='font-bold text-xl'>Many important brands have given us</h3>
                    <p className='opacity-50 text-sm'>Every pleasures is to welcomed pain avoided owing to the duty the obligations of business.</p>
                </div>
                <div className='space-y-5 bg-amber-500 px-6 rounded-md py-6 text-white' >
                    <div className='space-x-4' >
                        <span className='bg-white text-amber-500  px-3 py-1 rounded-md ' >Event</span>
                        <span className='text-xs' > 29 May 2021</span>
                    </div>
                    <h3 className='font-bold text-xl' >Many important brands have given us</h3>
                    <p className=' text-sm' >Every pleasures is to welcomed pain avoided owing to the duty the obligations of business.</p>
                </div>
                <div className='space-y-5 px-6'>
                    <div className='space-x-4'>
                        <span className='bg-amber-500 px-3 py-1 rounded-md text-white'>Event</span>
                        <span className='text-xs'> 29 May 2021</span>
                    </div>
                    <h3 className='font-bold text-xl'>Many important brands have given us</h3>
                    <p className='opacity-50 text-sm'>Every pleasures is to welcomed pain avoided owing to the duty the obligations of business.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Events