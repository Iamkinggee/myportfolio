import React from 'react'
import { Fade,Bounce} from "react-awesome-reveal";
import MyPhoto3 from '../../assets/MyPhoto3.png'
import {Link as ScrollLink} from 'react-scroll'




const About = () => {
  

  return (
   
    <div id='about' className=' w-full   px-4 m-auto pt-5 md:pt-2'>
        <div className='grid md:grid-cols-2 max-w-[1000px]  items-center justify-center  mx-auto '>

         <div className='mx-auto text-white'>
         <Bounce cascade damping={1} fraction={0.5} duration={800}>  
         <img src={MyPhoto3} alt="myself" className='w-[400px] ' loading='lazy'/>
         </Bounce>
         </div>
         <div className='  pb-[100px] font-mono'>



         <Fade cascade damping={1} fraction={0.5} duration={100}> 
       
         <h1 className='text-[40px] sm:text-center md:text-[60px]  font-bold text-center md:text-start text-neutral-500 font-[syne] ' id='text-title'>AboutMe</h1>
       
         <h1 className=' text-[16px] md:text-xl   text-center md:text-start justify-center items-center  sm:text-center text-white font-[syne]  font-bold ' id='text-black'>Software<span className='text-blue-600 font-[syne]  font-bold'  id='text-blue'>Developer</span></h1>

            <p className='pb-5 py-4 pl-2 md:pl-0 pt-10 text-neutral-300 md:text-start text-center text-[16px] md:text-[17px] font-[syne]  tracking-wider md:leading-7 leading-5'>Hey! I am Godsent Oko-Ose; a Fullstack Software Engineer with a flair for crafting stunning, user friendly websites and mobile applications that harmoniously blend aesthetics and functionality. My passion for design fuels my dedication to delivering exceptional digital experiences. I am ready to collaborate with you, turning your ideas into a remarkable reality.</p>
            
          
            

            <div className='mt-4 text-center  md:text-start justify-center items-center'>
            <ScrollLink to="contact" duration={500} smooth={true}>
            <button className='  p-3 font-[syne] font-bold   w-[300px] bg-blue-600 text-white  rounded hover:scale-105 duration-300 shadow-lg md:text-[20px] text-[16px] '>Hire Me</button>            
            </ScrollLink>      

            </div>
            
        
            </Fade>
         </div>
         
        </div>
        

    </div>
    
  )
}

export default About