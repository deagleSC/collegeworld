import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

import { useState } from 'react';
import PersonalForm from './components/PersonalForm';
import AcademicForm from './components/AcademicForm';
import Colleges from './components/Colleges';
import Documents from './components/Documents';
import Payments from './components/Payments';
import Thankyou from './components/Thankyou';

const App = () => {

  const sections = ["Personal Information", "Academic Information", "Choice of Colleges", "Document upload", "Payment Integration"]
  const [section, setSection] = useState(0)
  const [data, setData] = useState({})

  const handleChange = (obj) => {
    setData({...data, ...obj})
    console.log(data)
  }
 
  const handleIncrease = (obj) => {
    setSection(section + 1)
  }

  const handleSubmit = () => {
    setSection(section + 1)
  }

  return (
    <div className="app">
      <Navbar />

      //form sections
      
      {section >= 0 && section < 5 && <PersonalForm handleNext = {handleIncrease} />}
      {section >= 1 && section < 5 && <AcademicForm handleNext = {handleIncrease} />}
      {section >= 2 && section < 5 && <Colleges handleNext = {handleIncrease} />}
      {section >= 3 && section < 5 && <Documents handleNext = {handleIncrease} />}
      {section >= 4 && section < 5 && <Payments handleSubmit = {handleSubmit} />}

      //on succesfull payment
      {section == 5 && <Thankyou />}
    </div>
  );
}

export default App;
