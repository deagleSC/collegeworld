import React from 'react';
import './Form.css';
import { useState } from 'react';
import axios from "axios";

const AcademicForm = ({handleNext}) => {

    const [school, setSchool] = useState("")
    const [grade, setGrade] = useState(0)
    const [transcript, setTranscript] = useState("")

    const handleChange = async () => {
        console.log({school, grade, transcript})

        if (school === "" || grade === "" || transcript === "") {
            alert("Please fill all fields")
            return
          }

        try {
            const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/user/saveData`, {school, grade, transcript})
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
    <div className='form'>
        <div className='heading'>Academic Information</div>
        <input type="text" placeholder='School' onChange={(e) => setSchool(e.target.value)}/>
        <input type="number" placeholder='Grade' onChange={(e) => setGrade(e.target.value)}/>
        <small>Upload your Transcript</small>
        <input type="file" label='Transcript' onChange={(e) => setTranscript(e.target.files[0])}/>
        <button className='button' onClick={() => {
            handleChange()
            handleNext()
        }}
        >Next</button>
    </div>
    )
}

export default AcademicForm