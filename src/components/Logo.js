import React from 'react'
import ThemeToggle from '../ThemeToggle'
import {Link as ScrollLink} from 'react-scroll'


const Logo = () => {
 
  return (
    
    <div className='w-full fixed top-0 z-10  m-auto'>
        
        <div className='flex max-w-[1000px]  justify-between mx-auto p-10 bg-transparent'>
        <div className='font-[syne] text-[15px] md:text-2xl font-extrabold text-white cursor-pointer ' id='text-black'> <ScrollLink to='home' smooth={true} duration={500}>Godsent</ScrollLink>   
        <span className='font-extrabold font-[syne]  text-blue-600 '>.</span>
        
        </div>

        <div className='flex space-x-3 text-white' >
         <ThemeToggle/>
        </div>
        
        </div>
        
        </div>
  )
}

export default Logo