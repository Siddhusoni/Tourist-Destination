import React from 'react'
import './trip.css'
import TripData from './TripData'
const Trip = () => {
  return (
    <>
   <div className="trip">
    <h1>Recent Trips</h1>
    <p>You can discover unique destination using Google Maps.</p>

    <div className="tripcard">
        <TripData  
          image="https://media-cdn.tripadvisor.com/media/photo-s/1c/a6/08/c9/view-from-room.jpg"
        heading="Ireland"
        text="The island of Ireland is off the northwest of continental Europe, and west of Great Britain. The island is
         divided into two parts: Ireland (sometimes referred to as “the Republic of Ireland”) and Northern Ireland, which is 
         part of the United Kingdom. Ireland is a member of the European Union."
        />

<TripData  
          image="https://images.prismic.io/visiticeland/2660b22b-2743-4b8a-a500-8a6286cdd6eb_geosea-4.jpg?auto=compress,format"
        heading="Iceland"
        text="Iceland is a small island nation that is Europe's westernmost country and home to the world's northernmost capital, Reykjavik.
         Eleven percent of the country is covered in glacial ice and is surrounded by water. If global warming continues, rising water levels
          and melting ice could be devastating to Iceland."
        />


<TripData  
          image="https://www.bruisedpassports.com/wp-content/uploads/2023/01/Bruised-Passports-Ladakh-Road-Trip-Winter-3.jpg"
        heading="Ladakh"
        text="Ladakh covers about 45,000 square miles (117,000 square km) and contains the Ladakh Range, which is a southeastern extension of the Karakoram
         Range, and the upper Indus River valley. Ladakh is one of the highest regions of the world. Its natural features consist mainly of high plains and deep valleys."
        />
    </div>
   </div>
   </>
  )
}

export default Trip
