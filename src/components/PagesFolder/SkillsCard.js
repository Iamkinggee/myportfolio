import React from 'react'


function SkillsCard(props) {
  return (
    <div className=''>


   <div className='flex  '>
   {props.icon}
        <p className='w-full m-auto text-start text-[13px]'>
            {props.skillname}
        </p>
       
   </div>




    </div>
  )
}

export default SkillsCard