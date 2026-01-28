import React from 'react'


function SkillsCard(props) {
  return (
    <div className=''>


   <div className='flex  '>
   {props.icon}
        <p className='w-full m-auto text-start text-[16px] p-3'>
            {props.skillname}
        </p>
       
   </div>




    </div>
  )
}

export default SkillsCard