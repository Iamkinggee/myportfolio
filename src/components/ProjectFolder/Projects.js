import React from 'react'
import ProjectCard from './ProjectCard'
 import GTphoto from '../../assets/GTphoto.png'
import Porfolioproject from './Porfolioproject'
import amastoreImage from '../../assets/amastoreImage.png'
import CoinDuckoImage from '../../assets/CoinDuckoImage.png'
import dataport from '../../assets/dataport.png'
import Movie from '../../assets/Movie.png'
import natsentpix from '../../assets/natsentpix.png'



const Projects = () => {
  return (
  
        <div className='w-full font-[LexendZetta]' id='works'>
    <div className=' max-w-[1000px]  font-mono text-black m-auto  '>
 
    <h1 className='font-bold  text-neutral-500 
    
    text-[30px] sm:text-center md:text-[50px] font-[LexendZetta]  text-center md:text-center 
    pt-20  'id='text-title'>Works</h1>
    <p className='pb-10  text-center font-light md:text-[15px] text-[12px] text-white font-[LexendZetta]'>These are some of my  <br/>latest Projects.</p>

<div >





<div >
<Porfolioproject />
</div>
    

    <ProjectCard title='CoinDucko' techtools='Coingecko API, Javascript, Tailwind CSS, React.js' discription='CoinDucko is a digital platform - built with the CoinGecko API; provides real-time data on various cryptocurrencies, including their current price, market cap and trading volume. Users can easily search for specific coins and view detailed information about them. The sleek and intuitive design makes it easy for users to stay updated on the latest crypto trends and make informed decisions. ' visitsitebutton='Visit Site' viewcodebutton='View Code'  image={<img  loading='lazy' src={CoinDuckoImage} alt="/"  className='  object-contain h-full p-3  m-auto w-full md:h-[350px] md:w-[500px] bg-transparent'  />} visitsitelink={'https://coin-ducko.vercel.app/'} viewcodelink={'https://github.com/Iamkinggee/Coinducko.git'} />



    <ProjectCard title='Gee Movies' techtools='TMDB API, Javascript,React.js, Firebase, Tailwind CSS, ' discription='Gee Movies is a Fullstack free Movie platform, built with the TMDB API,ReactJS for the frontend and Firebase for the backend. Users can signup create account, select and save movies to their secured accounts ' visitsitebutton='Visit Site' viewcodebutton='View Code'  image={<img  loading='lazy' src={Movie} alt="/"  className='  object-contain h-full p-3  m-auto w-full md:h-[350px] md:w-[500px] bg-transparent'  />} visitsitelink={'https://geemovies.vercel.app/'} viewcodelink={'https://github.com/Iamkinggee/geemovies.git'} />

    <ProjectCard title='Natsent iPhone Store' techtools='Javascript, Tailwind CSS, React.js' discription='Natsent iPhone Store is a one stop shop for all iPhone devices. ' visitsitebutton='Visit Site' viewcodebutton='View Code'  image={<img  loading='lazy' src={natsentpix} alt="/"  className='  object-contain h-full p-3  m-auto w-full md:h-[350px] md:w-[500px] bg-transparent'  />} visitsitelink={'https://natsent.vercel.app/'} viewcodelink={'https://github.com/Iamkinggee/natsent.git'} />


   


    <ProjectCard title='GT Bank Mobile App Clone' techtools=' React Native,Javascript, Nativewind.' discription='This is the Guaranty Trust Bank(GTB) Mobile App UI Clone ' visitsitebutton='Demo' viewcodebutton='View Code'  image={<img  loading='lazy' src={GTphoto} alt="/"  className='  object-contain h-full p-3  m-auto w-full md:h-[350px] md:w-[500px] bg-transparent'  />} visitsitelink={'https://drive.google.com/file/d/1uUj8zG22qIgRV9SskyGt08pN7tfve0iz/view?usp=drive_link'} viewcodelink={'https://github.com/Iamkinggee/gtbank_app.git'}  />




    <ProjectCard title='Amastore' techtools='Javascript, Tailwind CSS, React.js' discription='Amastore is an e-commerce store for shopping for different products.' visitsitebutton='Visit Site' visitsitelink={'https://amastore-mauve.vercel.app/'} viewcodebutton='View Code'  viewcodelink={'https://github.com/Iamkinggee/Amastore.git'} rel="noreferrer"  
    
    image={<img  loading='lazy' src={amastoreImage} alt="/" className='  object-contain h-full p-3  m-auto w-full md:h-[350px] md:w-[500px] bg-transparent' />}
    // image={<video  autoPlay loop muted loading='lazy' src={AmastoreVideo2} alt="/" className='object-contain h-[250px]  m-auto w-[300px] md:h-[350px] md:w-[500px] bg-transparent p-0' />}
    
    /> 



<ProjectCard title='Dataport' techtools=' React.js,Javascript, Tailwindwind.' discription='DataPort is a simple landing page for DataPort Company Inc.' visitsitebutton='Visit Site' viewcodebutton='View Code'  image={<img  loading='lazy' src={dataport} alt="/"  className='  object-contain h-full p-3  m-auto w-full md:h-[350px] md:w-[500px] bg-transparent'  />} visitsitelink={'https://dataport.vercel.app/'} viewcodelink={'https://vercel.com/godsent-oko-oses-projects/dataport/CFnbWR67a6uFNgcM9JodNMoUxYYe/source'}  />


    </div>
    </div>
    </div>
  )
}

export default Projects