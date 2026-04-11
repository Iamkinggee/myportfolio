


import React from 'react'
import { Fade, Slide } from "react-awesome-reveal";

const ProjectCard = (props) => {
  return (
    <div className='w-full' >
      <div className='grid md:grid-cols-2 max-w-[1000px] items-center justify-center h-full m-auto spaxe-x-10'>

        <div className='w-full m-auto pt-5 md:pr-10'>
          <Slide direction='left'>
            {props.image}
          </Slide>
        </div>

        <div className='first-line: p-5 justify-center items-center m-auto shadow-md bg-opacity-100 rounded'>
          <Fade cascade damping={1} fraction={0.5} duration={100}>

            <div className='flex space-x-2 justify-center md:justify-start'>
              <h1 className='text-xl md:text-4xl font-[syne] font-extrabold text-center md:text-start justify-center text-white' id='text-black'>
                {props.title}
              </h1>
              <p className='bg-yellow-400 h-6 mt-1 p-1 justify-center text-center items-center text-[12px] font-semibold text-gray-600 font-syne rounded'>
                {props.MobileApp}
              </p>
            </div>

            <hr id='titleLine' className='w-[220px] justify-center items-center m-auto mt-2 opacity-30 md:item-start md:justify-start md:m-0 md:mt-4' />

            <div className='text-center md:text-start'>
              <p className='md:text-[18px] text-[15px] font-semibold text-white font-[syne]'>{props.subtext}</p>
              <p className='text-neutral-300 text-[15px] md:text-[17px] font-[syne] tracking-wide leading-5 md:leading-7 justify-center md:text-start pb-5 py-4'>
                {props.discription}
              </p>
              <p className='text-[14px] text-text-blue-200 font-[syne] font-semibold text-neutral-400 mt-3 pb-1'>Technologies Used:</p>
              <p className='font-[syne] font-semibold text-[12px] md:text-[14px] text-blue-500' id='text-blue'>
                {props.techtools}
              </p>
            </div>

            <div className='mt-4 flex flex-col items-center md:items-start gap-3'>

              {props.visitsitelink ? (
                <a href={props.visitsitelink} target='_blank' rel='noopener noreferrer'>
                  <button className='rounded hover:scale-105 duration-300 shadow-lg p-3 font-[syne] font-bold w-[300px] bg-blue-600 text-white md:text-[17px] text-[11px]'>
                    {props.visitsitebutton}
                  </button>
                </a>
              ) : (
                <button
                  disabled
                  className='rounded shadow-lg p-3 font-[syne] font-bold w-[300px] bg-blue-600 text-white md:text-[17px] text-[11px] opacity-40 cursor-not-allowed'
                >
                  {props.visitsitebutton}
                </button>
              )}

              {props.viewcodelink ? (
                <a href={props.viewcodelink} target='_blank' rel='noopener noreferrer'>
                  <button className='rounded border-2 hover:scale-105 duration-300 shadow-lg border-blue-600 p-3 font-bold w-[300px] font-[syne] text-white md:text-[16px] text-[11px]' id='text-black'>
                    {props.viewcodebutton}
                  </button>
                </a>
              ) : (
                <button
                  disabled
                  className='rounded border-2 shadow-lg border-blue-600 p-3 font-bold w-[300px] font-[syne] text-white md:text-[16px] text-[11px] opacity-40 cursor-not-allowed'
                >
                  {props.viewcodebutton}
                </button>
              )}

            </div>

          </Fade>
        </div>

      </div>

      {/* divider line */}
      <div className='bg-blue-700 text-blue-700 w-full max-w-[1000px] justify-center m-auto opacity-20 items-center'>
        <hr className="bg-blue-700" />
      </div>

    </div>
  )
}

export default ProjectCard;