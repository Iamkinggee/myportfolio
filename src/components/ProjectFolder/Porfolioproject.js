import React from 'react'
import { Fade  } from "react-awesome-reveal";
import { Link } from 'react-router-dom';
import PortfolioImage from '../../assets/PortfolioImage.png'



const Porfolioproject = () => {
  return (
    <div className='w-full' >
          <div className='grid md:grid-cols-2  max-w-[1000px] items-center justify-center  h-full m-auto spaxe-x-10 '>

<div className='w-full m-auto  pt-5  md:pr-10  '>

<Fade cascade damping={0.1} fraction={0.5} >
{/* 
    <video autoPlay loop muted loading='lazy' alt="/"  src={PortfolioVideo} className='object-contain h-[250px]  m-auto w-[300px] md:h-[350px] md:w-[500px]'/> */}
{/* 
    <img  loading='lazy' alt="/"  src={PortfolioImage} className='object-contain h-[250px]  m-auto w-[300px] md:h-[350px] md:w-[500px]'/> */}
    <img  loading='lazy' alt="/"  src={PortfolioImage} className='  object-contain h-full p-3  m-auto w-full md:h-[350px] md:w-[500px] bg-transparent' />

</Fade >

</div>
<div className='   first-line: p-5 justify-center items-center m-auto  bg-opacity-100 rounded '>

<Fade  cascade damping={0.1} fraction={0.5}>
   <h1 className=' text-xl md:text-4xl font-[LexendZetta] font-semibold  text-center md:text-start justify-center items-center   text-white' id='text-black' >Portfolio Website</h1>
   
   <hr id='titleLine' className='w-[220px] justify-center items-center m-auto mt-2 opacity-30 md:item-start md:justify-start md:m-0 md:mt-4'/>
   <div className='text-center md:text-start'>
  
   <p className=' pb-5 py-4 text-white font-[poppins]  text-[16px] text-start pl-2 md:pl-0 font-semibold '>This is my Portfolio Website </p>
   <p className='text-[12px] text-text-blue-200 font-[LexendZetta] font-light text-neutral-400 mt-3 pb-1'>Technologies Used:</p>
   <p className=' font-[LexendZetta] font-semibold text-[10px]  text-blue-500' id='text-blue' >Javascript, Tailwind CSS, React.js</p>
   </div>


    <div className='mt-4 text-center md:text-start justify-center items-center'>

    
     <Link to={'https://github.com/Iamkinggee/Portfolio.git'} target='_blank' rel='noopener noreferrer' >
     <button className='rounded hover:scale-105 duration-300 shadow-lg  p-3 font-[LexendZetta] font-semibold w-[300px] bg-blue-600 text-white md:text-[14px] text-[11px]'>View Code</button>            
     </Link>
     
  
</div>

   
   </Fade >
</div>


</div>
{/* line */}
<div className='bg-blue-700 text-blue-700 w-full max-w-[1000px] justify-center m-auto opacity-20 items-center'>
<hr className="bg-blue-700"/>
</div>



    </div>
  )
}

export default Porfolioproject;