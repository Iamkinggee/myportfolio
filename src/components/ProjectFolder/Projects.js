import React from 'react'
import ProjectCard from './ProjectCard'
 import GTphoto from '../../assets/GTphoto.png'
import Porfolioproject from './Porfolioproject'
import amastoreImage from '../../assets/amastoreImage.png'
import CoinDuckoImage from '../../assets/CoinDuckoImage.png'
import dataport from '../../assets/dataport.png'
import Movie from '../../assets/Movie.png'
import natsentpix from '../../assets/natsentpix.png'
import paypoint from '../../assets/paypoint.png'
import oops from '../../assets/oops.png'
import audiophile from '../../assets/audiophile.png'
import KingsTicket from '../../assets/KingsTicket.png'
import borngreat from '../../assets/borngreat.png'
import todoo from '../../assets/todoo.png'



const Projects = () => {
  return (
  
        <div className='w-full font-[LexendZetta]' id='works'>
    <div className=' max-w-[1000px]  font-mono text-black m-auto  '>
 
    <h1 className='font-bold text-neutral-500 
    
    text-[30px] sm:text-center md:text-[50px]  font-[LexendZetta] text-center md:text-center 
    pt-20  'id='text-title'>Projects</h1>
    <p className='pb-10  text-center font-[LexendZetta]  md:text-[20px] text-[13px] text-white  '>These are some of my  <br/>latest Projects.</p>

<div >





<div >
<Porfolioproject />
</div>
    

    <ProjectCard title='CoinDucko' techtools='Coingecko API, Javascript, Tailwind CSS, React.js' discription='CoinDucko is a digital platform - built with the CoinGecko API; provides real-time data on various cryptocurrencies, including their current price, market cap and trading volume. Users can easily search for specific coins and view detailed information about them. The sleek and intuitive design makes it easy for users to stay updated on the latest crypto trends and make informed decisions. ' visitsitebutton='Visit Site' viewcodebutton='View Code'  image={<img  loading='lazy' src={CoinDuckoImage} alt="/"  className='  object-contain h-full p-3  m-auto w-full md:h-[350px] md:w-[500px] bg-transparent'  />} visitsitelink={'https://coin-ducko.vercel.app/'} viewcodelink={'https://github.com/Iamkinggee/Coinducko.git'} />



    
    <ProjectCard title='Audiophile' techtools='Next.js 16, Typescript, Tailwind CSS, Convex' discription='Audiophile is a premium e-commerce store specializing in high-end audio gear—including speakers, headphones, earphones, and accessories. The store features a modern UI, product categories, detailed product pages, cart and checkout flow, and a responsive layout designed for a smooth shopping experience across all devices. ' visitsitebutton='Visit Site' viewcodebutton='View Code'  image={<img  loading='lazy' src={audiophile} alt="/"  className='  object-contain h-full p-3  m-auto w-full md:h-[350px] md:w-[500px] bg-transparent'  />} visitsitelink={'https://hng13-task3-a.vercel.app/'} viewcodelink={'https://github.com/Iamkinggee/Hng13Task3A.git'} />
    
    <ProjectCard title='Born-great daycare' techtools='Next.js 16, Typescript, Tailwind CSS, Convex' discription='Born-great daycare website is a real running business website for children daycare services.' visitsitebutton='Visit Site' viewcodebutton='View Code'  image={<img  loading='lazy' src={borngreat} alt="/"  className='  object-contain h-full p-3  m-auto w-full md:h-[350px] md:w-[500px] bg-transparent'  />} visitsitelink={'https://borngreatdaycare.vercel.app/'} viewcodelink={'https://github.com/Iamkinggee/born-great-Daycare.git'} />



    <ProjectCard title='Gee Movies' techtools='TMDB API, Javascript,React.js, Firebase, Tailwind CSS, ' discription='Gee Movies is a Fullstack free Movie platform, built with the TMDB API,ReactJS for the frontend and Firebase for the backend. Users can signup create account, select and save movies to their secured accounts ' visitsitebutton='Visit Site' viewcodebutton='View Code'  image={<img  loading='lazy' src={Movie} alt="/"  className='  object-contain h-full p-3  m-auto w-full md:h-[350px] md:w-[500px] bg-transparent'  />} visitsitelink={'https://geemovies.vercel.app/'} viewcodelink={'https://github.com/Iamkinggee/geemovies.git'} />


      <ProjectCard title='KingsTickets' techtools='Vue, Tailwind CSS, ' discription='The Ticket Generator is a web application that creates personalized digital event tickets. Built with a modern UI and smooth form handling, the app makes ticket creation fast, intuitive, and visually appealing.' visitsitebutton='Visit Site' viewcodebutton='View Code'  image={<img  loading='lazy' src={KingsTicket} alt="/"  className='  object-contain h-full p-3  m-auto w-full md:h-[350px] md:w-[500px] bg-transparent'  />} visitsitelink={'https://hng13-task2-vueproject.vercel.app/'} viewcodelink={'https://github.com/Iamkinggee/Hng13Task2-vueproject.git'} />



    
    <ProjectCard title='Paypoint' techtools=' React Native,Javascript, Nativewind.' MobileApp="Mobile App" discription='This is a bill payment mobile app platform for airtime, data, electricity bill, tickets e.t.c (uncompleted)' visitsitebutton='Demo' viewcodebutton='View Code'  image={<img  loading='lazy' src={paypoint} alt="/"  className='  object-contain h-full p-3  m-auto w-full md:h-[350px] md:w-[500px] bg-transparent'  />} visitsitelink={'https://drive.google.com/file/d/1EJz2t3JgDZVdn8gN09z438wHSy0Cb9Pn/view?usp=drive_link'} 
    viewcodelink={'https://github.com/Iamkinggee/gtbank_app.git'}  />




    <ProjectCard title='Natsent iPhone Store' techtools='Javascript, Tailwind CSS, React.js' discription='Natsent iPhone Store is a one stop shop for all iPhone devices. ' visitsitebutton='Visit Site' viewcodebutton='View Code'  image={<img  loading='lazy' src={natsentpix} alt="/"  className='  object-contain h-full p-3  m-auto w-full md:h-[350px] md:w-[500px] bg-transparent'  />} visitsitelink={'https://natsent.vercel.app/'} viewcodelink={'https://github.com/Iamkinggee/natsent.git'} />


    
    
    <ProjectCard title='Todo App' techtools='React Native,Javascript, Nativewind.' MobileApp="Mobile App" discription='A functional todo-app' visitsitebutton='Demo' viewcodebutton='View Code'  image={<img  loading='lazy' src={todoo} alt="/"  className='  object-contain h-full p-3  m-auto w-full md:h-[350px] md:w-[500px] bg-transparent'  />} visitsitelink={'https://drive.google.com/drive/folders/1J7dMQLA3SlUN_wDWinAwJuL_HFWnlEyY'} 
    viewcodelink={'https://github.com/Iamkinggee/Hng13Task3B.git'}  />




    <ProjectCard title='oops Landing Page' techtools='Javascript, Tailwind CSS, React.js' discription='OOPS project is a simple landing page design' visitsitebutton='Visit Site' viewcodebutton='View Code'  image={<img  loading='lazy' src={oops} alt="/"  className='  object-contain h-full p-3  m-auto w-full md:h-[350px] md:w-[500px] bg-transparent'  />} visitsitelink={'https://oops-kappa.vercel.app/'} viewcodelink={''} />


   


    <ProjectCard title='GT Bank ' techtools=' React Native,Javascript, Nativewind.'  MobileApp="Mobile App" discription='This is the Guaranty Trust Bank(GTB) Mobile App UI Clone ' visitsitebutton='Demo' viewcodebutton='View Code'  image={<img  loading='lazy' src={GTphoto} alt="/"  className='  object-contain h-full p-3  m-auto w-full md:h-[350px] md:w-[500px] bg-transparent'  />} visitsitelink={'https://drive.google.com/file/d/1uUj8zG22qIgRV9SskyGt08pN7tfve0iz/view?usp=drive_link'} viewcodelink={'https://github.com/Iamkinggee/gtbank_app.git'}  />




    <ProjectCard title='Amastore' techtools='Javascript, Tailwind CSS, React.js' discription='Amastore is an e-commerce store for shopping for different products.' visitsitebutton='Visit Site' visitsitelink={'https://amastore-mauve.vercel.app/'} viewcodebutton='View Code'  viewcodelink={'https://github.com/Iamkinggee/Amastore.git'} rel="noreferrer"  
    
    image={<img  loading='lazy' src={amastoreImage} alt="/" className='  object-contain h-full p-3  m-auto w-full md:h-[350px] md:w-[500px] bg-transparent' />}
    
    /> 



<ProjectCard title='Dataport' techtools=' React.js,Javascript, Tailwindwind.' discription='DataPort is a simple landing page for DataPort Company Inc.' visitsitebutton='Visit Site' viewcodebutton='View Code'  image={<img  loading='lazy' src={dataport} alt="/"  className='  object-contain h-full p-3  m-auto w-full md:h-[350px] md:w-[500px] bg-transparent'  />} visitsitelink={'https://dataport.vercel.app/'} viewcodelink={'https://vercel.com/godsent-oko-oses-projects/dataport/CFnbWR67a6uFNgcM9JodNMoUxYYe/source'}  />


    </div>
    </div>
    </div>
  )
}

export default Projects