import "./trip.css"

import React from 'react'

const TripData = (props) => {
  return (
 <div className="t-card">
    <div className="t-image">
        <img src={props.image} alt="" />
    </div>
    <h4 style={{textAlign:'center'}}>{props.heading}</h4>
    <p>{props.text}</p>
 </div>
 
  )
}

export default TripData
