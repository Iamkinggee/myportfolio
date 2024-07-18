import React from 'react'
import { Fade,Bounce, Slide } from "react-awesome-reveal";
import { Link } from 'react-router-dom';

const ProjectCard = (props) => {
  return (
    <div className='w-full' >
          <div className='grid md:grid-cols-2  max-w-[1000px] items-center justify-center  h-full m-auto spaxe-x-10 '>

<div className='w-full m-auto  pt-5  md:pr-10  '>

<Slide direction='left' > 
{props.image}
</Slide>

</div>
<div className='   first-line: p-5 justify-center items-center m-auto shadow-md bg-opacity-100 rounded '>

<Fade cascade damping={1} fraction={0.5} duration={100}> 
   <h1 className=' text-xl md:text-4xl font-[LexendZetta] font-semibold  text-center md:text-start justify-center items-center   text-white' id='text-black' >{props.title}</h1>
   <hr id='titleLine' className='w-[220px] justify-center items-center m-auto mt-2 opacity-30 md:item-start md:justify-start md:m-0 md:mt-4'/>
   <div className='text-center md:text-start'>
   <p className='md:text-[18px] text-[13px]  font-semibold text-white font-[poppins]'>{props.subtext}</p>
   {/* <p className=' font-medium pb-5 py-4 text-white font-[poppins] text-[15px] text-start pl-2 md:pl-0  '> */}
   <p className='  text-neutral-300 text-[12px] md:text-[15px] font-[Poppins] font-semibold tracking-wide text-start pb-5 py-4'>
    
    
    {props.discription}</p>
   <p className='text-[12px] text-text-blue-200 font-[LexendZetta] font-light text-neutral-400 mt-3 pb-1'>Technologies Used:</p>
   <p className=' font-[LexendZetta] font-semibold text-[10px]  text-blue-500' id='text-blue'> {props.techtools}</p>
   </div>


    <div className='mt-4 text-center md:text-start justify-center items-center'>

    
     <Link to={props.visitsitelink} target='_blank' rel='noopener noreferrer' >
     <button className='rounded hover:scale-105 duration-300 shadow-lg  p-3 font-[LexendZetta] font-semibold w-[300px] bg-blue-600 text-white md:text-[14px] text-[11px]'>{props.visitsitebutton}</button>            
     </Link>
     

     
     <Link to={props.viewcodelink} target='_blank' rel='noopener noreferrer'  >
     <button  className='rounded border-2 hover:scale-105 duration-300 shadow-lg border-blue-600 p-3 mt-3 font-bold w-[300px] font-[LexendZetta] text-white md:text-[14px] text-[11px]' id='text-black'>{props.viewcodebutton}</button>
     </Link> 
     
</div>

   
   </Fade>
</div>


</div>
{/* line */}
<div className='bg-blue-700 text-blue-700 w-full max-w-[1000px] justify-center m-auto opacity-20 items-center'>
<hr className="bg-blue-700"/>
</div>



    </div>
  )
}

export default ProjectCard;