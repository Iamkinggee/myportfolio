import React from 'react'
import {BsTelephone,BsGear} from 'react-icons/bs'
import ServicesCard from './ServicesCard'
import { FaCode } from "react-icons/fa";
import { TbDeviceMobileCode } from "react-icons/tb";
import { ImFilePicture } from "react-icons/im";
import { FaHandshake } from "react-icons/fa6";
import { Fade,Flip,Bounce,Hinge,JackInTheBox,Roll,rubberBand ,heartBeat } from "react-awesome-reveal";

function Services() {
  return (
 
  
    <div className='w-full ' id='services'>

    <div className=' m-auto max-w-[700px] '>
      
    <h1 className='font-bold  text-neutral-500 
    
    text-[30px] sm:text-center md:text-[45px] font-[LexendZetta]  text-center md:text-center 
    pt-20 pb-[25px]  'id='text-title'><span className='text-gray-700/70'>my</span>Services</h1>




{/* <div className='grid md:grid-cols-3 gap-5 md:gap-5'> */}
<div className='grid md:grid-cols-2 gap-5 md:gap-5'>
<Fade cascade damping={0.5} fraction={0.05} duration={500}>
<div className=' w-full'>

<ServicesCard   icons={<FaCode className="w-10 h-10  m-auto  text-blue-600 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" aria-hidden="true"/>} title="Web Development" text="Need a professional website that stands out? My web development services offer tailored solutions to bring your online presence to life. From sleek designs to seamless functionalities." />
</div>

<ServicesCard icons={<TbDeviceMobileCode className="w-10 h-10 justify-center items-center m-auto  text-blue-600 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" aria-hidden="true"/>}   title='Mobile App Development ' text="Stay ahead in the digital landscape with cutting-edge Mobile App development solutions. Whether it's iOS or Andriod, i create user-centric Apps that deliver seamless expriences and keep your users engaged."/>

<ServicesCard icons={<ImFilePicture className="w-10 h-10 justify-center items-center m-auto  text-blue-600 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" aria-hidden="true"/>} title="Graphic Design" text="Make a statement with my stunning visual services. I'll help you communicate your message effectively and leave a lasting impression on your audience. "/>

<ServicesCard icons={<FaHandshake className="w-10 h-10 justify-center items-center m-auto  text-blue-600 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" aria-hidden="true"/>} title="Partnership" text="In need of my expertise for your current or next project? I'm open to collaborations. "/>
</Fade>
</div>




  





    </div>
 
    </div>

  )
}

export default Services