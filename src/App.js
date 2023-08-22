import React, { useState } from 'react';

import axios from 'axios';

import './App.css';



function App() {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleSubmit = async () => {
    const userData = {
      email: email,
      phone_number: phoneNumber
    };
  
    try {
      const response = await axios.post('http://127.0.0.1:5000//submit_subscriber_info', userData);
      console.log(response.data.message); // Should print 'User information added successfully'
    } catch (error) {
      console.error('Error submitting user info:', error);
    }
  };

  const Button = ({ label }) => {
    return <button onClick={handleSubmit}>{label}</button>;
  };

  const TextField = ({ label }) => {
    return (
      <div>
        <label>{label}</label>
        <input type="text" />
      </div>
    );
  };
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <div>
      <TextField label="Email" value={email} onChange={handleEmailChange}/>
      <TextField label="Phone Number" value={phoneNumber} onChange={handlePhoneNumberChange}/>
      <Button onClick={handleSubmit} label="Submit"/>
    </div>
  );
}

export default App;
