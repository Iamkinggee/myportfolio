import React from 'react'
import { useTypewriter, Cursor} from 'react-simple-typewriter'




const TypeWriter = () => {
    const [text] = useTypewriter({
        words: ['Mobile Apps />', 'Websites />', 'Softwares />'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 90,
    });

    const sym = '<';

  return (

        <h1 className=' md:text-[25px] text-[25px] w-full  m-auto justify-center items-center font-[syne]  font-bold text-center md:text-start'>{sym}I Build 
        <span className=' font-[syne]   md:text-[25px] text-[25px] font-bold'>{' '}
            {text} 
        </span>
        
        <span className='text-white font-extrabold '>
        <Cursor cursorStyle='|'/>
        </span>


        </h1>
    
  );
};

export default TypeWriter;
