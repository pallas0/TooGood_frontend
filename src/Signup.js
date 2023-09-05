import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import {styled} from '@mui/material/styles';
import TextField from '@mui/material/TextField';


import APIHandler from "./apihandler"

const CssTextField = styled(TextField)({
    "& .MuiInput-underline:after":{
        borderBottomColor:"white"
    }
})

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
          <CssTextField
            variant="standard"
            value={userData.email}
            sx={{ input: { color: 'white' } }}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
        </div>
        <div className="form-row">
          <label className="label">Phone Number:</label>
          <CssTextField
            variant="standard"
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