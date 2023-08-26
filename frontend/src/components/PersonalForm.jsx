import React from 'react'
import './Form.css';

import { useState } from 'react';
import axios from 'axios';

const PersonalForm = ({handleNext}) => {

    const [name, setName] = useState("")    
    const [email, setEmail] = useState("") 
    const [address, setAddress] = useState("") 

    const handleChange = async () => {
        console.log({name, email, address})

        if (name === "" || email === "" || address === "") {
          alert("Please fill all fields")
          return
        }

        try {
          const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/user/saveData`, {name, email, address})
          console.log(res.data)
        } catch (error) {
          console.log(error)
        }
    }

  return (
    <div className='form'>
        <div className='heading'>Personal Information</div>
        <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)}></input>
        <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}></input>
        <input type="text" placeholder='Address' onChange={(e) => setAddress(e.target.value)}></input>
        <button className='button' onClick={() => {
            handleChange()
            handleNext()
        }}>Next</button>
    </div>
  )
}

export default PersonalForm