import React from 'react';
import './Form.css';
import Select from 'react-select';
import { useState } from 'react';

import axios from 'axios';

const Colleges = ({handleNext}) => {

    const optionsList = [
        {value: 0, label: "West Bengal University of Technology"},
        {value: 1, label: "Netaji Subhash University of Technology"},
        {value: 2, label: "St. Xaviers College"},
        {value: 3, label: "Amity University"},
        {value: 4, label: "Adamas University"},
        {value: 5, label: "Aliya University"}
    ]

    const [college, setCollege] = useState(0)

    const handleChange = async () => {
        console.log({college})

        if (college == 0) {
            alert("Please fill all fields")
            return
          }

        try {
            const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/user/saveData`, {college})
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
    <div className='form'>
        <div className='heading'>Choose your College</div><br />
        <Select
        
        options={optionsList}
        placeholder="Select College"
        onChange={(value) => setCollege(value)}
        /><br />

        <button className='button' onClick={() => {
            handleChange()
            handleNext()
        }}>Next</button>
    </div>
    )
}

export default Colleges