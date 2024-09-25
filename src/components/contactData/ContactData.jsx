import React from 'react'
import './contact.css'
import { TextField } from "@mui/material";
const ContactData = () => {
  return (
    <div className="form-container">

      <h1 style={{ textAlign: 'center', color: 'red' }}>Send message to us!</h1>

      <form>
        <input id="filled-basic" placeholder='Name' variant="filled" />
        <input id="filled-basic" placeholder='Email' variant="filled" />
        <input id="filled-basic" placeholder='Subject' variant="filled" />
        <textarea placeholder='Message' rows="4"></textarea>
        <button>Send message</button>
      </form>

    </div>
  )
}

export default ContactData
