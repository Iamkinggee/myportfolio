import React from 'react'
import {BsTelephone,BsGear} from 'react-icons/bs'
import {GoFileDirectory,GoHome} from 'react-icons/go'
import{AiOutlineUser} from 'react-icons/ai'
import {Link as ScrollLink} from 'react-scroll'
import { FaHandshake } from "react-icons/fa6";
import { Fade,Flip,Bounce,Hinge,JackInTheBox,Roll,rubberBand ,heartBeat } from "react-awesome-reveal";




const NavBar = () => {
  return (

<div className='fixed bottom-0 w-full overflow-visible   text-[2px] p-3   -z-100 font-semibold'>
<Bounce cascade >
<div className='rounded max-w-[1000px]  flex justify-between items-center m-auto   border-gray-200 dark:bg-gray-700 dark:border-gray-600 opacity-90 bg-slate-800

px-3 pb-2
'> 
    <div className="grid h-full grid-cols-6     gap-4 m-auto ">


    <ScrollLink to="home" smooth={true} duration={500}>  
        <button  type="button" className="inline-flex flex-col items-center justify-center  shadow-lg  w-[50px] dark:hover:bg-gray-700 group  first-letter:
        
         border-t-2 border-transparent group focus:border-white  
        ">
     
         <GoHome className="mt-2 w-5 h-5  text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" aria-hidden="true"/>
         <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white   text-[10px]
           
          
            ">Home</span>
        </button>
        </ScrollLink>



    <ScrollLink to="about" smooth={true} duration={500} offset={-65}>  
        <button type="button" className="inline-flex flex-col items-center justify-center m-auto w-[50px] dark:hover:bg-gray-700 group  shadow-lg  first-letter:
          border-t-2 border-transparent group focus:border-white 
        
        ">
        
         <AiOutlineUser className=" mt-2 w-5 h-5  text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" aria-hidden="true"/>
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-white  dark:group-hover:text-white  text-[10px]">About</span>
        </button>
        </ScrollLink>



<ScrollLink to="skills" smooth={true} duration={500} offset={40}>  
        <button type="button" className="inline-flex flex-col items-center justify-center m-auto w-[50px] dark:hover:bg-gray-700 group  shadow-lg 
         border-t-2 border-transparent group focus:border-white 
        ">
        
         <BsGear className="w-5 h-5 mt-2 text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" aria-hidden="true"/>
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-white  dark:group-hover:text-white  text-[10px]">Skills</span>
        </button>
        </ScrollLink>


<ScrollLink to="services" smooth={true} duration={500} offset={40}>  
        <button type="button" className="inline-flex flex-col items-center justify-center m-auto w-[50px] dark:hover:bg-gray-700 group  shadow-lg 
         border-t-2 border-transparent group focus:border-white 
        ">
      
         <FaHandshake className="w-5 h-5 mt-2 text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" aria-hidden="true"/>
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-white  dark:group-hover:text-white  text-[10px] ">Services</span>
        </button>
        </ScrollLink>




        <ScrollLink to="works" smooth={true} duration={500}> 
        <button type="button"  className="inline-flex flex-col items-center justify-center m-auto w-[50px] dark:hover:bg-gray-700 group  shadow-lg 
         border-t-2 border-transparent group focus:border-white 
        ">

            <GoFileDirectory  className=" h-5 w-5 mt-2 text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" aria-hidden="true"/>

            <span className="text-sm  text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white  ">Works</span>
        </button>
        </ScrollLink>


        



        <ScrollLink to="contact" smooth={true} duration={500}>
        <button type="button" className="inline-flex flex-col items-center justify-center  dark:hover:bg-gray-700 group  shadow-lg  w-[50px]
         border-t-2 border-transparent group focus:border-white 
        ">      
        <BsTelephone className="w-5 h-5 mt-2 text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" aria-hidden="true"/>
        <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white text-center">Contact</span>
        </button>
        </ScrollLink>
    </div>
</div>
</Bounce>
</div>


  )
}

export default NavBar
