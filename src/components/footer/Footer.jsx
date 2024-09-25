import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import profile from '../../assets/profile.png'
const Footer = () => {
    return (
        <div className="footer">

            <h1 style={{ textAlign: 'center' }}><span><FlightTakeoffIcon /> </span><span>HAPPY</span> <span style={{ color: 'red' }}>JOURNEY</span> <FlightTakeoffIcon /></h1>
            <div className="top">
                <div>

                    <h1 style={{ color: 'red' }}>TOURIST</h1>
                    <p>Choose your favourite destination</p>

                    <img className='profile' src={profile} style={{ width: '150px', borderRadius: '50%', marginTop: '12%' }} />
                </div>
                <div>
                    <Link to='https://www.instagram.com/siddharthsoni372/'><i><InstagramIcon /></i></Link>
                    <Link to='https://www.facebook.com/profile.php?id=100095104073139'><i><FacebookIcon /></i></Link>
                    <Link to='https://github.com/Siddhusoni'><i><GitHubIcon /></i></Link>
                    <Link to='https://www.linkedin.com/in/siddharth-soni-9230b6286/'><i><LinkedInIcon /></i></Link>

                </div>
            </div>

            <div className="bootom">
                <div>
                    <h4 style={{ color: 'red' }}>Create project By siddharth Soni .</h4>
                    <p> <EmailIcon /> Email  : siddharthsoni070@gmail.com .</p>
                    <p><PhoneIcon /> Phone  : 8878721435 .</p>
                    <p><LocationOnIcon /> Address  : indore(M.P) .</p>
                </div>


                <div>
                    <h4 style={{ textAlign: 'center' }}>Project</h4>
                    <Link style={{ color: 'white' }} to='https://siddhuportfolio.netlify.app/'>You see my project</Link>
                    <Link style={{ color: 'white' }} to='https://siddharthsoni.netlify.app/'>You see my project</Link>
                </div>

                <div>
                    <h4>Community</h4>
                    <p>GitHub</p>
                    <p>Issues</p>
                    <p>Project</p>
                </div>

                <div>
                    <h4>Help</h4>
                    <p>Support</p>
                    <p>Contact Us</p>

                </div>

                <div>
                    <h4>Others</h4>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </div>
    )
}
export default Footer
