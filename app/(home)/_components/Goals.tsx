import { ArrowRight, Award, HeartHandshake, HelpingHand, Palmtree, Star } from 'lucide-react'
import React from 'react'

const Goals = () => {
  return (
    <section className='md:px-20 px-6 pt-20'>
        <div className='grid md:grid-cols-3 gap-x-10 grid-cols-1'>
            <div className=' bg-amber-500 mt-10 h-fit space-y-4 text-white rounded-md  px-7 py-12'>
                <div className='flex'>
                    <p className='text-xl font-bold'>Our Party Visions</p>
                    <div className='flex'>
                        <Star size={10} fill='white'/>
                        <Star size={10} fill='white'/>
                        <Star size={10} fill='white'/>
                    </div>
                </div>
                <h3 className='text-4xl font-bold pb-20'>Together We Are Stronger</h3>
                <div className='flex items-center rounded-md  border-2 border-white px-4 py-2 hover:bg-white hover:text-amber-500 transition w-fit'><ArrowRight size={15}/> <button>View More</button></div>
            </div>
            <div className='space-y-4'>
                <div className=' bg-white  hover:bg-amber-500 shadow-md space-y-4 text-black hover:text-white rounded-md  px-7 py-12'>
                    <Award size={50} />
                    <h3 className='text-xl font-bold'>We Will Win The Elections</h3>
                    <p>Phasellus iaculis posuere velit, congue placerat duawi rhoncus vel. Maecenas tortor orci, aliquet.</p>
                </div>
                <div className='bg-white  hover:bg-amber-500 shadow-md space-y-4 text-black hover:text-white rounded-md  px-7 py-12'>
                    <Palmtree size={50}/>
                    <h3 className='text-xl font-bold'>Our Party Is Growing</h3>
                    <p>Phasellus iaculis posuere velit, congue placerat duawi rhoncus vel. Maecenas tortor orci, aliquet.</p>
                </div>

            </div>
            <div className='space-y-4 mt-7'>
                <div className=' bg-white hover:bg-amber-500 shadow-md space-y-4 text-black hover:text-white rounded-md  px-7 py-12'>
                    <HelpingHand size={50}/>
                    <h3 className='text-xl font-bold'>We Care About Causes</h3>
                    <p>Phasellus iaculis posuere velit, congue placerat duawi rhoncus vel. Maecenas tortor orci, aliquet.</p>
                </div>
                <div className=' bg-white hover:bg-amber-500 shadow-md space-y-4 text-black hover:text-white rounded-md  px-7 py-12'>
                    <HeartHandshake size={50}/>
                    <h3 className='text-xl font-bold'>Get Involved</h3>
                    <p>Phasellus iaculis posuere velit, congue placerat duawi rhoncus vel. Maecenas tortor orci, aliquet.</p>
                </div>

            </div>
        </div>
      
    </section>
  )
}

export default Goals
