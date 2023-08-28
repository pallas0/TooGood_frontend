import React, { useState } from 'react';

import axios from 'axios';

import './App.css';
import Signup from './Signup.js'


function App() {
  // const [email, setEmail] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("")

  // const handleSubmit = async () => {
  //   console.log('hi')
  //   console.log(email)
  //   const userData = {
  //     email: email,
  //     phone_number: phoneNumber
  //   };
  
  //   try {
  //     const response = await axios.post('http://127.0.0.1:5000//submit_subscriber_info', userData);
  //     console.log(response.data.message); // Should print 'User information added successfully'
  //   } catch (error) {
  //     console.error('Error submitting user info:', error);
  //   }
  // };

  // const Button = ({ label }) => {
  //   return <button onClick={handleSubmit}>{label}</button>;
  // };

  // const TextField = ({ label, value, onChange }) => {
  //   return (
  //     <div>
  //       <label>{label}</label>
  //       <input type="text" value={value} onChange={onChange} />
  //     </div>
  //   );
  // };
  

  // return (
  //   <div>
  //     <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
  //     <TextField label="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
  //     <Button onClick={handleSubmit} label="Submit"/>
  //   </div>
  // );
  return (
    <div>
      <Signup/>
    </div>
  )
}

export default App;
