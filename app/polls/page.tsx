import DesktopNav from '@/components/DesktopNav'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const elections  = [
    {
        id:1,
        image: "/bgHero.jpg",
        name: "Election for the next highest ranking staff. ",
        description: "This is the inter-school elections conducted by smegear for it's staff",
        ongoing: true,
        starting_date: "Wednesday 9th October 2032 ",
        ending_date: "Wednesday 9th October 2032",
        
    },
    {
        id:2,
        image: "/sme.webp",
        name: "Election for the next highest ranking staff.",
        description: "This is the inter-school elections conducted by smegear for it's staff",
        ongoing: false,
        starting_date: "Wednesday 9th October 2032 ",
        ending_date: "Wednesday 9th October 2032",
        
    },
    {
        id:3,
        image: "/bgHero.jpg",
        name: "Election for the next highest ranking staff. ",
        description: "This is the inter-school elections conducted by smegear for it's staff",
        ongoing: false,
        starting_date: "Wednesday 9th October 2032 ",
        ending_date: "Wednesday 9th October 2032",
        
    },
    {
        id:4,
        image: "/sme.webp",
        name: "Election for the next highest ranking staff. ",
        description: "This is the inter-school elections conducted by smegear for it's staff",
        ongoing: true,
        starting_date: "Wednesday 9th October 2032 ",
        ending_date: "Wednesday 9th October 2032",
        
    },
    {
        id:5,
        image: "/bgHero.jpg",
        name: "Election for the next highest ranking staff. ",
        description: "This is the inter-school elections conducted by smegear for it's staff",
        ongoing: true,
        starting_date: "Wednesday 9th October 2032 ",
        ending_date: "Wednesday 9th October 2032",

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
                <h2 className='text-4xl font-bold'>All Election</h2>
                <blockquote className='text-sm font-semibold opacity-70'>"If voting can be done nicely, we all have a part to play"</blockquote>
            </div>
            <div className='md:px-20 px-6 space-y-5'>
                {elections.map((election, index)=> (
                    <div key={index}>
                        
                        
                            <div className='flex gap-x-3'>
                            <Link href={`/elections/${election.id}`}>
                                    <div className='md:basis-1/2 '>
                                        <div className='border  shadow-md md:w-[500px] rounded-md'>
                                            <div className='bg-black/30'>
                                                <Image src={election.image} width={100} height={100} alt={election.name} className=' md:h-60 bg-contain w-full rounded-t-md '/>
                                            </div>
                                            <div className='border-t bg-neutral-50 space-y-2'>
                                                <h3 className='px-2  font-bold md:text-2xl text-sm '>{election.name}</h3>
                                                <p className='text-xs md:text-base line-clamp-4 px-2 pb-2'>{election.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <div className='relative '>
                                    <div className='border-red-500 border w-fit border-dashed  rounded-full p-2 absolute'>
                                        <div className='bg-red-500 p-2 rounded-full '/>
                                    </div>
                                    {elections[elections.length -1] !== election && <div className='border-l h-[400px] border-2 left-4 border-dashed  border-red-500  -z-10 absolute'/>}
                                </div>
                                <div className='md:basis-1/2 ml-10 '>
                                    <div className=''>
                                        <div>
                                            <span className='md:text-sm text-xs'>This campaign starts:</span>
                                            <h3 className='opacity-50 md:text-2xl text-sm font-bold'>
                                                {election.starting_date}
                                            </h3>
                                        </div>
                                        <div>
                                            <span className='md:text-sm text-xs'>This campaign starts:</span>
                                            <h3 className='opacity-50 md:text-2xl text-sm font-bold'>
                                                {election.ending_date}
                                            </h3>
                                        </div>

                                    </div>
                                    {election.ongoing ? 
                                        <p className='text-white font-bold text-sm bg-green-500 px-2 w-fit py-2 rounded-md'>ONGOING</p>
                                        :
                                        <p className='text-white text-sm font-bold bg-red-500 px-2 w-fit py-2 rounded-md'>Closed</p>
                                    }
                                </div>
                                
                            </div>
                        


                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default page