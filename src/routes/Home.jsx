import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Destination from '../components/destination/Destination'
import Trip from '../components/trip/Trip'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero

        cName='hero'
        heroImg='https://wallpapers.com/images/hd/4k-mountain-1obt47t74ynfn450.jpg'
        title='Your Journey Your Story'
        text='Choose Your favourite Destination.'
        buttonText='Travel Plan'
        url='/'
        btnClass='show'

      />

      <Destination />
      <Trip />
      <Footer />
    </div>
  )
}

export default Home
