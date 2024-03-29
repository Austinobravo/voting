"use client"
import { Menu, X } from 'lucide-react'
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
        href: "/election"
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

const MobileNav = () => {
    const [isToggle, setIsToggle] = React.useState<boolean>(false)
    const [isNavFixed, setIsNavFixed] = React.useState<boolean>(false)
    const pathname = usePathname()
    React.useEffect(()=>{
        const handleResize = () => {
        if(window.innerWidth >= 756){
            setIsToggle(false)
        }

        }
        window.addEventListener("resize", handleResize)

        return ()=> {
            window.removeEventListener("resize", handleResize)
        }
    },[])

    React.useEffect(()=> {
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
    <>
    <div  className={` w-full ${isNavFixed ? "fixed bg-black/80 bg-gradient-to-r from-slate-600 z-20" : "absolute z-20"}`} style={{transform: `translateY(${isNavFixed ? "-5px": 0})`, transition: "transform 1s ease"}}>
        <div className='flex px-6 pt-3 justify-between items-center'>
            
            <Link href={"/"} className=''>
                <Image src="/logo-no-background.svg" width={80} height={100} alt='logo'/>
            </Link>
            <div className='pr-7 cursor-pointer' onClick={()=>setIsToggle(!isToggle)}>
                <Menu size={40} color='white'/>
            </div>

        </div>
        {isToggle && 
            <div className='bg-black z-10 bg-gradient-to-r from-slate-600 absolute top-0 right-0 h-screen w-[250px] px-4'>
                <div className='text-white py-16 cursor-pointer' onClick={()=>setIsToggle(!isToggle)}>
                    <X size={40} className='w-fit border-2 border-white'/>
                </div>
                <div className='text-white '>
                    <ul className='flex flex-col space-y-7'>
                        {navLinks.map((link, index)=> (
                            <li key={index} className='hover:bg-slate-300 hover:font-bold hover:before:content-["-"] transition hover:text-black py-2 px-4'>
                                <Link href={link.href} className={`${link.name === "Login" && ("bg-amber-500 px-5 py-1 text-white rounded-md")} ${pathname.includes(link.href) && "!text-amber-500 font-bold underline"}  hover:text-amber-500 hover:font-bold text-white`}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>

                </div>
                <div className='ml-auto border-2 p-2 mt-2 hover:bg-white/20 text-black hover:rounded-sm w-fit'>
                    <SearchButton />
                </div>

            </div>
        }

      
    </div>
    </>
  )
}

export default MobileNav
