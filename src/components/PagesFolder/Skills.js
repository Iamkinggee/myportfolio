import React from 'react'
import G2 from '../../assets/G2.gif'
import duck from '../../assets/duck.png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import node from '../../assets/node.png'
import mongo from '../../assets/mongo.png'
import react from '../../assets/react.png'
import ts from '../../assets/ts.png'
import tailwind from '../../assets/tailwind.png'
import ex from '../../assets/ex.png'
import js from '../../assets/js.png'
import rest from '../../assets/rest.png'
import git from '../../assets/git.png'
import github from '../../assets/github.png'
import fire from '../../assets/fire.png'
import appwrite from '../../assets/appwrite.png'
import figma from '../../assets/figma.png'
import ps from '../../assets/ps.png'
import ai from '../../assets/ai.png'
import post from '../../assets/post.png'



import { Fade,Flip,Bounce,Hinge,JackInTheBox,Roll,rubberBand ,heartBeat } from "react-awesome-reveal";
import SkillsIcons from './SkillsCard';
import SkillsCard from './SkillsCard';




const Skills = () => {
  return (
// text-black
    <div   className='w-full text-black font-mono ' id='skills' >
        <div className='grid md:grid-cols-2  max-w-[1000px] items-center justify-center  h-full m-auto' >

         <div className='m-auto'>
            <Fade cascade damping={0.1} >
              <img src={G2}  alt="pc-two gif" className='w-[300px] md:w-full md:pt-20 pt-0 ' />
              </Fade > 
         </div>
         <div className=' ' >
            <Fade  cascade damping={0.1}>
         <h1 className='  text-neutral-500 
         
         text-[30px] sm:text-center md:text-[50px]  font-bold text-center md:text-start font-[LexendZetta] 
         pt-20
         ' id='text-title'>TechStack</h1>
     
            <p className='pb-2 py-2 md:text-start  text-white font-[LexendZetta] text-center md:text-[15px] text-[12px]'>I'm Proficient in but  not <br /> limited to these   Technologies.</p>
            </Fade >
        <div className='flex  pt-10 gap-10 pb-5 font-[LexendZetta]  font-light  text-blue-500 text-[15px] ' id='text-blue' >
            <div >
            {/* <Fade  cascade damping={0.1 } fraction={0.5}> */}
             {/* <Fade cascade damping={0.5} fraction={0.05} duration={500}>  */}


           
                   <div className='md:flex gap-2 md:gap-5'>
                  
                    <div>
                    <Fade cascade damping={1} fraction={1} duration={100}> 
                    <SkillsCard skillname='HTML' icon={<img src={html}  alt="pc-two gif" className='w-[40px] h-[35px] flex-row  pt-0  p-1 text-start' /> }/>
                <SkillsCard skillname='CSS' icon={<img src={css}  alt="pc-two gif" className='w-[40px] h-[35px] flex-row  pt-0 p-1 ' /> }/>
                <SkillsCard skillname='JavaScript' icon={<img src={js}  alt="pc-two gif" className='w-[40px] h-[35px] flex-row p-1 pt-0 text-start ' /> }/>
                <SkillsCard skillname='Typescript' icon={<img src={ts}  alt="pc-two gif" className='w-[40px] h-[35px] flex-row  pt-0  p-1' /> }/>
            
                <SkillsCard skillname='Tailwind CSS' icon={<img src={tailwind}  alt="pc-two gif" className='w-[40px] h-[30px] flex-row  pt-0 p-1 ' /> }/>
               
                <SkillsCard skillname='React Js' icon={<img src={react}  alt="pc-two gif" className='w-[40px] h-[35px] flex-row  pt-0 p-1 ' /> }/>
                <SkillsCard skillname='React Native' icon={<img src={react}  alt="pc-two gif" className='w-[40px] h-[35px] flex-row  pt-0 p-1 ' /> }/>    
                <SkillsCard skillname='Bash Script' icon={<img src={git}  alt="pc-two gif" className='w-[40px] h-[35px] flex-row  pt-0 p-1 ' /> }/>
         
                <SkillsCard skillname='Git & GitHub' icon={<img src={github}  alt="pc-two gif" className='w-[40px] h-[35px] flex-row  pt-0 p-1 ' /> }/>
                <SkillsCard skillname='Figma' icon={<img src={figma}  alt="pc-two gif" className='w-[40px] h-[35px] flex-row  pt-0 p-1 ' /> }/>
             
               
                

                </Fade >  
                    </div>




                    
                    <div>  
               
                <Fade cascade damping={1} fraction={0.5} duration={200}>  
         
                <SkillsCard skillname='Adobe Photoshop' icon={<img src={ps}  alt="pc-two gif" className='w-[40px] h-[35px] flex-row  pt-0 p-1 ' /> }/>
                 <SkillsCard skillname='Adobe Illustrator' icon={<img src={ai}  alt="pc-two gif" className='w-[40px] h-[35px] flex-row  pt-0 p-1 ' /> }/> 
                <SkillsCard skillname='Restful APIs' icon={<img src={rest}  alt="pc-two gif" className='w-[40px] h-[35px] flex-row  pt-0 p-1 ' /> }/>
                <SkillsCard skillname='Firebase' icon={<img src={fire}  alt="pc-two gif" className='w-[40px] h-[35px] flex-row  pt-0 p-1 ' /> }/>
                <SkillsCard skillname='Appwrite' icon={<img src={appwrite}  alt="pc-two gif" className='w-[40px] h-[35px] flex-row  pt-0 p-1 ' /> }/>
                <SkillsCard skillname='postgreSQL' icon={<img src={post}  alt="pc-two gif" className='w-[40px] h-[35px] flex-row  pt-0 p-1 ' /> }/>
                {/* <SkillsCard skillname='MongoDB' icon={<img src={mongo}  alt="pc-two gif" className='w-[40px] h-[35px] flex-row  pt-0 p-1 ' /> }/> */}
                   
                <SkillsCard skillname='Express Js' icon={<img src={ex}  alt="pc-two gif" className='w-[35px] h-[30px] flex-row  pt-0 p-1 ' /> }/>
                <SkillsCard skillname='Node Js' icon={<img src={node}  alt="pc-two gif" className='w-[40px] h-[35px] flex-row  pt-0 p-1 ' /> }/>
                </Fade > 
                    </div> 
                  





               
                   </div>
              
           





                   
            </div>
        </div>
                
         </div>
        </div>
    </div>
    
  )
}

