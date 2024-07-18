import React from 'react'
import {BsTelephone,BsGear} from 'react-icons/bs'

function ServicesCard(props) {
  return (
              


                <div className='w-full max-w-[1000px] grid  items-center  justify-center   h-full bg-opacity-100  ' >

                
                <div  className=' w-[330px] h-[300px] bg-slate-800  rounded-xl p-3 gap-5 hover:scale-105 duration-300 shadow-lg cursor-pointer' id='bg-white' >
                <div className=' gap-3 pt-5 justify-center items-center pb-3'>
                {props.icons}

                <h1 id='text-black' className='font-bold text-center pt-5 m-auto text-[14px] text-white font-[LexendZetta] '>
                {props.title}</h1>

                </div>
                <p className='tracking-wide pt-3 px-2 text-[13px] font-semibold font-[poppins] text-white/60 ' > {props.text}</p>
                </div>
                </div> 


        
  )
}

export default ServicesCard