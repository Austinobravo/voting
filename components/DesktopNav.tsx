import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchButton from './SearchButton'

const navLinks = [
    {
        name: "About us",
        href: "/about"
    },
    {
        name: "Election",
        href: "/elections"
    },
    {
        name: "Polls",
        href: "/polls"
    },
    {
        name: "Contact us",
        href: "/contact"
    },
    {
        name: "Login",
        href: "/login"
    },
]
const DesktopNav = () => {
  return (
    <div className='bg-transparent  w-full pt-4 absolute px-6 flex items-center'>
        <div className='flex justify-between w-full items-center'>
            <Link href={"/"}>
                <Image src="/logo-no-background.svg" width={80} height={100} alt='logo'/>
            </Link>
            <div>
                <ul className='flex space-x-4'>
                    {navLinks.map((link, index)=>(
                        <li key={index} >
                            <Link href={link.href} className={`${link.name === "Login" && ("bg-amber-500 px-5 py-1 text-white rounded-md")} text-white`}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div className='pl-3 '>
            <SearchButton/>
        </div>
    </div>
  )
}

export default DesktopNav