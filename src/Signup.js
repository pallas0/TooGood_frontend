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
        <div className="signup-container">
      <div className="header">
        <h1>Header Text</h1>
      </div>
      <div className="body">
        <p>Body Text</p>
      </div>
      <div className="form">
        <div className="form-row">
          <label className="label">Email:</label>
          <TextField
            id="outlined-basic"
            variant="outlined"
            value={userData.email}
            sx={{ input: { color: 'white' } }}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
        </div>
        <div className="form-row">
          <label className="label">Phone Number:</label>
          <TextField
            id="outlined-basic"
            variant="outlined"
            sx={{ input: { color: 'white' } }}
            value={userData.phoneNumber}
            onChange={(e) =>
              setUserData({ ...userData, phoneNumber: e.target.value })
            }
          />
        </div>
      </div>
      <div className="button-container">
        <Button onClick={handleSubmit} variant="outlined"
        sx = {{
            color: "#FFFFFF",
            border: "1px solid white"
        }}>
          Submit
        </Button>
      </div>
    </div>
    );
}

export default Signup