import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';

function Signup() {
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("")

    const handleSubmit = async () => {
        console.log('hi')
        console.log(email)
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
    return (
        <div>
        <TextField id="outlined-basic" label="Email" 
        variant="outlined"
        value = {email} 
        onChange = {(e) => setEmail(e.target.value)}/>
        <TextField id="outlined-basic" label="Phone Number" 
        variant="outlined"
        value = {phoneNumber}
        onChange = {(e) => setPhoneNumber(e.target.value)} />
        <Button onClick={handleSubmit} variant="outlined">Submit</Button>
        </div>
    )
}

export default Signup