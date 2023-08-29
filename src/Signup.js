import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';

function Signup() {
    const initialState = {
        email: "",
        phoneNumber: ""
    };
    
    const [userData, setUserData] = useState(initialState);

    const handleSubmit = async () => {
        try {
         const response = await axios.post('http://127.0.0.1:5000//submit_subscriber_info', userData);
        console.log(response.data.message);
        } catch (error) {
            console.error('Error submitting user info:', error);
        }
  };
    return (
        <div>
        <TextField id="outlined-basic" label="Email" 
        variant="outlined"
        value = {userData.email} 
        onChange = {(e) => setUserData({...userData, email: e.target.value })}/>
        <TextField id="outlined-basic" label="Phone Number" 
        variant="outlined"
        value = {userData.phoneNumber}
        onChange = {(e) => setUserData({...userData, phoneNumber: e.target.value})} />
        <Button onClick={handleSubmit} variant="outlined">Submit</Button>
        </div>
    )
}

export default Signup