import DesktopNav from '@/components/DesktopNav'
import { ArrowRight, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const details = [
    {
        id: 1,
        name: "Eunice Philips",
        image: "/female.png",
        description: "Eunice is an adorable slender model, She can also be many things to the person.",

    },
    {
        id: 2,
        name: "Eunice Philips",
        image: "/female.png",
        description: "Eunice is an adorable slender model, She can also be many things to the person.",

    },
    {
        id: 3,
        name: "Austien Philips",
        image: "/male.png",
        description: "Austien is an adorable slender model, She can also be many things to the person.",

    },
    {
        id: 4,
        name: "Amy Philips",
        image: "/female.png",
        description: "Amy is an adorable slender model, She can also be many things to the person.",

    },
    {
        id: 5,
        name: "Wincher Philips",
        image: "/male.png",
        description: "Eunice is an adorable slender model, She can also be many things to the person.",

    },
]
const page = () => {
  return (
    <section>
        <div className='bg-black/80 w-full h-36'>
            <DesktopNav/>
        </div>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-5 md:px-20 px-6 py-12'>
            {details.map((detail, index)=> (
                <div key={index}>
                    <div className='bg-black rounded-md shadow border px-5 py-7 space-y-3'>
                        <div className='relative'>
                            <Image src={detail.image} width={100} height={100} alt={detail.name} className='rounded-full hover:scale-110 transition duration-300'/>
                            <Star color='rgb(34 197 94)' fill='rgb(34 197 94)' className='absolute top-0'/>
                        </div>
                        <h3 className='text-xl font-bold text-white'>{detail.name}<small className='text-xs ml-2 opacity-50'>Contestant: {detail.id}</small></h3>
                        <p className='bg-slate-400/50 text-white text-sm line-clamp-3 opacity-80 px-1 rounded-sm'>{detail.description}</p>
                        <hr/>
                        <div className='flex justify-between'>
                            <Link href={`/election/person/${detail.id}`} className='before:hover:mr-3 flex items-center text-white'><ArrowRight size={15}/> Read more</Link>
                            <button className='bg-green-500 px-5 py-1 text-white rounded-md font-bold text-sm hover:scale-110 transition shadow duration-700'>Vote</button>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    </section>
  )
}

export default page