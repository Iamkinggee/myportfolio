import React from 'react'
import NavBar from './components/NavBar'
import Logo from './components/Logo'
import ContactPage from './components/PagesFolder/ContactPage';
import Skills from './components/PagesFolder/Skills'
 import HomePage from './components/PagesFolder/HomePage';
import About from './components/PagesFolder/About'
import Projects from './components/ProjectFolder/Projects';
import Services from './components/Services/Services';





const App = () => {

  return (
    <div>
    <Logo/>
    <HomePage/>
   <About />   
   <Skills/>
   <Services/>
    <Projects/>
    <ContactPage/>  
    <NavBar/>  
   
    </div> 



             
  )
}

export default App
