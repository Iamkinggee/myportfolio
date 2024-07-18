import React from 'react'
import { Fade,Bounce} from "react-awesome-reveal";
import MyPhoto3 from '../../assets/MyPhoto3.png'
import {Link as ScrollLink, animateScroll as scroll} from 'react-scroll'




const About = () => {
  

  return (
   
    <div id='about' className=' w-full  font-[LexendZetta]  px-4 m-auto pt-5 md:pt-2'>
        <div className='grid md:grid-cols-2 max-w-[1000px]  items-center justify-center  mx-auto '>

         <div className='mx-auto text-white'>
         <Bounce cascade damping={1} fraction={0.5} duration={800}>  
         <img src={MyPhoto3} alt="photo of Godsent" className='w-[400px] ' loading='lazy'/>
         </Bounce>
         </div>
         <div className='  pb-[100px] font-mono'>



         <Fade cascade damping={1} fraction={0.5} duration={100}> 
       
         <h1 className='text-[40px] sm:text-center md:text-[50px]  font-bold text-center md:text-start text-neutral-500 font-[LexendZetta]' id='text-title'>AboutMe</h1>
       
         <h1 className=' text-[15px] md:text-xl   text-center md:text-start justify-center items-center  sm:text-center text-white font-[LexendZetta] font-semibold ' id='text-black'>Software<span className='text-blue-600 font-[LexendZetta] font-semibold'  id='text-blue'>Developer</span></h1>

            <p className='pb-5 py-4 pl-2 md:pl-0 pt-10 text-neutral-300 text-[12px] md:text-[15px] font-[Poppins] font-semibold tracking-wider'>Hey! I am Godsent Oko-Ose; a Fullstack Software Engineer with a flair for crafting stunning, user friendly websites and mobile applications that harmoniously blend aesthetics and functionality. My passion for design fuels my dedication to delivering exceptional digital experiences. I am ready to collaborate with you, turning your ideas into a remarkable reality.</p>
            
          
            

            <div className='mt-4 text-center  md:text-start justify-center items-center'>
            <ScrollLink to="contact" duration={500} smooth={true}>
            <button className='  p-3 font-[LexendZetta]  w-[300px] bg-blue-600 text-white md:text-[14px] text-[11px] rounded hover:scale-105 duration-300 shadow-lg'>Let's Talk</button>            
            </ScrollLink>      

            </div>
            
        
            </Fade>
         </div>
         
        </div>
        

    </div>
    
  )
}

export default About