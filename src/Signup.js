import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';

import APIHandler from "./apihandler"

function Signup() {
    const initialState = {
        email: "",
        phoneNumber: ""
    };
    
    const [userData, setUserData] = useState(initialState);

    const handleSubmit = async () => {
        APIHandler.post_data(userData)
    }

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