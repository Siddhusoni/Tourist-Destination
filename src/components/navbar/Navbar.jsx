import React from 'react'
import './navbar.css'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import PhoneIcon from '@mui/icons-material/Phone';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import {Link} from "react-router-dom";
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

import { useState } from 'react';
const Navbar = () => {

 const [show,setShow]=useState(false) 
 const click=()=>{
     setShow(!show)
 }
  return (
  <>
  
  <nav className="navbar">
    <h1 className='navlogo'><span style={{color:'black'}}><span><FlightTakeoffIcon/> </span>TOU</span><span style={{color:'red'}}>RIST</span> <FlightTakeoffIcon/></h1>
    
    <div className="menu-icon" onClick={click}>
   {
show? <ClearIcon/>:<MenuIcon/>
   }
        
    </div>
    
    
    <ul className={show?"nav-menu active":"nav-menu"}>
        <li>
        <Link className='nav-link' to='/'><i><HomeIcon/></i>Home</Link>
        </li>
        <li>
        <Link className='nav-link' to='/about'><i><InfoIcon/></i>About</Link>
        </li>
        <li>
        <Link className='nav-link' to='/services'><i><MedicalServicesIcon/></i>Services</Link>
        </li>
        
        <li>
        <Link className='nav-link' to='/contact'><i><PhoneIcon/></i>Contact</Link>
        </li>
        <li>
        <Link className='nav-link-mobile'>Sign Up</Link>
        </li>
        <button>Sign Up</button>
    </ul>
  </nav>
  </>
  )
}

export default Navbar
