import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';

function Signup() {
    // const [email, setEmail] = useState("");
    // const [phoneNumber, setPhoneNumber] = useState("")
    const initialState = {
        email: "",
        phoneNumber: ""
    };
    
    const [userData, setUserData] = useState(initialState);

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setUserData((userData) => ({
            ...userData,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        // const userData = {
        //     email: email,
        //     phone_number: phoneNumber
        // };
  
        try {
         const response = await axios.post('http://127.0.0.1:5000//submit_subscriber_info', userData);
        console.log(response.data.message); // Should print 'User information added successfully'
        } catch (error) {
            console.error('Error submitting user info:', error);
        }
  };
  //onChange = {(e) => setEmail(e.target.value)}
    return (
        <div>
        <TextField id="outlined-basic" label="Email" 
        variant="outlined"
        value = {userData.email} 
        onChange = {(e) => setUserData(e.target.value)}/>
        <TextField id="outlined-basic" label="Phone Number" 
        variant="outlined"
        value = {userData.phoneNumber}
        onChange = {(e) => handleChange(e)} />
        <Button onClick={handleSubmit} variant="outlined">Submit</Button>
        </div>
    )
}

export default Signup