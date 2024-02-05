"use client"
import { Search, X } from 'lucide-react'
import React from 'react'

const SearchButton = () => {
    const [toggleInput, setToggleInput] = React.useState(false)
    return (
      <div>
          <div className={` space-x-2 hover:!text-amber-500 text-white cursor-pointer flex items-center`} onClick={()=> setToggleInput(!toggleInput)}>
              <Search size={15}/>
              {/* <p>Search</p> */}
          </div>
          {toggleInput && 
              <div className='flex  absolute border-b-2 border-amber-500 justify-between pb-2 cursor-pointer right-1 mt-7'>
                    <div className='flex items-center'>
                        <Search  size={15} color='white'/>
                        <form>
                            <label htmlFor=''>
                                <input type='text' placeholder='Search...' name='search' id='search' className='placeholder:text-white/40 border-0 focus:text-white outline-none bg-transparent  pl-1'/>
                            </label>
                        </form>
                    </div>
                    <div onClick={()=> setToggleInput(!toggleInput)}>
                        <X size={15} color='white'/>
                    </div>
              </div>
          }

      </div>
    )
  }
  

export default SearchButton
