import DesktopNav from '@/components/DesktopNav'
import { Link, LucideFacebook, LucideTwitter, QrCode, User } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <section className=''>
        <div className='bg-black/80 w-full h-36'>
            <DesktopNav/>
        </div>
        <div className='md:px-20 px-6 py-12 '>
            <div className='bg-blue-300 w-fit font-bold text-black opacity-80 py-1 px-3 mb-3 rounded-full'>
                <p>Polls</p>
            </div>
            <div className='space-y-1'>
                <h1 className='text-3xl font-bold'>What design tool do you use the most?</h1>
                <p className='flex items-center text-xs opacity-80'><User size={15} className='mr-1'/><span className='font-bold mr-1 opacity-100 text-sm'>Jamie Foxx </span> </p>
                <span className='opacity-80 text-xs'>on Wednesday 12th Decemeber 2024.</span>
            </div>
            <form className='flex flex-wrap md:flex-nowrap gap-5  mt-3'>
                <div className='md:basis-1/2 w-full space-y-5'>
                    <div className='border-2 px-4 py-3 border-green-500 space-y-4'>
                        <input type='radio' name="poll" id="poll"/>
                        <h2 className='text-lg font-semibold '>Sketch</h2>
                        <hr className='border py-1 rounded-full bg-green-500'/>
                        <small className=''>29 votes</small>
                    </div>
                    <div className='border-2 px-4 py-3 border-green-500 space-y-4'>
                        <input type='radio' name="poll" id="poll"/>
                        <h2 className='text-lg font-semibold '>Sketch</h2>
                        <hr className='border py-1 rounded-full bg-green-500'/>
                        <small>29 votes</small>
                    </div>
                    <div className='border-2 px-4 py-3 border-green-500 space-y-4'>
                        <input type='radio' name="poll" id="poll"/>
                        <h2 className='text-lg font-semibold '>Sketch</h2>
                        <hr className='border py-1 rounded-full bg-green-500'/>
                        <small>29 votes</small>
                    </div>
                </div>
                <div className='md:basis-1/2 w-full space-y-2'>
                    <button type='submit' className='bg-green-500 font-bold text-white py-2 px-20 md:w-[290px] w-full '>Submit your vote</button>
                    <div className='shadow-md rounded-md bg-white md:w-[290px] w-full py-6'>
                        <div className='px-4 space-y-1 py-5'>
                            <h3 className='opacity-50 text-sm'>Votes</h3>
                            <h3 className='text-4xl font-bold'>71</h3>
                        </div>
                        <hr className=''/>
                        <div className='px-4'>
                            <h4 className='opacity-50 my-3'>Share</h4>
                            <div className='space-y-2'>
                                <div className='flex text-blue-500 text-sm'>
                                    <LucideTwitter size={20} className='mr-1'/>
                                    Share on Twitter
                                </div>
                                <div className='flex text-blue-800 text-sm'>
                                    <LucideFacebook  size={20} className='mr-1'/>
                                    Share on Facebook
                                </div>
                                <div  className='flex text-amber-500 text-sm'>
                                    <Link size={20} className='mr-1'/>
                                    Copy Link
                                </div>
                                <div className='flex text-violet-500 text-sm'>
                                    <QrCode  size={20} className='mr-1'/>
                                    QR Code
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        
        
        </div>
    </section>
  )
}

export default page