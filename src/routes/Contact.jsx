import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Contactimg  from '../assets/2.jpg'
import Footer from '../components/footer/Footer'
import ContactData from '../components/contactData/ContactData'
const Contact = () => {
  return (
    <>
    <Navbar/>

    <Hero
      
      cName='hero-mid'
      heroImg={Contactimg}
       title='Contact'
       btnClass='hide'
      />
     <ContactData/>
      <Footer/>
    
    </>
  )
}

export default Contact