export default Skills










// import React, {useEffect, useRef} from "react";
// import {TimelineLite} from "gsap";

// import "./skills.css";

// const skills = [
//   `React`,
//   `Redux`,
//   `TypeScript`,
//   `JS(ES5+)`,
//   "Gatsby",
//   `HTML`,
//   `CSS`,
//   "Sass",
//   "pug",
//   `Jest`,
//   `Enzyme`,
//   "Unit tests | E2E | Snapshot",
//   "Accessibility",
//   "Performance optimization",
// ];

// const courses = [
//   {
//     name: `Javascript, Level&nbsp;3 (React.js)`,
//     cert: `https://assets.htmlacademy.ru/certificates/intensive/133/164879.pdf`,
//     company: `HTML Academy`,
//   },
//   {
//     name: `Javascript, Level&nbsp;2`,
//     cert: `https://assets.htmlacademy.ru/certificates/intensive/131/164879.pdf`,
//     company: `HTML Academy`,
//   },
//   {
//     name: `Javascript, Level&nbsp;1`,
//     cert: `https://assets.htmlacademy.ru/certificates/intensive/55/164879.pdf`,
//     company: `HTML Academy`,
//   },
//   {
//     name: `HTML and CSS, Level&nbsp;2`,
//     cert: `https://assets.htmlacademy.ru/certificates/intensive/24/164879.pdf`,
//     company: `HTML Academy`,
//   },
//   {
//     name: `HTML and CSS, Level&nbsp;1`,
//     cert: `https://assets.htmlacademy.ru/certificates/intensive/18/164879.pdf`,
//     company: `HTML Academy`,
//   },
//   {
//     name: `General English – Pre-intermediate`,
//     cert: `https://drive.google.com/file/d/1VChCHLdwiZceeUTOCq2ZoCLCGwzIV7Yc/view`,
//     company: `Skyeng`,
//   },
//   {
//     name: `General English – Elementary `,
//     cert: `https://drive.google.com/file/d/0B2WaTCbThw1GVjluTnMzZmxmV0RKWUozZHFic0xJUDZhYWVJ/view`,
//     company: `Skyeng`,
//   },
// ];

// const Skills = () => {
//   const coursesRef = useRef([]);
//   const skillsRef = useRef([]);
//   const textRef = useRef(null);
//   const tl = new TimelineLite({paused: true});

//   useEffect(() => {
//     tl.to(textRef.current, 0.6, {opacity: 1, y: 0})
//       .staggerTo(coursesRef.current, 0.25, {x: 0, opacity: 1}, 0.1, `-=.3`)
//       .staggerTo(skillsRef.current, 0.25, {x: 0, opacity: 1}, 0.1, `-=.4`)
//       .play();
//     return () => tl.clear();
//   });

//   return (
//     <section className="skills">
//       <h2 className="invisible">Skills</h2>
//       <div className="skills__col">
//         <p className="skills__subtitle Fade -down" ref={textRef}>
//           Skills can be&nbsp;taught, personality is&nbsp;inherent. I&nbsp;prefer
//           to&nbsp;keep learning, continue challenging myself, and
//           do&nbsp;interesting things that matter.
//         </p>
//         <ul className="skills__courses">
//           {courses.map(({name, cert, company}, index) => (
//             <li
//               key={name}
//               className={`Fade -right`}
//               ref={(course) => (coursesRef.current[index] = course)}>
//               <p
//                 className="skills__name"
//                 dangerouslySetInnerHTML={{__html: name}}
//               />
//               <p className="skills__info">
//                {company}&nbsp;/{" "}
//                 <a
//                   href={cert}
//                   className="skills__cert-link link"
//                   target={`blank`}
//                   rel="noopener noreferrer">
//                   certificate
//                 </a>
//               </p>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="skills__col">
//         <ul className="skills__list">
//           {skills.map((item, index) => (
//             <li
//               className={`Fade -right`}
//               ref={(skill) => (skillsRef.current[index] = skill)}
//               key={item}>
//               {item}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// };

// export default Skills;