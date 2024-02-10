import React from 'react'

const Hero = () => {
  return (
    <div id='hero' className='w-full h-[600px] bg-center w- bg-cover   bg-gradient-to-r from-indigo-500 ' style={{backgroundImage: `url(/bgHero.jpg) `}}>
        <div className=' bg-gradient-to-r flex flex-col md:w-[600px] justify-center space-y-7 items-left px-7  from-slate-500 h-[600px]'>
            <h2 className='text-amber-500 md:text-xl text-sm font-bold'>WE ARE ROOTING FOR YOU</h2>
            <h3 className='md:text-5xl text-4xl text-white leading-snug'>Let's Make The World Great Again</h3>
            <p className='text-white/90'>We can start by taking small steps and <span className='text-amber-500 font-bold'>making small changes that can have a big impact</span> on the world.</p>
            <button className='bg-amber-500 text-white font-bold hover:bg-amber-400 px-7 py-2 rounded-md'>Learn more</button>
        </div>
        
        
    </div>
  )
}

export default Hero