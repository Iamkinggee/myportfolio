import React from 'react'
import G3 from '../../assets/G3.gif'
import {Link as ScrollLink} from 'react-scroll'
import TypeWriter from '../TypeWriter'

import { Fade, Slide} from "react-awesome-reveal";


const HomePage = () => {

 

  return (
   
    <div className=' w-full  mt-10 md:h-screen  h-[700px] text-black font-[poppins]' id="home">
        <div className=' grid md:grid-cols-2  max-w-[1000px] items-center justify-center  h-full m-auto '>
          <Slide direction='left'>
         <div className='m-auto md:pt-0 pt-20 '>  
         
         <img src={G3} alt="pc gif" className='w-[300px] md:w-[400px]' />
      
         </div>
         </Slide>
         
         <div className='w-full pb-[120px] '>
         <Fade cascade damping={0.5} fraction={0.5} duration={200}> 
            <h1 className=' text-[14px] font-[LexendZetta] font-[100px] text-center md:text-start justify-center items-center text-white ' id='text-black'>Howdy, <br /> Godsent here, i'm a</h1>
            <h1 className='text-[30px] md:text-[50px]  font-bold opacity-15 leading-none text-center py-3 md:text-start text-white font-[LexendZetta] ' id='text-black'>Software <br />Developer.</h1>

            <div className='font-[LexendZetta] font-bold text-blue-500 text-center md:text-start'    > 
            <TypeWriter/>
             </div>
           

            <div className='mt-4 justify-center items-center m-auto text-center md:text-start'>
            

              <ScrollLink to="contact" duration={500} smooth={true}>
              <button className='border-2 border-blue-600 p-3 mt-3 font-semibold w-[300px] rounded bg-opacity-95 text-white cursor-pointer font-[LexendZetta] font-Light md:text-[14px] text-[11px] hover:scale-105 duration-300 shadow-lg' id='text-black'>Lets Talk</button> 
              </ScrollLink>
           
                   
            </div>
            </Fade>  
         </div>

        </div>
       
    </div>
  
  )
}

export default HomePage;