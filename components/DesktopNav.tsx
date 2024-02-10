"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchButton from './SearchButton'
import { usePathname } from 'next/navigation'

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
    const [isNavFixed, setIsNavFixed] = React.useState<boolean>(false)
    const pathname = usePathname()

    React.useEffect(()=>{
        const handleScroll = () => {
            const heroSection = document.getElementById("hero")
            if(heroSection){
                setIsNavFixed(window.scrollY > heroSection.offsetHeight)
            }
        }
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    
  return (
     <div className={` w-full px-6 py-7 flex  items-center ${isNavFixed ? 'fixed bg-black/70 ' : 'bg-transparent absolute'}`} style={{transform: `translateY(${isNavFixed ? "-10px": 0})`, transition: "transform 1s ease"}}>
            <div className='flex justify-between w-full items-center'>
                <Link href={"/"}>
                    <Image src="/logo-no-background.svg" width={80} height={100} alt='logo'/>
                </Link>
                <div>
                    <ul className='flex space-x-4'>
                        {navLinks.map((link, index)=>(
                            <li key={index}>
                                <Link href={link.href} className={`${link.name === "Login" && ("bg-amber-500 px-5 py-1 text-white rounded-md")} ${pathname.includes(link.href) && "!text-amber-500 font-bold underline"}  hover:text-amber-500 hover:font-bold text-white`}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='pl-3'>
                <SearchButton/>
            </div>
        </div>
  )
}


export default DesktopNav