import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Aboutimg from '../assets/night.jpg'
import Footer from '../components/footer/Footer'
import AboutData from '../components/aboutData/AboutData'
const About = () => {
  return (
    <>
    <Navbar/>

    <Hero
      
      cName='hero-mid'
      heroImg={Aboutimg}
       title='About'
       btnClass='hide'
      />

      <AboutData/>
      <Footer/>
    
    </>
  )
}

export default About
