import { ArrowUpRightFromSquare, LocateIcon, LucideFacebook, LucideLinkedin, LucideTwitter, LucideYoutube, Mail, PhoneCall } from 'lucide-react'
import React from 'react'
import Image from "next/image"
import Link from "next/link"
const Explore = [
    {
        name: "66 Broklyn Street 30 Road. New York United States",
        icon: LocateIcon
    },
    {
        name: "info@yourmail.com",
        icon: Mail
    },
    {
        name: "+ 1 009-215-5599",
        icon: PhoneCall
    },
]
const UsefulLinks = [
    "Privacy policy",
    "Terms and condition",
    "Support",
    "Faqs"
]
const QuickLinks = [
    "About us",
    "Elections",
    "Polls",
    "Contact us"
]
const Footer = () => {
  return (
    <section className='bg-white pb-10 md:px-20 px-6'>
            <div className='rounded-b' style={{backgroundImage: `url(/banner.webp)`}}>
                <div className='bg-black/30 rounded-b w-full'>
                    <div className='flex justify-between gap-x-7 px-5 py-10' >
                        <h3 className='text-3xl  font-bold leading-snug'>Would You Like To <span className='text-white'>Become One</span> <br/> Of Our Members?</h3>
                        <div className='bg-green-500 flex  space-x-1 h-fit rounded-md hover:bg-green-400 text-white px-10 font-bold py-2 '>
                            <button>Join US</button>
                            <ArrowUpRightFromSquare size={10}/>
                        </div>

                    </div>

                </div>
            </div>
            <div className='flex gap-x-7 flex-wrap md:flex-nowrap space-y-3 py-10'>
                <div className='space-y-4'>
                    <Image src="/logo-no-background.svg" width={50} height={50} alt="logo"/>
                    <p className='text-sm md:w-96 '>President represented Delaware for 36 years in the U.S. Senate before becoming the 47th Vice President of the United States.</p>
                    <div className='flex gap-x-2'>
                        <div className='border p-2 rounded-md bg-amber-500 cursor-pointer hover:bg-amber-400'>
                            <LucideFacebook  color='white'/> 
                        </div>
                        <div className='border p-2 rounded-md bg-amber-500 cursor-pointer hover:bg-amber-400'>
                            <LucideTwitter color='white'/>
                        </div>
                        <div className='border p-2 rounded-md bg-amber-500 cursor-pointer hover:bg-amber-400'>
                            <LucideLinkedin color='white'/>
                        </div>
                        <div className='border p-2 rounded-md bg-amber-500 cursor-pointer hover:bg-amber-400'>
                            <LucideYoutube color='white'/>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className='text-lg font-bold '>Explore</h4>
                    <hr className='border w-20 my-2 border-amber-500'/>
                    <ul className='space-y-5'>
                        {Explore.map((details, index)=> (
                            <li key={index} className='flex text-sm items-center space-x-2'>
                                <details.icon size={15}/>
                                <span>{details.name}</span>
                            </li>

                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className='text-lg font-bold '>Useful Links</h4>
                    <hr className='border w-20 my-2 border-amber-500'/>
                    <ul className='space-y-5'>
                        {UsefulLinks.map((details, index)=> (
                            <li key={index}  className='flex text-sm items-center space-x-2 hover:before:content-["-"] '><Link href="" className='hover:pl-1'>{details}</Link></li>
                            ))}
                    </ul>
                </div>
                <div>
                    <h4 className='text-lg font-bold '>Quick Links</h4>
                    <hr className='border w-20 my-2 border-amber-500'/>
                    <ul className='space-y-5'>
                        {QuickLinks.map((details, index)=> (
                            <li key={index}  className='flex text-sm items-center space-x-2 hover:before:content-["-"] '><Link href="" className='hover:pl-1'>{details}</Link></li>
                        ))}
                    </ul>
                </div>
            </div>

       <div className='text-center opacity-60 text-sm'>
        <p>Copyright &copy; {new Date().getFullYear()}. All rights reserved</p>
       </div>
    </section>
  )
}

export default Footer