import React from 'react';
import './Form.css';

import { useState } from 'react';
import axios from 'axios';

const Documents = ({handleNext}) => {

    const [resume, setResume] = useState("")

    const handleChange = async () => {
        console.log({resume})

        if (resume === "") {
          alert("Please fill all fields")
          return
        }

        try {
          const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/user/saveData`, {resume})
          console.log(res.data)
        } catch (error) {
          console.log(error)
        }
    }

  return (
    <div className='form'>
        <div className='heading'>Upload Resume</div>
        <input type="file" onChange={(e) => setResume(e.target.files[0])}/>
        <button className='button' onClick={() => {
            handleChange()
            handleNext()
        }}>Next</button>
    </div>
  )
}

export default Documents