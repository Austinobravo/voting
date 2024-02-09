import DesktopNav from '@/components/DesktopNav'
import { ChevronRight, LocateFixedIcon, Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const contactUs =[
    {
        icon: Mail,
        name: "Email",
        address: "contactus@email.com"
    },
    {
        icon: Phone,
        name: "Phone",
        address: "+1 604 645 34"
    },
    {
        icon: LocateFixedIcon,
        name: "Location",
        address: "Woods Avenue (East LA)"
    },
]
const page = () => {
  return (
    <section>
        <div className='bg-black/80 w-full h-36'>
            <DesktopNav/>
        </div>
        <div>
            <div className='text-center mt-7 space-y-2 py-10'>
                <h2 className='text-4xl font-bold'>Have to join with us?</h2>
                <blockquote className='text-sm font-semibold opacity-70'>"Do you want to stay updated with us"</blockquote>
            </div>
            <div>
                <div className='md:px-20 px-6 flex flex-wrap md:flex-nowrap gap-x-20 '>
                    <div className='md:basis-1/4 space-y-7'>
                        <div>
                            <h3 className='text-2xl font-extrabold'>Frequently Asked Questions</h3>
                            <p>Reach out to us with your frequently asked question</p>
                        </div>
                        <div className=' space-y-4'>
                            {contactUs.map((contact,index)=> (
                                <div key={index} className='flex gap-x-2 rounded-md px-5 py-2 bg-neutral-200'>
                                   
                                    <div className='  flex items-center '>
                                        <contact.icon size={35} color=' rgb(245 158 11)' className='bg-neutral-50 hover:bg-neutral-400 w-fit p-2 rounded-full'/>
                                    </div>
                                    <div>
                                        <h2 className='text-lg font-bold'>{contact.name}</h2>
                                        <p>{contact.address}</p>
                                    </div>
                                    

                                </div>
                            ))}

                        </div>

                    </div>
                    
                    <div className='w-full md:basis-2/3'>
                        <h3 className='font-bold text-lg'>Leave the message here</h3>
                        <form className='w-full space-y-3 '>
                            <div className='flex gap-x-4'>
                                <div className='border  border-amber-500 w-full rounded-md'>
                                    <input type='text' name="name" placeholder='Your Name *' className='bg-neutral-200 w-full py-4 px-2 rounded-md'/>
                                </div>
                                <div className='border border-amber-500 w-full rounded-md'>
                                    <input type='email' name="name" placeholder='Your Email *' className='bg-neutral-200 w-full py-4 px-2 rounded-md'/>
                                </div>
                            </div>
                            <div className='flex gap-x-4'>
                                <div className='border  border-amber-500 w-full  rounded-md'>
                                    <input type='text' name="name" placeholder='Your Phone *' className='bg-neutral-200 w-full py-4 px-2 rounded-md'/>
                                </div>
                                <div className='border  border-amber-500 w-full  rounded-md'>
                                    <input type='text' name="name" placeholder='Your Subject *' className='bg-neutral-200 w-full py-4 px-2 rounded-md'/>
                                </div>
                            </div>

                                <textarea rows={10} placeholder='Your Message' className='bg-neutral-200 w-full py-2 px-4 border  border-amber-500 rounded-md'/>

                            <button className='flex items-center bg-amber-500 hover:bg-amber-400 text-white w-fit py-2 px-4 rounded-md '>
                                <p>Join Us</p>
                                <ChevronRight size={15}/>
                            </button>
                        </form>
                    </div>

                    

                </div>
                <div>
                    <div className='text-center mt-7 space-y-2 py-10'>
                        <h2 className='text-4xl font-bold'>Find Us on Goggle Maps</h2>
                        <p>Locate us on Goggle Maps</p>
                    </div>
                    <div className='w-full md:px-20 px-6'>
                        <Image src={`/banner.webp`} width={100} height={100} alt='map' className='w-full'/>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default page