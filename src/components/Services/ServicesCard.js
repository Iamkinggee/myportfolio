import React from 'react'
// import {BsTelephone,BsGear} from 'react-icons/bs'

function ServicesCard(props) {
  return (
              


                <div className='w-full max-w-[1000px] grid  items-center  justify-center   h-full bg-opacity-100  ' >

                
                <div  className='md:w-full  w-[330px] h-[300px] bg-slate-800  rounded-xl p-3  gap-5 hover:scale-105 duration-300 shadow-lg cursor-pointer' id='bg-white' >
                <div className=' gap-3 pt-5 justify-center items-center pb-3'>
                {props.icons}

                <h1 id='text-black' className='font-[syne]   text-center pt-5 m-auto md:text-[20px]  text-[16px] text-white font-bold  '>
                {props.title}</h1>

                </div >
                <p className='tracking-wide leading-relaxed  pt-3 md:px-4 px-0 text-center text-[14px] md:text-[16px] font text-white/60 font-[syne]  ' > {props.text}</p>
                </div>
                </div> 


        
  )
}

export default ServicesCard